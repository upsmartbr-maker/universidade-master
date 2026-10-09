export interface Course {
  name: string;
  duration?: string;
  workload?: string;
  area?: string;
}

export const COURSES_CATALOG: Record<string, Course[]> = {
  "ENSINO MÉDIO": [
    {
      "name": "Ensino Médio (EJA / Aceleração / Conclusão)",
      "duration": "15 dias"
    },
    {
      "name": "Ensino Fundamental (EJA / Conclusão)",
      "duration": "15 dias"
    }
  ],
  "CURSOS TÉCNICOS": [
    {
      "name": "Técnico em Administração",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Agente Comunitário",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Agricultura",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Agrimensura",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Aquicultura",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Automação Industrial",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Contabilidade",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Construção Naval",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Edificações",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Eletrônica",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Eletrotécnica",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Enfermagem",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Farmácia",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Informática",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Logística",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Manutenção Automotiva",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Mecatrônica",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Metalurgia",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Mecânica",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Meio Ambiente",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Mineração",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Nutrição e Dietética",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Petróleo e Gás",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Prótese Dentária",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Química",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Radiologia",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Refrigeração e Climatização",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Serviços Jurídicos",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Segurança do Trabalho",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Telecomunicações",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Técnico em Transações Imobiliárias (CRECI)",
      "duration": "20 a 45 dias"
    },
    {
      "name": "Auxiliar de Enfermagem",
      "duration": "20 a 45 dias"
    }
  ],
  "CURSOS SUPERIORES DE TECNOLOGIA (TECNÓLOGOS)": [
    {
      "name": "Gestão de Tecnologia da Informação",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão Ciências Políticas e Direito",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Ciências Políticas e Direito IM",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão de Pessoas",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão de Recursos Humanos",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Investigação e Inteligência Privada",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Meio Ambiente",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Segurança Pública e Privada",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Teologia",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Marketing e Vendas",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Trânsito",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão das Políticas Públicas",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão da Contr. Processos Organizacional",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão do Controle das Políticas",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Administração Pública",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Agronegócios",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Coaching e Carreira",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Comunicação",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Contabilidade",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Contabilidade Pública",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Edificações",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão Escolar",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão de Pequenas Empresas",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Logística",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Saúde",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão Pública",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Capelania",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão em Mediação e Arbitragem",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão Ministerial",
      "duration": "Até 30 dias"
    },
    {
      "name": "Gestão Pastoral",
      "duration": "Até 30 dias"
    }
  ],
  "CURSOS SUPERIORES DE BACHARELADO": [
    {
      "name": "Administração",
      "duration": "Até 30 dias"
    },
    {
      "name": "Arquitetura e Urbanismo",
      "duration": "Até 30 dias"
    },
    {
      "name": "Análise e Desenvolvimento de Sistemas",
      "duration": "Até 30 dias"
    },
    {
      "name": "Automação Industrial",
      "duration": "Até 30 dias"
    },
    {
      "name": "Biomedicina",
      "duration": "Até 30 dias"
    },
    {
      "name": "Ciências Contábeis",
      "duration": "Até 30 dias"
    },
    {
      "name": "Ciências Econômicas",
      "duration": "Até 30 dias"
    },
    {
      "name": "Comunicação e Marketing",
      "duration": "Até 30 dias"
    },
    {
      "name": "Design Gráfico",
      "duration": "Até 30 dias"
    },
    {
      "name": "Direito",
      "duration": "Até 30 dias"
    },
    {
      "name": "Educação Física",
      "duration": "Até 30 dias"
    },
    {
      "name": "Enfermagem",
      "duration": "Até 30 dias"
    },
    {
      "name": "Estética e Cosmética",
      "duration": "Até 30 dias"
    },
    {
      "name": "Farmácia",
      "duration": "Até 30 dias"
    },
    {
      "name": "Física",
      "duration": "Até 30 dias"
    },
    {
      "name": "Fisioterapia",
      "duration": "Até 30 dias"
    },
    {
      "name": "Jornalismo",
      "duration": "Até 30 dias"
    },
    {
      "name": "Letras",
      "duration": "Até 30 dias"
    },
    {
      "name": "Logística",
      "duration": "Até 30 dias"
    },
    {
      "name": "Medicina Veterinária",
      "duration": "Até 30 dias"
    },
    {
      "name": "Marketing",
      "duration": "Até 30 dias"
    },
    {
      "name": "Nutrição",
      "duration": "Até 30 dias"
    },
    {
      "name": "Odontologia",
      "duration": "Até 30 dias"
    },
    {
      "name": "Psicologia",
      "duration": "Até 30 dias"
    },
    {
      "name": "Sistemas de Informação",
      "duration": "Até 30 dias"
    },
    {
      "name": "Teologia (*Formação no Brasil)",
      "duration": "Até 30 dias"
    },
    {
      "name": "Teologia (*Capelania + Formação nos EUA)",
      "duration": "Até 30 dias"
    },
    {
      "name": "Química (Bacharelado)",
      "duration": "Até 30 dias"
    },
    {
      "name": "Engenharia Agrícola",
      "duration": "Até 30 dias"
    },
    {
      "name": "Engenharia Civil",
      "duration": "Até 30 dias"
    },
    {
      "name": "Engenharia Elétrica",
      "duration": "Até 30 dias"
    },
    {
      "name": "Engenharia Mecânica",
      "duration": "Até 30 dias"
    },
    {
      "name": "Engenharia de Produção",
      "duration": "Até 30 dias"
    },
    {
      "name": "Engenharia Química",
      "duration": "Até 30 dias"
    },
    {
      "name": "Engenharia de Software",
      "duration": "Até 30 dias"
    }
  ],
  "CURSOS SUPERIORES DE LICENCIATURA": [
    {
      "name": "Pedagogia (Licenciatura)",
      "duration": "Até 30 dias"
    },
    {
      "name": "Letras (Licenciatura)",
      "duration": "Até 30 dias"
    },
    {
      "name": "Educação Física (Licenciatura)",
      "duration": "Até 30 dias"
    },
    {
      "name": "Física (Licenciatura)",
      "duration": "Até 30 dias"
    },
    {
      "name": "História (Licenciatura)",
      "duration": "Até 30 dias"
    }
  ],
  "PÓS-GRADUAÇÃO E MBA": [
    {
      "name": "Inteligência Artificial",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "Gestão da Tecnologia da Informação",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "Gestão de Riscos e Cibersegurança",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "MBA em Engenharia de Produção",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Projetos",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Processos",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "Gestão da Qualidade",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "Instalação de Sistemas de Energia Solar",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "Engenharia Ambiental e Saneamento Básico",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "Especialização em Engenharia Sanitária e Ambiental",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "Engenharia de Segurança do Trabalho",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Empresarial",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Comercial",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Pessoas e Liderança",
      "area": "Gestão e Tecnologia",
      "workload": "650h"
    },
    {
      "name": "Arte e Cultura",
      "area": "Ciências Humanas e Sociais",
      "workload": "650h"
    },
    {
      "name": "Humanidades, Sociedade e Ética",
      "area": "Ciências Humanas e Sociais",
      "workload": "650h"
    },
    {
      "name": "Produção Cultural, Arte e Entretenimento",
      "area": "Ciências Humanas e Sociais",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Cultura e Lazer",
      "area": "Ciências Humanas e Sociais",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Serviço Social e Convivência Familiar",
      "area": "Ciências Humanas e Sociais",
      "workload": "650h"
    },
    {
      "name": "Redação e Oratória",
      "area": "Ciências Humanas e Sociais",
      "workload": "650h"
    },
    {
      "name": "Serviço Social na Educação",
      "area": "Ciências Humanas e Sociais",
      "workload": "650h"
    },
    {
      "name": "MBA em Assessoria de Comunicação",
      "area": "Ciências Humanas e Sociais",
      "workload": "650h"
    },
    {
      "name": "MBA em Jornalismo Digital",
      "area": "Ciências Humanas e Sociais",
      "workload": "650h"
    },
    {
      "name": "Criminologia",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Administrativo",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Ambiental",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Civil e Processual Civil",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito da Família",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito do Trabalho",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito do Trânsito",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Educacional",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Eleitoral",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Empresarial",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Humanos e Perícia Criminal",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Imobiliário",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Penal e Processo Penal",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Penal Militar",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Processual Civil",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Público: Constitucional, Administrativo e Tributário",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Tributário e Processual Tributário",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Direito Constitucional",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Segurança Pública",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Direito Administrativo",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Direito Administrativo",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Direito Tributário",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Direitos Humanos",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Direito Previdenciário",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Segurança Pública e Cidadania",
      "area": "Direito e Legislação",
      "workload": "650h"
    },
    {
      "name": "Alfabetização e Letramento II",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Andragogia: Formação de Jovens e Adultos",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Arte de Contar História",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Braille",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Ciências e Meio Ambiente Aplicado à Educação",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Ciências Naturais e Sustentabilidade na Educação",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Ciências Sociais e Ensino de Geografia",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Coordenação e Orientação Escolar",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Coordenação Educacional",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Docência em Enfermagem",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Docência no Ensino Superior",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Docência no Ensino Superior, Médio e Técnico",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação 5.0",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação de Jovens e Adultos",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação em Unidades de Saúde",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Financeira e Matemática Aplicada",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Física Adaptada e Inclusiva",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Física Escolar",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Física Escolar com Ênfase em Educação Especial",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Física Escolar e Treinamento Desportivo",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Física, Escolar e Recreação",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Infantil de 0 a 5 Anos",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Infantil, Alfabetização e Letramento",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Matemática",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Musical e o Ensino de Arte",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação para a Diversidade e Cidadania",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Psicomotora",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Educação Socioemocional nas Escolas",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Ensino de Artes",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Ensino de Ciências e Matemática nas Séries Iniciais do Ensino Fundamental",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Ensino de Línguas na Educação",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Ensino Religioso",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Especialização em Metodologia do Ensino de História",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Especialização em Metodologia do Ensino de Língua Portuguesa",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Formação e Profissão Docente",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Gamificação e Aprendizagem Ativa",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Gestão Educacional e Inspeção Escolar",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Gestão Escolar e Coordenação Pedagógica",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "História da Educação",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "História e Sociedade na Educação",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Inovação Pedagógica com Tecnologias Emergentes",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Letras - Português e Literatura",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Língua e Literatura Brasileira",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Linguística e Ensino de Línguas na Educação Básica",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Literatura Infantojuvenil e Práticas Pedagógicas",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Matemática e Cultura Africana na Educação Básica",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Mediação e Tutoria na Educação a Distância",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Metodologia do Ensino da Matemática e Física",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Metodologia do Ensino de Inglês",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Metodologia do Ensino Superior nas Várias Modalidades",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Metodologias Ativas e Prática Docente",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Metodologias Ativas e Tecnologias Educacionais",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Metodologias do Ensino de Matemática",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Orientação Educacional",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Alfabetização e Letramento",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Docência do Ensino Superior, Gestão e Tutoria em EAD",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Educação a Distância",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Educação Especial",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Educação Especial Avançada",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Educação Especial Inclusiva e Transtorno do Espectro Autista (TEA)",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Educação Infantil",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Educação Infantil, Especial e Transtornos Globais do Desenvolvimento (TGD)",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Educação Inclusiva",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Educação Inclusiva e Acessibilidade",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Educação Inclusiva e Diversidade Cultural",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Gestão Escolar Integrada com Ênfase em Supervisão, Orientação, Administração e Inspeção",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Leitura e Produção Textual no Ensino Fundamental",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em TDAH - Transtorno do Déficit de Atenção com Hiperatividade",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Tecnologias Educacionais",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "Supervisão e Orientação em Educação Infantil",
      "area": "Educação e Docência",
      "workload": "650h"
    },
    {
      "name": "MBA em Administração Financeira e Orçamentária",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Auditoria e Perícia Contábil",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Coaching",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Compliance e Gestão de Riscos",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Controladoria e Finanças",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Controladoria Financeira",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em E-Commerce",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Engenharia de Produção",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em ESG - Environmental, Social & Governance",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Comercial",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Custos e Finanças",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Departamento Pessoal e Relações Trabalhistas",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Negócios Imobiliários",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Negócios Internacionais e Comércio Exterior",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Pessoas e Liderança",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Processos",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Projetos",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Vendas",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão do Agronegócio",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão do Desenvolvimento do Colaborador",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão do Retorno Financeiro de Talentos nos Negócios",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Empresarial",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Estratégica de Cooperativas",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Estratégica em ESG",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Fiscal e Tributária",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Pública",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Logística e Supply Chain Management",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Marketing de Varejo, Gestão, Estratégias e Negócios",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Marketing Estratégico Digital",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "MBA em Startups e Inovação",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Gestão da Qualidade",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Gestão Estratégica de Pessoas",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Liderança e Desenvolvimento de Equipes",
      "area": "Gestão, Finanças e Negócios",
      "workload": "650h"
    },
    {
      "name": "Biomedicina Estética",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Cuidados Paliativos",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Enfermagem do Trabalho e Saúde Ocupacional",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Enfermagem em Oncologia",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Enfermagem em Urgência e Emergência",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Especialização em Instrumentação Cirúrgica",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Estética e Cosmetologia",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Farmácia Clínica e Hospitalar",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Farmácia Estética",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Gestão de Clínicas e Consultórios",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Gestão de Clínicas Odontológicas",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "MBA em Administração Hospitalar",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "MBA em Auditoria em Saúde",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Clínicas de Psicologia",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão de Drogaria e Farmácia",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Hospitalar",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Nutrição Esportiva",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Gerontologia e Gestão da Assistência ao Idoso",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Saúde Pública com ênfase em Saúde da Família",
      "area": "Saúde e Bem-Estar",
      "workload": "650h"
    },
    {
      "name": "Neuropsicologia Clínica",
      "area": "Psicologia e Saúde Mental",
      "workload": "650h"
    },
    {
      "name": "Psicopedagogia",
      "area": "Psicologia e Saúde Mental",
      "workload": "650h"
    },
    {
      "name": "Psicopedagogia Clínica e Institucional",
      "area": "Psicologia e Saúde Mental",
      "workload": "650h"
    },
    {
      "name": "Neuropsicopedagogia Clínica",
      "area": "Psicologia e Saúde Mental",
      "workload": "650h"
    },
    {
      "name": "Psicologia Clínica e Institucional",
      "area": "Psicologia e Saúde Mental",
      "workload": "650h"
    },
    {
      "name": "Terapia Cognitivo-Comportamental",
      "area": "Psicologia e Saúde Mental",
      "workload": "650h"
    },
    {
      "name": "Transtornos Globais do Desenvolvimento (CID F84)",
      "area": "Psicologia e Saúde Mental",
      "workload": "650h"
    },
    {
      "name": "Especialização em Análise do Comportamento Aplicada ao Autismo (ABA)",
      "area": "Psicologia e Saúde Mental",
      "workload": "650h"
    },
    {
      "name": "Engenharia de Segurança do Trabalho",
      "area": "Engenharia e Meio Ambiente",
      "workload": "650h"
    },
    {
      "name": "Especialização em Engenharia Sanitária e Ambiental",
      "area": "Engenharia e Meio Ambiente",
      "workload": "650h"
    },
    {
      "name": "Engenharia Ambiental e Saneamento Básico",
      "area": "Engenharia e Meio Ambiente",
      "workload": "650h"
    },
    {
      "name": "Instalação de Sistemas de Energia Solar",
      "area": "Engenharia e Meio Ambiente",
      "workload": "650h"
    },
    {
      "name": "MBA em Gestão Ambiental",
      "area": "Engenharia e Meio Ambiente",
      "workload": "650h"
    },
    {
      "name": "Inteligência Artificial",
      "area": "Tecnologia da Informação",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Gestão da Tecnologia da Informação",
      "area": "Tecnologia da Informação",
      "workload": "650h"
    },
    {
      "name": "Pós-Graduação em Gestão de Riscos e Cibersegurança",
      "area": "Tecnologia da Informação",
      "workload": "650h"
    },
    {
      "name": "Informática na Educação",
      "area": "Tecnologias da Informação",
      "workload": "650h"
    }
  ],
  "CURSOS DE APERFEICOAMENTO OU ATUALIZACAO": [
    {
      "name": "A Etapa de Entrevista no Processo Seletivo",
      "workload": "40h"
    },
    {
      "name": "A Motivação Como Ferramenta",
      "workload": "20h"
    },
    {
      "name": "Almoxarife",
      "workload": "60h"
    },
    {
      "name": "Alongamento de Unhas",
      "workload": "30h"
    },
    {
      "name": "Análise de demonstrativo contábeis",
      "workload": "60h"
    },
    {
      "name": "Análise e seleção de candidatos",
      "workload": "30h"
    },
    {
      "name": "Animação e Lazer",
      "workload": "20h"
    },
    {
      "name": "Aplicador de Insulfim Automotivo e Residencial",
      "workload": "60h"
    },
    {
      "name": "Apresentações no Power Point",
      "workload": "20h"
    },
    {
      "name": "Arquivador",
      "workload": "30h"
    },
    {
      "name": "Arquivologia",
      "workload": "80h"
    },
    {
      "name": "Atendente de Call Center",
      "workload": "30h"
    },
    {
      "name": "Atendimento ao cliente",
      "workload": "30h"
    },
    {
      "name": "Atendimento de excelência",
      "workload": "20h"
    },
    {
      "name": "Atendimento e vendas no varejo",
      "workload": "30h"
    },
    {
      "name": "Auxiliar administrativo",
      "workload": "60h"
    },
    {
      "name": "Auxiliar Contábil",
      "workload": "60h"
    },
    {
      "name": "Auxiliar de creche",
      "workload": "50h"
    },
    {
      "name": "Auxiliar de Escritório",
      "workload": "45h"
    },
    {
      "name": "Auxiliar de farmácia",
      "workload": "60h"
    },
    {
      "name": "Auxiliar de Manutenção Predial",
      "workload": "50h"
    },
    {
      "name": "Avaliação de desempenho",
      "workload": "35h"
    },
    {
      "name": "Avaliação Educacional",
      "workload": "30h"
    },
    {
      "name": "Balconista",
      "workload": "30h"
    },
    {
      "name": "Banho e tosa",
      "workload": "30h"
    },
    {
      "name": "Berçarista",
      "workload": "50h"
    },
    {
      "name": "Bibliotecas escolares",
      "workload": "30h"
    },
    {
      "name": "Bing ADS",
      "workload": "15h"
    },
    {
      "name": "Biotecnologia",
      "workload": "60h"
    },
    {
      "name": "Biscoitos",
      "workload": "20h"
    },
    {
      "name": "Bolos Caseiros",
      "workload": "20h"
    },
    {
      "name": "Bolos de chocolate",
      "workload": "20h"
    },
    {
      "name": "Braile",
      "workload": "50h"
    },
    {
      "name": "Brincadeiras Infantil",
      "workload": "20h"
    },
    {
      "name": "Brinquedoteca",
      "workload": "30h"
    },
    {
      "name": "Caixa",
      "workload": "50h"
    },
    {
      "name": "Canva",
      "workload": "30h"
    },
    {
      "name": "Canva na Pratica",
      "workload": "20h"
    },
    {
      "name": "Comidas Congeladas",
      "workload": "20h"
    },
    {
      "name": "Como cobrar inadimplentes",
      "workload": "15h"
    },
    {
      "name": "Como conhecer o cliente",
      "workload": "20h"
    },
    {
      "name": "Compliance",
      "workload": "30h"
    },
    {
      "name": "Comportamento organizacional",
      "workload": "30h"
    },
    {
      "name": "Comunicação Assertiva",
      "workload": "30h"
    },
    {
      "name": "Comunicação Eficaz no Processo de Liderança e Feedback",
      "workload": "30h"
    },
    {
      "name": "Comunicação Interpessoal",
      "workload": "20h"
    },
    {
      "name": "Concierge",
      "workload": "30h"
    },
    {
      "name": "Configuração de Roteadores",
      "workload": "20h"
    },
    {
      "name": "Cuidados de Idosos",
      "workload": "60h"
    },
    {
      "name": "Curso de Coreldraw",
      "workload": "40h"
    },
    {
      "name": "Curso de Novo C++",
      "workload": "60h"
    },
    {
      "name": "Curso de Photoshop",
      "workload": "40h"
    },
    {
      "name": "Curso de Português",
      "workload": "40h"
    },
    {
      "name": "Curso de Química",
      "workload": "40h"
    },
    {
      "name": "Curso de Redação",
      "workload": "30h"
    },
    {
      "name": "Curso de Sociologia",
      "workload": "50h"
    },
    {
      "name": "Decoração",
      "workload": "30h"
    },
    {
      "name": "Dermocosmetica",
      "workload": "40h"
    },
    {
      "name": "Desenvolvendo Equipes de Alta Performance",
      "workload": "40h"
    },
    {
      "name": "Desenvolvimento e Educação da primeira infância",
      "workload": "100h"
    },
    {
      "name": "Desenvolvimento e Liderança",
      "workload": "60h"
    },
    {
      "name": "Design de interiores",
      "workload": "40h"
    },
    {
      "name": "Designer Gráfico",
      "workload": "40h"
    },
    {
      "name": "Design de sombrancelhas",
      "workload": "30h"
    },
    {
      "name": "Designer para Negócios",
      "workload": "30h"
    },
    {
      "name": "Didática Avançada",
      "workload": "30h"
    },
    {
      "name": "Digital Influencer",
      "workload": "30h"
    },
    {
      "name": "Direito Empresarial",
      "workload": "60h"
    },
    {
      "name": "Direito Penal",
      "workload": "60h"
    },
    {
      "name": "Doces para casamentos",
      "workload": "20h"
    },
    {
      "name": "Dog Walker",
      "workload": "20h"
    },
    {
      "name": "Edição de Vídeo",
      "workload": "50h"
    },
    {
      "name": "Educação a Distância",
      "workload": "80h"
    },
    {
      "name": "Educação Ambiental",
      "workload": "40h"
    },
    {
      "name": "Educação do campo",
      "workload": "30h"
    },
    {
      "name": "Educação e PNL",
      "workload": "30h"
    },
    {
      "name": "Educação Especial",
      "workload": "60h"
    },
    {
      "name": "Educação Financeira",
      "workload": "20h"
    },
    {
      "name": "Educação Inclusiva",
      "workload": "60h"
    },
    {
      "name": "Educação integral",
      "workload": "30h"
    },
    {
      "name": "Educação Musical",
      "workload": "50h"
    },
    {
      "name": "Elaboração de contratos",
      "workload": "20h"
    },
    {
      "name": "Elaboração de Plano de Negócios",
      "workload": "40h"
    },
    {
      "name": "Elétrica Predial",
      "workload": "60h"
    },
    {
      "name": "Eletricista",
      "workload": "80h"
    },
    {
      "name": "Eletricista de Automóveis",
      "workload": "60h"
    },
    {
      "name": "Empacotador",
      "workload": "30h"
    },
    {
      "name": "Empreendedorismo",
      "workload": "40h"
    },
    {
      "name": "Empreendedorismo Digital",
      "workload": "40h"
    },
    {
      "name": "Encanador",
      "workload": "30h"
    },
    {
      "name": "Ergonomia",
      "workload": "30h"
    },
    {
      "name": "Escrita fiscal",
      "workload": "50h"
    },
    {
      "name": "Espanhol Básico",
      "workload": "40h"
    },
    {
      "name": "Espanhol Intermediário",
      "workload": "60h"
    },
    {
      "name": "Estética e beleza",
      "workload": "30h"
    },
    {
      "name": "Estoquista",
      "workload": "40h"
    },
    {
      "name": "Estratégia de Marketing",
      "workload": "40h"
    },
    {
      "name": "Estratégia Para Negócio Online",
      "workload": "30h"
    },
    {
      "name": "Estruturando o Setor de Vendas da Empresa",
      "workload": "30h"
    },
    {
      "name": "Estruturando um Ebook",
      "workload": "20h"
    },
    {
      "name": "Etiqueta à mesa",
      "workload": "20h"
    },
    {
      "name": "Etiqueta Corporativa",
      "workload": "20h"
    },
    {
      "name": "Etiqueta Social",
      "workload": "20h"
    },
    {
      "name": "Excel Básico",
      "workload": "30h"
    },
    {
      "name": "Excelência ao Cliente",
      "workload": "30h"
    },
    {
      "name": "Excelência nas Vendas",
      "workload": "30h"
    },
    {
      "name": "Exportação",
      "workload": "40h"
    },
    {
      "name": "Facebook ADS",
      "workload": "20h"
    },
    {
      "name": "Facebook para empresas",
      "workload": "30h"
    },
    {
      "name": "Falência e Recuperação de Empresas",
      "workload": "40h"
    },
    {
      "name": "Fidelizar Clientes",
      "workload": "30h"
    },
    {
      "name": "Finanças pessoais",
      "workload": "30h"
    },
    {
      "name": "Fitofarmacêuticos",
      "workload": "40h"
    },
    {
      "name": "Fitoterapia",
      "workload": "40h"
    },
    {
      "name": "Fluxo de Caixa",
      "workload": "30h"
    },
    {
      "name": "Fluxos do Lean",
      "workload": "30h"
    },
    {
      "name": "Fotografia avançado",
      "workload": "40h"
    },
    {
      "name": "Fotografia de casamento",
      "workload": "30h"
    },
    {
      "name": "Fotógrafo de Eventos",
      "workload": "30h"
    },
    {
      "name": "Frentista",
      "workload": "30h"
    },
    {
      "name": "Garçom",
      "workload": "30h"
    },
    {
      "name": "Gatilhos Mentais",
      "workload": "20h"
    },
    {
      "name": "Geometria do design",
      "workload": "30h"
    },
    {
      "name": "Gerenciamento de Investimento",
      "workload": "30h"
    },
    {
      "name": "Gerenciando Projetos",
      "workload": "40h"
    },
    {
      "name": "Gestão Avançada de Ativos de TI",
      "workload": "60h"
    },
    {
      "name": "Gestão da Emoção e Mega TGE",
      "workload": "30h"
    },
    {
      "name": "Gestão de compras",
      "workload": "30h"
    },
    {
      "name": "Gestão de conflitos",
      "workload": "50h"
    },
    {
      "name": "Gestão de Equipes",
      "workload": "40h"
    },
    {
      "name": "Gestão de Estoque",
      "workload": "40h"
    },
    {
      "name": "Gestão de Pessoas",
      "workload": "40h"
    },
    {
      "name": "Gestão de Produção",
      "workload": "40h"
    },
    {
      "name": "Gestão de Projetos",
      "workload": "40h"
    },
    {
      "name": "Gestão de qualidade",
      "workload": "60h"
    },
    {
      "name": "Gestão de Reclamações",
      "workload": "30h"
    },
    {
      "name": "Gestão em Call Center",
      "workload": "30h"
    },
    {
      "name": "Gestão Estratégia de Sucesso",
      "workload": "30h"
    },
    {
      "name": "Gestão financeira",
      "workload": "40h"
    },
    {
      "name": "Gestão salão de beleza",
      "workload": "30h"
    },
    {
      "name": "Gestão visual de loja",
      "workload": "30h"
    },
    {
      "name": "Gestor de tráfego pago",
      "workload": "30h"
    },
    {
      "name": "Ginástica laboral",
      "workload": "35h"
    },
    {
      "name": "Google ADS",
      "workload": "20h"
    },
    {
      "name": "Governança de hotel",
      "workload": "30h"
    },
    {
      "name": "Grafologia",
      "workload": "30h"
    },
    {
      "name": "Importação",
      "workload": "30h"
    },
    {
      "name": "Informática Avançada",
      "workload": "40h"
    },
    {
      "name": "Inglês Básico",
      "workload": "40h"
    },
    {
      "name": "Inglês Intermediário",
      "workload": "60h"
    },
    {
      "name": "Instagram para negócios",
      "workload": "30h"
    },
    {
      "name": "Instagram Profissional",
      "workload": "30h"
    },
    {
      "name": "Instalações Elétricas e Hidráulicas",
      "workload": "60h"
    },
    {
      "name": "Inteligência Artificial",
      "workload": "30h"
    },
    {
      "name": "Inteligência Emocional",
      "workload": "30h"
    },
    {
      "name": "Secretariado Intensivo",
      "workload": "40h"
    },
    {
      "name": "Internet das Coisas IoT",
      "workload": "60h"
    },
    {
      "name": "E-commerce",
      "workload": "30h"
    },
    {
      "name": "Introdução ao NR5",
      "workload": "20h"
    },
    {
      "name": "Introdução ao NR6",
      "workload": "20h"
    },
    {
      "name": "Introdução ao PHP",
      "workload": "40h"
    },
    {
      "name": "Planejamento Estratégico",
      "workload": "30h"
    },
    {
      "name": "Secretariado Executivo",
      "workload": "40h"
    },
    {
      "name": "Investimento em criptomoedas",
      "workload": "30h"
    },
    {
      "name": "Jardins verticais",
      "workload": "20h"
    },
    {
      "name": "Jardineiro",
      "workload": "35h"
    },
    {
      "name": "LGPD",
      "workload": "30h"
    },
    {
      "name": "Libras",
      "workload": "40h"
    },
    {
      "name": "Liderança",
      "workload": "30h"
    },
    {
      "name": "Liderança: Aprenda a Liderar e Influenciar Pessoas",
      "workload": "30h"
    },
    {
      "name": "Limpeza de Pele",
      "workload": "20h"
    },
    {
      "name": "Logística",
      "workload": "40h"
    },
    {
      "name": "Logística de programação",
      "workload": "30h"
    },
    {
      "name": "Ludicidade e Fantoches",
      "workload": "20h"
    },
    {
      "name": "Macarons",
      "workload": "20h"
    },
    {
      "name": "Manicure avançado",
      "workload": "30h"
    },
    {
      "name": "Manobrista",
      "workload": "20h"
    },
    {
      "name": "Mapas mentais",
      "workload": "20h"
    },
    {
      "name": "Maquiagem profissional",
      "workload": "30h"
    },
    {
      "name": "Marketing de afiliados",
      "workload": "30h"
    },
    {
      "name": "Marketing de conteúdo",
      "workload": "30h"
    },
    {
      "name": "Marketing Digital",
      "workload": "40h"
    },
    {
      "name": "Marketing e Posicionamento Digital",
      "workload": "60h"
    },
    {
      "name": "Marketing pessoal",
      "workload": "30h"
    },
    {
      "name": "Marmita Fit",
      "workload": "20h"
    },
    {
      "name": "Massoterapia",
      "workload": "60h"
    },
    {
      "name": "Mecânica Geral",
      "workload": "80h"
    },
    {
      "name": "Memorização e Estudo",
      "workload": "20h"
    },
    {
      "name": "Metodologias Ativas",
      "workload": "30h"
    },
    {
      "name": "Microblading e micropigmentação",
      "workload": "40h"
    },
    {
      "name": "Mídias Sociais",
      "workload": "30h"
    },
    {
      "name": "Modelagem de roupas",
      "workload": "30h"
    },
    {
      "name": "Monitor de transporte escolar",
      "workload": "40h"
    },
    {
      "name": "Montador de Móveis",
      "workload": "30h"
    },
    {
      "name": "Montagem e manutenção de computadores",
      "workload": "40h"
    },
    {
      "name": "Musica na Educação",
      "workload": "40h"
    },
    {
      "name": "Nutrição e Dietética",
      "workload": "40h"
    },
    {
      "name": "My Sql",
      "workload": "30h"
    },
    {
      "name": "NR 23",
      "workload": "20h"
    },
    {
      "name": "NR 35",
      "workload": "20h"
    },
    {
      "name": "NR 6",
      "workload": "20h"
    },
    {
      "name": "Nutrição para idosos",
      "workload": "40h"
    },
    {
      "name": "Operador de caixa",
      "workload": "30h"
    },
    {
      "name": "Oratória",
      "workload": "30h"
    },
    {
      "name": "Oratória Jurídica",
      "workload": "30h"
    },
    {
      "name": "Outlook",
      "workload": "20h"
    },
    {
      "name": "Pacote Office (Word/Excel/Powerpoint)",
      "workload": "30h"
    },
    {
      "name": "Panetones",
      "workload": "20h"
    },
    {
      "name": "Panificação básico",
      "workload": "30h"
    },
    {
      "name": "Penteados",
      "workload": "20h"
    },
    {
      "name": "Personal diet",
      "workload": "30h"
    },
    {
      "name": "Personal dona de casa",
      "workload": "30h"
    },
    {
      "name": "Personal trainer",
      "workload": "40h"
    },
    {
      "name": "Pilates",
      "workload": "30h"
    },
    {
      "name": "Pinterest ADs",
      "workload": "20h"
    },
    {
      "name": "Pizzaiolo",
      "workload": "30h"
    },
    {
      "name": "Planejamento de buffet",
      "workload": "30h"
    },
    {
      "name": "Planejando Projetos",
      "workload": "30h"
    },
    {
      "name": "Plano de marketing",
      "workload": "30h"
    },
    {
      "name": "Porteiro e Vigia",
      "workload": "30h"
    },
    {
      "name": "Presença Digital",
      "workload": "20h"
    },
    {
      "name": "Primeiros socorros",
      "workload": "35h"
    },
    {
      "name": "Princípios e Estilos de Liderança",
      "workload": "30h"
    },
    {
      "name": "Produção de vídeo aulas",
      "workload": "30h"
    },
    {
      "name": "Propriedade Intelectual",
      "workload": "30h"
    },
    {
      "name": "Proteção Ambiental",
      "workload": "20h"
    },
    {
      "name": "Psicologia do Desenvolvimento",
      "workload": "80h"
    },
    {
      "name": "Psicopedagogia",
      "workload": "100h"
    },
    {
      "name": "Qualidade do atendimento",
      "workload": "30h"
    },
    {
      "name": "Recepcionista",
      "workload": "30h"
    },
    {
      "name": "Recepcionista de Eventos",
      "workload": "30h"
    },
    {
      "name": "Recrutamento e seleção",
      "workload": "30h"
    },
    {
      "name": "Redação Jurídica",
      "workload": "30h"
    },
    {
      "name": "Redes",
      "workload": "20h"
    },
    {
      "name": "Redes Sociais",
      "workload": "30h"
    },
    {
      "name": "Reeducação alimentar",
      "workload": "20h"
    },
    {
      "name": "Saúde e Bem Estar",
      "workload": "30h"
    },
    {
      "name": "Secretariado",
      "workload": "120h"
    },
    {
      "name": "Segurança de Redes com Firewalls",
      "workload": "40h"
    },
    {
      "name": "Segurança do trabalho",
      "workload": "120h"
    },
    {
      "name": "Segurança na Internet",
      "workload": "20h"
    },
    {
      "name": "Segurança no Trânsito",
      "workload": "40h"
    },
    {
      "name": "Segurança Patrimonial",
      "workload": "120h"
    },
    {
      "name": "Segurança Privada",
      "workload": "120h"
    },
    {
      "name": "Serviço social",
      "workload": "120h"
    },
    {
      "name": "Shiatsu Essencial",
      "workload": "30h"
    },
    {
      "name": "Técnico em Manutenção de Celulares",
      "workload": "120h"
    },
    {
      "name": "Técnica de Vendas e Negociação",
      "workload": "40h"
    },
    {
      "name": "Técnicas de Apresentação",
      "workload": "20h"
    },
    {
      "name": "Técnicas de comunicação eficaz",
      "workload": "40h"
    },
    {
      "name": "Técnicas de Planejamento e Gestão de Pessoas",
      "workload": "80h"
    },
    {
      "name": "Técnicas de Redação",
      "workload": "20h"
    },
    {
      "name": "Técnicas de SPA",
      "workload": "20h"
    },
    {
      "name": "Tecnologia da informação",
      "workload": "120h"
    },
    {
      "name": "Telefonista",
      "workload": "40h"
    },
    {
      "name": "Temperamentos Humanos",
      "workload": "20h"
    },
    {
      "name": "Teologia",
      "workload": "60h"
    },
    {
      "name": "Terapia Holística",
      "workload": "30h"
    },
    {
      "name": "Terapias naturais em animais",
      "workload": "30h"
    },
    {
      "name": "Terminais e contêineres",
      "workload": "30h"
    },
    {
      "name": "Tik Tok para negócios",
      "workload": "20h"
    },
    {
      "name": "Tipos de Organizações e Cultura Organizacional",
      "workload": "40h"
    },
    {
      "name": "Tipos de Poder e Liderança Nas Organizações",
      "workload": "30h"
    },
    {
      "name": "Tradução",
      "workload": "30h"
    },
    {
      "name": "Tráfego Pago",
      "workload": "30h"
    },
    {
      "name": "Transporte e Distribuição",
      "workload": "40h"
    },
    {
      "name": "Turismo",
      "workload": "40h"
    },
    {
      "name": "Unhas de gel",
      "workload": "30h"
    },
    {
      "name": "Unhas decoradas",
      "workload": "20h"
    },
    {
      "name": "Urbanismo",
      "workload": "40h"
    },
    {
      "name": "Uso de Tecnologias na Educação",
      "workload": "80h"
    },
    {
      "name": "Webdesigner",
      "workload": "60h"
    },
    {
      "name": "Webdesigner para Ecommerce",
      "workload": "50h"
    },
    {
      "name": "Word Essencial",
      "workload": "30h"
    },
    {
      "name": "Youtube Marketing",
      "workload": "30h"
    },
    {
      "name": "Youtuber",
      "workload": "30h"
    }
  ]
};

export const COURSE_CATEGORIES = Object.keys(COURSES_CATALOG);

export function getCoursesByCategory(category: string): Course[] {
  return COURSES_CATALOG[category] || [];
}
