import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Certifications } from "@/components/Certifications";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
