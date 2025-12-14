import PageWrapper from '../components/PageWrapper';
import {
  Home,
  Hammer,
  Truck,
  Wrench,
  Building,
  Paintbrush,
  HardHat,
  ShoppingCart
} from 'lucide-react';

const activities = [
  {
    icon: Home,
    title: 'Matériaux de Construction',
    description: 'Fourniture complète de matériaux pour tous types de projets : ciment, fer, agrégats, briques, et bien plus.'
  },
  {
    icon: Building,
    title: 'Second Œuvre',
    description: 'Carrelage, sanitaires, plomberie, électricité, menuiserie et tous les équipements de finition.'
  },
  {
    icon: Paintbrush,
    title: 'Peinture & Revêtements',
    description: 'Large gamme de peintures intérieures et extérieures, revêtements muraux et solutions décoratives.'
  },
  {
    icon: HardHat,
    title: 'Équipements de Chantier',
    description: 'Outils, équipements de protection individuelle, matériel de signalisation et accessoires professionnels.'
  },
  {
    icon: Wrench,
    title: 'Quincaillerie',
    description: 'Visserie, serrurerie, coffres-forts, rangements et tous les accessoires de quincaillerie.'
  },
  {
    icon: Truck,
    title: 'Livraison & Logistique',
    description: 'Service de livraison rapide et fiable sur l\'ensemble du territoire avec notre flotte dédiée.'
  },
  {
    icon: Hammer,
    title: 'Conseils Techniques',
    description: 'Accompagnement expert et conseils personnalisés pour la réussite de vos projets.'
  },
  {
    icon: ShoppingCart,
    title: 'Vente en Gros & Détail',
    description: 'Solutions adaptées aux professionnels du BTP comme aux particuliers avec des tarifs compétitifs.'
  }
];

export default function Activities() {
  return (
    <PageWrapper title="Nos Activités">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-600 mb-10 text-center leading-relaxed">
          Des solutions complètes pour tous vos besoins en construction et rénovation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#9B8E57] animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#9B8E57] to-[#96121D] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#96121D] transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
