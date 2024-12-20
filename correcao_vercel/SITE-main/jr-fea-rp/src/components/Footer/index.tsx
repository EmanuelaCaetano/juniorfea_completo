import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-4 py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start justify-between">
          {/* Logo */}
          <div className="w-32 sm:w-40 mr-8 mb-4">
            <div className="relative w-full pb-[100%]">
              <Image
                src="/Logo.png"
                alt="JF Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>


          {/* Links Column */}
          <div className="mr-auto pl-32">
            <h2 className="text-lg font-semibold mb-2">Links</h2>
            <ul className="space-y-1 text-sm">
              <li><Link href="/sobre" className="hover:text-gray-300 transition-colors">Sobre</Link></li>
              <li><Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
              <li><Link href="/cases" className="hover:text-gray-300 transition-colors">Cases</Link></li>
              <li><Link href="/duvidas" className="hover:text-gray-300 transition-colors">Dúvidas</Link></li>
              <li><Link href="/soluções" className="hover:text-gray-300 transition-colors">Soluções</Link></li>
              <li><Link href="/contato" className="hover:text-gray-300 transition-colors">Contato</Link></li>
            </ul>
          </div>

           {/* Social and Address */}
           <div className="text-right mt-8 pt-8">
            <div className="flex justify-end space-x-6 mb-3">
              <Link href="https://www.facebook.com/juniorfearp/" className="hover:text-gray-300 transition-colors">
                <FaFacebook className="w-10 h-10" /></Link>

              <Link href="https://www.instagram.com/junior_fearp/?igshid=xx3r4i3o7o1h" className="hover:text-gray-300 transition-colors">
                <FaInstagram className="w-10 h-10" /></Link>

              <Link href="https://www.linkedin.com/in/juniorfea/" className="hover:text-gray-300 transition-colors">
                <FaLinkedin className="w-10 h-10" /></Link>
                
              <Link href="https://api.whatsapp.com/send?phone=5519991605488&text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Junior%20FEA" className="hover:text-gray-300 transition-colors">
                <FaWhatsapp className="w-10 h-10" />
                
              </Link>
            </div>
            <address className="text-sm not-italic">
              Rua das Paineiras, 09 - Campus USP<br />
              Ribeirão Preto - SP
            </address>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-zinc-800 text-xs text-center">
          <p>Copyright 2022 | Junior FEA-RP</p>
        </div>
      </div>
    </footer>
  )
}