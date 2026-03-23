export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-pergaminho mb-8">Política de Privacidade</h1>
      
      <div className="prose prose-invert prose-ouro max-w-none">
        <p className="text-pergaminho/70 mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        
        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">1. Introdução</h2>
        <p className="text-pergaminho/70 mb-6">
          A sua privacidade é importante para nós. É política do VIGILA respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no aplicativo VIGILA e outros sites que possuímos e operamos.
        </p>
        
        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">2. Coleta de Dados</h2>
        <p className="text-pergaminho/70 mb-6">
          Solicitamos informações pessoais, como nome, endereço e localização, apenas quando realmente precisamos delas para lhe fornecer o serviço de monitoramento colaborativo. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
        </p>
        <ul className="list-disc pl-6 text-pergaminho/70 mb-6 space-y-2">
          <li><strong>Localização:</strong> Necessária para enviar alertas relevantes da sua região e permitir o uso do botão de pânico.</li>
          <li><strong>Câmera e Microfone:</strong> Apenas acessados quando você decide compartilhar mídia em um alerta.</li>
          <li><strong>Contatos:</strong> Opcional, para convidar vizinhos para a sua rede.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">3. Uso das Informações</h2>
        <p className="text-pergaminho/70 mb-6">
          As informações coletadas são utilizadas exclusivamente para o funcionamento do aplicativo, como a emissão de alertas de segurança para a sua comunidade local. Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>

        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">4. Segurança</h2>
        <p className="text-pergaminho/70 mb-6">
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>

        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">5. Contato</h2>
        <p className="text-pergaminho/70 mb-6">
          Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através da nossa página de suporte.
        </p>
      </div>
    </div>
  );
}
