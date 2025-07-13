"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
    const isHovered = hoveredLink === href;
    const showUnderline = isHovered || (isActive && hoveredLink === null);

    return (
      <Link
        key={href}
        href={href}
        onClick={() => {
          setSearchOpen(false);
          setMobileMenuOpen(false);
        }}
        onMouseEnter={() => setHoveredLink(href)}
        onMouseLeave={() => setHoveredLink(null)}
        className={`
          relative uppercase text-base tracking-wide py-2
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Left Links */}
          <div className="hidden md:flex gap-6">{navItems.map(renderLink)}</div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6 text-black" />
              ) : (
                <FiMenu className="h-6 w-6 text-black" />
              )}
            </button>
          </div>

          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              setSearchOpen(false);
              setMobileMenuOpen(false);
            }}
            onMouseEnter={() => setHoveredLink("/")}
            onMouseLeave={() => setHoveredLink(null)}
            className={`
              relative uppercase text-lg sm:text-xl font-bold tracking-widest py-2
              ${pathname === "/" ? "text-black" : "text-gray-600"}
              hover:text-black
              after:absolute after:left-0 after:bottom-[-14px] after:h-[2px] after:w-full
              after:origin-left after:bg-black
              after:transition-transform after:duration-300
              ${
                (pathname === "/" && hoveredLink === null) ||
                hoveredLink === "/"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }
            `}
          >
            THE MODERN HOUSE
          </Link>

          {/* Right Links + Search */}
          <div className="hidden md:flex items-center gap-6">
            {rightLinks.map(renderLink)}
            <FiSearch
              onClick={() => setSearchOpen(true)}
              className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
            />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm">
            {navItems.map(renderLink)}
            {rightLinks.map(renderLink)}
            <div
              onClick={() => setSearchOpen(true)}
              className="mt-2 flex items-center gap-2 text-gray-600 hover:text-black cursor-pointer"
            >
              <FiSearch className="w-4 h-4" />
              <span>Search</span>
            </div>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <>
          <div
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 z-40 bg-black opacity-30 backdrop-blur-sm"
          />
          <div className="fixed top-[85px] left-1/2 transform -translate-x-1/2 z-50">
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="w-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 bg-white"
            />
          </div>
        </>
      )}
    </>
  );
};
