"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap, Plus, Pencil, Trash2, Search,
  ChevronDown, ChevronUp, Save, X, ShieldCheck,
  ArrowLeft, BookOpen, ToggleLeft, ToggleRight, AlertCircle
} from "lucide-react";
import { CATEGORIES, CourseCategory, getCategoryLabel } from "@/lib/courses-data";
import { useCourses } from "@/contexts/CoursesContext";
import type { Course } from "@/lib/courses-data";

const ADMIN_PIN = "master2025"; // ← Altere o PIN padrão aqui

// ──────────────────────────────────────────
// Login Gate
// ──────────────────────────────────────────
function LoginGate({ onAuth }: { onAuth: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      onAuth();
    } else {
      setError(true);
      setPin("");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-xl font-black text-gray-900 text-center mb-1">Área Administrativa</h2>
        <p className="text-sm text-gray-500 text-center mb-8">
          Universidade Master Educação
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Senha de Acesso
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => { setPin(e.target.value); setError(false); }}
              placeholder="Digite a senha..."
              className={`w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
                error ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-blue-500"
              }`}
              autoFocus
            />
            {error && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                Senha incorreta. Tente novamente.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Acessar Painel
          </button>
          <Link
            href="/"
            className="block text-center text-sm text-gray-500 hover:text-blue-700 transition-colors mt-2"
          >
            ← Voltar ao site
          </Link>
        </form>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// Course Form (add / edit)
// ──────────────────────────────────────────
function CourseForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Course;
  onSave: (data: Omit<Course, "id" | "createdAt">) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [category, setCategory] = useState<CourseCategory>(
    initial?.category ?? "bacharelado"
  );
  const [duration, setDuration] = useState(initial?.duration ?? "");
  const [workload, setWorkload] = useState(initial?.workload ?? "");
  const [status, setStatus] = useState<"ativo" | "inativo">(
    initial?.status ?? "ativo"
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !duration.trim() || !workload.trim()) return;
    onSave({ name: name.trim(), category, duration, workload, status });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-4"
    >
      <h4 className="font-bold text-blue-800 text-sm">
        {initial ? "✏️ Editando Curso" : "➕ Novo Curso"}
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Nome do Curso *
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Administração de Empresas"
            className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-3 py-2.5 text-sm outline-none transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Categoria *
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as CourseCategory)}
            className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-3 py-2.5 text-sm outline-none transition-colors bg-white"
          >
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Duração Estimada *
          </label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Ex: 2 anos"
            className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-3 py-2.5 text-sm outline-none transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Carga Horária *
          </label>
          <input
            value={workload}
            onChange={(e) => setWorkload(e.target.value)}
            placeholder="Ex: 1600h"
            className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-3 py-2.5 text-sm outline-none transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "ativo" | "inativo")}
            className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-3 py-2.5 text-sm outline-none transition-colors bg-white"
          >
            <option value="ativo">✅ Ativo</option>
            <option value="inativo">⛔ Inativo</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          className="flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
        >
          <Save className="w-4 h-4" />
          {initial ? "Salvar Alterações" : "Cadastrar Curso"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 text-sm font-medium transition-colors"
        >
          <X className="w-4 h-4" />
          Cancelar
        </button>
      </div>
    </form>
  );
}

