import React from 'react';
import { useState } from 'react';
import { Bot, MessageCircle, Mail, Phone, MapPin, Sparkles, Shield, Zap } from 'lucide-react';
import PrivacyPolicy from './legal/PrivacyPolicy';
import TermsOfService from './legal/TermsOfService';
import CookiePolicy from './legal/CookiePolicy';

const Footer = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div>
      <footer className="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-slate-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Enhanced Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-slate-700 p-3 rounded-lg shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                  <Bot className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                IAfy.io
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              La plataforma de IA más avanzada para automatizar tu atención al cliente y aumentar tus ventas 24/7.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-600/20 rounded-full border border-blue-500/30 text-xs">
                <Shield className="w-3 h-3 text-blue-400" />
                <span className="text-blue-400">ISO 27001</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 rounded-full border border-slate-600 text-xs">
                <Zap className="w-3 h-3 text-slate-300" />
                <span className="text-slate-300">99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Enhanced Servicios */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Servicios
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Automatización WhatsApp</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Gestión Redes Sociales</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Llamadas Automatizadas</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Chatbots IA</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Análisis de Datos</a></li>
            </ul>
          </div>

          {/* Enhanced Industrias */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              Industrias
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Clínicas y Consultorios</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Hoteles y Turismo</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Inmobiliarias</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Concesionarios</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Ver todas las industrias</a></li>
            </ul>
          </div>

          {/* Enhanced Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                </div>
                <a href="https://wa.me/34614428420" className="text-slate-400 hover:text-blue-400 transition-colors">
                  +34 614 42 84 20
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <a href="mailto:ceo@iafy.io" className="text-slate-400 hover:text-blue-400 transition-colors">
                  ceo@iafy.io
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-slate-400">Valencia, España</span>
              </div>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="mt-6">
              <a 
                href="mailto:ceo@iafy.io" 
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <MessageCircle className="relative w-4 h-4" />
                ceo@iafy.io
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                © 2025 IAfy.io. Todos los derechos reservados.
              </p>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex space-x-6">
              <button 
                onClick={() => openModal('terms')}
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors hover:underline"
              >
                Términos de Servicio
              </button>
              <button 
                onClick={() => openModal('privacy')}
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors hover:underline"
              >
                Política de Privacidad
              </button>
              <button 
                onClick={() => openModal('cookies')}
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors hover:underline"
              >
                Cookies
              </button>
            </div>
          </div>
          
          {/* Trust badge */}
          <div className="text-center mt-6 pt-6 border-t border-slate-800/50">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-slate-400 text-sm">Tecnología segura y confiable</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-4xl min-h-screen sm:min-h-0 sm:max-h-[90vh] bg-slate-900 rounded-none sm:rounded-xl border-0 sm:border border-slate-700 shadow-2xl overflow-hidden my-0 sm:my-4">
            <button
              onClick={closeModal}
              className="sticky top-4 right-4 z-10 w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors ml-auto mr-4 mb-2 text-xl font-bold"
            >
              ×
            </button>
            <div className="overflow-y-auto max-h-screen sm:max-h-[90vh] pb-safe">
              {activeModal === 'privacy' && <PrivacyPolicy />}
              {activeModal === 'terms' && <TermsOfService />}
              {activeModal === 'cookies' && <CookiePolicy />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;