import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "O que é a Vigila?",
    answer: "A Vigila é uma plataforma de inteligência de campo e segurança pessoal desenhada para profissionais de alto risco, ONGs, jornalistas e cidadãos que buscam maior consciência situacional. Ela fornece botão SOS, compartilhamento de localização, checklists de segurança e gravação de áudio discreta."
  },
  {
    question: "A Vigila substitui o treinamento de segurança?",
    answer: "Não. A Vigila é uma ferramenta complementar que amplia o seu julgamento humano. Ela fornece as informações e protocolos necessários para que você tome decisões melhores, mas não substitui o treinamento tático ou técnico."
  },
  {
    question: "Como os dados são atualizados?",
    answer: "Nossa equipe de inteligência monitora constantemente fontes oficiais, redes de campo e relatórios de segurança para garantir que as informações sobre zonas de risco e protocolos estejam sempre atualizadas."
  },
  {
    question: "Meus dados de localização são compartilhados?",
    answer: "A privacidade é um dos nossos pilares. Seus dados de localização são processados localmente para fornecer alertas relevantes e só são compartilhados se você ativar explicitamente recursos de rastreamento de emergência para sua equipe ou contatos de confiança."
  },
  {
    question: "O aplicativo funciona offline?",
    answer: "Sim. Os checklists e mapas baixados anteriormente ficam disponíveis offline, garantindo que você tenha acesso aos protocolos essenciais mesmo em áreas sem cobertura de rede."
  },
  {
    question: "Qual a diferença entre o Plano Básico e o PRO?",
    answer: "O Plano Básico (Gratuito e Vitalício) oferece acesso ao Botão SOS, Alarme, Compartilhamento de Localização, Contatos de Emergência e Checklist Manual. O VIGILA PRO inclui tudo do Básico mais Guias de Sobrevivência, Diário de Incidentes, Perfis Especializados e Checklists Inteligentes com sugestões automáticas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-obsidiana min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-pergaminho mb-6">
            Perguntas <span className="text-ouro">Frequentes</span>
          </h1>
          <p className="text-xl text-pergaminho/70">
            Tudo o que você precisa saber sobre a sentinela que cabe no seu bolso.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-ardosia/30 border border-ardosia rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-ardosia/50 transition-colors"
              >
                <span className="text-lg font-bold text-pergaminho">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-ouro" /> : <ChevronDown className="text-pergaminho/40" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-pergaminho/70 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-ouro rounded-3xl text-center">
          <h2 className="text-2xl font-bold text-obsidiana mb-4">Ainda tem dúvidas?</h2>
          <p className="text-obsidiana/80 mb-8">Nossa base de conhecimento está disponível para ajudar você com qualquer questão técnica ou operacional.</p>
          <Link 
            to="/support" 
            className="inline-block px-8 py-3 bg-obsidiana text-pergaminho rounded-full font-bold hover:bg-ardosia transition-colors"
          >
            Ver Documentação
          </Link>
        </div>
      </div>
    </div>
  );
}
