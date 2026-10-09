"use client";

import { useState, useMemo } from "react";
import {
  MessageCircle, Send, CheckCircle, ChevronRight,
  ChevronLeft, User, Mail, Phone, Loader2, Clock, BookOpen
} from "lucide-react";
import {
  COURSES_CATALOG,
  COURSE_CATEGORIES,
  type Course,
} from "@/lib/courses-data";
import { buildWhatsAppUrl, buildLeadMessage } from "@/lib/whatsapp";


type Step = 1 | 2 | 3 | 4;

const MODALITIES = [
  "Tenho pressa / Preciso de aceleração ou aproveitamento",
  "Primeira graduação / Início de carreira",
  "Progressão de carreira / Concurso público",
  "Transferência de outra instituição",
  "Reingresso após interrupção dos estudos",
  "Outro objetivo",
];

function phoneMask(v: string) {
  return v
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})$/, "$1-$2")
    .slice(0, 15);
}

/** Render a subtle info badge with duration / workload when available */
function CourseBadge({ course }: { course: Course | undefined }) {
  if (!course) return null;

  const info = course.duration
    ? `⏱ Duração estimada: ${course.duration}`
    : course.workload
    ? `📚 Carga horária: ${course.workload}`
    : null;

  if (!info) return null;

  return (
    <div className="mt-2 inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full animate-fade-in">
      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
      {info}
    </div>
  );
}

