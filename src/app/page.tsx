import { ScrollProgress } from "@/components/ui/scroll-progress";
import ClickSpark from "@/components/ClickSpark";
import NavBar from "@/components/NavBar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress className="z-999" />
      <ClickSpark
        sparkColor="#ec4e0c"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <NavBar />
        <main className="flex flex-col justify-start items-center min-h-screen">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <footer>
          <p className="font-lexend w-full text-center py-4 text-sm text-gray-500">
            &copy; 2025-
            <span suppressHydrationWarning>
              {new Date().getFullYear()}
            </span>{" "}
            Anabas Labs. All rights reserved.
          </p>
        </footer>
      </ClickSpark>
    </>
  );
}
