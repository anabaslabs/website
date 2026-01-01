"use client";

import Image from "next/image";
import PixelBlast from "@/components/PixelBlast";
import Icon from "@/assets/icon.svg";

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Image
          src={Icon}
          alt="Anabas Labs"
          width={150}
          height={150}
          className="mx-auto mb-5"
        />
        <h1 className="font-fredoka font-semibold text-3xl md:text-5xl  text-primary mb-6">
          Anabas Labs
        </h1>
        <h2 className="font-lexend opacity-75 text-2xl md:text-3xl text-foreground mb-8">
          Coming Soon...
        </h2>
      </div>
    </section>
  );
}
