import React, { useState } from 'react';
import { MessageCircle, Share2, Phone, Bot, Zap, Target, Clock, TrendingUp, Sparkles, ArrowRight, Brain, Cpu, Activity } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Automático',
      description: 'Sistema inteligente que atiende clientes 24/7, agenda citas, responde consultas complejas y cierra ventas automáticamente sin que tengas que estar presente.',
      features: ['Respuesta en 0.3 segundos', 'Agenda automática', 'Aprende solo', 'Se conecta con todo'],
      color: 'from-blue-600 to-slate-700',
      demo: 'Efectividad: 92% conversión',
      bgColor: 'bg-slate-800/50',
      borderColor: 'border-blue-500/30',
      glowColor: 'shadow-blue-500/20',
      tech: 'Tecnología Avanzada'
    },
    {
      icon: Share2,
      title: 'Redes Sociales Automáticas',
      description: 'Sistema creativo que genera contenido profesional, programa publicaciones estratégicas y optimiza interacciones para conseguir más clientes.',
      features: ['Crea contenido solo', 'Programa publicaciones', 'Interactúa automático', 'Analiza comentarios'],
      color: 'from-slate-600 to-slate-800',
      demo: 'Optimización: +450% interacciones',
      bgColor: 'bg-slate-800/50',
      borderColor: 'border-slate-500/30',
      glowColor: 'shadow-slate-500/20',
      tech: 'Visión + Lenguaje'
    },
    {
      icon: Phone,
      title: 'Llamadas Automáticas',
      description: 'Sistema de voz que realiza llamadas profesionales, agenda citas y califica clientes potenciales con protocolos inteligentes.',
      features: ['Voz natural', 'Agenda inteligente', 'Califica clientes', 'Reportes en vivo'],
      color: 'from-blue-600 to-slate-700',
      demo: 'Eficiencia: -85% costos',
      bgColor: 'bg-slate-800/50',
      borderColor: 'border-blue-500/30',
      glowColor: 'shadow-blue-500/20',
      tech: 'Voz + Aprendizaje'
    }
  ];

  const demoContent = [
    // WhatsApp Demo
    {
      messages: [
        { type: 'client', text: 'Hola, necesito agendar una cita médica urgente', time: '14:32' },
        { type: 'ai', text: 'Hola, soy Sofia, asistente de la Clínica. Te ayudo inmediatamente. ¿Para qué especialidad necesitas la cita?', time: '14:32' },
        { type: 'client', text: 'Cardiología, es urgente', time: '14:33' },
        { type: 'ai', text: 'Perfecto. Tengo disponibilidad con el Dr. García mañana a las 9:00 AM. ¿Te funciona?', time: '14:33' },
        { type: 'client', text: 'Sí perfecto. Juan Pérez, 614-123-4567', time: '14:34' },
        { type: 'ai', text: '✅ Cita confirmada para mañana 9:00 AM con Dr. García - Cardiología. Te enviaré recordatorio.', time: '14:34' }
      ]
    },
    // Social Media Demo
    {
      posts: [
        { platform: 'Instagram', content: '🏥 El 95% de nuestros pacientes mejoran su calidad de vida en 30 días. Nuestro equipo está aquí para ti. #Salud #Bienestar', engagement: '+340%', time: 'Hace 2h' },
        { platform: 'Facebook', content: '👨‍⚕️ Dr. García: "La prevención es la mejor medicina. Agenda tu chequeo anual." Llama: 614-XXX-XXXX', engagement: '+280%', time: 'Hace 4h' }
      ]
    },
    // Phone Demo
    {
      call: {
        duration: '2:34',
        outcome: 'Cita agendada',
        transcript: [
          { speaker: 'IA Sofia', text: 'Buenos días, habla Sofia de Clínica Cardio Plus. ¿En qué puedo ayudarle?' },
          { speaker: 'Cliente', text: 'Quería información sobre consultas de cardiología' },
          { speaker: 'IA Sofia', text: 'Tenemos excelentes especialistas. ¿Ha tenido algún síntoma que le preocupe?' },
          { speaker: 'Cliente', text: 'Sí, dolor en el pecho ocasionalmente' },
          { speaker: 'IA Sofia', text: 'Es importante revisarlo pronto. ¿Le agendar una cita esta semana?' }
        ]
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}

      <div className="relative container mx-auto px-6">
        {/* Spectacular Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-blue-400">MEJORA</span> tu Negocio
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Soluciones de IA que Complementan a tu Equipo
          </h3>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo nuestras <span className="text-blue-400 font-bold">soluciones de inteligencia artificial</span>{' '}
            pueden <span className="text-green-400 font-bold">optimizar tus procesos</span> y ayudarte a{' '}
            <span className="text-white font-bold">brindar mejor servicio a tus clientes</span>.
          </p>
          
          <div className="mt-6 bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-blue-300 font-bold text-center">
              ⚡ TECNOLOGÍA QUE SE ADAPTA A TU FORMA DE TRABAJAR
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Enhanced Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer p-6 rounded-xl border transition-all duration-500 hover:scale-102 ${
                  activeService === index
                    ? 'border-blue-500/30 bg-slate-800/50 shadow-xl'
                    : 'border-slate-700 hover:border-slate-600 bg-slate-800/30'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                      <span className="text-xs text-green-400 font-mono ml-2 bg-slate-800/50 px-2 py-1 rounded">
                        {service.tech}
                      </span>
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 rounded-full text-blue-400 text-sm font-medium">
                      <Target className="w-3 h-3" />
                      {service.demo}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Demo Section */}
          <div className="relative">

            <div className="bg-slate-800/70 rounded-xl p-6 border border-slate-700 shadow-xl will-change-transform">
              {/* Demo Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${services[activeService].color} shadow-lg`}>
                  {(() => {
                    const CurrentServiceIcon = services[activeService].icon;
                    return <CurrentServiceIcon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{services[activeService].title}</h4>
                  <p className="text-blue-400 font-medium flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    {services[activeService].demo}
                  </p>
                </div>
              </div>

              {/* Enhanced Demo Content */}
              <div className="min-h-[400px]">
                {activeService === 0 && (
                  <div className="space-y-4 will-change-transform">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 font-medium">Sistema Funcionando</span>
                        <div className="ml-auto text-xs text-green-400">Activo</div>
                      </div>
                      <div className="space-y-2 max-h-64 overflow-y-auto -webkit-overflow-scrolling-touch">
                        {demoContent[0].messages.map((msg, i) => (
                          <div key={i} className={`flex ${msg.type === 'client' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs p-3 rounded-lg text-sm shadow-lg ${
                              msg.type === 'client' 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-slate-700 text-slate-200 border border-slate-600'
                            }`}>
                              <p>{msg.text}</p>
                              <span className="text-xs opacity-70">{msg.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-blue-600/20 p-3 rounded-lg text-center">
                        <TrendingUp className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                        <p className="text-blue-400 font-medium text-sm">Éxito: 92%</p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                        <Brain className="w-5 h-5 text-green-400 mx-auto mb-1" />
                        <p className="text-green-400 font-medium text-sm">Respuesta Rápida</p>
                      </div>
                      <div className="bg-blue-600/20 p-3 rounded-lg text-center">
                        <Cpu className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                        <p className="text-blue-400 font-medium text-sm">Activo 24/7</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeService === 1 && (
                  <div className="space-y-4 will-change-transform">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                      <h5 className="text-white font-medium mb-3 flex items-center gap-2">
                        <Brain className="w-4 h-4 text-green-400" />
                        <span>Creación de Contenido</span>
                      </h5>
                      <div className="space-y-3">
                        {demoContent[1].posts.map((post, i) => (
                          <div key={i} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-slate-700 rounded flex items-center justify-center">
                                <Share2 className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-blue-400 font-medium text-sm">{post.platform}</span>
                              <span className="text-slate-400 text-xs">{post.time}</span>
                              <div className="ml-auto w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                            <p className="text-slate-300 text-sm mb-2">{post.content}</p>
                            <div className="flex items-center gap-2">
                              <Activity className="w-3 h-3 text-green-400" />
                              <span className="text-green-400 font-medium text-xs">Resultado: {post.engagement}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeService === 2 && (
                  <div className="space-y-4 will-change-transform">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-white font-medium">Llamada en Curso</span>
                        <span className="text-green-400 text-sm">Duración: {demoContent[2].call.duration}</span>
                      </div>
                      <div className="space-y-3">
                        {demoContent[2].call.transcript.map((line, i) => (
                          <div key={i} className={`p-3 rounded-lg ${
                            line.speaker === 'IA Sofia' 
                              ? 'bg-blue-600/20 border-l-2 border-blue-400' 
                              : 'bg-slate-700/50 border-l-2 border-slate-500'
                          }`}>
                            <p className="text-white font-medium text-sm mb-1">{line.speaker}:</p>
                            <p className="text-slate-300 text-sm">{line.text}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-blue-600/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-medium text-sm">Resultado: {demoContent[2].call.outcome}</span>
                          <div className="ml-auto w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;