export default function EnrollmentForm() {
  const [step, setStep] = useState<Step>(1);
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState(""); // course name or "__custom__"
  const [customCourse, setCustomCourse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [modality, setModality] = useState("");
  const [success, setSuccess] = useState<"whatsapp" | "lead" | null>(null);
  const [loading, setLoading] = useState(false);

  // ── Sorted courses for the selected category ──────────────
  const availableCourses: Course[] = useMemo(() => {
    if (!category) return [];
    const list = COURSES_CATALOG[category] ?? [];
    return [...list].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [category]);

  // ── Selected course object (for badge rendering) ──────────
  const selectedCourseObj: Course | undefined = useMemo(
    () =>
      course && course !== "__custom__"
        ? availableCourses.find((c) => c.name === course)
        : undefined,
    [course, availableCourses]
  );

  const isOtherCourse = course === "__custom__";
  const effectiveCourse = isOtherCourse ? customCourse.trim() : course;

  // ── Step guards ───────────────────────────────────────────
  const canGoStep2 = category !== "";
  const canGoStep3 =
    course !== "" && (!isOtherCourse || customCourse.trim() !== "");
  const canGoStep4 =
    name.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    modality !== "";

  function reset() {
    setStep(1);
    setCategory("");
    setCourse("");
    setCustomCourse("");
    setName("");
    setEmail("");
    setPhone("");
    setModality("");
    setSuccess(null);
  }

  function handleWhatsApp() {
    const msg = buildLeadMessage({
      category,
      course: effectiveCourse,
      name,
      email,
      phone,
      modality,
    });
    window.open(buildWhatsAppUrl(msg), "_blank");
    setSuccess("whatsapp");
  }

  async function handleLead() {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess("lead");
  }

  const STEP_LABELS = ["Categoria", "Curso", "Seus Dados", "Envio"];

  // ── Success screen ────────────────────────────────────────
  if (success) {
    return (
      <section id="inscricao" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
              </div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">
              {success === "whatsapp" ? "Conversa Iniciada!" : "Solicitação Recebida!"}
            </h3>
            <p className="text-gray-500 mb-8">
              {success === "whatsapp"
                ? "Seu WhatsApp foi aberto com a mensagem pré-preenchida. Um consultor retornará em breve."
                : `Olá, ${name}! Recebemos seu interesse no curso "${effectiveCourse}". Nossa equipe entrará em contato pelo número ${phone} em até 24h.`}
            </p>
            <button
              onClick={reset}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Nova Simulação
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── Main form ─────────────────────────────────────────────
  return (
    <section id="inscricao" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Simulação &amp; Matrícula
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Escolha Seu Curso e Inicie Agora
          </h2>
          <p className="text-gray-500">
            Preencha em menos de 2 minutos e receba orientação personalizada.
          </p>
        </div>

        {/* Progress stepper */}
        <div className="flex items-center justify-center mb-8 gap-0">
          {STEP_LABELS.map((label, i) => {
            const n = (i + 1) as Step;
            const active = step === n;
            const done = step > n;
            return (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                      done
                        ? "bg-blue-600 border-blue-600 text-white"
                        : active
                        ? "bg-white border-blue-600 text-blue-700"
                        : "bg-white border-gray-200 text-gray-400"
                    }`}
                  >
                    {done ? <CheckCircle className="w-4 h-4" /> : n}
                  </div>
                  <span
                    className={`text-xs mt-1 font-medium ${
                      active ? "text-blue-700" : done ? "text-blue-500" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEP_LABELS.length - 1 && (
                  <div
                    className={`h-0.5 w-12 sm:w-20 mx-1 mt-0 mb-5 transition-colors ${
                      step > n ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Card header bar */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-4">
            <p className="text-white font-bold text-sm">
              Passo {step} de 4 —{" "}
              {step === 1 && "Selecione a Categoria de Ensino"}
              {step === 2 && "Selecione o Curso Desejado"}
              {step === 3 && "Informe seus Dados Pessoais"}
              {step === 4 && "Escolha como deseja prosseguir"}
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {/* ── STEP 1: Categoria ─────────────────────────── */}
            {step === 1 && (
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Categoria de Ensino *
                </label>
                <div className="grid gap-2">
                  {COURSE_CATEGORIES.map((cat) => (
                    <label
                      key={cat}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                        category === cat
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-100 hover:border-blue-200 hover:bg-blue-50/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={category === cat}
                        onChange={() => {
                          setCategory(cat);
                          setCourse("");
                          setCustomCourse("");
                        }}
                        className="accent-blue-600 w-4 h-4 flex-shrink-0"
                      />
                      <span
                        className={`text-sm font-medium capitalize ${
                          category === cat ? "text-blue-700" : "text-gray-700"
                        }`}
                      >
                        {cat
                          .split(" ")
                          .map((w) =>
                            w.length > 3
                              ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
                              : w.toLowerCase()
                          )
                          .join(" ")}
                      </span>
                      {/* course count badge */}
                      <span className="ml-auto text-xs font-bold text-gray-400 flex-shrink-0">
                        {COURSES_CATALOG[cat]?.length ?? 0} cursos
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 2: Curso ─────────────────────────────── */}
            {step === 2 && (
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Curso Desejado *
                </label>

                {/* Category pill reminder */}
                <div className="flex items-center gap-2 text-xs text-blue-700 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
                  <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="font-semibold">{category}</span>
                  <span className="text-blue-400">— {availableCourses.length} opções disponíveis</span>
                </div>

                <select
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                    if (e.target.value !== "__custom__") setCustomCourse("");
                  }}
                  className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-colors bg-white"
                >
                  <option value="">— Selecione um curso —</option>
                  {availableCourses.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                  <option value="__custom__">
                    [ + Outro curso não listado (Digitar manualmente) ]
                  </option>
                </select>

                {/* Duration / workload badge */}
                {!isOtherCourse && <CourseBadge course={selectedCourseObj} />}

                {/* Manual input when "other" is selected */}
                {isOtherCourse && (
                  <div className="animate-fade-in">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Qual curso você deseja cursar? *
                    </label>
                    <input
                      type="text"
                      value={customCourse}
                      onChange={(e) => setCustomCourse(e.target.value)}
                      placeholder="Digite o nome do curso..."
                      className="w-full border-2 border-blue-300 focus:border-blue-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      autoFocus
                    />
                  </div>
                )}

                {availableCourses.length === 0 && !isOtherCourse && (
                  <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-200">
                    Nenhum curso cadastrado nesta categoria no momento. Escolha a opção manual abaixo.
                  </p>
                )}
              </div>
            )}

            {/* ── STEP 3: Dados pessoais ────────────────────── */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(phoneMask(e.target.value))}
                    placeholder="(11) 99999-9999"
                    className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    maxLength={15}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Modalidade de Interesse *
                  </label>
                  <select
                    value={modality}
                    onChange={(e) => setModality(e.target.value)}
                    className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white"
                  >
                    <option value="">— Selecione —</option>
                    {MODALITIES.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* ── STEP 4: Envio ─────────────────────────────── */}
            {step === 4 && (
              <div className="space-y-5">
                {/* Summary */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 space-y-2">
                  <h4 className="font-bold text-blue-800 text-sm mb-3">
                    Resumo da sua solicitação:
                  </h4>
                  {[
                    ["Categoria", category],
                    ["Curso", effectiveCourse],
                    ["Nome", name],
                    ["E-mail", email],
                    ["Telefone", phone],
                    ["Modalidade", modality],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <span className="text-gray-500">{k}:</span>
                      <span className="text-gray-900 font-medium text-right max-w-[60%] break-words">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-emerald-200 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar e Iniciar Conversa no WhatsApp
                </button>

                <button
                  onClick={handleLead}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-4 rounded-2xl shadow-lg transition-all"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {loading ? "Enviando..." : "Solicitar Contato de um Consultor"}
                </button>
              </div>
            )}

            {/* ── Navigation ────────────────────────────────── */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </button>
              ) : (
                <div />
              )}

              {step < 4 && (
                <button
                  onClick={() => setStep((s) => (s + 1) as Step)}
                  disabled={
                    (step === 1 && !canGoStep2) ||
                    (step === 2 && !canGoStep3) ||
                    (step === 3 && !canGoStep4)
                  }
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-300 text-white font-bold px-6 py-2.5 rounded-xl transition-all text-sm"
                >
                  Próximo
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
