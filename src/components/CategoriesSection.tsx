"use client";

import {
  TrendingUp, RefreshCw, BookOpen, Wrench, Layers,
  Cpu, GraduationCap, Users, Award
} from "lucide-react";
import { CATEGORIES } from "@/lib/legacy-store";
import { useCourses } from "@/contexts/CoursesContext";

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp, RefreshCw, BookOpen, Wrench, Layers,
  Cpu, GraduationCap, Users, Award,
};

export default function CategoriesSection() {
  const { getCategoryCount } = useCourses();

  return (
    <section id="cursos" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Catálogo Completo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Todos os Níveis de Formação
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Da aceleração do Ensino Médio ao MBA. Encontre a formação ideal para
            o seu momento de carreira.
          </p>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, index) => {
            const Icon = ICON_MAP[cat.icon] ?? GraduationCap;
            const count = getCategoryCount(cat.id);

            return (
              <a
                key={cat.id}
                href="#inscricao"
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-700 transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                        {count} {count === 1 ? "curso" : "cursos"} disponíveis
                      </span>
                      <span className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors font-medium">
                        Ver opções →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#inscricao"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-blue-200 transition-all"
          >
            <GraduationCap className="w-5 h-5" />
            Quero Me Inscrever Agora
          </a>
        </div>
      </div>
    </section>
  );
}
