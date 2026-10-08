// ============================================================
// lib/courses-data.ts
// Módulo central de dados da Universidade Master Educação
// Pronto para integração com Supabase ou API REST
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

export interface Course {
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

// -------------------------------------------------------
// Dados iniciais (fallback rico de cursos pré-cadastrados)
// -------------------------------------------------------
export const INITIAL_COURSES: Course[] = [
  // Evolução / Progressão Funcional
  { id: "1", category: "evolucao-progressao", name: "Gestão Pública e Administração", duration: "6 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "2", category: "evolucao-progressao", name: "Docência para Educação Básica", duration: "6 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "3", category: "evolucao-progressao", name: "Gestão Escolar e Coordenação Pedagógica", duration: "8 meses", workload: "480h", status: "ativo", createdAt: "2025-01-01" },
  { id: "4", category: "evolucao-progressao", name: "Supervisão Educacional", duration: "6 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },

  // Aperfeiçoamento
  { id: "5", category: "aperfeicoamento", name: "Educação Especial e Inclusiva", duration: "3 meses", workload: "180h", status: "ativo", createdAt: "2025-01-01" },
  { id: "6", category: "aperfeicoamento", name: "Metodologias Ativas de Ensino", duration: "3 meses", workload: "180h", status: "ativo", createdAt: "2025-01-01" },
  { id: "7", category: "aperfeicoamento", name: "Libras para Professores", duration: "4 meses", workload: "200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "8", category: "aperfeicoamento", name: "Primeiros Socorros e Segurança do Trabalho", duration: "2 meses", workload: "120h", status: "ativo", createdAt: "2025-01-01" },

  // Ensino Médio
  { id: "9", category: "ensino-medio", name: "Ensino Médio Regular (Aceleração)", duration: "12 meses", workload: "1200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "10", category: "ensino-medio", name: "EJA – Educação de Jovens e Adultos", duration: "8 meses", workload: "800h", status: "ativo", createdAt: "2025-01-01" },

  // Técnicos
  { id: "11", category: "tecnico", name: "Técnico em Enfermagem", duration: "18 meses", workload: "1200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "12", category: "tecnico", name: "Técnico em Administração", duration: "12 meses", workload: "800h", status: "ativo", createdAt: "2025-01-01" },
  { id: "13", category: "tecnico", name: "Técnico em Contabilidade", duration: "12 meses", workload: "800h", status: "ativo", createdAt: "2025-01-01" },
  { id: "14", category: "tecnico", name: "Técnico em Informática", duration: "12 meses", workload: "800h", status: "ativo", createdAt: "2025-01-01" },
  { id: "15", category: "tecnico", name: "Técnico em Segurança do Trabalho", duration: "12 meses", workload: "1000h", status: "ativo", createdAt: "2025-01-01" },
  { id: "16", category: "tecnico", name: "Técnico em Agropecuária", duration: "18 meses", workload: "1200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "17", category: "tecnico", name: "Técnico em Logística", duration: "12 meses", workload: "800h", status: "ativo", createdAt: "2025-01-01" },
  { id: "18", category: "tecnico", name: "Técnico em Meio Ambiente", duration: "12 meses", workload: "800h", status: "ativo", createdAt: "2025-01-01" },
  { id: "19", category: "tecnico", name: "Técnico em Edificações", duration: "18 meses", workload: "1200h", status: "ativo", createdAt: "2025-01-01" },

  // Sequenciais
  { id: "20", category: "sequencial", name: "Gestão de Negócios", duration: "12 meses", workload: "800h", status: "ativo", createdAt: "2025-01-01" },
  { id: "21", category: "sequencial", name: "Comunicação Empresarial", duration: "12 meses", workload: "800h", status: "ativo", createdAt: "2025-01-01" },

  // Tecnólogos
  { id: "22", category: "tecnologo", name: "Análise e Desenvolvimento de Sistemas", duration: "2 anos", workload: "1600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "23", category: "tecnologo", name: "Gestão de Recursos Humanos", duration: "2 anos", workload: "1600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "24", category: "tecnologo", name: "Gestão Financeira", duration: "2 anos", workload: "1600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "25", category: "tecnologo", name: "Marketing Digital", duration: "2 anos", workload: "1600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "26", category: "tecnologo", name: "Logística", duration: "2 anos", workload: "1600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "27", category: "tecnologo", name: "Segurança da Informação", duration: "2 anos", workload: "1600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "28", category: "tecnologo", name: "Gestão da Qualidade", duration: "2 anos", workload: "1600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "29", category: "tecnologo", name: "Redes de Computadores", duration: "2 anos", workload: "1600h", status: "ativo", createdAt: "2025-01-01" },

  // Bacharelado
  { id: "30", category: "bacharelado", name: "Administração", duration: "4 anos", workload: "3000h", status: "ativo", createdAt: "2025-01-01" },
  { id: "31", category: "bacharelado", name: "Direito", duration: "5 anos", workload: "3700h", status: "ativo", createdAt: "2025-01-01" },
  { id: "32", category: "bacharelado", name: "Engenharia Civil", duration: "5 anos", workload: "3600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "33", category: "bacharelado", name: "Ciências Contábeis", duration: "4 anos", workload: "3000h", status: "ativo", createdAt: "2025-01-01" },
  { id: "34", category: "bacharelado", name: "Enfermagem", duration: "5 anos", workload: "4000h", status: "ativo", createdAt: "2025-01-01" },
  { id: "35", category: "bacharelado", name: "Psicologia", duration: "5 anos", workload: "4000h", status: "ativo", createdAt: "2025-01-01" },
  { id: "36", category: "bacharelado", name: "Medicina Veterinária", duration: "5 anos", workload: "4000h", status: "ativo", createdAt: "2025-01-01" },
  { id: "37", category: "bacharelado", name: "Arquitetura e Urbanismo", duration: "5 anos", workload: "3600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "38", category: "bacharelado", name: "Sistema de Informação", duration: "4 anos", workload: "3000h", status: "ativo", createdAt: "2025-01-01" },
  { id: "39", category: "bacharelado", name: "Engenharia Elétrica", duration: "5 anos", workload: "3600h", status: "ativo", createdAt: "2025-01-01" },
  { id: "40", category: "bacharelado", name: "Serviço Social", duration: "4 anos", workload: "3000h", status: "ativo", createdAt: "2025-01-01" },
  { id: "41", category: "bacharelado", name: "Nutrição", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "42", category: "bacharelado", name: "Fisioterapia", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },

  // Licenciatura
  { id: "43", category: "licenciatura", name: "Pedagogia", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "44", category: "licenciatura", name: "Letras – Português", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "45", category: "licenciatura", name: "Matemática", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "46", category: "licenciatura", name: "Ciências Biológicas", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "47", category: "licenciatura", name: "História", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "48", category: "licenciatura", name: "Geografia", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "49", category: "licenciatura", name: "Educação Física", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "50", category: "licenciatura", name: "Filosofia", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "51", category: "licenciatura", name: "Química", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "52", category: "licenciatura", name: "Física", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "53", category: "licenciatura", name: "Artes Visuais", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },
  { id: "54", category: "licenciatura", name: "Música", duration: "4 anos", workload: "3200h", status: "ativo", createdAt: "2025-01-01" },

  // Pós-Graduação
  { id: "55", category: "pos-graduacao", name: "MBA em Gestão Empresarial", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "56", category: "pos-graduacao", name: "MBA em Gestão de Pessoas e Liderança", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "57", category: "pos-graduacao", name: "Pós-Graduação em Direito Tributário", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "58", category: "pos-graduacao", name: "Pós-Graduação em Educação Especial", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "59", category: "pos-graduacao", name: "Pós-Graduação em Psicopedagogia", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "60", category: "pos-graduacao", name: "Especialização em Engenharia de Software", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "61", category: "pos-graduacao", name: "MBA em Marketing e Vendas", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "62", category: "pos-graduacao", name: "Pós-Graduação em Gestão Pública", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "63", category: "pos-graduacao", name: "Especialização em Saúde Pública", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
  { id: "64", category: "pos-graduacao", name: "MBA em Finanças e Controladoria", duration: "18 meses", workload: "360h", status: "ativo", createdAt: "2025-01-01" },
];

const STORAGE_KEY = "ume_courses_v1";

// -------------------------------------------------------
// Funções de persistência (localStorage)
// -------------------------------------------------------
export function loadCourses(): Course[] {
  if (typeof window === "undefined") return INITIAL_COURSES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_COURSES;
    const parsed = JSON.parse(raw) as Course[];
    return parsed.length > 0 ? parsed : INITIAL_COURSES;
  } catch {
    return INITIAL_COURSES;
  }
}

export function saveCourses(courses: Course[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}

export function getCoursesByCategory(
  courses: Course[],
  category: CourseCategory
): Course[] {
  return courses.filter((c) => c.category === category && c.status === "ativo");
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function getCategoryLabel(id: CourseCategory): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

// -------------------------------------------------------
// Utilitário WhatsApp
// -------------------------------------------------------
const WHATSAPP_NUMBER = "5511934737064";

export function buildWhatsAppUrl(text: string): string {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildLeadMessage(data: {
  category: string;
  course: string;
  name: string;
  email: string;
  phone: string;
  modality: string;
}): string {
  return `Olá! Tenho interesse em me matricular na Universidade Master Educação.

*Dados do Interessado:*
👤 Nome: ${data.name}
📧 E-mail: ${data.email}
📱 Telefone: ${data.phone}

*Curso de Interesse:*
📚 Categoria: ${data.category}
🎓 Curso: ${data.course}
⚡ Modalidade: ${data.modality}

Por favor, entre em contato para dar continuidade ao processo de matrícula. Obrigado!`;
}

export { WHATSAPP_NUMBER };
