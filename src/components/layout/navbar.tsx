"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Handle blur + scroll-snap interaction
  useEffect(() => {
    const main = document.getElementById("page-wrapper");
    const content = document.getElementById("main-content");

    if (!main || !content) return;

    if (searchOpen) {
      main.style.overflowY = "hidden";
      main.style.scrollSnapType = "none";
      content.style.height = `${window.innerHeight}px`;
      content.classList.add("blur-on", "pointer-events-none");
      content.classList.remove("blur-off");
    } else {
      main.style.overflowY = "scroll";
      main.style.scrollSnapType = "y mandatory";
      content.style.height = "";
      content.classList.remove("blur-on");
      content.classList.add("blur-off");
      content.classList.remove("pointer-events-none");
    }
  }, [searchOpen]);

  const navItems = [
    { label: "BUY", href: "/buy" },
    { label: "SELL", href: "/sell" },
    { label: "JOURNAL", href: "/journal" },
  ];

  const rightLinks = [
    { label: "ABOUT", href: "/about" },
    { label: "SUBSCRIBE", href: "/subscribe" },
  ];

  const renderLink = ({ label, href }: { label: string; href: string }) => {
    const isActive = pathname === href;
    const showUnderline = hovered === href || (!hovered && isActive);

    return (
      <Link
        key={href}
        href={href}
        onClick={() => setSearchOpen(false)}
        onMouseEnter={() => setHovered(href)}
        onMouseLeave={() => setHovered(null)}
        className={`
          relative uppercase text-lg tracking-wide 
          ${isActive ? "text-black" : "text-gray-600"} 
          hover:text-black
          after:absolute after:left-0 after:bottom-[-16px] after:w-full after:h-[2px]
          after:origin-left after:bg-black
          after:transition-transform after:duration-300
          ${showUnderline ? "after:scale-x-100" : "after:scale-x-0"}
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm font-medium tracking-wide text-black uppercase">
          {/* Left Links */}
          <div className="flex gap-6 relative">{navItems.map(renderLink)}</div>

          {/* Center Logo */}
          <Link
            href="/"
            onClick={() => setSearchOpen(false)}
            onMouseEnter={() => setHovered("/")}
            onMouseLeave={() => setHovered(null)}
            className={`
              relative uppercase text-xl font-bold tracking-widest
              transition-opacity duration-200 hover:opacity-80
              after:absolute after:left-0 after:bottom-[-16px] after:h-[2px] after:w-full
              after:origin-left after:bg-black
              after:transition-transform after:duration-300
              ${
                hovered === "/"
                  ? "after:scale-x-100 text-black"
                  : pathname === "/" && !hovered
                  ? "after:scale-x-100 text-black"
                  : "after:scale-x-0 text-gray-600"
              }
            `}
          >
            THE MODERN HOUSE
          </Link>

          {/* Right Links */}
          <div className="flex items-center gap-6 relative">
            {rightLinks.map(renderLink)}
            <FiSearch
              onClick={() => setSearchOpen(true)}
              className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity duration-200"
            />
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <>
          {/* Dim Background */}
          <div
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 z-40 bg-black transition-opacity duration-500 opacity-30 backdrop-blur-sm"
          />

          {/* Input Field */}
          <div className="fixed top-[85px] left-1/2 transform -translate-x-1/2 z-50">
            <input
              type="text"
              placeholder="Search..."
              tabIndex={-1}
              onFocus={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              autoFocus
              className="w-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 bg-white"
            />
          </div>
        </>
      )}
    </>
  );
};
