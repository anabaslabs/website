import { ProjectCardProps } from "@/components/ui/project-card";
import {
  // IconBrandFigma,
  IconBrandGithub,
  IconBrandPython,
  // IconBrandVscode,
  IconPackage,
  IconWorld,
} from "@tabler/icons-react";

export const projects: ProjectCardProps[] = [
  // {
  //   title: "Anabas Labs Website",
  //   description:
  //     "Our website has a modern design showcasing services, projects, and contact details, optimized for performance and SEO.",
  //   dates: "Dec 2025 - Present",
  //   contributors: ["Anabas Labs Team"],
  //   tags: [
  //     "TypeScript",
  //     "Next.js",
  //     "Tailwind CSS",
  //     "shadcn/ui",
  //     "GSAP",
  //     "Framer Motion",
  //     "Three.js",
  //     "Vercel",
  //   ],
  //   links: [
  //     {
  //       type: "Website",
  //       href: "https://anabaslabs.com",
  //       icon: <IconWorld size={18} />,
  //     },
  //     {
  //       type: "GitHub",
  //       href: "https://github.com/anabaslabs/website",
  //       icon: <IconBrandGithub size={18} />,
  //     },
  //   ],
  //   href: "https://anabaslabs.com",
  //   image: "/banner.png",
  // },
  {
    title: "ARC",
    description:
      "ARC (Augmented Retrieval Chatbot) is an AI-powered document assistant (RAG) that lets you upload files and have accurate context-aware conversations about their content.",
    dates: "May 2026 - June, 2026",
    contributors: ["Saptarshi", "Krishnendu"],
    tags: [
      // Backend
      "Python",
      "FastAPI",
      "LangChain",
      "Gemini API",
      // Frontend
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "remark",
      "KaTeX",
      // Database
      "Pinecone",
      // Deploy
      "HuggingFace",
      "Vercel",
    ],
    links: [
      {
        type: "Website",
        href: "https://arc.anabaslabs.com",
        icon: <IconWorld size={18} />,
      },
      {
        type: "GitHub",
        href: "https://github.com/anabaslabs/ARC",
        icon: <IconBrandGithub size={18} />,
      },
    ],
    href: "https://arc.anabaslabs.com",
    image: "/projects/ARC.png",
  },
  {
    title: "Cipher",
    description:
      "Your all-in-one toolkit for Cipher Project. Encrypt, Decrypt, Run Frequency Analysis Attack and Generate Report with ease.",
    dates: "Feb 2026 - Mar 2026",
    contributors: ["Saptarshi", "Krishnendu"],
    tags: [
      // Backend
      "Python",
      "FastAPI",
      // Frontend
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Motion",
      // Deploy
      "Turborepo",
      "Vercel",
    ],
    links: [
      {
        type: "Website",
        href: "https://cipher.anabaslabs.com",
        icon: <IconWorld size={18} />,
      },
      {
        type: "GitHub",
        href: "https://github.com/anabaslabs/cipher",
        icon: <IconBrandGithub size={18} />,
      },
    ],
    href: "https://cipher.anabaslabs.com",
    image: "/projects/Cipher.png",
  },
  {
    title: "NoBG",
    description:
      "An open-source, full-stack application designed to automatically remove backgrounds from images.",
    dates: "Feb 2026 - Present",
    contributors: ["Krishnendu"],
    tags: [
      // Backend
      "Python",
      "Pillow",
      "Rembg",
      "Better Auth",
      "Prisma",
      "UploadThing",
      // Frontend
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      // Database
      "PostgreSQL",
      "Redis",
      // Deploy
      "Docker",
      "Turborepo",
    ],
    links: [
      {
        type: "Website",
        href: "https://nobg.itskdhere.com",
        icon: <IconWorld size={18} />,
      },
      {
        type: "GitHub",
        href: "https://github.com/itskdhere/NoBG",
        icon: <IconBrandGithub size={18} />,
      },
    ],
    href: "https://nobg.itskdhere.com",
    image: "/projects/NoBG.png",
  },
  {
    title: "Ranno",
    description:
      "A Python library that converts natural language into executable code & executes them for instant data processing & analysis.",
    dates: "Apr 2026 - May 2026",
    contributors: ["Saptarshi"],
    tags: [
      // Backend
      "Python",
      "FastAPI",
      "Pandas",
      "Magika",
      "Gemini API",
      // Frontend
      "TypeScript",
      "Next.js",
      "shadcn/ui",
      // Deploy
      "Hugging Face",
      "Vercel",
      "PyPI",
    ],
    links: [
      {
        type: "Website",
        href: "https://ranno.hirishi.in",
        icon: <IconWorld size={18} />,
      },
      {
        type: "PyPI Package",
        href: "https://pypi.org/project/ranno",
        icon: <IconBrandPython size={18} />,
      },
      {
        type: "GitHub",
        href: "https://github.com/saptarshiroy39/Ranno",
        icon: <IconBrandGithub size={18} />,
      },
    ],
    href: "https://ranno.hirishi.in",
    image: "/projects/Ranno.png",
  },
  {
    title: "Docker Storage Migration Tool",
    description:
      "A command-line utility for seamlessly exporting and importing Docker volumes and bind mounts.",
    dates: "Apr 2025 - Dec 2025",
    contributors: ["Krishnendu"],
    tags: [
      // Backend
      "Node.js",
      "Commander.js",
      "Docker Engine API",
      // Frontend
      "TypeScript",
      "Axios",
      "chalk",
      "ora",
    ],
    links: [
      {
        type: "NPM Package",
        href: "https://github.com/itskdhere/dsmt",
        icon: <IconPackage size={18} />,
      },
      {
        type: "GitHub",
        href: "https://github.com/itskdhere/dsmt",
        icon: <IconBrandGithub size={18} />,
      },
    ],
    href: "https://www.npmjs.com/package/dsmt",
    image: "/projects/DSMT.png",
  },
  {
    title: "Luna AI",
    description:
      "Luna AI is a multi-agent assistant that routes queries to specialized agents for research, coding, writing, and media generation through one unified interface.",
    dates: "Oct 2025 - Dec 2025",
    contributors: ["Saptarshi"],
    tags: [
      // Backend
      "Gemini API",
      "Veo 3.1",
      "Nano Banana",
      // Frontend
      "GitHub API",
      "Translate API",
      "YouTube API",
      "OpenWeatherMap",
      "SerpAPI",
      "VoiceRSS",
      // Deploy
      "n8n",
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/saptarshiroy39/Luna-AI",
        icon: <IconBrandGithub size={18} />,
      },
    ],
    href: "https://github.com/saptarshiroy39/Luna-AI",
    image: "/projects/Luna-AI.png",
  },
  // {
  //   title: "Innovate Bank (UI/UX)",
  //   description:
  //     "InnovateBank is a 75-year-old regional bank losing personal loan customers to digital banks and fintechs due to outdated processes and poor digital experiences.",
  //   dates: "Dec 2025 - Jan 2026",
  //   contributors: ["Krishnendu", "Saptarshi"],
  //   tags: ["Figma", "UI/UX Design", "Prototyping"],
  //   links: [
  //     {
  //       type: "Figma Design",
  //       href: "https://www.figma.com/design/sNDhHU7E3mKhRK1q9HwJLk/Innovate-Bank?node-id=1-2",
  //       icon: <IconBrandFigma size={18} />,
  //     },
  //   ],
  //   href: "https://www.figma.com/design/sNDhHU7E3mKhRK1q9HwJLk/Innovate-Bank?node-id=1-2",
  //   image: "/projects/InnovateBank.png",
  // },
  // {
  //   title: "Luxestay (UI/UX)",
  //   description:
  //     "A premium UI/UX design for a luxury villa booking platform with an intuitive booking app and a powerful admin dashboard for managing reservations and listings.",
  //   dates: "Dec 2025 - Jan 2026",
  //   contributors: ["Aayushman"],
  //   tags: ["Figma", "UI/UX Design", "Prototyping"],
  //   links: [
  //     {
  //       type: "Figma Design",
  //       href: "https://www.figma.com/design/o4ccatMJ2xFAWAn1UMpmZl/anabaslab-design?node-id=0-1&t=2ZfVN8umraPmHNNN-1",
  //       icon: <IconBrandFigma size={18} />,
  //     },
  //   ],
  //   href: "https://www.figma.com/design/o4ccatMJ2xFAWAn1UMpmZl/anabaslab-design?node-id=0-1&t=2ZfVN8umraPmHNNN-1",
  //   image: "/projects/Luxestay.jpeg",
  // },
];
