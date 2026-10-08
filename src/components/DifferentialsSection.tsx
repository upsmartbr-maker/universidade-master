"use client";

import { Zap, Award, Clock, Users, CheckCircle, TrendingUp } from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-50 border-yellow-100",
    title: "Aceleração Real de Formação",
    description:
      "Aproveite disciplinas cursadas anteriormente, competências profissionais comprovadas e reduza drasticamente o tempo para obter seu diploma.",
  },
  {
    icon: Award,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
    title: "Diplomas Reconhecidos",
    description:
      "Formação acadêmica com validade nacional, aceita em concursos públicos, progressões funcionais e planos de carreira.",
  },
  {
    icon: Clock,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    title: "Início Rápido e Flexível",
    description:
      "Ingressos frequentes durante o ano. Modalidade a distância ou semipresencial com total flexibilidade de horários.",
  },
  {
    icon: Users,
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-100",
    title: "Consultoria de Matrícula",
    description:
      "Equipe especializada para analisar seu histórico, identificar aproveitamentos possíveis e montar o plano ideal para seu perfil.",
  },
  {
    icon: CheckCircle,
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-100",
    title: "Transferência e Reingresso Facilitados",
    description:
      "Alunos de outras instituições podem transferir créditos. Quem abandonou os estudos pode retomar com facilidade.",
  },
  {
    icon: TrendingUp,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-100",
    title: "Progressão Funcional Garantida",
    description:
      "Cursos homologados para progressão salarial no serviço público. Ideal para servidores estaduais, municipais e federais.",
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Por que escolher a Universidade Master?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Nossos Diferenciais &amp; Aceleração
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Método acadêmico inovador focado em resultados rápidos, concretos e
            com total validade legal.
          </p>
        </div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group rounded-2xl border p-6 ${item.bg} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight bar */}
        <div className="mt-14 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 text-white text-center shadow-xl">
          <h3 className="text-xl sm:text-2xl font-black mb-3">
            🎓 Do Técnico ao MBA — tudo em um só lugar, com a agilidade que você precisa.
          </h3>
          <p className="text-blue-200 text-base max-w-2xl mx-auto">
            Não perca tempo. Descubra como acelerar sua formação e abrir as portas que você merece.
          </p>
          <a
            href="#inscricao"
            className="mt-6 inline-block bg-white text-blue-800 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow"
          >
            Simular Agora Gratuitamente
          </a>
        </div>
      </div>
    </section>
  );
}
