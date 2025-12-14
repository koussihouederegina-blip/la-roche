import PageWrapper from '../components/PageWrapper';
import Button3D from '../components/Button3D';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Calendar
} from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/22991888888', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:laroche@larochebenin.com';
  };

  const handleAppointment = () => {
    window.open('https://calendly.com/larochebenin', '_blank');
  };

  return (
    <PageWrapper title="Contact & Showroom">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-600 mb-10 text-center leading-relaxed">
          Notre équipe est à votre disposition pour vous accompagner dans vos projets
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9B8E57] to-[#96121D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    Akpakpa (PK BP-5255)
                    <br />
                    Cotonou, Bénin
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9B8E57] to-[#96121D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Téléphone</h3>
                  <p className="text-gray-600">
                    +229 (0) 21 33 05 95
                    <br />
                    +229 (0) 21 88 88 88
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9B8E57] to-[#96121D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">
                    laroche@larochebenin.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9B8E57] to-[#96121D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Horaires du Showroom</h3>
                  <p className="text-gray-600">
                    <span className="font-semibold">Lundi - Vendredi:</span> 8h - 18h
                    <br />
                    <span className="font-semibold">Samedi:</span> 8h - 14h
                  </p>
                  <p className="text-sm text-[#96121D] font-semibold mt-2">
                    Ouverture Non Stop de notre Showroom
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-100 to-white rounded-xl p-8 shadow-md border border-gray-100 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin size={64} className="text-[#96121D] mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Carte Interactive</p>
                <p className="text-sm text-gray-500 mt-2">
                  Akpakpa, Cotonou
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#9B8E57] to-[#96121D] rounded-xl p-8 text-white text-center shadow-lg">
              <h3 className="text-xl font-bold mb-4">Visitez Notre Showroom</h3>
              <p className="mb-6 leading-relaxed">
                Découvrez nos produits en situation réelle et bénéficiez
                des conseils personnalisés de nos experts.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Contactez-nous
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button3D onClick={handleWhatsApp} variant="primary">
              <MessageCircle size={20} className="inline mr-2" />
              WhatsApp
            </Button3D>
            <Button3D onClick={handleEmail} variant="secondary">
              <Mail size={20} className="inline mr-2" />
              Email
            </Button3D>
            <Button3D onClick={handleAppointment} variant="primary">
              <Calendar size={20} className="inline mr-2" />
              Prendre Rendez-vous
            </Button3D>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
