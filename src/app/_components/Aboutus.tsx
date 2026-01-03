import React from "react";
import TechStack from "./TechStack";
import About_Text from "./About_Text";
import Teamcard from "./Teamcard";
function Aboutus() {
  return (
    <div className="flex flex-col justify-start max-w-full items-center min-h-screen">
      <TechStack />
      <About_Text />
      <Teamcard />
    </div>
  );
}

export default Aboutus;