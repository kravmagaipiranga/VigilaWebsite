import { motion } from 'motion/react';
import { Eye, ShieldCheck, Compass, Lock, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-obsidiana min-h-screen text-pergaminho">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-ardosia">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ardosia via-obsidiana to-obsidiana -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <img 
              src="https://raw.githubusercontent.com/kravmagaipiranga/vigila/5913bbe85976c4203320be5cf9ec67c3613c752e/Logo.png" 
              alt="Vigila Logo" 
              className="h-32 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(201,168,76,0.2)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8"
          >
            "O problema não é o perigo em si.<br/>
            <span className="text-ouro">É não saber que ele está lá.</span>"
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-pergaminho/70 max-w-2xl mx-auto"
          >
            Uma marca construída sobre a certeza de que quem está informado, está protegido.
          </motion.p>
        </div>
      </section>

      {/* A História */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-ouro font-mono text-sm tracking-widest uppercase mb-4">A Origem</h2>
          <h3 className="text-3xl font-bold mb-8">A história que a marca conta</h3>
          
          <div className="prose prose-invert prose-lg prose-ouro max-w-none text-pergaminho/80 space-y-6">
            <p>
              Existe um momento que todo profissional em campo já viveu. Um silêncio diferente. Uma rua que parece normal, mas não está. Um instinto que fala mais alto que qualquer treinamento — mas que, sem informação, fica mudo.
            </p>
            <p>
              A Vigila nasceu desse exato momento. Não como uma ferramenta de sobrevivência, mas como a inteligência que deveria ter estado ali antes. Um parceiro discreto que conhece o terreno antes que você chegue, que atualiza os números certos quando você muda de país, que lembra o que você precisa verificar quando a urgência embota o raciocínio.
            </p>
            <p>
              O nome vem do latim <em className="text-pergaminho">vigilia</em> — o estado de quem está desperto quando o mundo dorme. Era o termo usado para os soldados em sentinela noturna na Roma Antiga. Quem vigiava não necessariamente entrava em combate. Sua função era ver primeiro.
            </p>
            <p className="text-xl font-medium text-pergaminho border-l-2 border-ouro pl-6 my-8">
              Essa é a promessa da Vigila: você nunca entra no desconhecido sem saber o que te espera. Não porque o perigo deixa de existir — mas porque você já estava pronto antes de chegar.
            </p>
          </div>
        </div>
      </section>

      {/* O que a Vigila representa */}
      <section className="py-24 bg-ardosia/30 border-y border-ardosia">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-ouro font-mono text-sm tracking-widest uppercase mb-4">Nossos Pilares</h2>
            <h3 className="text-3xl font-bold">O que a Vigila representa</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                icon: <Eye className="w-6 h-6 text-ouro" />,
                title: 'Vigilância',
                desc: 'Estado permanente de atenção calibrada. Não paranoia — consciência. A marca não vende medo, vende clareza sobre o ambiente real em que você está inserido.'
              },
              {
                num: '02',
                icon: <ShieldCheck className="w-6 h-6 text-ouro" />,
                title: 'Confiança',
                desc: 'Informação que funciona quando você mais precisa. Cada número, cada risco, cada checklist — testado, atualizado, verificado. A Vigila não erra quando o erro tem consequências.'
              },
              {
                num: '03',
                icon: <Compass className="w-6 h-6 text-ouro" />,
                title: 'Autonomia',
                desc: 'A Vigila não substitui o julgamento humano. Ela o amplia. Dá ao profissional em campo as ferramentas para tomar decisões informadas — e voltar para contar a história.'
              },
              {
                num: '04',
                icon: <Lock className="w-6 h-6 text-ouro" />,
                title: 'Discrição',
                desc: 'A segurança real não anuncia a si mesma. A marca tem presença sem arrogância. É o tipo de app que você abre uma vez — e não precisa explicar para ninguém que está usando.'
              },
              {
                num: '05',
                icon: <Target className="w-6 h-6 text-ouro" />,
                title: 'Precisão',
                desc: 'Não dados genéricos. Não avisos vagos. Informação específica para a sua cidade, bairro, contexto. A precisão é uma forma de respeito.'
              },
              {
                num: '06',
                icon: <Users className="w-6 h-6 text-ouro" />,
                title: 'Presença',
                desc: 'A Vigila existe para que você nunca se sinta sozinho em campo. É a voz calma que sabe o que fazer quando você esquece. O parceiro que não precisa de sinal para agir.'
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-obsidiana p-8 rounded-xl border border-ardosia hover:border-ouro/30 transition-colors relative group">
                <div className="absolute top-8 right-8 text-4xl font-bold text-ardosia group-hover:text-ardosia/80 transition-colors">
                  {pillar.num}
                </div>
                <div className="mb-6">{pillar.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-pergaminho">{pillar.title}</h4>
                <p className="text-pergaminho/60 leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-ouro font-mono text-sm tracking-widest uppercase mb-4">Para Quem</h2>
            <h3 className="text-3xl font-bold">A inteligência que se adapta à sua missão</h3>
            <p className="text-pergaminho/70 mt-4 max-w-2xl mx-auto">
              A Vigila foi desenhada para quem não pode contar com a sorte. Diferentes atuações, o mesmo nível de exigência por segurança e informação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: 'Agente de Segurança', desc: 'Uma camada extra de inteligência situacional, fornecendo checklists inteligentes e diário de incidentes.' },
              { title: 'Professor', desc: 'Para quem atua em áreas de vulnerabilidade e precisa de rotas seguras e consciência do entorno no trajeto diário.' },
              { title: 'Voluntário em ONG', desc: 'Para missões de campo onde a inteligência prévia e os guias de sobrevivência ditam o sucesso e a segurança da operação.' },
              { title: 'Profissional da Saúde', desc: 'Para quem realiza atendimentos domiciliares em áreas complexas, precisando de guias de sobrevivência e checklists focados.' },
              { title: 'Turista', desc: 'Para explorar o desconhecido com a vantagem de quem conhece o terreno como um local. Sem surpresas, apenas a jornada.' },
              { title: 'Figura Pública', desc: 'Para quem lida com temas sensíveis e necessita de discrição absoluta, comunicações seguras e protocolos rígidos.' },
              { title: 'Perfil Genérico', desc: 'Para cidadãos comuns que simplesmente querem se sentir mais seguros no seu dia a dia, com informação precisa e sem paranoia.' },
            ].map((profile, idx) => (
              <div 
                key={idx} 
                className={`bg-ardosia/30 p-6 rounded-xl border border-ardosia hover:border-ouro/30 transition-colors ${
                  profile.title === 'Perfil Genérico' 
                    ? 'md:col-span-2 lg:col-span-3 xl:col-span-4 text-center flex flex-col items-center justify-center py-12' 
                    : ''
                }`}
              >
                <h4 className={`font-bold mb-2 text-ouro ${profile.title === 'Perfil Genérico' ? 'text-2xl mb-4' : 'text-lg'}`}>
                  {profile.title}
                </h4>
                <p className={`text-pergaminho/70 leading-relaxed ${profile.title === 'Perfil Genérico' ? 'text-base max-w-2xl' : 'text-sm'}`}>
                  {profile.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
