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
  Lightbulb,
  Paintbrush,
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
    image: 'https://i.ibb.co/QJ5m5vG/carrelage-materials.jpg',
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
    description: 'Bac acier, tuiles, onduline et accessoires',
    image: 'https://i.ibb.co/QND0t6p/roofing-tiles.jpg',
    details: [
      'Bac acier galvanisé',
      'Tuiles terre cuite traditionnelles',
      'Onduline bitumée',
      'Accessoires de toit',
      'Gouttières et chenaux'
    ]
  },
  {
    id: 3,
    icon: Warehouse,
    name: 'Métaux Normés',
    description: 'Tôle, tubes acier, fer à béton et profilés',
    image: 'https://i.ibb.co/2SZqf0m/steel-profiles.jpg',
    details: [
      'Fer à béton haute adhérence',
      'Tubes acier ronds et carrés',
      'Tôles galvanisées',
      'Cornières et profilés',
      'Treillis soudé'
    ]
  },
  {
    id: 4,
    icon: Droplet,
    name: 'Sanitaire',
    description: 'Robinetterie, appareils sanitaires et douche',
    image: 'https://i.ibb.co/sHZ0BwH/sanitary-fixtures.jpg',
    details: [
      'WC et lavabos design',
      'Robinetterie chromée',
      'Cabines de douche complètes',
      'Baignoires et accessoires',
      'Éviers et vidoirs'
    ]
  },
  {
    id: 5,
    icon: Paintbrush,
    name: 'Peinture',
    description: 'Peintures intérieures et extérieures',
    image: 'https://i.ibb.co/8P2q6tF/paint-buckets.jpg',
    details: [
      'Peinture acrylique intérieure',
      'Peinture façade extérieure',
      'Lasures et vernis bois',
      'Enduits de finition',
      'Accessoires de peinture'
    ]
  },
  {
    id: 6,
    icon: Hammer,
    name: 'Outillage',
    description: 'Outils manuels et électroportatifs',
    image: 'https://i.ibb.co/Xts5q9N/tools-set.jpg',
    details: [
      'Perceuses et visseuses',
      'Meuleuses professionnelles',
      'Tronçonneuses électriques',
      'Outillage à main complet',
      'Accessoires et consommables'
    ]
  },
  {
    id: 7,
    icon: Wrench,
    name: 'Plomberie',
    description: 'Raccords, tuyaux, pompes et accessoires',
    image: 'https://i.ibb.co/N9zG6Fm/plumbing-pipes.jpg',
    details: [
      'Pompes à eau immergées',
      'Tuyaux PVC et multicouches',
      'Raccords et coudes',
      'Vannes et robinets d\'arrêt',
      'Accessoires complets'
    ]
  },
  {
    id: 8,
    icon: Lightbulb,
    name: 'Électricité & Câblerie',
    description: 'Câbles, prises et composants électriques',
    image: 'https://i.ibb.co/HL2Qn8b/electrical-wires.jpg',
    details: [
      'Câbles électriques normés',
      'Interrupteurs et prises',
      'Tableaux électriques',
      'Disjoncteurs et protections',
      'Luminaires et accessoires'
    ]
  },
  {
    id: 9,
    icon: HardHat,
    name: 'Équipements de Protection',
    description: 'Casques, gilets, gants et lunettes',
    image: 'https://i.ibb.co/ZhX5yqy/safety-gear.jpg',
    details: [
      'Casques de chantier',
      'Gilets haute visibilité',
      'Gants de protection',
      'Lunettes de sécurité',
      'Chaussures de sécurité'
    ]
  },
  {
    id: 10,
    icon: Truck,
    name: 'Équipement de Chantier',
    description: 'Signalisation, bétonnières et échafaudages',
    image: 'https://i.ibb.co/yWfLdmV/construction-equipment.jpg',
    details: [
      'Bétonnières professionnelles',
      'Signalisation de chantier',
      'Échafaudages et échelles',
      'Brouettes et matériel',
      'Équipements de levage'
    ]
  },
  {
    id: 11,
    icon: Shield,
    name: 'Quincaillerie & Sécurité',
    description: 'Serrurerie, coffres forts, rangements',
    image: 'https://i.ibb.co/7Q2XBwd/hardware-locks.jpg',
    details: [
      'Serrures haute sécurité',
      'Coffres-forts',
      'Cadenas et chaînes',
      'Portes blindées',
      'Systèmes de rangement'
    ]
  },
  {
    id: 12,
    icon: Building2,
    name: 'Étanchéité & Géotextile',
    description: 'Membranes, liquides et couvertures techniques',
    image: 'https://i.ibb.co/jTXC4X1/waterproofing-roll.jpg',
    details: [
      'Membranes d\'étanchéité',
      'Géotextiles anti-contaminants',
      'Produits liquides d\'étanchéité',
      'Bandes et mastics',
      'Système complet étanchéité'
    ]
  }
];

export default function Products() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageWrapper title="Nos Gammes de Produits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
          Une large sélection de produits de qualité pour tous vos besoins de construction et rénovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isExpanded = expandedId === product.id;

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-[#E41922]
                           shadow-[0_8px_16px_rgba(228,25,34,0.15)]
                           hover:shadow-[0_12px_24px_rgba(228,25,34,0.25)]
                           transform hover:-translate-y-1 hover:scale-105
                           transition-all duration-300 overflow-hidden animate-slide-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {/* Image produit */}
                <div className="w-full h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#E41922] rounded-xl
                                    flex items-center justify-center">
                      <Icon size={20} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">{product.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(product.id)}
                    className="mt-3 sm:mt-4 w-full flex items-center justify-between px-3 sm:px-4 py-2
                               bg-[#E41922]/10 hover:bg-[#E41922] hover:text-white
                               rounded-lg transition-colors duration-200 text-sm sm:text-base font-semibold"
                  >
                    <span>Voir détails</span>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#E41922] animate-slide-in">
                      <ul className="space-y-1 sm:space-y-2">
                        {product.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
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
