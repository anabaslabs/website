"use client";

import Link from "next/link";
import { CometCard } from "@/components/ui/comet-card";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";

const teamMembers = [
  {
    name: "Aayushman Bharadwaj",
    role: "Frontend Developer",
    image:
      "https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg",
    github: "https://github.com/AAYUSHMAN-BHARDWAJ1/",
    x: "https://x.com/Aayushman_bhard",
  },
  {
    name: "Krishnendu Das",
    role: "DevOps | FullStack",
    image:
      "https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg",
    github: "https://github.com/itskdhere/",
    x: "https://x.com/itskdhere",
  },
  {
    name: "Saptarshi Roy",
    role: "Agentic Developer",
    image:
      "https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg",
    github: "https://github.com/saptarshiroy39/",
    x: "https://x.com/saptarshiroy39",
  },
  {
    name: "Ankit Nayek",
    role: "Fullstack Developer",
    image:
      "https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg",
    github: "https://github.com/ankit-4623/",
    x: "https://x.com/ankit_nayek",
  },
  {
    name: "Tuhin Pramanik",
    role: "FullStack | Agents",
    image:
      "https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg",
    github: "https://github.com/tuhinpramanik4",
    x: "https://x.com/TuhinPramanik01",
  },
];

export default function AboutTeam() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-16 justify-center items-start w-full">
      {teamMembers.map((member, idx) => (
        <CometCard key={idx}>
          <div
            className="my-10 flex w-50 cursor-pointer flex-col items-stretch rounded-3xl bg-[#f7ceba] border border-r-4 border-black p-2"
            style={{
              transformStyle: "preserve-3d",
              transform: "none",
              opacity: 1,
            }}
          >
            <div className="mx-2 flex-1">
              <div className="relative mt-2 aspect-3/4 w-full">
                <img
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover contrast-75"
                  src={member.image}
                  alt={member.name}
                />
              </div>
            </div>

            <div className="mt-2 flex flex-col items-center p-4 font-mono text-black">
              <div className="text-xs">{member.name}</div>
              <div className="text-xs opacity-50">{member.role}</div>
            </div>

            <div className="w-full h-5 flex gap-5 justify-center items-center">
              <Link href={member.github} target="_blank">
                <IconBrandGithub size={22} />
              </Link>
              <Link href={member.x} target="_blank">
                <IconBrandX size={22} />
              </Link>
            </div>
          </div>
        </CometCard>
      ))}
    </div>
  );
}
