import { Headphones, Heart, AlertCircle, User, Scale } from "lucide-react"

export default function Valores(){
    const values = [
        {
          icon: Headphones,
          title: "Foco no Cliente",
          borderColor: "border-corPrimaria",
        },
        {
          icon: Heart,
          title: "Sentimento de Dono",
          borderColor: "border-corPrimaria",
        },
        {
          icon: AlertCircle,
          title: "Inconformismo",
          borderColor: "border-corPrimaria",
        },
        {
          icon: User,
          title: "Profissionalismo",
          borderColor: "border-corPrimaria",
        },
        {
          icon: Scale,
          title: "Ética e Transparência",
          borderColor: "border-corPrimaria",
        },
      ]
    
      return (
        <div className="px-4 py-16 mx-auto max-w-7xl">
          <h2 className="text-4xl font-medium text-center text-corPrimaria mb-12">Valores</h2>
          <div className=" grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
            <div key={index} className="  pt-8  flex flex-col items-center content-center justify-center">
              <div
                className={`group w-40 h-60 p-6 rounded-[20px] border-2 ${value.borderColor} flex flex-col items-center  content-center  justify-center min-h-[200px] transition-transform transition-colors duration-300 ease-in-out hover:bg-corPrimaria  hover:scale-105 drop-shadow-lg shadow-xl`}
              >
                <value.icon className="w-12 h-12 text-corPrimaria mb-4 transition-colors duration-300 ease-in-out group-hover:text-white" />
              </div>
              
                <h3 className="pt-8 text-center text-corPrimaria text-2xl font-bold ">{value.title}</h3>
            </div>
            ))}
          </div>
        </div>
      ) 
}