"use client";

import PixelBlast from "@/components/PixelBlast";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="flex justify-center items-center mx-auto gap-14">
          <ShinyButton className="bg-secondary hover:bg-accent py-2.5 rounded-full">
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
