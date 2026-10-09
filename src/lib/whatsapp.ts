// ============================================================
// lib/whatsapp.ts
// Utilitários de WhatsApp — número de contato e gerador de
// links/mensagens pré-formatadas
// ============================================================

export const WHATSAPP_NUMBER = "5511934737064";

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
