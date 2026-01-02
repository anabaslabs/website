import Hero from "./_components/Hero";
import Aboutpage from "./Aboutpage/page";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen">
      <Hero />
      <Aboutpage />
    </main>
  );
}
