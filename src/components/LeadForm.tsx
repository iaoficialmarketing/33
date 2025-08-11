import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, MessageCircle, Building, Users, Zap, Target, Phone, Mail, Sparkles, Shield, Clock } from 'lucide-react';

interface FormData {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  industria: string;
  empleados: string;
  facturacion: string;
  servicioInteres: string;
  presupuesto: string;
  urgencia: string;
  problemaActual: string;
}

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    industria: '',
    empleados: '',
    facturacion: '',
    servicioInteres: '',
    presupuesto: '',
    urgencia: '',
    problemaActual: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const steps = [
    {
      title: 'Información Personal',
      subtitle: 'Cuéntanos sobre ti',
      fields: ['nombre', 'empresa', 'telefono', 'email'],
      icon: Users,
      color: 'from-blue-600 to-slate-700'
    },
    {
      title: 'Información del Negocio',
      subtitle: 'Detalles de tu empresa',
      fields: ['industria', 'empleados', 'facturacion'],
      icon: Building,
      color: 'from-slate-600 to-slate-800'
    },
    {
      title: 'Necesidades y Presupuesto',
      subtitle: 'Qué necesitas exactamente',
      fields: ['servicioInteres', 'presupuesto', 'urgencia', 'problemaActual'],
      icon: Zap,
      color: 'from-blue-600 to-slate-700'
    }
  ];

  const industries = [
    'Clínica/Consultorio Médico',
    'Hotel/Turismo',
    'Inmobiliaria',
    'Concesionario/Automotriz',
    'Restaurante/Gastronomía',
    'Retail/Comercio',
    'Servicios Profesionales',
    'Tecnología/Software',
    'Educación',
    'Manufactura',
    'Construcción',
    'Otro'
  ];

  const employeeRanges = [
    '1-10 empleados (Pequeña)',
    '11-50 empleados (Mediana)',
    '51-200 empleados (Grande)',
    '201-500 empleados (Corporativa)',
    '500+ empleados (Empresa)'
  ];

  const revenueRanges = [
    'Menos de 10K €/mes',
    '10K - 50K €/mes',
    '50K - 100K €/mes',
    '100K - 500K €/mes',
    'Más de 500K €/mes',
    'Prefiero no decir'
  ];

  const services = [
    'Automatización WhatsApp IA',
    'Gestión Redes Sociales IA',
    'Llamadas Automatizadas IA',
    'Todo lo anterior (Paquete Completo)',
    'Consultoría personalizada'
  ];

  const budgets = [
    '500 - 1,500 €/mes',
    '1,500 - 3,000 €/mes',
    '3,000 - 5,000 €/mes',
    'Más de 5,000 €/mes',
    'Necesito cotización personalizada'
  ];

  const urgencies = [
    'Inmediato (esta semana) 🔥',
    'Urgente (este mes) ⚡',
    'Pronto (próximos 3 meses) 📅',
    'Solo explorando opciones 👀'
  ];

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = (stepIndex: number) => {
    const stepFields = steps[stepIndex].fields;
    const fieldsValid = stepFields.every(field => formData[field as keyof FormData].trim() !== '');
    
    // En el último paso, también verificar que se acepte la política de privacidad
    if (stepIndex === steps.length - 1) {
      return fieldsValid && privacyAccepted;
    }
    
    return fieldsValid;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1 && isStepValid(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const generateWhatsAppMessage = () => {
    // Determinar urgencia del cliente
    let urgenciaCliente = '';
    let tiempoRespuesta = '';
    
    if (formData.urgencia.includes('Inmediato')) {
      urgenciaCliente = '🚨 URGENTE - NECESITA SOLUCIÓN INMEDIATA';
      tiempoRespuesta = 'CONTACTAR EN 15 MINUTOS';
    } else if (formData.urgencia.includes('Urgente')) {
      urgenciaCliente = '⚡ ALTA PRIORIDAD - NECESITA SOLUCIÓN RÁPIDA';
      tiempoRespuesta = 'CONTACTAR HOY MISMO';
    } else if (formData.urgencia.includes('Pronto')) {
      urgenciaCliente = '📅 PLANIFICANDO - NECESITA INFORMACIÓN';
      tiempoRespuesta = 'CONTACTAR EN 24 HORAS';
    } else {
      urgenciaCliente = '👀 EXPLORANDO - EVALUANDO OPCIONES';
      tiempoRespuesta = 'SEGUIMIENTO COMERCIAL';
    }

    return `🤖 *NUEVA CONSULTA COMERCIAL - IAfy.io*

${urgenciaCliente}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *INFORMACIÓN PERSONAL:*
• 📝 Nombre: ${formData.nombre}
• 🏢 Empresa: ${formData.empresa}
• 📱 Teléfono: ${formData.telefono}
• 📧 Email: ${formData.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 *INFORMACIÓN NEGOCIO:*
• 🏭 Industria: ${formData.industria}
• 👥 Empleados: ${formData.empleados}
• 💰 Facturación: ${formData.facturacion}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 *NECESIDADES:*
• 🎯 Servicio: ${formData.servicioInteres}
• 💵 Presupuesto: ${formData.presupuesto}
• ⏰ Urgencia: ${formData.urgencia}
• 🚨 Problema: ${formData.problemaActual}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 *ACCIÓN REQUERIDA:*
• ⏰ Tiempo de respuesta: ${tiempoRespuesta}
• 📞 Método preferido: ${formData.telefono ? 'Llamada telefónica' : 'WhatsApp'}
• 💼 Oportunidad: ${formData.servicioInteres}
• 🎯 Próximo paso: Reunión comercial personalizada

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Enviado desde: IAfy.io
⏰ ${new Date().toLocaleString('es-ES')}`;
  };

  const handleSubmit = async () => {
    if (!isStepValid(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      const message = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/34614428420?text=${encodeURIComponent(message)}`;
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      window.open(whatsappUrl, '_blank');
      setIsCompleted(true);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailSubmit = async () => {
    if (!isStepValid(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      const emailBody = generateEmailMessage();
      const emailUrl = `mailto:ceo@iafy.io?subject=Consulta%20Comercial%20-%20${encodeURIComponent(formData.empresa)}&body=${encodeURIComponent(emailBody)}`;
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      window.open(emailUrl, '_blank');
      setIsCompleted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateEmailMessage = () => {
    return `Estimado equipo de IAfy.io,

Me pongo en contacto con ustedes para solicitar información sobre sus servicios de automatización empresarial.

INFORMACIÓN PERSONAL:
• Nombre: ${formData.nombre}
• Empresa: ${formData.empresa}
• Teléfono: ${formData.telefono}
• Email: ${formData.email}

INFORMACIÓN DEL NEGOCIO:
• Industria: ${formData.industria}
• Empleados: ${formData.empleados}
• Facturación: ${formData.facturacion}

NECESIDADES:
• Servicio de interés: ${formData.servicioInteres}
• Presupuesto: ${formData.presupuesto}
• Urgencia: ${formData.urgencia}
• Problema actual: ${formData.problemaActual}

Me gustaría agendar una consulta para conocer más sobre cómo sus soluciones pueden ayudar a mejorar mi negocio.

Quedo atento a su respuesta.

Saludos cordiales,
${formData.nombre}
${formData.empresa}`;
  };

  if (isCompleted) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden" id="contacto">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative container mx-auto px-6 max-w-3xl">
          <div className="bg-slate-800/70 rounded-xl p-8 border border-slate-700 text-center shadow-2xl backdrop-blur-sm">
            <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Check className="w-8 h-8 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¡Perfecto! Información enviada
            </h3>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              Hemos recibido tu información y nos pondremos en contacto contigo 
              <span className="text-blue-400 font-semibold">muy pronto</span> para programar tu 
              <span className="text-green-400 font-semibold">consulta gratuita</span>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-600/20 p-4 rounded-lg border border-blue-600/30 hover:bg-blue-600/30 transition-colors">
                <MessageCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-400 font-medium text-sm">Mensaje Enviado</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:bg-slate-700/70 transition-colors">
                <Target className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-300 font-medium text-sm">En Revisión</p>
              </div>
              <div className="bg-blue-600/20 p-4 rounded-lg border border-blue-600/30 hover:bg-blue-600/30 transition-colors">
                <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-400 font-medium text-sm">Contacto Pronto</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 p-4 rounded-lg border border-blue-600/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <p className="text-blue-400 font-semibold">Consulta Gratuita Solicitada</p>
              </div>
              <p className="text-slate-300 text-sm">Análisis personalizado sin compromiso</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden" id="contacto">
      {/* Spectacular Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/3 rounded-full blur-2xl animate-ping" style={{animationDuration: '6s'}}></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-4xl">
        {/* Spectacular Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Consulta Personalizada</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-green-400">CONSULTA</span> <span className="text-blue-400">GRATUITA</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Completa el formulario y recibe una <span className="text-blue-400 font-bold">consulta personalizada</span>{' '}
            sobre cómo la IA puede <span className="text-green-400 font-bold">mejorar tu negocio</span>.{' '}
            <span className="text-white font-bold">Sin compromiso, completamente gratuito.</span>
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full border border-green-600/30 backdrop-blur-sm animate-pulse">
            <Target className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-bold text-sm">ANÁLISIS GRATUITO PERSONALIZADO</span>
          </div>
          
          <div className="mt-4 bg-blue-600/20 border border-blue-500/30 rounded-lg p-3">
            <p className="text-blue-300 font-bold text-center text-sm">
              ✨ CONSULTA GRATUITA - DESCUBRE EL POTENCIAL DE TU NEGOCIO
            </p>
          </div>
        </div>

        <div className="relative bg-slate-800/70 rounded-xl p-8 border border-slate-700 shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-slate-500/5"></div>
          
          {/* Enhanced Progress Bar */}
          <div className="relative mb-8">
            <div className="flex justify-between mb-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    index <= currentStep 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-500/25 scale-110' 
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {index < currentStep ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                    {index <= currentStep && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-3 rounded-full transition-all duration-500 ${
                      index < currentStep ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-slate-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {steps[currentStep].title}
              </h3>
              <p className="text-slate-400">{steps[currentStep].subtitle}</p>
              <div className="mt-2 text-sm text-slate-500">
                Paso {currentStep + 1} de {steps.length}
              </div>
            </div>
          </div>

          {/* Enhanced Form Content */}
          <div className="relative min-h-[400px]">
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => updateFormData('nombre', e.target.value)}
                      className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <Building className="w-4 h-4 text-blue-400" />
                      Nombre de la empresa *
                    </label>
                    <input
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => updateFormData('empresa', e.target.value)}
                      className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-400" />
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => updateFormData('telefono', e.target.value)}
                      className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                      placeholder="Ej: +34 612 345 678"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-400" />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-400" />
                    ¿A qué industria perteneces? *
                  </label>
                  <select
                    value={formData.industria}
                    onChange={(e) => updateFormData('industria', e.target.value)}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                  >
                    <option value="">Selecciona tu industria</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    ¿Cuántos empleados tiene tu empresa? *
                  </label>
                  <select
                    value={formData.empleados}
                    onChange={(e) => updateFormData('empleados', e.target.value)}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                  >
                    <option value="">Selecciona el rango</option>
                    {employeeRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    Facturación mensual aproximada *
                  </label>
                  <select
                    value={formData.facturacion}
                    onChange={(e) => updateFormData('facturacion', e.target.value)}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                  >
                    <option value="">Selecciona el rango</option>
                    {revenueRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <>
                <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    ¿Qué servicio te interesa más? *
                  </label>
                  <select
                    value={formData.servicioInteres}
                    onChange={(e) => updateFormData('servicioInteres', e.target.value)}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    ¿Cuál es tu presupuesto mensual? *
                  </label>
                  <select
                    value={formData.presupuesto}
                    onChange={(e) => updateFormData('presupuesto', e.target.value)}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                  >
                    <option value="">Selecciona tu presupuesto</option>
                    {budgets.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    ¿Qué tan urgente es para ti? *
                  </label>
                  <select
                    value={formData.urgencia}
                    onChange={(e) => updateFormData('urgencia', e.target.value)}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm hover:bg-slate-700/70"
                  >
                    <option value="">Selecciona urgencia</option>
                    {urgencies.map(urgency => (
                      <option key={urgency} value={urgency}>{urgency}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                    ¿Cuál es tu mayor problema actual? *
                  </label>
                  <textarea
                    value={formData.problemaActual}
                    onChange={(e) => updateFormData('problemaActual', e.target.value)}
                    rows={4}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none backdrop-blur-sm hover:bg-slate-700/70"
                    placeholder="Describe brevemente tu mayor desafío en atención al cliente, ventas o automatización..."
                  />
                </div>
                </div>
                
                {/* Checkbox de Política de Privacidad */}
                <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="privacy-policy" className="text-slate-300 text-sm leading-relaxed">
                    Acepto la{' '}
                    <button 
                      type="button"
                      onClick={() => window.open('#', '_blank')}
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Política de Privacidad
                    </button>
                    {' '}y los{' '}
                    <button 
                      type="button"
                      onClick={() => window.open('#', '_blank')}
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Términos de Servicio
                    </button>
                    . Autorizo a IAfy.io a contactarme por WhatsApp, email y teléfono para brindarme información comercial sobre sus servicios de automatización empresarial. *
                  </label>
                </div>
                {!privacyAccepted && currentStep === steps.length - 1 && (
                  <p className="text-red-400 text-xs mt-2">
                    Debes aceptar la política de privacidad para continuar
                  </p>
                )}
                </div>
              </>
            )}
          </div>

          {/* Enhanced Navigation Buttons */}
          <div className="relative flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid(currentStep)}
                className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium shadow-xl shadow-blue-500/25 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span className="relative">Siguiente</span>
                <ArrowRight className="relative w-4 h-4" />
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid(currentStep) || isSubmitting || !privacyAccepted}
                  className="relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium shadow-xl shadow-blue-500/25 hover:scale-105 overflow-hidden w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  {isSubmitting ? (
                    <>
                      <div className="relative animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                      <span className="relative">Enviando...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="relative w-4 h-4" />
                      <span className="relative">WhatsApp</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={handleEmailSubmit}
                  disabled={!isStepValid(currentStep) || isSubmitting || !privacyAccepted}
                  className="relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg hover:from-slate-500 hover:to-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium shadow-xl shadow-slate-500/25 hover:scale-105 overflow-hidden w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  <Mail className="relative w-4 h-4" />
                  <span className="relative">Email</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;