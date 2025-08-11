import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Phone, Mail, Clock } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-slate-200">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Términos de Servicio</h1>
        </div>
        <p className="text-slate-400">Última actualización: Enero 2025</p>
      </div>

      <div className="space-y-8">
        {/* Servicios */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            Nuestros Servicios
          </h2>
          <p className="text-slate-300 mb-4">
            IAfy.io ofrece servicios de automatización empresarial que incluyen:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
              <h3 className="font-semibold text-blue-400 mb-2">Automatización WhatsApp:</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Respuestas automáticas 24/7</li>
                <li>• Gestión de consultas</li>
                <li>• Programación de citas</li>
                <li>• Seguimiento de clientes</li>
              </ul>
            </div>
            <div className="bg-slate-600/10 p-4 rounded-lg border border-slate-500/20">
              <h3 className="font-semibold text-slate-300 mb-2">Otros Servicios:</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Gestión de redes sociales</li>
                <li>• Llamadas automatizadas</li>
                <li>• Consultoría personalizada</li>
                <li>• Soporte técnico continuo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Proceso de Contratación</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-white">Consulta Comercial</h3>
                <p className="text-slate-300 text-sm">Reunión comercial para evaluar tus necesidades</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-white">Propuesta Personalizada</h3>
                <p className="text-slate-300 text-sm">Solución específica para tu empresa con precios claros</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-white">Contrato y Pago</h3>
                <p className="text-slate-300 text-sm">Firma del acuerdo y procesamiento del pago inicial</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-white">Implementación</h3>
                <p className="text-slate-300 text-sm">Configuración y puesta en marcha en 24-48 horas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Garantía */}
        <section className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-6 border border-green-500/30">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Garantía de Satisfacción
          </h2>
          <div className="bg-green-600/10 p-4 rounded-lg border border-green-500/20">
            <h3 className="font-semibold text-green-400 mb-2">30 Días de Garantía Total:</h3>
            <p className="text-slate-300 mb-3">
              Si no estás completamente satisfecho con nuestros servicios en los primeros 30 días, 
              te devolvemos el 100% de tu inversión, sin preguntas.
            </p>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Garantía válida para todos nuestros servicios</span>
            </div>
          </div>
        </section>

        {/* Responsabilidades */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Responsabilidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-400 mb-3">Nuestras Responsabilidades:</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Implementar los servicios acordados
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Brindar soporte técnico continuo
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Mantener la confidencialidad
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Cumplir con los plazos acordados
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-300 mb-3">Tus Responsabilidades:</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Proporcionar acceso necesario
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Realizar pagos según lo acordado
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Usar los servicios legalmente
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Colaborar en la implementación
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Limitaciones */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            Limitaciones
          </h2>
          <div className="bg-yellow-600/10 p-4 rounded-lg border border-yellow-500/20">
            <p className="text-slate-300 text-sm leading-relaxed">
              Nuestros servicios están diseñados para automatizar y mejorar procesos empresariales. 
              No garantizamos resultados específicos de ventas, ya que estos dependen de múltiples 
              factores externos como mercado, competencia, calidad del producto/servicio, etc.
            </p>
          </div>
        </section>

        {/* Modificaciones */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            Modificaciones
          </h2>
          <p className="text-slate-300 mb-4">
            Nos reservamos el derecho de modificar estos términos con un aviso previo de 30 días. 
            Los cambios se comunicarán por email y WhatsApp.
          </p>
          <div className="bg-blue-600/10 p-3 rounded-lg border border-blue-500/20">
            <p className="text-blue-400 text-sm">
              Al continuar usando nuestros servicios después de las modificaciones, 
              aceptas los nuevos términos.
            </p>
          </div>
        </section>

        {/* Contacto */}
        <section className="bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-lg p-6 border border-blue-500/30">
          <h2 className="text-xl font-bold text-white mb-4">Contacto Legal</h2>
          <p className="text-slate-300 mb-4">
            Para consultas sobre estos términos o aspectos legales:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:legal@iafy.io" 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-colors"
            >
              <Mail className="w-4 h-4" />
              legal@iafy.io
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

export default TermsOfService;