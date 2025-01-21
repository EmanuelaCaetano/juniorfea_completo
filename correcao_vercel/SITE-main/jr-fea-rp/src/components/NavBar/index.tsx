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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado do menu em telas menores
  const menuRef = useRef<HTMLUListElement>(null); // Referência para o menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Fecha o menu ao clicar fora ou rolar a tela
  const handleCloseMenu = (event: MouseEvent | Event) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleCloseMenu);
      document.addEventListener("scroll", handleCloseMenu, { passive: true });
    } else {
      document.removeEventListener("mousedown", handleCloseMenu);
      document.removeEventListener("scroll", handleCloseMenu);
    }

    // Cleanup para evitar múltiplos listeners
    return () => {
      document.removeEventListener("mousedown", handleCloseMenu);
      document.removeEventListener("scroll", handleCloseMenu);
    };
  }, [isMobileMenuOpen]);

  // Fecha o menu ao mudar de página
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    deleteCookie("authToken");
    router.push("/admin");
  };

  if (pathname === "/admin") {
    return (
      <header>
        <nav className="relative flex justify-between items-center p-4 bg-black shadow-xl">
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

  if (
    pathname === "/admin/homeAdmin" ||
    pathname === "/admin/adicionarPost" ||
    pathname === "/admin/deletarPost" ||
    pathname === "/admin/editarPost"
  ) {
    return (
      <header>
        <nav className="relative flex justify-between items-center p-4 bg-black shadow-xl">
          <Link href="/">
            <Image
              className="w-[120px] object-cover ml-4 mt-2 mb-2"
              src="/Logo.png"
              width={500}
              height={50}
              alt="Logo da Jr FEA"
            />
          </Link>

          <button
            className="text-white text-6xl p-4 w-16 h-16 flex items-center justify-center"
            onClick={toggleMenu}
          >
            ☰
          </button>

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
        <Link href="/">
          <Image
            className="w-[120px] object-cover ml-4 mt-2 mb-2"
            src="/Logo.png"
            width={500}
            height={50}
            alt="Logo da Jr FEA"
          />
        </Link>

        <button
          className="text-white text-3xl p-2 w-12 h-12 flex items-center justify-center md:hidden"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <ul
            ref={menuRef}
            className="absolute top-16 right-4 bg-black text-white shadow-lg rounded-lg p-4 w-48 space-y-2 border border-gray-700 z-50 md:hidden"
          >
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`block px-4 py-2 hover:bg-gray-800 rounded ${
                    pathname === item.url ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <ul className="hidden md:flex gap-[32px] mr-8 items-center justify-end list-none">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.url} className={`text-white hover:underline ${pathname === item.url ? "font-bold" : ""}`}>
                {item.label}
              </Link>
            </li>
          ))}

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







