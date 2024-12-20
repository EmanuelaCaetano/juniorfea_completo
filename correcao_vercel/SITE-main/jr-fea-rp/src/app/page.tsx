import CarrosselClientes from "@/components/CarrosselClientes";
import {CarrosselClientesCases } from "@/components/CarrosselClientesCases"
import PorQueNosEscolher from "@/components/PorQueNosEscolher";
import SobreJRFEA from "@/components/sobreJRFEA-Home";
import IntroducaoHomePage from "@/components/IntroducaoHomePage";
import { NossoDiferencial } from "@/components/NossoDiferencial";
import Contagem from "@/components/ContagemDados"
import SolucoesHome from "@/components/SolucoesHome"

const cases = [
  {
    logo: '/Coca-logo.png',
    nps: '10',
    challenge: 'Breve descrição sobre o desafio.',
    solution: 'Breve descrição sobre a solução desenvolvida para a empresa.',
  },
];
const clientes = [
  {
    img:
      "/99logo.jpeg",
    name: "Jonatas Bérgamo Olioti",
    cargo: "Diretor de Marketing da Santa Clara Agronegócio",
    descricao: "O nosso projeto de pesquisa de satisfação foi muito bem conduzido e organizado pela equipe da FEA-USP. Recebemos todo o apoio desde o primeiro contato até a entrega final dos relatórios. Tudo de forma clara e dentro dos prazos. Obtivemos excelente resultado com o projeto. Parabéns à todos que estiveram envolvidos."
  },
  {
    img:
      "/danone.png",
    name: "Everton Molina Campos",
    cargo: "Gerente de Marketing e Inteligência Competitiva da Ourofino Agrociência",
    descricao: "Pelo segundo ano consecutivo, buscamos trabalhar com a JÚNIOR FEA-RP na realização de nossa pesquisa de satisfação. O resultado obtido no primeiro ano deixou-nos muito satisfeitos, fazendo com que os procurássemos novamente pelos serviços prestados."
  },
  {
    img:
      "/Coca-logo.png",
      name: "Laura Mendes Fernandes",
      cargo: "Diretora de Marketing da Alpha Records",
      descricao: "A JR FEA foi essencial para aprimorar nossas estratégias de marketing. Com sua expertise, conseguimos aumentar nossa visibilidade e engajamento. A colaboração foi extremamente valiosa e impactou positivamente nossos resultados."
    
  },
  {
    img:"/BFC-logo.png",
    name: "Marcelo Oliveira",
    cargo: "Gerente de Projetos da Silva e Gomes Produções",
    descricao: "Trabalhar com a JR FEA foi transformador. Eles nos ajudaram a otimizar processos internos, aumentando a eficiência e reduzindo custos. Graças à sua abordagem estratégica, superamos nossos desafios com sucesso. Recomendo fortemente a parceria com a JR FEA."
  },
];

export default function Home() {
  const imageUrl = '/Introducao.jpg';
  const pageTitle = 'De sonhos a projetos: O impacto é a nossa marca!';
  const context = 'Há 32 anos trazendo soluções inteligentes, personalizadas e eficientes para nossos clientes.'
  const subTitle = 'Consultoria Empresarial FEA USP Ribeirão Preto'

  return (
    <div className="overflow-hidden">

    <IntroducaoHomePage imgPath={imageUrl} pageTitle={pageTitle} subTitle={subTitle} context={context} />
    
    <SobreJRFEA/>

    <CarrosselClientes />

    <CarrosselClientesCases items={clientes}
          direction="right"
          speed="normal" 
          pauseOnHover={true}/>
          
    <SolucoesHome/>

    <PorQueNosEscolher/>

    <NossoDiferencial/>

    <Contagem/>
    </div>
  );
}
