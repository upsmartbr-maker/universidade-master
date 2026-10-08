import type { Metadata } from "next";
import AdminPanel from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Área Administrativa | Universidade Master Educação",
  description: "Painel administrativo para gerenciamento de cursos.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminPanel />;
}
