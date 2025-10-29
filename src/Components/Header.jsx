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
    <header className="w-full">
      {/* 🔻 Main Header - ALWAYS TRANSPARENT */}
      <div className="transition-all duration-300 bg-transparent">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between px-8 py-4">
          {/* Left Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.location.href = "/"}>
            <img
              src="/assets/logo.png"
              alt="Al-Hadaf Metal Coating LLC Logo"
              className="h-20 w-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8)) drop-shadow(0 0 4px rgba(0,0,0,0.8))'
              }}
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
                        className="relative px-2 lg:px-3 py-1 font-bold whitespace-nowrap transition-all duration-300 text-white hover:text-red-500 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                        style={{
                          textShadow: '0 0 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7), 0 0 2px rgba(255,255,255,0.9), 2px 2px 4px rgba(0,0,0,0.8)'
                        }}
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
              className="px-6 py-2.5 rounded-md bg-red-500 text-white font-semibold text-sm md:text-base hover:bg-red-700 transition shadow-2xl border-2 border-white/30"
              style={{
                boxShadow: '0 4px 20px rgba(239, 68, 68, 0.5), 0 0 10px rgba(255,255,255,0.3)'
              }}
            >
              {t("header.enquireNow")}
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-center px-4 py-3">
          <div className="flex items-center cursor-pointer" onClick={() => window.location.href = "/"}>
            <img
              src="/assets/logo.png"
              alt="Al-Hadaf Metal Coating LLC Logo"
              className="h-12 w-auto"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.8)) drop-shadow(0 0 3px rgba(0,0,0,0.8))'
              }}
            />
          </div>

          <Drawer>
            <DrawerTrigger 
              className="p-2 rounded text-white bg-red-500 font-bold text-xl shadow-lg border-2 border-white/30"
              style={{
                boxShadow: '0 4px 15px rgba(239, 68, 68, 0.5)'
              }}
            >
              ☰
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
                    className="text-gray-800 font-medium hover:text-red-500 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 border-t pt-4">
                <Link
                  to="/contact"
                  className="w-full block text-center px-6 py-2.5 rounded-md bg-red-500 text-white font-semibold text-base hover:bg-red-700 transition shadow-sm"
                >
                  {t("header.enquireNow")}
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

export default Header;