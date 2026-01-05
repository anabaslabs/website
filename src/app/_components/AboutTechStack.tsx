"use client";

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
} from "simple-icons";

const SimpleIcon = ({
  icon,
  size = 60,
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
    node: <SimpleIcon icon={siDocker} />,
  },
  {
    node: <SimpleIcon icon={siFastapi} />,
  },
  {
    node: <SimpleIcon icon={siGithub} />,
  },
  {
    node: <SimpleIcon icon={siSupabase} />,
  },
  {
    node: <SimpleIcon icon={siN8n} />,
  },
  {
    node: <SimpleIcon icon={siCloudflare} />,
  },
  {
    node: <SimpleIcon icon={siGooglecloud} />,
  },
];

export default function AboutTechStack() {
  return (
    <div className="h-17.5 relative overflow-hidden w-full  from-muted/50 via-background to-muted/50 flex  justify-center items-center">
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover={true}
        fadeOut={false}
        fadeOutColor="#ffffff"
        ariaLabel="Our Tech Stack Logos"
      />
    </div>
  );
}
