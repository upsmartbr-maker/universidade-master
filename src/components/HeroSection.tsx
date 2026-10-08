"use client";

import { MessageCircle, BookOpen, Zap, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/courses-data";

const ACCELERATION_BADGES = [
  { label: "Aproveitamento de Estudos e Disciplinas", icon: "📋" },
  { label: "Formação por Competência", icon: "⭐" },
  { label: "Regime de Dependência / Aceleração / CH Excedente", icon: "⚡" },
  { label: "Reingresso e Transferência Facilitada", icon: "🔄" },
  { label: "Aproveitamento de Técnico para Graduação", icon: "🎓" },
];

const STATS = [
  { value: "64+", label: "Cursos Disponíveis" },
  { value: "9", label: "Modalidades de Ensino" },
  { value: "100%", label: "Reconhecimento" },
  { value: "Rápido", label: "Início de Atividades" },
];

export default function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá! Quero saber mais sobre aceleração e aproveitamento de estudos na Universidade Master Educação."
  );

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-blue-100 mb-8">
            <Zap className="w-4 h-4 text-yellow-300" />
            Aceleração Acadêmica Reconhecida &amp; Comprovada
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
            Acelere seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">
              Futuro Profissional
            </span>{" "}
            com Formação Reconhecida e Rápida
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
            Obtenha seu tão sonhado <strong className="text-white">Curso Técnico, Superior ou Pós-Graduação</strong>.
            Insira-se rapidamente no mercado de trabalho ou preste aquele concurso público dos seus sonhos
            com nossa metodologia de aceleração acadêmica única.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#inscricao"
              className="group flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all text-base w-full sm:w-auto justify-center"
            >
              <BookOpen className="w-5 h-5" />
              Simular / Escolher Meu Curso
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-emerald-400/30 transition-all text-base w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Consultor via WhatsApp
            </a>
          </div>

          {/* Acceleration badges */}
          <div className="mb-12">
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
              Modalidades de Aceleração Disponíveis
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {ACCELERATION_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors"
                >
                  <span>{badge.icon}</span>
                  <span className="font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-5 hover:bg-white/15 transition-colors"
              >
                <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-blue-200 text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="fill-[#F8FAFC] w-full block -mb-px" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
