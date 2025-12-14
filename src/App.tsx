import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import FlipBook from './components/FlipBook';
import Home from './pages/Home';
import History from './pages/History';
import Activities from './pages/Activities';
import Products from './pages/Products';
import Partners from './pages/Partners';
import Strengths from './pages/Strengths';
import Contact from './pages/Contact';

const pages = [
  { name: 'Accueil', component: Home },
  { name: 'Historique', component: History },
  { name: 'Nos Activités', component: Activities },
  { name: 'Nos Gammes de Produits', component: Products },
  { name: 'Fournisseurs & Partenaires', component: Partners },
  { name: 'Forces & Avantages', component: Strengths },
  { name: 'Contact & Showroom', component: Contact }
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

  const goToPage = (pageIndex: number) => {
    if (pageIndex === currentPage) return;
    setDirection(pageIndex > currentPage ? 'next' : 'prev');
    setCurrentPage(pageIndex);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection('next');
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection('prev');
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[600px] aspect-[1/1.4] shadow-2xl rounded-lg overflow-hidden">
        <FlipBook currentPage={currentPage} direction={direction}>
          <CurrentPageComponent onNext={nextPage} />
        </FlipBook>
      </div>

      <Navigation
        currentPage={currentPage}
        totalPages={pages.length}
        onNext={nextPage}
        onPrev={prevPage}
        onGoTo={goToPage}
        pageNames={pages.map(p => p.name)}
      />
    </div>
  );
}

export default App;
