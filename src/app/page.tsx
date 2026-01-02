import About_Text from "./_components/About_Text";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen">
      <Hero />
      <About_Text />
    </main>
  );
}
