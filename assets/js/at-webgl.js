/* ANNAPOORNA - WebGL hero (Three.js r160)
   Cinematic 3D scene: real truck GLB, reflective floor, animated shader
   backdrop, GPU-driven particles, Unreal bloom, scroll-linked camera. */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

(function () {
  'use strict';

  var hero = document.getElementById('at-hero');
  if (!hero) return;
  var canvas = document.getElementById('at-canvas');

  /* preset config: <script>window.AT_HERO = { preset: 'home' | 'strip' }</script> */
  var cfg = Object.assign(
    { preset: 'home', dpr: 1.75, bloom: true, particles: 260, loadModel: true },
    window.AT_HERO || {}
  );
  var isStrip = cfg.preset === 'strip';
  // Determine model: if AT_HERO explicitly set model, keep it; else derive from path.
  if (!window.AT_HERO || !window.AT_HERO.hasOwnProperty('model')) {
    var path = window.location.pathname;
    if (path === '/' || path === '/index.html') {
      cfg.model = 'truck.glb';
    } else {
      var base = path.replace(/^\/|\.html$/g, '');
      base = base.replace(/\//g, '-');
      cfg.model = (base ? base + '.glb' : 'truck.glb');
    }
  }

  // A canvas can hold only ONE context. If something already took a 2D context
  // (or getContext fails), create a dedicated canvas so WebGL always runs.
  var gl = null;
  try { gl = canvas && (canvas.getContext('webgl2') || canvas.getContext('webgl')); } catch (e) { gl = null; }
  if (!gl) {
    if (canvas) { canvas.remove(); }
    canvas = document.createElement('canvas');
    canvas.id = 'at-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(canvas, document.body.firstChild);
    try { gl = canvas.getContext('webgl2') || canvas.getContext('webgl'); } catch (e) { gl = null; }
  }
  if (!gl) {
    if (window.console) console.warn('Annapoorna: WebGL unavailable on this device.');
    return;
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* in-page diagnostics (auto-hides after 6s) so load issues are visible */
  (function diag() {
    if (!cfg.debug && !isStrip) {
      try {
        var d = document.createElement('div');
        d.style.cssText = 'position:fixed;left:10px;bottom:10px;z-index:9999;background:rgba(10,6,7,.92);color:#ff8a8a;font:12px/1.5 monospace;padding:8px 12px;border-radius:8px;border:1px solid rgba(193,18,31,.5);max-width:70vw;pointer-events:none';
        document.body.appendChild(d);
        var t = setTimeout(function () { d.remove(); }, 6000);
        window.__annDiag = function (m) { d.textContent = m; };
        window.addEventListener('error', function (e) { d.textContent = 'ERR: ' + (e.message || 'script'); });
        window.addEventListener('unhandledrejection', function (e) { d.textContent = 'REJ: ' + (e.reason && e.reason.message || 'promise'); });
      } catch (e) {}
    }
  })();

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cfg.dpr));
  renderer.setClearColor(0x0b0607, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  var scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b0607, 0.036);

  var camera = new THREE.PerspectiveCamera(42, 1, 0.1, 220);
  camera.position.set(0, 2.2, 11);

  /* ---------- lights ---------- */
  scene.add(new THREE.AmbientLight(0xffeaea, 0.6));
  var key = new THREE.DirectionalLight(0xffffff, 1.7);
  key.position.set(6, 9, 7);
  scene.add(key);
  var rim = new THREE.DirectionalLight(0xD71920, 2.4);
  rim.position.set(-7, 3.5, -5);
  scene.add(rim);
  var under = new THREE.PointLight(0xD71920, 70, 34);
  under.position.set(0, -2.2, 3);
  scene.add(under);

  /* ---------- environment (IBL) so metals reflect ---------- */
  (function buildEnv() {
    try {
      var c = document.createElement('canvas');
      c.width = 16; c.height = 128;
      var g = c.getContext('2d');
      var grad = g.createLinearGradient(0, 0, 0, 128);
      grad.addColorStop(0.00, '#ffffff');
      grad.addColorStop(0.40, '#ffb9be');
      grad.addColorStop(0.56, '#8c1018');
      grad.addColorStop(1.00, '#0d0708');
      g.fillStyle = grad;
      g.fillRect(0, 0, 16, 128);
      var envTex = new THREE.CanvasTexture(c);
      envTex.mapping = THREE.EquirectangularReflectionMapping;
      envTex.colorSpace = THREE.SRGBColorSpace;
      var pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromEquirectangular(envTex).texture;
      envTex.dispose();
      pmrem.dispose();
    } catch (e) { /* non-fatal */ }
  })();

  var world = new THREE.Group();
  scene.add(world);

  var RED = 0xD71920, RED_LT = 0xD71920, WHITE = 0xf5f0f0, DARK = 0x1a0e10;

  function mat(color, opts) {
    return new THREE.MeshStandardMaterial(Object.assign({ color: color, roughness: 0.42, metalness: 0.35 }, opts || {}));
  }

  /* ---------- animated shader backdrop ---------- */
  var bgUniforms = { uTime: { value: 0 } };
  var bg = new THREE.Mesh(
    new THREE.PlaneGeometry(180, 120),
    new THREE.ShaderMaterial({
      uniforms: bgUniforms, depthWrite: false, fog: false,
      vertexShader: [
        'varying vec2 vUv;',
        'void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }'
      ].join('\n'),
       fragmentShader: [
         'precision mediump float;',
         'uniform float uTime; varying vec2 vUv;',
         'void main(){',
         '  vec2 uv = vUv;',
         '  float t = uTime * 0.05;',
         '  // Slow hue shift for the base color (period ~200s)',
         '  float hueShift = sin(t * 0.03) * 0.02;',
         '  vec3 col = vec3(0.043 + hueShift, 0.024 + hueShift * 0.5, 0.027 - hueShift * 0.3);',
         '  vec2 c1 = vec2(0.5 + sin(t)*0.18, 0.62);',
         '  vec2 c2 = vec2(0.22, 0.34 + cos(t*0.8)*0.14);',
         '  vec2 c3 = vec2(0.82 + sin(t*0.6+1.5)*0.12, 0.30);',
         '  vec2 c4 = vec2(0.40 + sin(t*0.4)*0.22, 0.18 + cos(t*0.5)*0.10);',
         '  float g1 = smoothstep(0.62,0.0,distance(uv,c1));',
         '  float g2 = smoothstep(0.50,0.0,distance(uv,c2));',
         '  float g3 = smoothstep(0.45,0.0,distance(uv,c3));',
         '  float g4 = smoothstep(0.30,0.0,distance(uv,c4));',
         '  col += vec3(0.55,0.06,0.10)*g1*0.55;',
         '  col += vec3(0.90,0.20,0.26)*g2*0.30;',
         '  col += vec3(0.35,0.05,0.10)*g3*0.38;',
         '  col += vec3(0.20,0.40,0.60)*g4*0.25;',
         '  float v = smoothstep(0.95,0.25,distance(uv,vec2(0.5)));',
         '  col *= mix(0.55,1.05,v);',
         '  gl_FragColor = vec4(col,1.0);',
         '}'
       ].join('\n')
    })
  );
  bg.position.set(0, 0, -34);
  scene.add(bg);

  function textSprite(draw, w, h, scale) {
    var c = document.createElement('canvas');
    c.width = w; c.height = h;
    draw(c.getContext('2d'), w, h);
    var tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    sp.scale.set(scale * (w / h), scale, 1);
    return sp;
  }

  var glow = textSprite(function (g, w, h) {
    var rg = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    rg.addColorStop(0, 'rgba(193,18,31,0.55)');
    rg.addColorStop(0.5, 'rgba(193,18,31,0.16)');
    rg.addColorStop(1, 'rgba(193,18,31,0)');
    g.fillStyle = rg;
    g.fillRect(0, 0, w, h);
  }, 512, 512, 17);
  glow.position.set(0, 0.4, -5);
  glow.material.blending = THREE.AdditiveBlending;
  world.add(glow);

  var ringPivot = new THREE.Group();
  var baseRing = new THREE.Mesh(
    new THREE.TorusGeometry(6.6, 0.05, 10, 120),
    new THREE.MeshBasicMaterial({ color: 0xD71920, transparent: true, opacity: 0.55 })
  );
  baseRing.rotation.x = Math.PI / 2;
  baseRing.position.y = -2.46;
  ringPivot.add(baseRing);

  /* ---------- ground platform (soft reflective disc) ---------- */
  var platform = new THREE.Mesh(
    new THREE.CircleGeometry(7.2, 64),
    new THREE.MeshStandardMaterial({ color: 0x140a0c, roughness: 0.25, metalness: 0.6 })
  );
  platform.rotation.x = -Math.PI / 2;
  platform.position.y = -2.5;
  world.add(platform);

  /* ---------- truck (real GLB + instant procedural fallback) ---------- */
  var truck = new THREE.Group();
  truck.position.set(0, -2.42, 0);
  world.add(truck);

  function buildFallbackTruck() {
    var g = new THREE.Group();
    var cab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.2, 1.6), mat(RED, { roughness: 0.3, metalness: 0.5 }));
    cab.position.set(-1.5, 0.7, 0);
    g.add(cab);
    var box = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.6, 1.7), mat(0xf2eeee, { roughness: 0.4, metalness: 0.2 }));
    box.position.set(0.6, 0.9, 0);
    g.add(box);
    var stripe = new THREE.Mesh(new THREE.BoxGeometry(3.24, 0.3, 1.74), mat(RED_LT, { roughness: 0.3, metalness: 0.4 }));
    stripe.position.set(0.6, 0.75, 0);
    g.add(stripe);
    var wheelGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 18);
    [[-1.6, -0.85], [-1.6, 0.85], [1.2, -0.85], [1.2, 0.85], [1.9, -0.85], [1.9, 0.85]].forEach(function (p) {
      var w = new THREE.Mesh(wheelGeo, mat(DARK, { roughness: 0.8, metalness: 0.1 }));
      w.rotation.x = Math.PI / 2;
      w.position.set(p[0], 0.1, p[1]);
      g.add(w);
    });
    return g;
  }

  truck.add(buildFallbackTruck()); // shown instantly

  var gltf = new GLTFLoader();
  if (cfg.loadModel && !isStrip) {
  gltf.load(
    cfg.model,
    function (res) {
      try {
        var m = res.scene;
        m.updateMatrixWorld(true);
        var box = new THREE.Box3().setFromObject(m);
        var size = box.getSize(new THREE.Vector3());
        var center = box.getCenter(new THREE.Vector3());
        var longest = Math.max(size.x, size.y, size.z) || 1;
        var s = 4.6 / longest;
        m.scale.setScalar(s);
        m.position.x = -center.x * s;
        m.position.z = -center.z * s;
        m.position.y = -box.min.y * s;
        m.traverse(function (o) {
          if (o.isMesh && o.material) {
            o.material.envMapIntensity = 1.1;
            // Materials have no maps (flat PBR values), so recolor to brand.
            var n = (o.name || '') + ' ' + (o.material.name || '');
            var nl = n.toLowerCase();
            var red = nl.indexOf('tire') >= 0 || nl.indexOf('tyre') >= 0 || nl.indexOf('bottom') >= 0;
            var light = nl.indexOf('glass') >= 0 || nl.indexOf('light') >= 0 || nl.indexOf('plate') >= 0;
            if (red) { o.material.color = new THREE.Color(0x1a1013); o.material.roughness = 0.85; o.material.metalness = 0.05; }
            else if (light) { o.material.color = new THREE.Color(0xfff5f5); o.material.roughness = 0.25; o.material.metalness = 0.1; }
            else { o.material.color = new THREE.Color(0xD71920); o.material.roughness = 0.3; o.material.metalness = 0.45; }
          }
        });
        while (truck.children.length) truck.remove(truck.children[0]);
        truck.add(m);
        window.__truckLoaded = true;
        if (window.__annDiag) window.__annDiag('Truck loaded ✓ (brand-recolored)');
        if (window.console) console.log('Annapoorna: truck GLB loaded, auto-fit to 4.6u, brand-recolored');
      } catch (e) {
        if (window.console) console.warn('Annapoorna: truck fit failed, keeping fallback', e);
      }
    },
    undefined,
    function () {
      if (window.console) console.warn('Annapoorna: truck GLB failed (serve over http://, not file://) — using fallback truck');
      if (window.__annDiag) window.__annDiag('GLB failed — serve over http:// not file:// (showing fallback)');
    }
  );
  }

  /* ---------- floating supply props ---------- */
  var props = [];
  [{ x: -4.6, y: 0.6, z: 1.2, r: 0.5, c: RED },
   { x: 4.4, y: 1.8, z: 0.4, r: 0.38, c: WHITE },
   { x: 3.4, y: -0.4, z: 2.2, r: 0.3, c: RED_LT },
   { x: -3.8, y: 2.4, z: -1.0, r: 0.42, c: 0xf2eeee }].forEach(function (d) {
    var mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(d.r, 0), mat(d.c, { roughness: 0.35, metalness: 0.5 }));
    mesh.position.set(d.x, d.y, d.z);
    mesh.userData = { baseY: d.y, speed: 0.6 + Math.random() * 0.5, phase: Math.random() * Math.PI * 2 };
    world.add(mesh);
    props.push(mesh);
  });

  /* ---------- GPU particle dust ---------- */
  var PCOUNT = isStrip ? 90 : cfg.particles;
  var pGeo = new THREE.BufferGeometry();
  var pPos = new Float32Array(PCOUNT * 3);
  for (var i = 0; i < PCOUNT; i++) {
    pPos[i * 3] = (Math.random() - 0.5) * 22;
    pPos[i * 3 + 1] = Math.random() * 9 - 2;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  var particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
    color: 0xff6b73, size: 0.06, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  world.add(particles);

  /* ---------- post-processing (bloom) ---------- */
  var composer = null, bloom = null;
  function buildComposer() {
    try {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.6, 0.85);
      composer.addPass(bloom);
      composer.addPass(new OutputPass());
    } catch (e) {
      composer = null;
      if (window.console) console.warn('Annapoorna: bloom unavailable, plain render', e);
    }
  }

  /* ---------- resize ---------- */
  function resize() {
    var w = document.documentElement.clientWidth || window.innerWidth;
    var h = document.documentElement.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    if (composer) composer.setSize(w, h);
  }
  window.addEventListener('resize', resize);
  resize();
  if (!reduceMotion && cfg.bloom) buildComposer();

  /* ---------- scroll + pointer parallax ---------- */
  var scrollT = 0, pointerX = 0, pointerY = 0, curX = 0, curY = 0;
  function onScroll() {
    var doc = document.documentElement;
    var max = Math.max(1, (doc.scrollHeight || 0) - (doc.clientHeight || window.innerHeight));
    scrollT = Math.min(Math.max(window.scrollY / max, 0), 1.2);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  window.addEventListener('pointermove', function (e) {
    pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
    pointerY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  /* ---------- animation loop ---------- */
  var clock = new THREE.Clock();
  var raf;
  function animate() {
    raf = requestAnimationFrame(animate);
    var t = clock.getElapsedTime();

    curX += (pointerX - curX) * 0.05;
    curY += (pointerY - curY) * 0.05;

    camera.position.x = curX * 1.2;
    camera.position.y = 2.2 - scrollT * 1.6 + curY * -0.6;
    camera.position.z = 11 + scrollT * 5;
    camera.lookAt(0, -scrollT * 1.2, 0);

    truck.rotation.y = reduceMotion ? 0.3 : (t * 0.25);
    truck.position.y = -2.42 + Math.sin(t * 0.9) * 0.06;

    ringPivot.rotation.z = t * 0.1;

    props.forEach(function (m) {
      m.rotation.x += 0.003;
      m.rotation.y += 0.005;
      m.position.y = m.userData.baseY + Math.sin(t * m.userData.speed + m.userData.phase) * 0.3;
    });

    bgUniforms.uTime.value = t;
    glow.material.opacity = 0.75 + Math.sin(t * 1.2) * 0.15;

    var arr = pGeo.attributes.position.array;
    for (var j = 1; j < arr.length; j += 3) {
      arr[j] += 0.008;
      if (arr[j] > 7) arr[j] = -2;
    }
    pGeo.attributes.position.needsUpdate = true;

    if (composer) composer.render();
    else renderer.render(scene, camera);
  }
  animate();

  /* pause only when the tab is hidden; the background stays live while scrolling */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = null;
    } else if (!raf) {
      clock.getDelta();
      animate();
    }
  });
})();

