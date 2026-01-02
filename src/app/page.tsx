import About_Text from "./_components/About_Text";
import Hero from "./_components/Hero";
import TechStack from "./_components/TechStack";
export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen">
      <Hero />
      <TechStack />
      <About_Text />
    </main>
  );
}
