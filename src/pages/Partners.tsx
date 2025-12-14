import PageWrapper from '../components/PageWrapper';
import { Building2 } from 'lucide-react';

const partners = [
  'BMR', 'AFRIC', 'BEGEBERT', 'PROCHIMAD', 'CIME', 'BWT', 'Geberit', 'ROCA', 'KOHLER',
  'GROHE', 'HANSGROHE', 'CINCA', 'PARULAN', 'SOMACO', 'SVS', 'HYOKI', 'MAKITA',
  'KARCHER', 'FERGUN', 'BOSCH', 'METABO', 'YATOO', 'KOZO', 'STANLEY', 'MILWAUKEE',
  'FISS', 'SOMACO', 'MAV', 'JUBILATE', 'TEXIMP', 'XANO', 'LAME', 'ALTRAD',
  'VIRAX', 'STANLEY', 'FACOM', 'IRWIN', 'TORMEC', 'FERDIVERS'
];

export default function Partners() {
  return (
    <PageWrapper title="Nos Fournisseurs & Partenaires">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-600 mb-10 text-center leading-relaxed">
          Nous collaborons avec les plus grandes marques internationales pour vous garantir
          des produits de qualité supérieure et des solutions innovantes.
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg mb-10">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100 animate-slide-in"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-[#9B8E57] to-[#96121D] rounded-lg flex items-center justify-center">
                    <Building2 size={24} className="text-white" strokeWidth={2} />
                  </div>
                  <p className="text-xs font-semibold text-gray-700">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-[#96121D] mb-2">40+</div>
            <p className="text-gray-600">Marques partenaires</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-[#96121D] mb-2">1000+</div>
            <p className="text-gray-600">Références produits</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-[#96121D] mb-2">100%</div>
            <p className="text-gray-600">Produits certifiés</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
