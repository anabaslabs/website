"use client";

import { Highlighter } from "@/components/ui/highlighter";

export default function AboutText() {
  return (
    <div className="w-full font-lexend text-[32px] flex flex-col justify-start items-center mt-2 bg-linear-to-b from-transparent to-muted/10">
      <div className="p-12">
        <div className="text-center text-3xl md:text-4xl font-bold mb-2 md:mb-3 tracking-tight">
          <Highlighter
            action="underline"
            color="#ec4e0c"
            strokeWidth={2}
            iterations={2}
            isView={true}
          >
            About
          </Highlighter>
        </div>

        <div className="font-semibold text-lg md:text-xl leading-relaxed tracking-wide">
          Anabas Labs is a software engineering studio dedicated to building
          scalable, real-world systems for startups and enterprises. We
          specialize in designing robust{" "}
          <Highlighter action="highlight" color="#FFC4C4" isView={true}>
            web platforms
          </Highlighter>
          , intuitive{" "}
          <Highlighter action="highlight" color="#E8D5B5" isView={true}>
            mobile applications
          </Highlighter>
          , and streamlined{" "}
          <Highlighter action="highlight" color="#C4D9FF" isView={true}>
            DevOps infrastructure
          </Highlighter>{" "}
          that ensures your product performs consistently. Beyond standard
          development, we integrate{" "}
          <Highlighter action="highlight" color="#86EFAC" isView={true}>
            AI-driven automation
          </Highlighter>{" "}
          to optimize workflows and future-proof your operations. Our approach
          combines deep technical expertise with a focus on long-term
          maintainability, delivering solutions that rely less on quick fixes
          and more on engineering excellence.
        </div>
      </div>
    </div>
  );
}
