import PageWrapper from '../components/PageWrapper';
import { Calendar } from 'lucide-react';

const timelineEvents = [
  {
    year: '1979',
    title: 'Naissance de La Roche Bénin',
    description: 'Fondée en 1979, La Roche Bénin commence son aventure avec la vision de devenir un partenaire fiable dans le secteur de la construction.'
  },
  {
    year: '1990',
    title: 'Expansion nationale',
    description: 'Renforcement de notre réseau et distribution à travers le Bénin, en gagnant la confiance des professionnels et particuliers.'
  },
  {
    year: '2000',
    title: 'Diversification des produits',
    description: 'Élargissement de la gamme de matériaux et équipements, en établissant des partenariats avec des marques internationales de renom.'
  },
  {
    year: '2010',
    title: 'Ouverture du Showroom moderne',
    description: 'Inauguration de notre showroom à Cotonou pour offrir une expérience client améliorée et plus interactive.'
  },
  {
    year: '2016',
    title: 'Certification Qualité',
    description: 'Obtention de certifications qualité pour renforcer les standards de service et garantir la satisfaction client.'
  },
  {
    year: '2022',
    title: 'Digitalisation et innovation',
    description: 'Lancement de nos services en ligne et outils digitaux pour faciliter les commandes et améliorer l’expérience client.'
  },
  {
    year: '2024',
    title: '45 ans de leadership',
    description: 'Célébration de 45 années d’expertise et consolidation de La Roche Bénin comme référence incontournable dans la région.'
  }
];

export default function History() {
  return (
    <PageWrapper title="Notre Historique">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
          Depuis 1979, La Roche Bénin accompagne professionnels et particuliers
          dans la réalisation de leurs projets de construction et de rénovation,
          en alliant expertise, innovation et confiance.
        </p>

        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E41922]/50 to-[#E41922]/50"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="relative pl-20 pb-12 last:pb-0 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Cercle de l’année */}
              <div className="absolute left-4 top-0 w-8 h-8 bg-white border-4 border-[#E41922] rounded-full flex items-center justify-center">
                <Calendar size={14} className="text-[#E41922]" />
              </div>

              {/* Carte de l’événement */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-4 py-1 bg-[#E41922] text-white font-bold rounded-full text-sm">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
