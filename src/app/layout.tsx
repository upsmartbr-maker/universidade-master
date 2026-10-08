import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CoursesProvider } from "@/contexts/CoursesContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Universidade Master Educação | Formação Acadêmica Reconhecida e Rápida",
  description:
    "Acelere sua formação com a Universidade Master Educação. Cursos Técnicos, Superiores, Pós-Graduação e MBA com aproveitamento de estudos e aceleração acadêmica. Insira-se rapidamente no mercado de trabalho.",
  keywords: [
    "universidade",
    "cursos técnicos",
    "graduação",
    "pós-graduação",
    "MBA",
    "aceleração acadêmica",
    "aproveitamento de estudos",
    "progressão funcional",
    "EJA",
    "educação a distância",
  ],
  openGraph: {
    title: "Universidade Master Educação | Formação Rápida e Reconhecida",
    description:
      "Do Técnico ao MBA com aceleração e aproveitamento de estudos. Inscreva-se agora.",
    siteName: "Universidade Master Educação",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased bg-[#F8FAFC] text-gray-900">
        <CoursesProvider>{children}</CoursesProvider>
      </body>
    </html>
  );
}
