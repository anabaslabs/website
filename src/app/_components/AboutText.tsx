"use client";

import ScrollReveal from "../../components/ScrollReveal";
import { Highlighter } from "../../components/ui/highlighter";

export default function AboutText() {
  return (
    <div className="max-h-screen w-full font-lexend text-[32px] flex flex-col justify-start items-center bg-linear-to-b from-transparent to-muted/10">
      <div className="p-12">
        <div className="text-lg leading-relaxed">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={false}
            baseRotation={0}
            blurStrength={0}
          >
            AnabasLabs is a
          </ScrollReveal>{" "}
          <Highlighter action="underline" color="#ec4e0c">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={false}
              baseRotation={0}
              blurStrength={0}
            >
              software engineering studio
            </ScrollReveal>{" "}
          </Highlighter>
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={false}
            baseRotation={0}
            blurStrength={0}
          >
            , focused on building scalable, real-world systems for startups and
            businesses. We design and deploy
          </ScrollReveal>{" "}
          <Highlighter action="highlight" color="#ffd1dc">
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={false}
              baseRotation={0}
              blurStrength={0}
            >
              web platforms
            </ScrollReveal>
          </Highlighter>
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={false}
            baseRotation={0}
            blurStrength={0}
          >
            ,
          </ScrollReveal>{" "}
          <Highlighter action="highlight" color="#f1d7a6ff">
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={false}
              baseRotation={0}
              blurStrength={0}
            >
              mobile applications
            </ScrollReveal>
          </Highlighter>
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={false}
            baseRotation={0}
            blurStrength={0}
          >
            , and
          </ScrollReveal>{" "}
          <Highlighter action="highlight" color="#8eeeabff">
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={false}
              baseRotation={0}
              blurStrength={0}
            >
              AI-driven automation
            </ScrollReveal>
          </Highlighter>{" "}
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={false}
            baseRotation={0}
            blurStrength={0}
          >
            that are reliable, maintainable, and ready for real users. Our work
            begins with understanding the problem deeply. We study existing
            workflows, identify inefficiencies, and translate complex
            requirements into well-designed software systems. By combining
            robust backend architecture, intuitive user interfaces, and
            intelligent automation, we build solutions that support growth and
            long-term usability. We work with founders, startups, and growing
            businesses in India and globally, delivering software that
            simplifies operations, improves efficiency, and performs
            consistently in production. Our focus is simple: build the right
            system and make it work in the real world.
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
