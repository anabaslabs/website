import FuzzyText from "@/components/FuzzyText";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center gap-2 min-h-screen font-lexend"
    >
      <FuzzyText color="#ec4e0c">404</FuzzyText>
      <FuzzyText color="#ec4e0c">Not Found</FuzzyText>
    </main>
  );
}
