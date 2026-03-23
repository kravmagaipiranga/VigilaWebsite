import { Mail, MessageSquare, FileText, Phone } from 'lucide-react';

export default function Support() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-pergaminho mb-6">Como podemos ajudar?</h1>
        <p className="text-xl text-pergaminho/70">
          Nossa equipe está pronta para resolver suas dúvidas e garantir que você tenha a melhor experiência com o VIGILA.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { icon: <FileText className="w-6 h-6" />, title: 'Base de Conhecimento', desc: 'Artigos e tutoriais detalhados' },
          { icon: <MessageSquare className="w-6 h-6" />, title: 'Chat ao Vivo', desc: 'Fale com um especialista agora' },
          { icon: <Mail className="w-6 h-6" />, title: 'E-mail', desc: 'suporte@vigila.app' },
          { icon: <Phone className="w-6 h-6" />, title: 'Telefone', desc: '0800 123 4567' },
        ].map((item, idx) => (
          <div key={idx} className="bg-ardosia p-6 rounded-2xl border border-ardosia/50 hover:border-ouro/50 transition-colors text-center">
            <div className="w-12 h-12 bg-ouro/10 text-ouro rounded-full flex items-center justify-center mx-auto mb-4">
              {item.icon}
            </div>
            <h3 className="text-pergaminho font-bold mb-2">{item.title}</h3>
            <p className="text-pergaminho/70 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-obsidiana rounded-3xl border border-ardosia p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-pergaminho mb-8 text-center">Envie uma mensagem</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-pergaminho/70 mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-ardosia border border-ardosia/50 rounded-xl px-4 py-3 text-pergaminho focus:outline-none focus:ring-2 focus:ring-ouro focus:border-transparent"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-pergaminho/70 mb-2">E-mail</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-ardosia border border-ardosia/50 rounded-xl px-4 py-3 text-pergaminho focus:outline-none focus:ring-2 focus:ring-ouro focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-pergaminho/70 mb-2">Assunto</label>
            <select 
              id="subject" 
              className="w-full bg-ardosia border border-ardosia/50 rounded-xl px-4 py-3 text-pergaminho focus:outline-none focus:ring-2 focus:ring-ouro focus:border-transparent"
            >
              <option>Dúvida sobre o aplicativo</option>
              <option>Problema técnico</option>
              <option>Sugestão de melhoria</option>
              <option>Denúncia de usuário</option>
              <option>Outros</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-pergaminho/70 mb-2">Mensagem</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-ardosia border border-ardosia/50 rounded-xl px-4 py-3 text-pergaminho focus:outline-none focus:ring-2 focus:ring-ouro focus:border-transparent resize-none"
              placeholder="Como podemos ajudar?"
            ></textarea>
          </div>
          <button 
            type="button"
            className="w-full bg-ouro hover:bg-ouro/80 text-obsidiana font-bold py-4 rounded-xl transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
