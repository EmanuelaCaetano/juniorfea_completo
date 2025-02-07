import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 pt-20 pb-4 relative">
      {/* Imagem de fundo no topo */}
      <div className="absolute top-0 left-0 w-full h-16">
        <Image
          src="/detalhes-vermelhos.png"
          alt="Detalhes vermelhos"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="container mx-auto flex flex-col items-center text-center px-10 md:text-left md:flex-row md:items-start justify-between px-6 relative z-10">
        
        {/* Logo */}
        <div className="mb-6 md:mb-0 flex flex-col items-center pb-10">
          <Image src="/Logo.png" alt="Logo" width={200} height={200} />
          <p className="text-sm mt-2 pt-3">&copy; 2022 Júnior FEA-RP</p>
        </div>

        {/* Links Úteis */}
        <div className="w-full md:w-auto text-left pb-10 px-5">
          <h1 className="text-3xl font-bold mb-5">Links Úteis</h1>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-gray-300"> &gt; Home</Link></li>
            <li><Link href="/sobre" className="hover:text-gray-300">&gt; Sobre Nós</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300">&gt; Blog</Link></li>
            <li><Link href="/cases" className="hover:text-gray-300">&gt; Cases</Link></li>
            <li><Link href="/duvidas" className="hover:text-gray-300">&gt; Dúvidas</Link></li>
            <li><Link href="/contato" className="hover:text-gray-300">&gt; Contato</Link></li>
          </ul>
        </div>

        {/* Soluções */}
        <div className="w-full md:w-auto text-left pb-10 px-5">
          <h1 className="text-3xl font-bold mb-5">Soluções</h1>
          <ul className="space-y-1">
            <li><Link href="/ModeloSolucao?titulo=Marketing&descricao=Destaque-se+no+mercado+com+estrat%C3%A9gias+inovadoras%21&definicao=Abordagens+inteligentes+para+atrair+e+fidelizar+clientes.&beneficios=Maior+engajamento+e+visibilidade.&impacto=Crescimento+sustent%C3%A1vel+e+reconhecimento+da+marca.&leftTitle=Branding&leftContent=Constru%C3%A7%C3%A3o+de+identidade+e+posicionamento+da+marca.&centerTitle=Engajamento+Digital&centerContent=Estrat%C3%A9gias+para+redes+sociais+e+campanhas+online.&rightTitle=Convers%C3%A3o+de+Leads&rightContent=T%C3%A1ticas+para+transformar+visitantes+em+clientes." className="hover:text-gray-300">&gt; Marketing</Link></li>
            <li><Link href="/ModeloSolucao?titulo=Estrat%C3%A9gia&descricao=Planejamento+estrat%C3%A9gico+para+impulsionar+resultados%21&definicao=Desenvolvimento+de+a%C3%A7%C3%B5es+estrat%C3%A9gicas+baseadas+em+an%C3%A1lise+de+mercado.&beneficios=Melhor+posicionamento+e+competitividade.&impacto=Decis%C3%B5es+mais+assertivas+e+estruturadas.&leftTitle=An%C3%A1lise+SWOT&leftContent=Identifica%C3%A7%C3%A3o+de+pontos+fortes%2C+fracos%2C+oportunidades+e+amea%C3%A7as.&centerTitle=Defini%C3%A7%C3%A3o+de+Metas&centerContent=Objetivos+claros+e+mensur%C3%A1veis+para+crescimento+sustent%C3%A1vel.&rightTitle=Implementa%C3%A7%C3%A3o+Estrat%C3%A9gica&rightContent=Plano+de+a%C3%A7%C3%A3o+para+alcan%C3%A7ar+as+metas+definidas." className="hover:text-gray-300">&gt; Estratégia</Link></li>
            <li><Link href="/ModeloSolucao?titulo=Financeiro&descricao=Gest%C3%A3o+financeira+eficiente+para+seu+neg%C3%B3cio%21&definicao=An%C3%A1lise+detalhada+dos+custos+e+viabilidade+econ%C3%B4mica+para+otimizar+recursos.&beneficios=Maior+controle+e+planejamento+financeiro.&impacto=Sustentabilidade+econ%C3%B4mica+e+crescimento+previs%C3%ADvel.&leftTitle=Controle+de+Gastos&leftContent=Ferramentas+para+monitorar+despesas+e+receitas+com+precis%C3%A3o.&centerTitle=Planejamento+Or%C3%A7ament%C3%A1rio&centerContent=Estrat%C3%A9gias+para+aloca%C3%A7%C3%A3o+eficiente+de+recursos.&rightTitle=Investimentos+Inteligentes&rightContent=Sugest%C3%B5es+de+aplica%C3%A7%C3%B5es+financeiras+para+crescimento+sustent%C3%A1vel" className="hover:text-gray-300">&gt; Financeiro</Link></li>
            <li><Link href="/ModeloSolucao?titulo=Pesquisa&descricao=Compreenda+seu+mercado+e+melhore+sua+tomada+de+decis%C3%B5es%21&definicao=Coleta+e+an%C3%A1lise+de+dados+para+insights+estrat%C3%A9gicos.&beneficios=Decis%C3%B5es+mais+embasadas+e+redu%C3%A7%C3%A3o+de+riscos.&impacto=Maior+competitividade+e+adapta%C3%A7%C3%A3o+ao+mercado.&leftTitle=An%C3%A1lise+de+Dados&leftContent=Interpreta%C3%A7%C3%A3o+de+m%C3%A9tricas+para+insights+estrat%C3%A9gicos.&centerTitle=Pesquisa+de+Satisfa%C3%A7%C3%A3o&centerContent=Identifica%C3%A7%C3%A3o+de+pontos+de+melhoria+no+atendimento+e+produtos.&rightTitle=Comportamento+do+Consumidor&rightContent=Estudo+de+h%C3%A1bitos+e+prefer%C3%AAncias+para+melhor+posicionamento+de+mercado." className="hover:text-gray-300">&gt; Pesquisa</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="w-full md:w-auto text-left px-5">
          <h1 className="text-3xl font-bold mb-5">Contato</h1>

       
        <div className="grid grid-cols-2 gap-1 md:flex md:flex-col md:items-left md:space-x-0 md:space-y-4 md:pt-20">
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <Link href="https://www.facebook.com/juniorfearp/" className="hover:text-gray-300 transition-colors">
              <FaFacebook className="w-8 h-8" /></Link>

            <Link href="https://www.instagram.com/junior_fearp/?igshid=xx3r4i3o7o1h" className="hover:text-gray-300 transition-colors">
              <FaInstagram className="w-8 h-8" /></Link>

            <Link href="https://www.linkedin.com/in/juniorfea/" className="hover:text-gray-300 transition-colors">
              <FaLinkedin className="w-8 h-8" /></Link>
      
            <Link href="https://api.whatsapp.com/send?phone=5519991605488&text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Junior%20FEA" className="hover:text-gray-300 transition-colors">
              <FaWhatsapp className="w-8 h-8" /></Link>
          </div>
          <p className="text-base text-left md:text-left">
            Rua das Palmeiras, 09 - Campus USP<br />Ribeirão Preto - SP
          </p>
  
        </div>
        </div>
      </div>
    </footer>
  );
}