// ──────────────────────────────────────────
// Main Admin Panel
// ──────────────────────────────────────────
export default function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const { courses, addCourse, updateCourse, deleteCourse } = useCourses();

  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState<CourseCategory | "">("");
  const [expandedCats, setExpandedCats] = useState<Set<string>>(new Set(CATEGORIES.map(c => c.id)));
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  if (!authed) {
    return <LoginGate onAuth={() => setAuthed(true)} />;
  }

  const filtered = courses.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === "" || c.category === filterCat;
    return matchSearch && matchCat;
  });

  const grouped = CATEGORIES.reduce<Record<string, Course[]>>((acc, cat) => {
    acc[cat.id] = filtered.filter((c) => c.category === cat.id);
    return acc;
  }, {});

  function toggleCat(catId: string) {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      next.has(catId) ? next.delete(catId) : next.add(catId);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-black text-gray-900 leading-none">Área Administrativa</h1>
              <p className="text-xs text-gray-500 leading-none">Universidade Master Educação</p>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Site
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total de Cursos", value: courses.length, color: "text-blue-700" },
            { label: "Cursos Ativos", value: courses.filter(c => c.status === "ativo").length, color: "text-emerald-600" },
            { label: "Cursos Inativos", value: courses.filter(c => c.status === "inativo").length, color: "text-gray-500" },
            { label: "Categorias", value: CATEGORIES.length, color: "text-violet-600" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
              <p className="text-xs text-gray-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar cursos..."
              className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 focus:border-blue-500 rounded-xl text-sm outline-none transition-colors"
            />
          </div>
          <select
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value as CourseCategory | "")}
            className="border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-colors bg-white"
          >
            <option value="">Todas as categorias</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
          <button
            onClick={() => { setShowForm(true); setEditingCourse(null); }}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Novo Curso
          </button>
        </div>

        {/* Add Form */}
        {showForm && !editingCourse && (
          <div className="mb-6">
            <CourseForm
              onSave={(data) => { addCourse(data); setShowForm(false); }}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        {/* Groups by category */}
        <div className="space-y-4">
          {CATEGORIES.map((cat) => {
            const catCourses = grouped[cat.id];
            if (catCourses.length === 0 && search === "" && filterCat === "") return null;
            if (catCourses.length === 0 && (search !== "" || filterCat !== "")) return null;

            const isExpanded = expandedCats.has(cat.id);

            return (
              <div key={cat.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Category header */}
                <button
                  onClick={() => toggleCat(cat.id)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-gray-900 text-sm">{cat.label}</span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {catCourses.length} {catCourses.length === 1 ? "curso" : "cursos"}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {/* Courses list */}
                {isExpanded && (
                  <div className="border-t border-gray-100">
                    {/* Edit form inline */}
                    {editingCourse && editingCourse.category === cat.id && (
                      <div className="p-4 bg-gray-50 border-b border-gray-100">
                        <CourseForm
                          initial={editingCourse}
                          onSave={(data) => {
                            updateCourse(editingCourse.id, data);
                            setEditingCourse(null);
                          }}
                          onCancel={() => setEditingCourse(null)}
                        />
                      </div>
                    )}

                    {catCourses.map((course, idx) => (
                      <div
                        key={course.id}
                        className={`flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-blue-50/30 ${
                          idx < catCourses.length - 1 ? "border-b border-gray-50" : ""
                        }`}
                      >
                        {/* Status toggle */}
                        <button
                          onClick={() =>
                            updateCourse(course.id, {
                              status: course.status === "ativo" ? "inativo" : "ativo",
                            })
                          }
                          title="Alternar status"
                          className="flex-shrink-0"
                        >
                          {course.status === "ativo" ? (
                            <ToggleRight className="w-5 h-5 text-emerald-500" />
                          ) : (
                            <ToggleLeft className="w-5 h-5 text-gray-400" />
                          )}
                        </button>

                        {/* Course info */}
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-sm font-semibold truncate ${
                              course.status === "inativo" ? "text-gray-400 line-through" : "text-gray-900"
                            }`}
                          >
                            {course.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {course.duration} · {course.workload}
                          </p>
                        </div>

                        {/* Status badge */}
                        <span
                          className={`hidden sm:inline-block text-xs font-bold px-2.5 py-0.5 rounded-full flex-shrink-0 ${
                            course.status === "ativo"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {course.status === "ativo" ? "Ativo" : "Inativo"}
                        </span>

                        {/* Actions */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <button
                            onClick={() => {
                              setEditingCourse(course);
                              setShowForm(false);
                            }}
                            className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Editar"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          {deleteConfirm === course.id ? (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => { deleteCourse(course.id); setDeleteConfirm(null); }}
                                className="text-xs font-bold text-red-600 hover:bg-red-50 px-2 py-1 rounded-lg transition-colors"
                              >
                                Confirmar
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="text-xs text-gray-500 hover:text-gray-700 px-1"
                              >
                                Cancelar
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirm(course.id)}
                              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Excluir"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="font-semibold">Nenhum curso encontrado.</p>
            <p className="text-sm">Tente ajustar os filtros ou cadastre um novo curso.</p>
          </div>
        )}
      </div>
    </div>
  );
}
