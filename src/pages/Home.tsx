import React from 'react';
import { Building2 } from 'lucide-react';

/* ============================
   Bouton 3D (intégré)
============================ */
interface Button3DProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

function Button3D({
  children,
  onClick,
  size = 'md',
}: Button3DProps) {
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative rounded-xl font-semibold text-white
        bg-[#E41922]
        transition-all duration-200 ease-out
        shadow-[0_10px_0_rgba(228,25,34,0.6),0_18px_35px_rgba(228,25,34,0.35)]
        hover:translate-y-1
        hover:shadow-[0_7px_0_rgba(228,25,34,0.5),0_14px_30px_rgba(228,25,34,0.25)]
        active:translate-y-2
        active:shadow-[0_4px_0_rgba(228,25,34,0.4)]
        ${sizes[size]}
      `}
    >
      {children}
    </button>
  );
}

/* ============================
   Page Home
============================ */
interface HomeProps {
  onNext: () => void;
}

export default function Home({ onNext }: HomeProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
      
      {/* Effets de lumière */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#E41922] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#E41922] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center space-y-10">
        
        {/* Icône */}
        <div className="flex justify-center">
          <Building2 size={80} className="text-[#E41922]" strokeWidth={1.5} />
        </div>

        {/* Titre */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-800 tracking-tight">
            LA ROCHE <span className="text-[#E41922]">BÉNIN</span>
          </h1>
          <div className="h-1 w-32 bg-[#E41922] mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <p className="text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          Votre partenaire de confiance pour tous vos projets de construction et de rénovation
        </p>

        {/* Bouton */}
        <div className="pt-6">
          <Button3D onClick={onNext} size="lg">
            Découvrir notre entreprise
          </Button3D>
        </div>

        {/* Footer */}
        <div className="pt-10 text-sm text-gray-500">
          <p>Matériaux de construction • Équipements • Solutions complètes</p>
        </div>
      </div>
    </div>
  );
}
