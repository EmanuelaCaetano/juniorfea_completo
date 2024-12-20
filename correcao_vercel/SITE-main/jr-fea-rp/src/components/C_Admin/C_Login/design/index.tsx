import LoginBox from "../login/indext"

export default function LoginDesign () {
    return (
        <>
        <div className="w-full h-full bg-white flex flex-col items-center my-40">
            <h1 className="font-bold text-4xl mb-8 drop-shadow-lg">LOGIN</h1>
            <LoginBox/>
        </div>
        </>
    )
}