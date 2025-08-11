import React, { useEffect, useState } from 'react';
import { Bot, Zap, MessageCircle, Phone, Users, Target, TrendingUp, ArrowRight, Sparkles, Shield, Clock, Brain, Activity, Cpu } from 'lucide-react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);

  const words = ['WhatsApp', 'Redes Sociales', 'Llamadas', 'Ventas', 'Clientes'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Professional Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Elegant geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-slate-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-slate-400/10 rounded-full blur-xl"></div>
        </div>
        
        {/* Subtle business icons floating */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/6">
            <MessageCircle className="w-8 h-8 text-blue-400" />
          </div>
          <div className="absolute top-1/3 right-1/6">
            <TrendingUp className="w-10 h-10 text-slate-400" />
          </div>
          <div className="absolute bottom-1/3 left-1/5">
            <Users className="w-9 h-9 text-blue-300" />
          </div>
          <div className="absolute bottom-1/4 right-1/5">
            <Target className="w-7 h-7 text-slate-300" />
          </div>
        </div>
        
        {/* Professional grid overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Spectacular Logo */}
        <div className="mb-8">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="relative bg-gradient-to-r from-blue-600 to-slate-700 p-3 rounded-lg shadow-lg">
              <Bot className="w-8 h-8 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-3xl font-bold text-white">IAfy.io</h1>
          </div>
        </div>

        {/* Spectacular Main Heading */}
        <div className="mb-8 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            ¿Te gustaría atender clientes 24/7?
          </h2>
          
          <div className="relative h-20 md:h-24 overflow-hidden">
            <span className="text-4xl md:text-6xl font-bold text-red-400 transition-all duration-500 inline-block">
              {words[currentWord]}
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-slate-200 leading-tight">
            <span className="text-blue-400 relative">
              Te ayudamos a automatizar tu negocio
            </span>
          </h3>
        </div>

        {/* Enhanced Subtitle */}
        <div className="mb-12 max-w-4xl">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Descubre cómo la <span className="text-blue-400 font-bold">inteligencia artificial</span> puede{' '}
            <span className="text-green-400 font-bold">complementar a tu equipo</span> y ayudarte a{' '}
            <span className="text-blue-400 font-bold">crecer tu negocio</span>.{' '}
            <span className="text-white font-bold">Conoce nuestras soluciones personalizadas.</span>
          </p>
          
          <div className="mt-6 bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-300 font-semibold text-center">
              💡 SOLUCIONES INTELIGENTES PARA HACER CRECER TU NEGOCIO
            </p>
          </div>
        </div>

        {/* Spectacular CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white font-bold text-lg hover:from-blue-500 hover:to-blue-600 transition-colors duration-200 animate-pulse"
          >
            <span className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              CONSULTA GRATUITA
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
          
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-bold text-lg transition-colors duration-200"
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              VER CASOS DE ÉXITO
            </span>
          </button>
        </div>

        {/* Spectacular Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {[
            { icon: TrendingUp, number: '+400%', label: 'Mejora Promedio', tech: 'Casos Reales', color: 'text-green-400' },
            { icon: Users, number: '847', label: 'Clientes Satisfechos', tech: 'Casos Reales', color: 'text-blue-400' },
            { icon: Target, number: '92%', label: 'Satisfacción', tech: 'Sistema Avanzado', color: 'text-green-400' },
            { icon: Clock, number: '24/7', label: 'Disponibilidad', tech: 'Siempre Activo', color: 'text-blue-400' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all group">
                <div className="absolute top-2 right-2 text-xs text-green-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  {stat.tech}
                </div>
                <div className={`w-12 h-12 bg-blue-500/10 rounded-lg ${stat.color} mx-auto mb-4 flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                <div className="absolute inset-0 bg-blue-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
            <Shield className="w-4 h-4 text-green-400" />
            <span>GARANTÍA 30 DÍAS</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400 text-sm font-bold">
            <Zap className="w-4 h-4 text-blue-400" />
            <span>INSTALACIÓN EN 24H</span>
          </div>
          <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
            <Brain className="w-4 h-4 text-green-400" />
            <span>RETORNO GARANTIZADO</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400 text-sm font-bold">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>SOPORTE 24/7</span>
          </div>
        </div>
        
        {/* Urgency Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-green-600/20 border border-blue-500/30 rounded-lg p-6 max-w-4xl mx-auto">
          <div className="text-center">
            <h4 className="text-xl font-bold text-blue-300 mb-2">
              ✨ CONSULTA GRATUITA PERSONALIZADA
            </h4>
            <p className="text-slate-300 mb-4">
              Análisis gratuito de tu negocio + Propuesta personalizada + 
              <span className="text-green-400 font-bold"> Sin compromiso</span>
            </p>
            <p className="text-blue-300 font-bold text-sm">
              💡 Descubre cómo la IA puede transformar tu negocio
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;