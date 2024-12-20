import InfoSection2 from "@/components/introducao_4"
import MovimentoEmpresaJunior from "@/components/MovimentoEmpresaJunior"
import MissaoVisaoValores from "@/components/MissaovisaoValores"
import Valores from "@/components/Valores"
import SobreNos from "@/components/sobreNos"
import BlurFade from "@/components/ui/blur-fade"

export default function Sobre(){
    return(
        <div>
            <InfoSection2/>
            
            <BlurFade delay={0.25} inView>
            <SobreNos/>
            </BlurFade>

            <MissaoVisaoValores/>
            <Valores/>

            <BlurFade delay={0.25} inView>
            <MovimentoEmpresaJunior/>
            </BlurFade>

        </div>
    )
}