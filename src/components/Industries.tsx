import React, { useState } from 'react';
import { Stethoscope, Building2, Home, Car, Users, TrendingUp, Clock, Target, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Industries = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  const industries = [
    {
      icon: Stethoscope,
      title: 'Clínicas y Consultorios',
      description: 'Sistema médico especializado que agenda citas automáticamente, envía recordatorios, realiza seguimiento después de consultas y atiende pacientes 24/7.',
      benefits: [
        'Reduce no-shows en 75%', 
        'Recordatorios automáticos', 
        'Seguimiento médico', 
        'Atención 24/7',
        'Expedientes digitales',
        'Gestión de citas'
      ],
      color: 'from-blue-600 to-slate-700',
      bgGradient: 'bg-blue-600/10',
      borderColor: 'border-blue-500/30',
      roi: '+400% Retorno',
      clients: '250+ Clínicas',
      glowColor: 'shadow-blue-500/20'
    },
    {
      icon: Building2,
      title: 'Hoteles y Turismo',
      description: 'Sistema hotelero que gestiona reservas automáticas, check-in virtual, recepcionista multiidioma y atención personalizada que supera expectativas.',
      benefits: [
        'Reservas instantáneas', 
        'Check-in automático', 
        'Recepcionista multiidioma', 
        'Experiencia premium',
        'Ventas adicionales',
        'Reviews positivos +90%'
      ],
      color: 'from-slate-600 to-slate-800',
      bgGradient: 'bg-slate-600/10',
      borderColor: 'border-slate-500/30',
      roi: '+350% Ingresos',
      clients: '180+ Hoteles',
      glowColor: 'shadow-slate-500/20'
    },
    {
      icon: Home,
      title: 'Inmobiliarias',
      description: 'Sistema inmobiliario que califica clientes potenciales, programa tours virtuales, realiza seguimiento inteligente y asiste en negociaciones.',
      benefits: [
        'Califica clientes perfectamente', 
        'Tours virtuales', 
        'Seguimiento inteligente', 
        'Más ventas',
        'Avalúos automáticos',
        'Gestión de contratos'
      ],
      color: 'from-blue-600 to-slate-700',
      bgGradient: 'bg-blue-600/10',
      borderColor: 'border-blue-500/30',
      roi: '+450% Ventas',
      clients: '320+ Inmobiliarias',
      glowColor: 'shadow-blue-500/20'
    },
    {
      icon: Car,
      title: 'Concesionarios',
      description: 'Sistema automotriz que asesora compradores, agenda pruebas de manejo, gestiona financiamiento y proporciona servicio post-venta personalizado.',
      benefits: [
        'Pruebas automáticas', 
        'Financiamiento inteligente', 
        'Seguimiento de ventas', 
        'Servicio post-venta',
        'Inventario inteligente',
        'Garantías digitales'
      ],
      color: 'from-slate-600 to-slate-800',
      bgGradient: 'bg-slate-600/10',
      borderColor: 'border-slate-500/30',
      roi: '+380% Conversión',
      clients: '150+ Concesionarios',
      glowColor: 'shadow-slate-500/20'
    }
  ];

  const stats = [
    { icon: Users, value: '900+', label: 'Empresas Automatizadas', color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
    { icon: TrendingUp, value: '+500%', label: 'Aumento en Conversiones', color: 'text-slate-300', bgColor: 'bg-slate-500/10' },
    { icon: Clock, value: '24/7', label: 'Disponibilidad Total', color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
    { icon: Shield, value: '99.9%', label: 'Satisfacción Garantizada', color: 'text-slate-300', bgColor: 'bg-slate-500/10' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Spectacular Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/3 rounded-full blur-2xl animate-ping" style={{animationDuration: '4s'}}></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Spectacular Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Soluciones Especializadas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-blue-400">¿Tu Industria?</span> <span className="text-green-400">Casos de Éxito</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Empresas líderes en diferentes sectores han <span className="text-green-400 font-bold">optimizado sus operaciones</span>{' '}
            con nuestras soluciones de automatización empresarial.{' '}
            <span className="text-white font-bold">Casos de éxito comprobados en múltiples industrias.</span>
          </p>
          
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 max-w-3xl mx-auto mb-12">
            <p className="text-blue-300 font-bold text-center">
              💡 AUTOMATIZACIÓN ESPECIALIZADA POR SECTOR EMPRESARIAL
            </p>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:bg-slate-800/70 backdrop-blur-sm hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative w-12 h-12 ${stat.bgColor} rounded-lg ${stat.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="relative text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="relative text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">{stat.label}</div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group relative"
              onMouseEnter={() => setHoveredIndustry(index)}
              onMouseLeave={() => setHoveredIndustry(null)}
            >
              <div className={`relative h-full p-8 rounded-xl border ${industry.borderColor} bg-slate-800/50 hover:bg-slate-800/70 hover:scale-102 transition-all duration-500 hover:shadow-2xl ${industry.glowColor} backdrop-blur-sm overflow-hidden`}>
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <div className="relative flex items-start gap-4 mb-6">
                  <div className={`relative p-4 rounded-lg bg-gradient-to-r ${industry.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {industry.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${industry.color} rounded-full text-white font-medium text-sm shadow-lg`}>
                        {industry.roi}
                      </span>
                      <span className="text-slate-400 font-medium text-sm flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {industry.clients}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="relative text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {industry.description}
                </p>

                {/* Enhanced Benefits */}
                <div className="relative space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    Beneficios Clave:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {industry.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 group-hover:text-slate-200">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Indicator */}
                {hoveredIndustry === index && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-2 shadow-xl animate-bounce">
                    <div className="flex items-center gap-1 text-white font-medium text-xs">
                      <Target className="w-3 h-3" />
                      <span>Éxito Garantizado</span>
                    </div>
                  </div>
                )}

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-slate-400/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Spectacular CTA Section */}
        <div className="text-center">
          <div className="relative bg-slate-800/70 rounded-xl p-8 border border-slate-700 max-w-4xl mx-auto backdrop-blur-sm overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-slate-500/5"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-slate-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-medium text-sm">Solución Personalizada</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Tu industria no está aquí?
              </h3>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                Creamos soluciones de <span className="text-blue-400 font-semibold">IA personalizadas</span> para 
                cualquier sector. Hablemos de cómo automatizar tu negocio.
              </p>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span className="relative flex items-center gap-3">
                  Consulta Comercial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;