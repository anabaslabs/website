import React from "react";
import TechStack from "./TechStack";
import About_Text from "./About_Text";
import Teamcard from "./Teamcard";
function Aboutus() {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full   overflow-x-hidden">
      <div className="w-full flex flex-col items-center">
        <TechStack />
      </div>
      
     
      <div className="w-full max-w-full overflow-hidden flex justify-center">
        <About_Text />
      </div>

      <div className="w-full">
        <Teamcard />
      </div>
    </div>
  );
}

export default Aboutus;