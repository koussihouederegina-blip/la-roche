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
    icon: Building2,
    name: 'Étanchéité et Géotextile',
    description: 'Membrane, liquide, couverture',
    details: [
      'Membranes d\'étanchéité',
      'Géotextiles anti-contaminants',
      'Produits liquides d\'étanchéité',
      'Bandes et mastics',
      'Système complet étanchéité'
    ]
  },
  {
    id: 6,
    icon: PaintbrushIcon,
    name: 'Peinture',
    description: 'Intérieur, extérieur, protection bois',
    details: [
      'Peinture acrylique intérieure',
      'Peinture façade extérieure',
      'Lasures et vernis bois',
      'Enduits de finition',
      'Accessoires de peinture'
    ]
  },
  {
    id: 7,
    icon: Hammer,
    name: 'Outillage à Main et Électroportatif',
    description: 'Perceuse, visseuse, tronçonneuse, meuleuse',
    details: [
      'Perceuses et visseuses',
      'Meuleuses professionnelles',
      'Tronçonneuses électriques',
      'Outillage à main complet',
      'Accessoires et consommables'
    ]
  },
  {
    id: 8,
    icon: Wrench,
    name: 'Plomberie',
    description: 'Pompe à eau, raccord, accessoire, tuyau',
    details: [
      'Pompes à eau immergées',
      'Tuyaux PVC et multicouches',
      'Raccords et coudes',
      'Vannes et robinets d\'arrêt',
      'Accessoires complets'
    ]
  },
  {
    id: 9,
    icon: LightbulbIcon,
    name: 'Électricité et Câblerie',
    description: 'Câblerie, fil électrique, boîtier, prise',
    details: [
      'Câbles électriques normés',
      'Interrupteurs et prises',
      'Tableaux électriques',
      'Disjoncteurs et protections',
      'Luminaires et accessoires'
    ]
  },
  {
    id: 10,
    icon: HardHat,
    name: 'Équipement de Protection Individuelle',
    description: 'Casque, gilet, gant, lunettes, chaussure',
    details: [
      'Casques de chantier',
      'Gilets haute visibilité',
      'Gants de protection',
      'Lunettes de sécurité',
      'Chaussures de sécurité'
    ]
  },
  {
    id: 11,
    icon: Truck,
    name: 'Équipement de Chantier',
    description: 'Signalisation, matériel gros œuvre, bétonnière',
    details: [
      'Bétonnières professionnelles',
      'Signalisation de chantier',
      'Échafaudages et échelles',
      'Brouettes et matériel',
      'Équipements de levage'
    ]
  },
  {
    id: 12,
    icon: Shield,
    name: 'Quincaillerie et Sécurité',
    description: 'Serrurerie, coffre fort, rangement',
    details: [
      'Serrures haute sécurité',
      'Coffres-forts',
      'Cadenas et chaînes',
      'Portes blindées',
      'Systèmes de rangement'
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
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
          Une large sélection de produits de qualité pour tous vos besoins
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isExpanded = expandedId === product.id;

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 animate-slide-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#9B8E57] to-[#96121D] rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(product.id)}
                    className="mt-4 w-full flex items-center justify-between px-4 py-2 bg-gray-50 hover:bg-[#9B8E57] hover:text-white rounded-lg transition-colors duration-200 text-sm font-semibold"
                  >
                    <span>Voir détails</span>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-slide-in">
                      <ul className="space-y-2">
                        {product.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-[#96121D] mt-1">•</span>
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
