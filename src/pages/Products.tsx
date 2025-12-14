import PageWrapper from '../components/PageWrapper';
import { useState } from 'react';
import {
  Square,
  Droplet,
  Hammer,
  Warehouse,
  Home,
  Wrench,
  Shield,
  Truck,
  HardHat,
  LightbulbIcon,
  PaintbrushIcon,
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const products = [
  {
    id: 1,
    icon: Square,
    name: 'Carrelage',
    description: 'Grès céramique, faïence, marbre et granite',
    image: 'https://i.ibb.co/0QXv7wX/carrelage.jpg',
    details: [
      'Carrelage intérieur et extérieur',
      'Faïence murale haut de gamme',
      'Marbre et granite naturel',
      'Grès cérame émaillé',
      'Mosaïque décorative'
    ]
  },
  {
    id: 2,
    icon: Home,
    name: 'Toiture',
    description: 'Bac acier, tuiles terre cuite, onduline',
    image: 'https://i.ibb.co/4KzF6wC/toiture.jpg',
    details: [
      'Bac acier galvanisé',
      'Tuiles terre cuite traditionnelles',
      'Onduline bitumée',
      'Accessoires de toiture',
      'Gouttières et chenaux'
    ]
  },
  {
    id: 3,
    icon: Warehouse,
    name: 'Métaux Normés',
    description: 'Tôle, tube acier, béton, cornière',
    image: 'https://i.ibb.co/7N0G7Wk/metaux.jpg',
    details: [
      'Fer à béton haute adhérence',
      'Tubes acier rond et carré',
      'Tôles galvanisées',
      'Cornières et profilés',
      'Treillis soudé'
    ]
  },
  {
    id: 4,
    icon: Droplet,
    name: 'Sanitaire',
    description: 'Robinetterie, appareil sanitaire, cabine de douche',
    image: 'https://i.ibb.co/tZ2c5bK/sanitaire.jpg',
    details: [
      'WC et lavabos design',
      'Robinetterie chromée',
      'Cabines de douche complètes',
      'Baignoires et accessoires',
      'Éviers et vidoirs'
    ]
  }
  // Ajoute les autres produits de la même manière avec leurs images
];

export default function Products() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageWrapper title="Nos Gammes de Produits">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
          Une large sélection de produits de qualité pour tous vos besoins
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isExpanded = expandedId === product.id;

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-[#E41922] 
                           shadow-[0_10px_20px_rgba(228,25,34,0.2)]
                           hover:shadow-[0_20px_40px_rgba(228,25,34,0.3)]
                           transform hover:-translate-y-2 hover:scale-105
                           transition-all duration-300 overflow-hidden animate-slide-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {/* IMAGE PRODUIT */}
                <div className="w-full h-40 md:h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#E41922] rounded-xl
                                    flex items-center justify-center
                                    shadow-[0_5px_15px_rgba(228,25,34,0.3)]
                                    group-hover:shadow-[0_8px_25px_rgba(228,25,34,0.4)]
                                    transition-transform duration-300">
                      <Icon size={24} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(product.id)}
                    className="mt-4 w-full flex items-center justify-between px-4 py-2
                               bg-[#E41922]/10 hover:bg-[#E41922] hover:text-white
                               rounded-lg transition-colors duration-200 text-sm font-semibold"
                  >
                    <span>Voir détails</span>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#E41922] animate-slide-in">
                      <ul className="space-y-2">
                        {product.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-[#E41922] mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
