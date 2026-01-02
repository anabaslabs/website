"use client";

import { usePathname } from "next/navigation";
import PillNav from "@/components/PillNav";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed flex justify-evenly items-center w-full mt-3.5 z-20">
      <PillNav
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/Aboutpage" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref={pathname}
        ease="power2.easeOut"
        baseColor="#fdf2ed" // f7ceba
        pillColor="#fdf2ed"
        activeColor="#ec4e0c"
        activeBgColor="#faddd1"
        hoveredPillTextColor="#ec4e0c"
        pillTextColor="#000000"
        initialLoadAnimation={false}
        className="font-lexend font-medium opacity-95"
      />
    </nav>
  );
}
