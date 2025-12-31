"use client";

import PixelBlast from "@/components/PixelBlast";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60 blur-[0.5px]">
        <PixelBlast
          color="#ec4e0c"
          variant="square"
          pixelSize={3}
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          speed={0.5}
          edgeFade={0.3}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-lexend text-3xl md:text-5xl font-bold text-foreground mb-6">
          Turning real problems into scalable software.
        </h1>
        <h2 className="font-lora text-2xl md:text-3xl text-muted-foreground mb-8">
          Built publicly, Shipped properly.
        </h2>
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
}
