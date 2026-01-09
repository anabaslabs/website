import AboutTechStack from "./AboutTechStack";
import AboutText from "./AboutText";
import AboutTeam from "./AboutTeam";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-start items-center min-h-screen w-full overflow-x-hidden"
    >
      <div className="w-full max-w-full overflow-hidden flex justify-center">
        <AboutText />
      </div>

      <div className="w-full flex flex-col items-center">
        <AboutTechStack />
      </div>

      <div className="w-full">
        <AboutTeam />
      </div>
    </section>
  );
}
