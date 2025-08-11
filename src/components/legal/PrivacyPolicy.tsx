import React from 'react';
import { Shield, Mail, Phone, Clock, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-slate-200">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Política de Privacidad</h1>
        </div>
        <p className="text-slate-400">Última actualización: Enero 2025</p>
      </div>

      <div className="space-y-8">
        {/* Introducción */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-400" />
            Introducción
          </h2>
          <p className="text-slate-300 leading-relaxed">
            En IAfy.io respetamos tu privacidad y nos comprometemos a proteger tus datos personales. 
            Esta política explica cómo recopilamos, usamos y protegemos tu información cuando utilizas 
            nuestros servicios de automatización empresarial.
          </p>
        </section>

        {/* Datos que recopilamos */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            Información que Recopilamos
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Datos Personales:</h3>
              <ul className="text-slate-300 space-y-1 ml-4">
                <li>• Nombre completo</li>
                <li>• Dirección de email</li>
                <li>• Número de teléfono</li>
                <li>• Nombre de la empresa</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Datos Empresariales:</h3>
              <ul className="text-slate-300 space-y-1 ml-4">
                <li>• Industria o sector</li>
                <li>• Tamaño de la empresa</li>
                <li>• Facturación aproximada</li>
                <li>• Necesidades específicas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cómo usamos los datos */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            Cómo Usamos tu Información
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
              <h3 className="font-semibold text-blue-400 mb-2">Contacto Comercial:</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Programar reuniones gratuitas</li>
                <li>• Enviar propuestas personalizadas</li>
                <li>• Seguimiento comercial por WhatsApp</li>
                <li>• Llamadas de consultoría</li>
              </ul>
            </div>
            <div className="bg-slate-600/10 p-4 rounded-lg border border-slate-500/20">
              <h3 className="font-semibold text-slate-300 mb-2">Mejora del Servicio:</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Personalizar nuestras soluciones</li>
                <li>• Mejorar nuestros servicios</li>
                <li>• Análisis de necesidades del mercado</li>
                <li>• Desarrollo de nuevas funcionalidades</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compartir datos */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" />
            Compartir Información
          </h2>
          <div className="bg-green-600/10 p-4 rounded-lg border border-green-500/20">
            <p className="text-green-300 font-semibold mb-2">✅ Compromiso de Privacidad:</p>
            <p className="text-slate-300">
              <strong>NO vendemos, alquilamos o compartimos</strong> tus datos personales con terceros 
              para fines comerciales. Tu información se mantiene confidencial y solo se usa para 
              brindarte nuestros servicios de automatización empresarial.
            </p>
          </div>
        </section>

        {/* Derechos del usuario */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Tus Derechos</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">Acceder a tus datos</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">Rectificar información incorrecta</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">Eliminar tus datos</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">Oponerte al procesamiento</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-lg p-6 border border-blue-500/30">
          <h2 className="text-xl font-bold text-white mb-4">Contacto para Privacidad</h2>
          <p className="text-slate-300 mb-4">
            Para ejercer tus derechos o resolver dudas sobre privacidad, contáctanos:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:privacidad@iafy.io" 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-colors"
            >
              <Mail className="w-4 h-4" />
              privacidad@iafy.io
            </a>
            <a 
              href="https://wa.me/34614428420" 
              className="flex items-center gap-2 px-4 py-2 bg-slate-600/20 rounded-lg text-slate-300 hover:bg-slate-600/30 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +34 614 42 84 20
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;