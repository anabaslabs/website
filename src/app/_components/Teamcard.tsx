"use client";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
function Teamcard() {
  return (
    <div className="flex flex-wrap  gap-14 justify-center items-start w-full ">
      <CometCard>
        <button
          type="button"
          className="my-10 flex w-50 cursor-pointer flex-col items-stretch rounded-[16px]  bg-[#f7ceba] border border-r-4 border-black
 p-2  "
          aria-label="View invite F7RA"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
            opacity: 1,
          }}
        >
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-[3/4] w-full">
              <img
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-[16px]  object-cover contrast-75"
                alt="Invite background"
                src="https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg"
                style={{
                  opacity: 5,
                }}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-col flex-shrink-0 items-center justify-between p-4 font-mono text-black">
            <div className="text-xs">Aayushman Bharadwaj</div>
            <div className="text-xs text-black opacity-50">
              Frontend Developer
            </div>
          </div>
          <div className="w-full h-5 flex gap-5 justify-center items-center">
            <Link href="https://github.com/AAYUSHMAN-BHARDWAJ1/" target="_blank">
  <FaGithub size={26} />
</Link>
<Link href="https://x.com/Aayushman_bhard" target="_blank">
  <FaSquareXTwitter size={26}/>
</Link>
          </div>
        </button>
      </CometCard>
      <CometCard>
        <button
          type="button"
          className="my-10 flex w-50 cursor-pointer flex-col items-stretch rounded-[16px] bg-[#f7ceba] border border-r-4 border-black p-2  "
          aria-label="View invite F7RA"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
            opacity: 1,
          }}
        >
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-[3/4] w-full">
              <img
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                alt="Invite background"
                src="https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                  opacity: 1,
                }}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center justify-between p-4 font-mono text-black">
            <div className="text-xs">Krishnendu Das</div>
            <div className="text-xs text-black opacity-50">
              DevOps | Fullstack{" "}
            </div>
          </div>
          <div className="w-full h-5 flex gap-5 justify-center items-center">
            <Link href="https://github.com/itskdhere/" target="_blank">
  <FaGithub size={26} />
</Link>
<Link href="https://x.com/itskdhere" target="_blank">
  <FaSquareXTwitter size={26}/>
</Link>
          </div>
        </button>
      </CometCard>
      <CometCard>
        <button
          type="button"
          className="my-10 flex w-50 cursor-pointer flex-col items-stretch rounded-[16px] bg-[#f7ceba] border border-r-4 border-black p-2 "
          aria-label="View invite F7RA"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
            opacity: 1,
          }}
        >
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-[3/4] w-full">
              <img
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                alt="Invite background"
                src="https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                  opacity: 1,
                }}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center justify-between p-4 font-mono text-black">
            <div className="text-xs">Saptarshi Roy</div>
            <div className="text-xs text-black opacity-50">
              Agentic Developer
            </div>
          </div>
          <div className="w-full h-5 flex gap-5 justify-center items-center">
            <Link href="https://github.com/saptarshiroy39/" target="_blank">
  <FaGithub size={26} />
</Link>
<Link href="https://x.com/saptarshiroy39" target="_blank">
  <FaSquareXTwitter size={26}/>
</Link>
          </div>
        </button>
      </CometCard>
      <CometCard>
        <button
          type="button"
          className="my-10 flex w-50 cursor-pointer flex-col items-stretch rounded-[16px] bg-[#f7ceba] border border-r-4 border-black p-2 "
          aria-label="View invite F7RA"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
            opacity: 1,
          }}
        >
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-[3/4] w-full">
              <img
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                alt="Invite background"
                src="https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                  opacity: 1,
                }}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center justify-between p-4 font-mono text-black">
            <div className="text-xs">Ankit Nayek</div>
            <div className="text-xs text-black opacity-50">
              Fullstack Developer
            </div>
          </div>
          <div className="w-full h-5 flex gap-5 justify-center items-center">
            <Link href="https://github.com/ankit-4623/" target="_blank">
  <FaGithub size={26} />
</Link>
<Link href="https://x.com/ankit_nayek" target="_blank">
  <FaSquareXTwitter size={26}/>
</Link>
          </div>
        </button>
      </CometCard>
      <CometCard>
        <button
          type="button"
          className="my-10 flex w-50 cursor-pointer flex-col items-stretch rounded-[16px] bg-[#f7ceba] border border-r-4 border-black p-2  "
          aria-label="View invite F7RA"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
            opacity: 1,
          }}
        >
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-[3/4] w-full">
              <img
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                alt="Invite background"
                src="https://i.pinimg.com/736x/d2/7e/91/d27e91a0eefd866d4f8ab64b4de1e742.jpg"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                  opacity: 1,
                }}
              />
            </div>
          </div>
          <div className=" flex flex-col items-center justify-between p-4 font-mono text-black">
            <div className="text-xs">Tuhin Pramanik</div>
            <div className="text-xs text-black opacity-50">
              FullStack | Agents
            </div>
          </div>
          <div className="w-full h-5 flex gap-5 justify-center items-center">
            <Link href="https://github.com/tuhinpramanik4" target="_blank">
  <FaGithub size={26} />
</Link>
<Link href="https://x.com/TuhinPramanik01" target="_blank">
  <FaSquareXTwitter size={26}/>
</Link>
          </div>
        </button>
      </CometCard>
    </div>
  );
}

export default Teamcard;