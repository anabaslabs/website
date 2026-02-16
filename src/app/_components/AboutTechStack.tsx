"use client";

import { Highlighter } from "@/components/ui/highlighter";
import LogoLoop from "@/components/LogoLoop";
import { techLogos } from "@/data/tech-stack";

export default function AboutTechStack() {
  return (
    <>
      <div className="text-center text-xl md:text-2xl font-bold mb-4 md:mb-6 mt-2 tracking-tight">
        <Highlighter
          action="box"
          color="#ec4e0c"
          strokeWidth={2}
          iterations={1}
          isView={true}
        >
          What technologies do we work with?
        </Highlighter>
      </div>

      <div className="h-20 relative overflow-hidden w-full from-muted/50 via-background to-muted/50 flex  justify-center items-center">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={55}
          gap={50}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut={false}
          fadeOutColor="#ffffff"
          ariaLabel="Our Tech Stack Logos"
        />
      </div>
    </>
  );
}
