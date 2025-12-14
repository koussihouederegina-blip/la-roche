import Button3D from '../components/Button3D';
import { Building2 } from 'lucide-react';

interface HomeProps {
  onNext: () => void;
}

export default function Home({ onNext }: HomeProps) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#9B8E57] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#96121D] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center space-y-8 animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <Building2 size={80} className="text-[#96121D]" strokeWidth={1.5} />
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-800 tracking-tight">
            LA ROCHE <span className="text-[#96121D]">BÉNIN</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-[#9B8E57] to-[#96121D] mx-auto rounded-full"></div>
        </div>

        <p className="text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          Votre partenaire de confiance pour tous vos projets de construction et de rénovation
        </p>

        <div className="pt-8">
          <Button3D onClick={onNext} size="lg" variant="primary">
            Découvrir notre entreprise
          </Button3D>
        </div>

        <div className="pt-12 text-sm text-gray-500">
          <p>Matériaux de construction • Équipements • Solutions complètes</p>
        </div>
      </div>
    </div>
  );
}
