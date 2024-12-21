"use client";

import { signInWithEmailAndPassword, User } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../../utils/firebaseConfig";
import { useRouter } from "next/navigation"; // Usar para redirecionamento no Next.js App Router
import { setCookie } from "cookies-next"; // Para armazenar o token em um cookie

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter(); // Instância do roteador do Next.js

  const handleLogin = async () => {
    try {
      // Autenticação com Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Obter o token do usuário
      const token = await user.getIdToken();

      // Armazenar o token no cookie
      setCookie("authToken", token, {
        maxAge: 30 * 24 * 60 * 60, // Expiração em 30 dias
        path: "/", // Disponível em todas as rotas
      });

      // Salvar informações adicionais do usuário, se necessário
      setUser(user);
      setError("");

      // Redirecionar para /adminHome
      router.push("/admin/homeAdmin");
    } catch (error) {
      setError("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="bg-white border-2 border-corPrimaria w-[700px] h-[600px] rounded-lg flex flex-col items-center text-corPrimaria font-bold">
      {/* EMAIL USUÁRIO */}
      <div className="w-full h-[100px] flex flex-col justify-center mt-8 px-8">
        <label className="text-corPrimaria font-bold text-xl mb-2">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 text-corPrimaria border-2 border-corPrimaria rounded-lg w-full h-[60px]"
        ></input>
      </div>

      {/* Senha USUÁRIO */}
      <div className="w-full h-[100px] flex flex-col justify-center mt-8 px-8">
        <label className="text-corPrimaria font-bold text-xl mb-2">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 text-corPrimaria border-2 border-corPrimaria rounded-lg w-full h-[60px]"
        ></input>
      </div>

      <button
        onClick={handleLogin}
        className="border-2 border-corPrimaria p-4 rounded-lg w-[250px] my-16 hover:bg-corPrimaria hover:text-white hover:scale-110 duration-500 font-extrabold drop-shadow-lg"
      >
        ENTRAR
      </button>
      {error && <p>{error}</p>}
      {user && <p>Bem-vindo, {user.email}</p>}
    </div>
  );
};

export default LoginBox;

