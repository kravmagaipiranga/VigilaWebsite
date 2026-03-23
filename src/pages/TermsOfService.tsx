export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-pergaminho mb-8">Termos de Uso</h1>
      
      <div className="prose prose-invert prose-ouro max-w-none">
        <p className="text-pergaminho/70 mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        
        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">1. Aceitação dos Termos</h2>
        <p className="text-pergaminho/70 mb-6">
          Ao acessar e usar o aplicativo VIGILA, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este aplicativo.
        </p>
        
        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">2. Uso da Licença</h2>
        <p className="text-pergaminho/70 mb-6">
          É concedida permissão para baixar temporariamente uma cópia do aplicativo VIGILA para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
        </p>
        <ul className="list-disc pl-6 text-pergaminho/70 mb-6 space-y-2">
          <li>Modificar ou copiar os materiais;</li>
          <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
          <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no VIGILA;</li>
          <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
          <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">3. Uso Adequado</h2>
        <p className="text-pergaminho/70 mb-6">
          O VIGILA é uma ferramenta de segurança colaborativa. Você concorda em usar o aplicativo de forma responsável, não emitindo alertas falsos, não assediando outros usuários e não utilizando a plataforma para fins ilegais ou não relacionados à segurança da comunidade. O abuso da plataforma resultará no banimento permanente da conta.
        </p>

        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">4. Limitações</h2>
        <p className="text-pergaminho/70 mb-6">
          O VIGILA é uma ferramenta de auxílio e não substitui os serviços de emergência oficiais (Polícia, Bombeiros, SAMU). Em caso de emergência real, sempre contate as autoridades competentes primeiro. O VIGILA não garante a resposta imediata de outros usuários ou autoridades aos alertas emitidos no aplicativo.
        </p>

        <h2 className="text-2xl font-semibold text-pergaminho mt-10 mb-4">5. Modificações</h2>
        <p className="text-pergaminho/70 mb-6">
          O VIGILA pode revisar estes termos de serviço do aplicativo a qualquer momento, sem aviso prévio. Ao usar este aplicativo, você concorda em ficar vinculado à versão atual desses termos de serviço.
        </p>
      </div>
    </div>
  );
}
