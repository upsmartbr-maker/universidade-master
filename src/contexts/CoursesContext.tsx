"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  Course,
  loadCourses,
  saveCourses,
  generateId,
  CourseCategory,
} from "@/lib/courses-data";

interface CoursesContextValue {
  courses: Course[];
  addCourse: (
    data: Omit<Course, "id" | "createdAt">
  ) => void;
  updateCourse: (id: string, data: Partial<Omit<Course, "id">>) => void;
  deleteCourse: (id: string) => void;
  getCategoryCount: (cat: CourseCategory) => number;
}

const CoursesContext = createContext<CoursesContextValue | null>(null);

export function CoursesProvider({ children }: { children: React.ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([]);

  // Hydrate from localStorage on client
  useEffect(() => {
    setCourses(loadCourses());
  }, []);

  // Persist on every change
  useEffect(() => {
    if (courses.length > 0) saveCourses(courses);
  }, [courses]);

  const addCourse = useCallback(
    (data: Omit<Course, "id" | "createdAt">) => {
      const newCourse: Course = {
        ...data,
        id: generateId(),
        createdAt: new Date().toISOString().split("T")[0],
      };
      setCourses((prev) => [...prev, newCourse]);
    },
    []
  );

  const updateCourse = useCallback(
    (id: string, data: Partial<Omit<Course, "id">>) => {
      setCourses((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...data } : c))
      );
    },
    []
  );

  const deleteCourse = useCallback((id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const getCategoryCount = useCallback(
    (cat: CourseCategory) =>
      courses.filter((c) => c.category === cat && c.status === "ativo").length,
    [courses]
  );

  return (
    <CoursesContext.Provider
      value={{ courses, addCourse, updateCourse, deleteCourse, getCategoryCount }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

export function useCourses() {
  const ctx = useContext(CoursesContext);
  if (!ctx) throw new Error("useCourses must be used within CoursesProvider");
  return ctx;
}
