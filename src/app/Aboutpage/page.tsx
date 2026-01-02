import React from "react";
import TechStack from "../_components/TechStack";
import About_Text from "../_components/About_Text";
function Aboutpage() {
  return (
    <div className="flex flex-col justify-start max-w-full items-center min-h-screen">
      <TechStack />
      <About_Text />
    </div>
  );
}

export default Aboutpage;
