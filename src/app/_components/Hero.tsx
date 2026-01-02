"use client";

import Image from "next/image";
import PixelBlast from "@/components/PixelBlast";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import icon from "@/assets/icon.svg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
        <h1 className="font-lexend text-3xl md:text-5xl mb-6 text-foreground font-semibold">
          Turning real problems into scalable software.
        </h1>
        <h2 className="font-lora text-2xl md:text-3xl mb-8 text-muted-foreground font-semibold">
          Built publicly, Shipped properly.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mx-auto gap-4 sm:gap-14">
          <ShinyButton className="bg-secondary hover:bg-accent px-8 py-2 rounded-full">
            Learn More
          </ShinyButton>
          <InteractiveHoverButton className="bg-secondary">
            Get in touch
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
