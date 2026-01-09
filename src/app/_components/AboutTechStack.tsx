"use client";

import { Highlighter } from "@/components/ui/highlighter";
import LogoLoop from "@/components/LogoLoop";
import {
  siTypescript,
  siTailwindcss,
  siReact,
  siNextdotjs,
  siDocker,
  siFastapi,
  siGithub,
  siSupabase,
  siN8n,
  siCloudflare,
  siGooglecloud,
  siLangchain,
  siPython,
  siExpo,
  siLanggraph,
  siVercel,
  siGraphql,
  siWebrtc,
  siExpress,
  siTerraform,
  siRabbitmq,
  siPrisma,
  siRazer,
  siPostgresql,
  siMongodb,
  siRedis,
  siRazorpay,
  siSocketdotio,
} from "simple-icons";

const SimpleIcon = ({
  icon,
  size = 55,
}: {
  icon: typeof siTypescript;
  size?: number;
}) => (
  <div
    style={{
      width: size,
      height: size,
    }}
    dangerouslySetInnerHTML={{ __html: icon.svg }}
  />
);

const techLogos = [
  {
    node: <SimpleIcon icon={siTypescript} />,
  },
  {
    node: <SimpleIcon icon={siTailwindcss} />,
  },
  {
    node: <SimpleIcon icon={siReact} />,
  },
  {
    node: <SimpleIcon icon={siNextdotjs} />,
  },
  {
    node: <SimpleIcon icon={siPython} />,
  },
  {
    node: <SimpleIcon icon={siFastapi} />,
  },
  {
    node: <SimpleIcon icon={siN8n} />,
  },
  {
    node: <SimpleIcon icon={siExpo} />,
  },
  {
    node: <SimpleIcon icon={siLangchain} />,
  },
  {
    node: <SimpleIcon icon={siLanggraph} />,
  },
  {
    node: <SimpleIcon icon={siGithub} />,
  },
  {
    node: <SimpleIcon icon={siDocker} />,
  },
  {
    node: <SimpleIcon icon={siSupabase} />,
  },
  {
    node: <SimpleIcon icon={siCloudflare} />,
  },
  {
    node: <SimpleIcon icon={siGooglecloud} />,
  },
  {
    node: <SimpleIcon icon={siVercel} />,
  },
  {
    node: <SimpleIcon icon={siGraphql} />,
  },
  { node: <SimpleIcon icon={siWebrtc} /> },
  { node: <SimpleIcon icon={siExpress} /> },
  { node: <SimpleIcon icon={siTerraform} /> },
  { node: <SimpleIcon icon={siRabbitmq} /> },
  { node: <SimpleIcon icon={siPrisma} /> },
  { node: <SimpleIcon icon={siRazorpay} /> },
  { node: <SimpleIcon icon={siPostgresql} /> },
  { node: <SimpleIcon icon={siMongodb} /> },
  { node: <SimpleIcon icon={siRedis} /> },
  { node: <SimpleIcon icon={siSocketdotio} /> },
];

export default function AboutTechStack() {
  return (
    <>
      <div className="text-center text-xl md:text-2xl font-bold mb-4 md:mb-6 tracking-tight">
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
