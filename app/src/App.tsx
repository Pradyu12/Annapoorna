import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import About from './About';
import Products from './Products';
import Services from './Services';
import Industries from './Industries';
import Contact from './Contact';
import Quote from './Quote';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}