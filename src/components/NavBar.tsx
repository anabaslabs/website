"use client";

import PillNav from "@/components/PillNav";
import { useHashScroll, type SectionConfig } from "@/lib/useHashScroll";

export const navItems = [
  { label: "Home", href: "" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const sections: SectionConfig[] = [
  { id: "home", hash: "" },
  { id: "about", hash: "#about" },
  { id: "projects", hash: "#projects" },
  { id: "contact", hash: "#contact" },
];

export default function NavBar() {
  const { activeHash, scrollToHash } = useHashScroll(sections);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToHash(href);
  };

  return (
    <nav className="fixed flex justify-evenly items-center w-full mt-3.5 z-20">
      <PillNav
        items={navItems}
        activeHref={activeHash}
        onItemClick={handleNavClick}
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
