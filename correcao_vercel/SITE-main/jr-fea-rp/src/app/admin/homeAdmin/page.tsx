import IntroducaoHomePage from "@/components/IntroducaoHomePage";

export default function HomeAdmin() {
  const imageUrl = '/Introducao.jpg';
  const pageTitle = 'De sonhos a projetos: O impacto é a nossa marca!';
  const context = 'Ambiente de gerenciamento de postagens Blog.'
  const subTitle = 'Consultoria Empresarial FEA USP Ribeirão Preto'

  return (
    <div className="overflow-hidden">

    <IntroducaoHomePage imgPath={imageUrl} pageTitle={pageTitle} subTitle={subTitle} context={context} />
    
    </div>
  );
}