import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, Shield, Zap, MapPin, Smartphone, Star, ArrowRight } from 'lucide-react';

const proFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-ouro" />,
    title: "Guias de Sobrevivência",
    desc: "Manuais táticos completos sobre como agir em desastres, emergências médicas, assaltos e situações de crise."
  },
  {
    icon: <MapPin className="w-6 h-6 text-ouro" />,
    title: "Diário de Incidentes",
    desc: "Registre atitudes suspeitas, ameaças ou eventos incomuns com data e hora para manter um histórico de segurança."
  },
  {
    icon: <Zap className="w-6 h-6 text-ouro" />,
    title: "Perfis Especializados",
    desc: "Guias e checklists focados na sua rotina: Agente de Segurança, Professor, Profissional da Saúde, Turista, etc."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-ouro" />,
    title: "Checklists Inteligentes",
    desc: "Rotinas de verificação avançadas com sugestões automáticas para sua casa, veículo ou viagens."
  }
];

const plans = [
  {
    name: "Teste Grátis",
    price: "R$ 0,00",
    period: "/3 dias",
    desc: "Experimente todo o poder do VIGILA PRO gratuitamente por 3 dias. Retorna ao plano Básico após o teste.",
    features: [
      "Acesso total aos recursos PRO",
      "Guias de Sobrevivência",
      "Diário de Incidentes",
      "Perfis Especializados"
    ],
    cta: "Iniciar Teste",
    highlight: false
  },
  {
    name: "7 Dias",
    price: "R$ 9,90",
    period: "",
    desc: "Ideal para viagens curtas ou eventos.",
    features: [
      "Tudo do plano Básico",
      "Guias de Sobrevivência",
      "Diário de Incidentes",
      "Perfis Especializados"
    ],
    cta: "Obter Acesso",
    highlight: false
  },
  {
    name: "1 Ano",
    price: "R$ 29,90",
    period: "",
    desc: "Proteção contínua e tranquilidade o ano todo.",
    features: [
      "Tudo do plano Básico",
      "Guias de Sobrevivência",
      "Diário de Incidentes",
      "Perfis Especializados"
    ],
    cta: "Obter Acesso",
    highlight: true
  },
  {
    name: "Vitalício",
    price: "R$ 49,90",
    period: "",
    desc: "Pagamento único. O VIGILA PRO é seu para sempre.",
    features: [
      "Tudo do plano Básico",
      "Guias de Sobrevivência",
      "Diário de Incidentes",
      "Perfis Especializados"
    ],
    cta: "Obter Acesso Vitalício",
    highlight: false
  }
];

export default function ProFeatures() {
  return (
    <div className="bg-obsidiana min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-pergaminho mb-6">
            Recursos <span className="text-ouro">PRO</span>
          </h1>
          <p className="text-xl text-pergaminho/70 max-w-3xl mx-auto">
            A inteligência que você precisa quando o erro não é uma opção. Desbloqueie o potencial máximo da sentinela.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {proFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-ardosia/30 p-8 rounded-2xl border border-ardosia hover:border-ouro/30 transition-colors"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-pergaminho mb-3">{feature.title}</h3>
              <p className="text-pergaminho/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pergaminho mb-4">Escolha sua Missão</h2>
            <p className="text-pergaminho/60">Planos flexíveis para diferentes níveis de exigência.</p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`p-10 rounded-3xl border ${
                  plan.highlight 
                    ? 'bg-ouro border-ouro shadow-[0_0_40px_rgba(201,168,76,0.2)]' 
                    : 'bg-ardosia/30 border-ardosia'
                } relative overflow-hidden`}
              >
                {plan.highlight && (
                  <div className="absolute top-6 right-6 bg-obsidiana text-ouro text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Recomendado
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-obsidiana' : 'text-pergaminho'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6 flex items-baseline">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-obsidiana' : 'text-pergaminho'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`ml-2 text-sm font-medium ${plan.highlight ? 'text-obsidiana/60' : 'text-pergaminho/40'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mb-8 ${plan.highlight ? 'text-obsidiana/80' : 'text-pergaminho/60'}`}>
                  {plan.desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-0.5 ${plan.highlight ? 'text-obsidiana' : 'text-ouro'}`} />
                      <span className={plan.highlight ? 'text-obsidiana/90 font-medium' : 'text-pergaminho/70'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://vigila-v1-0.vercel.app/" 
                  className={`w-full py-4 rounded-xl font-bold text-center block transition-all ${
                    plan.highlight 
                      ? 'bg-obsidiana text-pergaminho hover:bg-ardosia shadow-xl' 
                      : 'bg-ouro text-obsidiana hover:bg-ouro/80'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center">
          <p className="text-pergaminho/40 mb-8">Precisa de uma solução para equipes maiores ou ONGs? <Link to="/support" className="text-ouro hover:underline transition-all">Fale conosco</Link> para planos corporativos.</p>
        </div>
      </div>
    </div>
  );
}
