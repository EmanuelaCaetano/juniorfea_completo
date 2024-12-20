import SolucaoMarketing from '@/components/SolucoesMarketing';

import ModeloSolucaoFinanceira from '@/components/SolucoesPlanosFinanceiros';
import ModeloSolucaoEmpreendedorismo from '@/components/SolucoesEmpreendedorismo';
import ModeloSolucaoProcessosOrganizacionais from '@/components/SolucoesProcessosOrganizacionais';
import CartoesVisaoResultadoAcertividade from '@/components/CartoesVisaoResultadoAcertividade';
import IntroSection from '@/components/introducao_1';
import RedLine from '@/components/BordaIntroducao'
import BlurFade from "@/components/ui/blur-fade";

export default function solucoes() {
    return (
      <>
        <div>
        <IntroSection/>
        <BlurFade delay={0.25} inView>
        <SolucaoMarketing/> 
        </BlurFade>
        <BlurFade delay={0.25} inView>
        <ModeloSolucaoEmpreendedorismo/>
        </BlurFade>
        <BlurFade delay={0.25} inView>
        <ModeloSolucaoFinanceira/>
        </BlurFade>
        <BlurFade delay={0.25} inView>
        <ModeloSolucaoProcessosOrganizacionais/>
        </BlurFade>
        </div>
      </>
    );
  }