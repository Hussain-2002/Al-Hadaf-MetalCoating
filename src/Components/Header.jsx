// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import StickyContactButtons from "./StickyContactButtons";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.ralchart"), href: "/ralchart" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.testimonials"), href: "/testimonials" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 📻 Main Header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white shadow-md md:bg-transparent md:shadow-none"
        }`}
      >
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between px-6 py-2 -mt-2 scale-95">
          {/* Left Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="/assets/logo.png"
              alt="Al-Hadaf Metal Coating LLC Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Center Nav */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4 lg:space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name} className="flex-shrink-0">
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={`relative px-2 lg:px-3 py-1 font-medium whitespace-nowrap transition-all duration-300 ${
                          isScrolled ? "text-black" : "text-white"
                        } 
                          hover:text-yellow-500
                          after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-500 
                          after:transition-all after:duration-300 hover:after:w-full`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right CTA */}
          <div className="flex items-center">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-md bg-red-500 text-white font-semibold text-sm md:text-base hover:bg-red-900 transition shadow-sm"
            >
              {t("header.enquireNow")}
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Fixed Height */}
        <div className="flex md:hidden justify-between items-center px-3 py-2 h-[60px]">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="/assets/logo.png"
              alt="Al-Hadaf Metal Coating LLC Logo"
              className="h-10 w-auto"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Sticky Contact Buttons - Mobile Only */}
            <StickyContactButtons />

            <Drawer>
              <DrawerTrigger className="p-1.5 rounded text-white bg-yellow-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </DrawerTrigger>
              <DrawerContent className="bg-white p-6">
                <DrawerHeader>
                  <DrawerTitle className="text-lg font-bold text-gray-800">
                    {t("header.menu")}
                  </DrawerTitle>
                </DrawerHeader>
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-800 font-medium hover:text-yellow-500 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 border-t pt-4">
                  <Link
                    to="/contact"
                    className="w-full block text-center px-6 py-2.5 rounded-md bg-red-500 text-white font-semibold text-base hover:bg-yellow-600 transition shadow-sm"
                  >
                    {t("header.enquireNow")}
                  </Link>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;