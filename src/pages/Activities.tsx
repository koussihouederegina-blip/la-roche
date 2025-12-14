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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-[0_10px_20px_rgba(228,25,34,0.2)] 
                           hover:shadow-[0_20px_40px_rgba(228,25,34,0.3)] 
                           transition-all duration-300 p-6 border border-[#E41922] 
                           transform hover:-translate-y-2 hover:scale-105 animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#E41922] rounded-xl 
                                  flex items-center justify-center 
                                  shadow-[0_5px_15px_rgba(228,25,34,0.3)] 
                                  group-hover:shadow-[0_8px_25px_rgba(228,25,34,0.4)] 
                                  group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#E41922] transition-colors">
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
