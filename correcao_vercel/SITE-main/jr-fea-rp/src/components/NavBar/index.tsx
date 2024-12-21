"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { deleteCookie } from "cookies-next";

/**
 * Componente Navbar - Um componente de barra de navegação que muda de layout dependendo da URL atual.
 */
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter(); // Usado para redirecionamento
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null); // Referência para o menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Função para fechar o menu ao clicar fora
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Adiciona o listener de clique fora
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup para evitar múltiplos listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Fecha o menu ao mudar de página
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Função para sair, limpar cookies e redirecionar
  const handleLogout = () => {
    deleteCookie("authToken"); // Remove o token de autenticação
    router.push("/admin"); // Redireciona para a página de login
  };

  // Exibição específica para a rota "/admin"
  if (pathname === "/admin") {
    return (
      <header>
        <nav className="relative flex justify-between items-center p-4 bg-black shadow-xl">
          {/* Logo à esquerda */}
          <Link href="/">
            <Image
              className="w-[120px] object-cover ml-4 mt-2 mb-2"
              src="/Logo.png"
              width={500}
              height={50}
              alt="Logo da Jr FEA"
            />
          </Link>
        </nav>
      </header>
    );
  }

  // Exibição específica para as rotas administrativas
  if (
    pathname === "/admin/homeAdmin" ||
    pathname === "/admin/adicionarPost" ||
    pathname === "/admin/deletarPost" ||
    pathname === "/admin/editarPost"
  ) {
    return (
      <header>
        <nav className="relative flex justify-between items-center p-4 bg-black shadow-xl">
          {/* Logo à esquerda */}
          <Link href="/">
            <Image
              className="w-[120px] object-cover ml-4 mt-2 mb-2"
              src="/Logo.png"
              width={500}
              height={50}
              alt="Logo da Jr FEA"
            />
          </Link>

          {/* Botão do menu hambúrguer */}
          <button
            className="text-white text-6xl p-4 w-16 h-16 flex items-center justify-center"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Menu dropdown */}
          {isMenuOpen && (
            <ul
              ref={menuRef}
              className="absolute top-16 right-4 bg-black text-white shadow-lg rounded-lg p-4 w-48 space-y-2 border border-gray-700 z-50"
            >
              <li>
                <Link href="/admin/adicionarPost" className="block px-4 py-2 hover:bg-gray-800 rounded">
                  Criar Publicação
                </Link>
              </li>
              <li>
                <Link href="/admin/editarPost" className="block px-4 py-2 hover:bg-gray-800 rounded">
                  Editar Postagens
                </Link>
              </li>
              <li>
                <Link href="/admin/deletarPost" className="block px-4 py-2 hover:bg-gray-800 rounded">
                  Deletar Postagens
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-800 rounded"
                >
                  Sair
                </button>
              </li>
            </ul>
          )}
        </nav>
      </header>
    );
  }

  // Exibição padrão para outras rotas
  const items = [
    { url: "/", label: "Júnior FEA - RP" },
    { url: "/sobre", label: "Sobre" },
    { url: "/blog", label: "Blog" },
    { url: "/cases", label: "Cases" },
    { url: "/solucoes", label: "Soluções" },
  ];

  return (
    <header>
      <nav className="flex justify-between items-center p-2 bg-black shadow-xl drop-shadow-lg">
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-[120px] object-cover ml-4 mt-2 mb-2"
            src="/Logo.png"
            width={500}
            height={50}
            alt="Logo da Jr FEA"
          />
        </Link>

        {/* Itens de navegação */}
        <ul className="flex gap-[32px] mr-8 items-center justify-end list-none">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.url} className={`text-white hover:underline ${pathname === item.url ? "font-bold" : ""}`}>
                {item.label}
              </Link>
            </li>
          ))}

          {/* Botão de contato */}
          <li>
            <a
              href="/contato"
              className="bg-corPrimaria text-center flex flex-col justify-center border-white border-solid border-[1px] rounded-3xl w-24 h-10 font-medium text-white hover:scale-110 hover:bg-white hover:text-corPrimaria transition duration-200 ease-in-out"
            >
              Contatar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}






