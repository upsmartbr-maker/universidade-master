import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CategoriesSection from "@/components/CategoriesSection";
import EnrollmentForm from "@/components/EnrollmentForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DifferentialsSection />
        <CategoriesSection />
        <EnrollmentForm />
      </main>
      <Footer />
    </>
  );
}
