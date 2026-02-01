"use client";

import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";
import { CometCard } from "@/components/ui/comet-card";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import Image from "next/image";
import srphoto from "@/assets/sr.jpeg";
import kdphoto from "@/assets/kd.jpeg";
import anphoto from "@/assets/an.jpeg";
import abphoto from "@/assets/ab.jpeg";
import tpphoto from "@/assets/tp.jpeg";
const teamMembers = [
  {
    name: "Aayushman Bhardwaj",
    email: "aayushman@anabaslabs.com",
    role: "Frontend Developer",
    image: abphoto,
    github: "https://github.com/AAYUSHMAN-BHARDWAJ1",
    x: "https://x.com/Aayushman_bhard",
  },
  {
    name: "Ankit Nayek",
    email: "ankit@anabaslabs.com",
    role: "Full-Stack Developer",
    image: anphoto,
    github: "https://github.com/ankit-4623",
    x: "https://x.com/ankit_nayek",
  },
  {
    name: "Krishnendu Das",
    email: "krishnendu@anabaslabs.com",
    role: "DevOps | Full-Stack",
    image: kdphoto,
    github: "https://github.com/itskdhere",
    x: "https://x.com/itskdhere",
  },
  {
    name: "Saptarshi Roy",
    email: "saptarshi@anabaslabs.com",
    role: "Gen AI | Automation",
    image: srphoto,
    github: "https://github.com/saptarshiroy39",
    x: "https://x.com/saptarshiroy39",
  },
  {
    name: "Tuhin Pramanik",
    email: "tuhin@anabaslabs.com",
    role: "Full-Stack | Agents",
    image: tpphoto,
    github: "https://github.com/tuhinpramanik4",
    x: "https://x.com/TuhinPramanik01",
  },
];

export default function AboutTeam() {
  return (
    <>
      <div className="text-center text-xl md:text-2xl font-bold mt-14 tracking-tight">
        <Highlighter
          action="box"
          color="#ec4e0c"
          strokeWidth={2}
          iterations={1}
          isView={true}
        >
          Who are behind Anabas Labs?
        </Highlighter>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-16 justify-center items-start w-full">
        {teamMembers.map((member, id) => (
          <CometCard key={id}>
            <div
              className="my-10 flex w-54 cursor-pointer flex-col items-stretch rounded-3xl bg-[#f7ceba] border border-r-4 border-black p-1"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative h-50 mt-2 aspect-3/4 w-full">
                  <Image
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-3xl object-cover contrast-75"
                    src={member.image}
                    alt={member.name}
                    fill
                  />
                </div>
              </div>

              <div className="mt-2 flex flex-col items-center p-2 font-mono text-black">
                <div className="text-md">{member.name}</div>
                <div className="text-xs opacity-50">({member.email})</div>
                <div className="text-sm opacity-50">{member.role}</div>
              </div>

              <div className="w-full my-3 h-5 flex gap-5 justify-center items-center">
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
    </>
  );
}
