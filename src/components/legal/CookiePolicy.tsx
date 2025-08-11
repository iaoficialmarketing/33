import React from 'react';
import { Cookie, Settings, BarChart, Target, Shield } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-slate-200">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center">
            <Cookie className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Política de Cookies</h1>
        </div>
        <p className="text-slate-400">Última actualización: Enero 2025</p>
      </div>

      <div className="space-y-8">
        {/* Qué son las cookies */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Cookie className="w-5 h-5 text-blue-400" />
            ¿Qué son las Cookies?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
            visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia, recordar tus preferencias 
            y entender cómo usas nuestro sitio.
          </p>
          <div className="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
            <p className="text-blue-400 text-sm">
              💡 <strong>Ejemplo simple:</strong> Como cuando una tienda recuerda tu nombre y preferencias 
              para atenderte mejor la próxima vez que visitas.
            </p>
          </div>
        </section>

        {/* Tipos de cookies */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Tipos de Cookies que Usamos</h2>
          <div className="space-y-4">
            <div className="bg-green-600/10 p-4 rounded-lg border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-green-400">Cookies Esenciales</h3>
                <span className="text-xs bg-green-600/20 px-2 py-1 rounded text-green-300">Necesarias</span>
              </div>
              <p className="text-slate-300 text-sm mb-2">
                Necesarias para que el sitio web funcione correctamente.
              </p>
              <ul className="text-slate-300 text-sm space-y-1 ml-4">
                <li>• Mantener tu sesión activa</li>
                <li>• Recordar tus preferencias de idioma</li>
                <li>• Seguridad del sitio web</li>
              </ul>
            </div>

            <div className="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <BarChart className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-blue-400">Cookies de Rendimiento</h3>
                <span className="text-xs bg-blue-600/20 px-2 py-1 rounded text-blue-300">Opcionales</span>
              </div>
              <p className="text-slate-300 text-sm mb-2">
                Nos ayudan a entender cómo los visitantes usan nuestro sitio.
              </p>
              <ul className="text-slate-300 text-sm space-y-1 ml-4">
                <li>• Páginas más visitadas</li>
                <li>• Tiempo de permanencia</li>
                <li>• Errores que puedan ocurrir</li>
              </ul>
            </div>

            <div className="bg-slate-600/10 p-4 rounded-lg border border-slate-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-slate-300" />
                <h3 className="font-semibold text-slate-300">Cookies de Marketing</h3>
                <span className="text-xs bg-slate-600/20 px-2 py-1 rounded text-slate-300">Opcionales</span>
              </div>
              <p className="text-slate-300 text-sm mb-2">
                Para mostrarte contenido relevante y medir la efectividad de nuestras campañas.
              </p>
              <ul className="text-slate-300 text-sm space-y-1 ml-4">
                <li>• Anuncios personalizados</li>
                <li>• Seguimiento de conversiones</li>
                <li>• Análisis de campañas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookies específicas */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Cookies Específicas que Utilizamos</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-2 text-white">Nombre</th>
                  <th className="text-left py-2 text-white">Propósito</th>
                  <th className="text-left py-2 text-white">Duración</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="py-2 font-mono text-blue-400">_ga</td>
                  <td className="py-2">Google Analytics - Distinguir usuarios</td>
                  <td className="py-2">2 años</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2 font-mono text-blue-400">_gid</td>
                  <td className="py-2">Google Analytics - Distinguir usuarios</td>
                  <td className="py-2">24 horas</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2 font-mono text-blue-400">session_id</td>
                  <td className="py-2">Mantener sesión del usuario</td>
                  <td className="py-2">Sesión</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-blue-400">preferences</td>
                  <td className="py-2">Recordar preferencias del usuario</td>
                  <td className="py-2">1 año</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Control de cookies */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" />
            Cómo Controlar las Cookies
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
              <h3 className="font-semibold text-blue-400 mb-2">En tu Navegador:</h3>
              <p className="text-slate-300 text-sm mb-3">
                Puedes configurar tu navegador para rechazar cookies o avisarte cuando se envíen.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="text-slate-300 text-sm">
                  <strong>Chrome:</strong> Configuración → Privacidad → Cookies
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Firefox:</strong> Opciones → Privacidad → Cookies
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Safari:</strong> Preferencias → Privacidad → Cookies
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Edge:</strong> Configuración → Cookies y permisos
                </div>
              </div>
            </div>

            <div className="bg-slate-600/10 p-4 rounded-lg border border-slate-500/20">
              <h3 className="font-semibold text-slate-300 mb-2">Eliminar Cookies Existentes:</h3>
              <p className="text-slate-300 text-sm">
                Puedes eliminar todas las cookies almacenadas en tu dispositivo a través de 
                la configuración de tu navegador. Ten en cuenta que esto puede afectar tu 
                experiencia en otros sitios web.
              </p>
            </div>
          </div>
        </section>

        {/* Cookies de terceros */}
        <section className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Servicios de Terceros</h2>
          <p className="text-slate-300 mb-4">
            Utilizamos algunos servicios de terceros que pueden establecer sus propias cookies:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs">G</div>
              <div>
                <h3 className="font-semibold text-white">Google Analytics</h3>
                <p className="text-slate-400 text-sm">Para análisis de tráfico web</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs">W</div>
              <div>
                <h3 className="font-semibold text-white">WhatsApp Business</h3>
                <p className="text-slate-400 text-sm">Para integración de chat</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-lg p-6 border border-blue-500/30">
          <h2 className="text-xl font-bold text-white mb-4">¿Tienes Preguntas?</h2>
          <p className="text-slate-300 mb-4">
            Si tienes dudas sobre nuestra política de cookies, contáctanos:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:cookies@iafy.io" 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-colors"
            >
              <Cookie className="w-4 h-4" />
              cookies@iafy.io
            </a>
            <a 
              href="https://wa.me/34614428420" 
              className="flex items-center gap-2 px-4 py-2 bg-slate-600/20 rounded-lg text-slate-300 hover:bg-slate-600/30 transition-colors"
            >
              <Settings className="w-4 h-4" />
              +34 614 42 84 20
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;