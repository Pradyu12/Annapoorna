import { useState, useEffect } from 'react';
import './index.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  // Parse path and query parameters
  const [routePath, queryString] = currentHash.split('?');
  const searchParams = new URLSearchParams(queryString || '');
  const categoryParam = searchParams.get('category') || undefined;
  const requirementParam = searchParams.get('requirement') || undefined;

  let pageContent;
  switch (routePath) {
    case '#/':
    case '':
    case '#':
      pageContent = <HomePage navigate={navigate} />;
      break;
    case '#/about':
      pageContent = <AboutPage navigate={navigate} />;
      break;
    case '#/products':
      pageContent = <ProductsPage navigate={navigate} initialCategory={categoryParam} />;
      break;
    case '#/services':
      pageContent = <ServicesPage navigate={navigate} />;
      break;
    case '#/industries':
      pageContent = <IndustriesPage navigate={navigate} />;
      break;
    case '#/contact':
    case '#/quote':
      pageContent = (
        <ContactPage
          navigate={navigate}
          initialCategory={categoryParam}
          initialRequirement={requirementParam}
        />
      );
      break;
    default:
      pageContent = <NotFoundPage navigate={navigate} />;
      break;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#252525]">
      <Navigation currentPath={currentHash} navigate={navigate} />
      <main id="main-content" className="flex-1">
        {pageContent}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
