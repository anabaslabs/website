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

export const techLogos = [
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
