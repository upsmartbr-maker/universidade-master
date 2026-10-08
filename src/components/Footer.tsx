"use client";

import { GraduationCap, MessageCircle, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/courses-data";
import Link from "next/link";

const CONTACT_INFO = [
  { icon: Phone, label: "Telefone", value: "(11) 9999-9999" },
  { icon: MessageCircle, label: "WhatsApp", value: "(11) 99999-9999" },
  { icon: Mail, label: "E-mail", value: "contato@universidademaster.edu.br" },
  { icon: MapPin, label: "Endereço", value: "Av. Paulista, 1000 – São Paulo, SP" },
  { icon: Clock, label: "Atendimento", value: "Seg–Sex: 8h–18h | Sáb: 8h–12h" },
];

const QUICK_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Nossos Diferenciais", href: "#diferenciais" },
  { label: "Catálogo de Cursos", href: "#cursos" },
  { label: "Simulação e Inscrição", href: "#inscricao" },
  { label: "Fale Conosco", href: "#contato" },
  { label: "Área Administrativa", href: "/admin" },
];

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá! Gostaria de mais informações sobre os cursos da Universidade Master Educação."
  );

  return (
    <footer id="contato" className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-md">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-black text-white leading-none">UNIVERSIDADE</p>
                <p className="text-xs font-semibold text-blue-400 tracking-widest uppercase leading-none">
                  Master Educação
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Formação acadêmica reconhecida, acelerada e com foco no mercado de trabalho.
              Do Técnico ao MBA, com qualidade e agilidade.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Fale no WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) =>
                l.href.startsWith("/") ? (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                      {l.label}
                    </Link>
                  </li>
                ) : (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                      {l.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Contato &amp; Atendimento
            </h4>
            <ul className="space-y-3.5">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                      <p className="text-sm text-gray-300">{item.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Conformidade Acadêmica
            </h4>
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <p className="text-xs font-semibold text-white">Aviso Institucional</p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                A Universidade Master Educação opera em conformidade com as normas do
                Ministério da Educação (MEC) e legislação vigente. Os cursos ofertados
                possuem regularidade acadêmica conforme a modalidade aplicável.
                Verifique as informações de credenciamento junto ao consultor.
              </p>
            </div>

            <div className="mt-4 space-y-2">
              {["Cursos com Aproveitamento Legal", "Reconhecimento Nacional", "Suporte Pedagógico Dedicado"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2025 Universidade Master Educação — Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Desenvolvido com tecnologia de ponta para educação acessível.
          </p>
        </div>
      </div>
    </footer>
  );
}
