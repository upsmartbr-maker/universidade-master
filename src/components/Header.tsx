"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, MessageCircle, ShieldCheck } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/courses-data";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Cursos", href: "#cursos" },
  { label: "Inscrição", href: "#inscricao" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    "Olá! Gostaria de saber mais sobre os cursos da Universidade Master Educação."
  );

  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-700 text-white text-xs py-1.5 px-4 text-center">
        📞 Atendimento: Seg–Sex 8h–18h | Sáb 8h–12h &nbsp;|&nbsp; ✉️ contato@universidademaster.edu.br
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="#inicio" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-md group-hover:shadow-blue-300 transition-shadow">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-black text-blue-800 tracking-tight leading-none">
                  UNIVERSIDADE
                </p>
                <p className="text-[11px] font-semibold text-blue-600 tracking-widest leading-none uppercase">
                  Master Educação
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/admin"
                className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-700 border border-gray-200 hover:border-blue-300 rounded-lg px-3 py-1.5 transition-all"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Área Administrativa
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md hover:shadow-emerald-200 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-down">
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3 space-y-2 border-t border-gray-100">
                <Link
                  href="/admin"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-2.5 px-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Área Administrativa
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Fale no WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-xl hover:shadow-emerald-300 transition-all hover:scale-110 group"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white text-xs rounded-lg px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Fale no WhatsApp
        </span>
      </a>
    </>
  );
}
