import Hero from "./_components/Hero";
import Aboutus from "./_components/Aboutus";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen">
      <Hero />
      <Aboutus />
    </main>
  );
}
