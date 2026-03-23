import { motion } from 'motion/react';
import { Check, Shield, Zap, MapPin, Smartphone, Star, ArrowRight } from 'lucide-react';

const proFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-ouro" />,
    title: "Alertas em Tempo Real",
    desc: "Notificações instantâneas sobre mudanças no status de segurança da sua zona atual ou rotas planejadas."
  },
  {
    icon: <MapPin className="w-6 h-6 text-ouro" />,
    title: "Mapeamento Granular",
    desc: "Acesso a dados detalhados por bairro e rua, com histórico de incidentes e análise de tendências."
  },
  {
    icon: <Zap className="w-6 h-6 text-ouro" />,
    title: "Protocolos Especializados",
    desc: "Checklists avançados para cenários específicos: extração, vigilância, proteção de VIPs e áreas de conflito."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-ouro" />,
    title: "Modo Offline Completo",
    desc: "Baixe mapas e protocolos de regiões inteiras para uso sem qualquer conexão de dados."
  }
];

const plans = [
  {
    name: "Teste",
    price: "Grátis",
    period: "/3 dias",
    desc: "Experimente o poder total da sentinela sem compromisso.",
    features: [
      "Acesso total aos recursos PRO",
      "Alertas em tempo real",
      "Mapeamento granular",
      "Protocolos especializados"
    ],
    cta: "Iniciar Teste",
    highlight: false
  },
  {
    name: "Semanal",
    price: "R$ 9,90",
    period: "/7 dias",
    desc: "Ideal para missões curtas ou viagens pontuais.",
    features: [
      "Acesso total aos recursos PRO",
      "Alertas em tempo real",
      "Mapeamento granular",
      "Protocolos especializados"
    ],
    cta: "Obter Acesso",
    highlight: false
  },
  {
    name: "Anual",
    price: "R$ 29,90",
    period: "/ano",
    desc: "A melhor escolha para profissionais em campo.",
    features: [
      "Acesso total aos recursos PRO",
      "Alertas em tempo real",
      "Mapeamento granular",
      "Protocolos especializados"
    ],
    cta: "Obter Acesso",
    highlight: true
  },
  {
    name: "Vitalício",
    price: "R$ 49,90",
    period: "/único",
    desc: "Proteção permanente. Sem renovações, sem limites.",
    features: [
      "Acesso total aos recursos PRO",
      "Alertas em tempo real",
      "Mapeamento granular",
      "Protocolos especializados"
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
                  target="_blank" 
                  rel="noopener noreferrer"
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
          <p className="text-pergaminho/40 mb-8">Precisa de uma solução para equipes maiores ou ONGs? <a href="/support" className="text-ouro hover:underline transition-all">Fale conosco</a> para planos corporativos.</p>
        </div>
      </div>
    </div>
  );
}
