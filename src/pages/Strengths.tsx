import PageWrapper from '../components/PageWrapper';
import {
  Award,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Truck,
  HeadphonesIcon,
  Sparkles
} from 'lucide-react';

const strengths = [
  {
    icon: Award,
    title: 'Qualité Garantie',
    description: 'Produits certifiés et conformes aux normes internationales, sélectionnés auprès des meilleurs fabricants.'
  },
  {
    icon: TrendingUp,
    title: 'Plus de 14 ans d\'Expertise',
    description: 'Une expérience solide et reconnue dans le secteur de la construction et des matériaux.'
  },
  {
    icon: Sparkles,
    title: 'Large Gamme de Produits',
    description: 'Plus de 1000 références disponibles pour répondre à tous vos besoins, du gros œuvre à la finition.'
  },
  {
    icon: Users,
    title: 'Équipe Professionnelle',
    description: 'Conseillers experts et formés pour vous accompagner dans le choix de vos matériaux.'
  },
  {
    icon: Truck,
    title: 'Livraison Rapide',
    description: 'Service de livraison efficace sur tout le territoire avec suivi en temps réel de vos commandes.'
  },
  {
    icon: Clock,
    title: 'Disponibilité Optimale',
    description: 'Ouverture non-stop du lundi au vendredi et le samedi matin pour mieux vous servir.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Service Client Réactif',
    description: 'Équipe à l\'écoute disponible pour répondre à toutes vos questions et demandes spécifiques.'
  },
  {
    icon: Shield,
    title: 'Prix Compétitifs',
    description: 'Tarifs attractifs et solutions de paiement flexibles pour professionnels et particuliers.'
  }
];

export default function Strengths() {
  return (
    <PageWrapper title="Nos Forces & Avantages">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-600 mb-10 text-center leading-relaxed">
          Ce qui fait de LA ROCHE BÉNIN votre partenaire de référence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 overflow-hidden animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9B8E57]/5 to-[#96121D]/5 rounded-bl-full transform translate-x-8 -translate-y-8"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#9B8E57] to-[#96121D] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#96121D] transition-colors">
                        {strength.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#9B8E57] to-[#96121D] rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Notre Engagement</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Votre satisfaction est notre priorité. Nous nous engageons à vous fournir
            les meilleurs produits, les meilleurs prix et le meilleur service pour
            garantir la réussite de tous vos projets.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
