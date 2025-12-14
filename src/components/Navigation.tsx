import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (page: number) => void;
  pageNames: string[];
}

export default function Navigation({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onGoTo,
  pageNames
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg z-50">
        <button
          onClick={onPrev}
          disabled={currentPage === 0}
          className="p-2 rounded-full bg-[#9B8E57] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#8a7d4e] transition-all"
          aria-label="Page précédente"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'bg-[#96121D] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller à la page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
          className="p-2 rounded-full bg-[#9B8E57] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#8a7d4e] transition-all"
          aria-label="Page suivante"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-8 right-8 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all z-50"
        aria-label="Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-24 right-8 bg-white rounded-2xl shadow-2xl p-6 min-w-64"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">Navigation</h3>
            <nav className="space-y-2">
              {pageNames.map((name, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onGoTo(index);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    index === currentPage
                      ? 'bg-[#9B8E57] text-white font-semibold'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
