import PageWrapper from '../components/PageWrapper';
import { Calendar } from 'lucide-react';

const timelineEvents = [
  {
    year: '2010',
    title: 'Création de LA ROCHE BÉNIN',
    description: 'Fondation de l\'entreprise avec la vision de devenir le leader de la distribution de matériaux de construction au Bénin.'
  },
  {
    year: '2013',
    title: 'Expansion de la gamme',
    description: 'Élargissement de notre catalogue produits et partenariats avec les plus grandes marques internationales.'
  },
  {
    year: '2016',
    title: 'Ouverture du Showroom',
    description: 'Inauguration de notre showroom moderne à Cotonou pour mieux servir nos clients.'
  },
  {
    year: '2019',
    title: 'Certification Qualité',
    description: 'Obtention des certifications qualité et renforcement de nos standards de service.'
  },
  {
    year: '2022',
    title: 'Innovation et Digital',
    description: 'Lancement de nos outils digitaux et services en ligne pour une expérience client optimale.'
  },
  {
    year: '2024',
    title: 'Leadership Régional',
    description: 'Consolidation de notre position comme référence incontournable dans la région.'
  }
];

export default function History() {
  return (
    <PageWrapper title="Notre Historique">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
          Depuis plus de 14 ans, LA ROCHE BÉNIN accompagne les professionnels et particuliers
          dans la réalisation de leurs projets les plus ambitieux.
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#9B8E57] via-[#96121D] to-[#9B8E57]"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="relative pl-20 pb-12 last:pb-0 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute left-4 top-0 w-8 h-8 bg-white border-4 border-[#96121D] rounded-full flex items-center justify-center">
                <Calendar size={14} className="text-[#96121D]" />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#9B8E57] to-[#96121D] text-white font-bold rounded-full text-sm">
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
