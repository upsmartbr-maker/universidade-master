// ============================================================
// lib/legacy-store.ts
// Módulo de persistência e gestão de cursos para o Painel Admin.
// Separado do catálogo oficial (courses-data.ts) para não
// quebrar o painel de gerenciamento enquanto o formulário público
// consome o COURSES_CATALOG diretamente.
// ============================================================

export type CourseCategory =
  | "evolucao-progressao"
  | "aperfeicoamento"
  | "ensino-medio"
  | "tecnico"
  | "sequencial"
  | "tecnologo"
  | "bacharelado"
  | "licenciatura"
  | "pos-graduacao";

export interface AdminCourse {
  id: string;
  category: CourseCategory;
  name: string;
  duration: string;
  workload: string;
  status: "ativo" | "inativo";
  createdAt: string;
}

export interface CategoryInfo {
  id: CourseCategory;
  label: string;
  description: string;
  icon: string;
  color: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "evolucao-progressao",
    label: "Cursos de Evolução / Progressão Funcional",
    description: "Capacitação para crescimento na carreira pública ou privada.",
    icon: "TrendingUp",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "aperfeicoamento",
    label: "Cursos de Aperfeiçoamento ou Atualização",
    description: "Atualização profissional e complementação de competências.",
    icon: "RefreshCw",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "ensino-medio",
    label: "Ensino Médio (Aceleração / EJA)",
    description: "Conclua o Ensino Médio com aceleração e flexibilidade.",
    icon: "BookOpen",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "tecnico",
    label: "Cursos Técnicos",
    description: "Formação técnica profissional reconhecida pelo MEC.",
    icon: "Wrench",
    color: "from-violet-500 to-violet-600",
  },
  {
    id: "sequencial",
    label: "Cursos Sequenciais",
    description: "Formação de nível superior com duração reduzida.",
    icon: "Layers",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "tecnologo",
    label: "Cursos Superiores de Tecnologia (Tecnólogos)",
    description: "Graduação tecnológica com foco prático e mercado de trabalho.",
    icon: "Cpu",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "bacharelado",
    label: "Cursos Superiores de Bacharelado",
    description: "Graduação completa nas mais diversas áreas do conhecimento.",
    icon: "GraduationCap",
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "licenciatura",
    label: "Cursos Superiores de Licenciatura",
    description: "Formação de professores para a educação básica.",
    icon: "Users",
    color: "from-teal-500 to-teal-600",
  },
  {
    id: "pos-graduacao",
    label: "Pós-Graduação e MBA",
    description: "Especialização, MBA e mestrado para líderes do mercado.",
    icon: "Award",
    color: "from-amber-500 to-amber-600",
  },
];

const INITIAL_COURSES: AdminCourse[] = [
  { id: "1", category: "evolucao-progressao", name: "Gestão Pública e Administração", duration: "6 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "2", category: "evolucao-progressao", name: "Docência para Educação Básica", duration: "6 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "3", category: "aperfeicoamento", name: "Educação Especial e Inclusiva", duration: "3 meses", workload: "180h", status: "ativo", createdAt: "2025-01-01" },
  { id: "4", category: "aperfeicoamento", name: "Metodologias Ativas de Ensino", duration: "3 meses", workload: "180h", status: "ativo", createdAt: "2025-01-01" },
  { id: "5", category: "ensino-medio", name: "Ensino Médio Regular (Aceleração)", duration: "12 meses", workload: "1200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "6", category: "tecnico", name: "Técnico em Enfermagem", duration: "18 meses", workload: "1200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "7", category: "tecnico", name: "Técnico em Administração", duration: "12 meses", workload: "800h", status: "ativo", createdAt: "2025-01-01" },
  { id: "8", category: "tecnologo", name: "Análise e Desenvolvimento de Sistemas", duration: "2 anos", workload: "1600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "9", category: "bacharelado", name: "Administração", duration: "4 anos", workload: "3000h", status: "ativo", createdAt: "2025-01-01" },
  { id: "10", category: "bacharelado", name: "Direito", duration: "5 anos", workload: "3700h", status: "ativo", createdAt: "2025-01-01" },
  { id: "11", category: "licenciatura", name: "Pedagogia", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "12", category: "pos-graduacao", name: "MBA em Gestão Empresarial", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
];

const STORAGE_KEY = "ume_admin_courses_v2";

export function loadCourses(): AdminCourse[] {
  if (typeof window === "undefined") return INITIAL_COURSES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_COURSES;
    const parsed = JSON.parse(raw) as AdminCourse[];
    return parsed.length > 0 ? parsed : INITIAL_COURSES;
  } catch {
    return INITIAL_COURSES;
  }
}

export function saveCourses(courses: AdminCourse[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function getCategoryLabel(id: CourseCategory): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

// Re-export as Course alias for backward-compat with context/admin
export type { AdminCourse as Course };
