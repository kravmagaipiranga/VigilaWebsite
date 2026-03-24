import { motion } from 'motion/react';
import { Shield, BookOpen, Lock, MapPin, Smartphone, ArrowRight, CheckCircle2, ShieldAlert, Star, Mic, ListChecks, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ardosia via-obsidiana to-obsidiana -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-ouro/10 text-ouro text-sm font-medium mb-6 border border-ouro/20">
                <span className="flex h-2 w-2 rounded-full bg-ouro mr-2 animate-pulse"></span>
                Inteligência de campo, onde o campo é.
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-pergaminho tracking-tight mb-6 leading-tight">
                Você olha.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ouro to-ouro/70">Vigila vê.</span>
              </h1>
              <p className="text-xl text-pergaminho/70 mb-8 max-w-2xl mx-auto lg:mx-0">
                Não muda o risco. Muda a sua preparação. A sentinela que cabe no bolso para profissionais de alto risco, ONGs de proteção e jornalistas investigativos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#download" className="w-full sm:w-auto px-8 py-4 bg-ouro hover:bg-ouro/80 text-obsidiana rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] flex items-center justify-center">
                  Pronto antes de precisar <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-ardosia hover:bg-ardosia/80 text-pergaminho rounded-full font-medium text-lg transition-colors border border-ardosia flex items-center justify-center">
                  Conhecer a Vigila
                </a>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start space-x-4 text-sm text-pergaminho/60">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-obsidiana grayscale" src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                  ))}
                </div>
                <p>Porque voltar é parte da missão.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              {/* Mockup do App */}
              <div className="relative rounded-[2.5rem] border-[8px] border-ardosia bg-obsidiana shadow-2xl overflow-hidden aspect-[9/19] max-h-[600px] mx-auto w-[280px] sm:w-[320px]">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-ardosia rounded-b-3xl w-40 mx-auto z-20"></div>
                
                {/* App Content Mockup */}
                <div className="absolute inset-0 bg-obsidiana flex flex-col">
                  <div className="bg-ouro pt-12 pb-6 px-6 rounded-b-3xl shadow-lg relative z-10 flex justify-between items-center">
                    <div>
                      <h3 className="text-obsidiana font-bold text-xl mb-1">Olá, Usuário</h3>
                      <p className="text-obsidiana/80 text-sm flex items-center font-medium"><Shield className="w-3 h-3 mr-1" /> Status: Protegido</p>
                    </div>
                    <div className="bg-obsidiana/20 px-2 py-1 rounded text-xs font-bold text-obsidiana flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" /> PRO
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                    {/* Alerta Mockup */}
                    <div className="bg-ardosia rounded-2xl p-4 border border-ardosia/50 shadow-sm">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-ouro/20 flex items-center justify-center text-ouro">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-pergaminho text-sm font-semibold">Alerta de Zona</p>
                            <p className="text-pergaminho/60 text-xs">Precisão: Alta</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-pergaminho/80 text-sm mt-2">Atividade incomum detectada na rota principal. Sugerimos desvio pelo corredor leste.</p>
                    </div>
                    
                    <div className="bg-ardosia rounded-2xl p-4 border border-ardosia/50 shadow-sm opacity-70">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-ciano/20 flex items-center justify-center text-ciano">
                            <Lock className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-pergaminho text-sm font-semibold">Perfil de Segurança</p>
                            <p className="text-pergaminho/60 text-xs">Ativo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botão de Pânico Mockup */}
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
                    <div className="w-20 h-20 bg-alerta rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,26,26,0.5)] border-4 border-obsidiana animate-pulse">
                      <ShieldAlert className="w-8 h-8 text-pergaminho" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-20 -left-12 bg-ardosia p-4 rounded-xl border border-ardosia/50 shadow-xl hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-ouro/20 flex items-center justify-center text-ouro">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-pergaminho text-sm font-bold">Verificado</p>
                    <p className="text-pergaminho/60 text-xs">Dados atualizados</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-obsidiana">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-ouro font-semibold tracking-wide uppercase text-sm mb-2">Principais Funcionalidades</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-pergaminho mb-4">O seu parceiro tático para o dia a dia</h3>
            <p className="text-pergaminho/70 text-lg">
              Desenvolvido para antecipar riscos e agir rápido em emergências. A prevenção é a sua melhor arma.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldAlert className="w-8 h-8 text-ouro" />,
                title: 'Botão SOS & Alarme',
                desc: 'Acesso imediato à sua rede de apoio. Acione um alarme sonoro de alta intensidade para afastar ameaças ou envie alertas silenciosos.'
              },
              {
                icon: <MapPin className="w-8 h-8 text-ouro" />,
                title: 'Localização e Rastreamento',
                desc: 'Obtenha suas coordenadas exatas (GPS) e compartilhe sua localização em tempo real com contatos de confiança em um clique.'
              },
              {
                icon: <Mic className="w-8 h-8 text-ouro" />,
                title: 'Gravação de Áudio Discreta',
                desc: 'Inicie uma gravação de áudio em segundo plano para registrar evidências de situações de risco sem chamar atenção.'
              },
              {
                icon: <ListChecks className="w-8 h-8 text-ouro" />,
                title: 'Checklists de Segurança',
                desc: 'Crie rotinas de verificação para sua casa, veículo ou viagens. A prevenção é a sua melhor arma.'
              },
              {
                icon: <BookOpen className="w-8 h-8 text-ouro" />,
                title: 'Guias de Sobrevivência (PRO)',
                desc: 'Manuais táticos completos sobre como agir em desastres, emergências médicas, assaltos e situações de crise.'
              },
              {
                icon: <Users className="w-8 h-8 text-ouro" />,
                title: 'Rede de Apoio',
                desc: 'Tenha os números de emergência oficiais (Polícia, Bombeiros, Hospitais) e seus contatos pessoais a um toque de distância.'
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-ardosia p-8 rounded-2xl border border-ardosia/50 hover:border-ouro/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-obsidiana rounded-xl flex items-center justify-center mb-6 group-hover:bg-ouro/10 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-pergaminho mb-3">{feature.title}</h4>
                <p className="text-pergaminho/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-ardosia">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-ouro font-semibold tracking-wide uppercase text-sm mb-2">Vigilância Ativa</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-pergaminho mb-6">O parceiro que não precisa de sinal para agir.</h3>
              
              <div className="space-y-8 mt-10">
                {[
                  { step: '01', title: 'Consciência Situacional', desc: 'Compartilhamento de localização em tempo real e acesso imediato à sua rede de apoio.' },
                  { step: '02', title: 'Checklists Verificados', desc: 'Protocolos de segurança atualizados para diferentes cenários, de coberturas jornalísticas a missões humanitárias.' },
                  { step: '03', title: 'Comunicação Silenciosa', desc: 'Alertas silenciosos e gravação de áudio discreta para registrar evidências sem chamar atenção indesejada.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-ouro/20 flex items-center justify-center border border-ouro/30">
                        <span className="text-ouro font-bold">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-pergaminho mb-2">{item.title}</h4>
                      <p className="text-pergaminho/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-ouro/20 to-transparent rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1554208501-39f1cd34e7fc?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Pessoa com mochila atenta em centro urbano" 
                className="relative rounded-3xl border border-ardosia shadow-2xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay card */}
              <div className="absolute -bottom-6 -left-6 bg-obsidiana p-6 rounded-2xl border border-ardosia shadow-xl max-w-xs">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-ouro rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-obsidiana fill-current" />
                  </div>
                  <div>
                    <p className="text-pergaminho font-bold">Confiança</p>
                    <p className="text-ouro text-sm">Informação verificada</p>
                  </div>
                </div>
                <p className="text-pergaminho/70 text-sm">"A Vigila não erra quando o erro tem consequências. É a inteligência que deveria ter estado ali antes."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 bg-ouro relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-obsidiana mb-6">Pronto antes de precisar.</h2>
          <p className="text-obsidiana/80 font-medium text-xl mb-10 max-w-2xl mx-auto">
            A Vigila não substitui o julgamento humano. Ela o amplia. Tenha as ferramentas para tomar decisões informadas e voltar para contar a história.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-obsidiana hover:bg-ardosia text-pergaminho rounded-xl font-bold text-lg transition-colors flex items-center justify-center shadow-xl">
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.68 3.64 1.84-3.03 1.89-2.52 5.92.48 7.15-.71 1.69-1.52 3.19-2.79 3.94zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-obsidiana hover:bg-ardosia text-pergaminho rounded-xl font-bold text-lg transition-colors flex items-center justify-center shadow-xl">
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.98 1.98 0 0 1-.505-1.328V3.142c0-.51.18-.973.504-1.328zM14.5 12.708L17.21 15.42l-12.28 7.09c-.27.155-.58.24-.9.24a1.98 1.98 0 0 1-.926-.226l11.396-9.816zm0-1.416L3.104 1.476a1.98 1.98 0 0 1 .926-.226c.32 0 .63.085.9.24l12.28 7.09-2.71 2.712zm3.416 2.002l2.69-1.553a1.98 1.98 0 0 0 0-3.438l-2.69-1.553-3.416 3.416 3.416 3.416z"/>
              </svg>
              Google Play
            </button>
          </div>
          <p className="mt-8 text-obsidiana/70 font-medium text-sm">A sentinela que cabe no bolso.</p>
        </div>
      </section>
    </div>
  );
}
