"use client";

import Image from "next/image";
import PixelBlast from "@/components/PixelBlast";
import { WordRotate } from "@/components/ui/word-rotate";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useHashScroll } from "@/lib/useHashScroll";
import { sections } from "@/components/NavBar";
import icon from "@/assets/icon.svg";

export default function Hero() {
  const { scrollToHash } = useHashScroll(sections);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToHash(href);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 mt-5 ml-5 md:ml-10 flex justify-center items-center gap-2">
        <Image src={icon} alt="Anabas Labs" width={34} height={34} />
        <p className="font-fredoka font-semibold text-primary text-2xl inline-block md:hidden lg:inline-block">
          Anabas Labs
        </p>
      </div>

      <div className="absolute inset-0 z-0 opacity-50 blur-[0.5px]">
        <PixelBlast
          color="#ec4e0c"
          variant="square"
          pixelSize={3}
          patternScale={2}
          patternDensity={0.5}
          pixelSizeJitter={0}
          speed={0.5}
          edgeFade={0.1}
          enableRipples={true}
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={0.5}
          liquidWobbleSpeed={2}
          transparent={true}
        />
      </div>

      <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex justify-center items-center gap-3 font-lexend text-3xl md:text-5xl mb-6 text-foreground font-semibold">
          <p>Empowering modern enterprises with  scalable software solutions.</p>
        </div>
       <div className="flex justify-center items-center gap-3 font-lexend text-2xl md:text-3xl mb-6 text-foreground font-semibold">
          <h1>We Build</h1>
           <WordRotate
            words={["Software", "Systems","Websites", "Apps", "Agents"]}
            className="text-primary"
          />
       </div>
        <h2 className="font-lora text-2xl md:text-3xl mb-8 text-muted-foreground font-semibold">
          Your Vision, Built with Precision.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mx-auto gap-4 sm:gap-14">
          <ShinyButton
            className="bg-secondary hover:bg-accent px-8 py-2 rounded-full"
            onClick={(e) => {
              handleNavClick("#about", e);
            }}
          >
            Learn More
          </ShinyButton>
          <InteractiveHoverButton
            className="bg-secondary"
            onClick={(e) => {
              handleNavClick("#contact", e);
            }}
          >
            Get in touch
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
