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
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 📢 Announcement Bar */}
      <div
        className={`relative w-full transition-all duration-400 
          ${isScrolled ? "bg-yellow-200 text-black" : "bg-white/70 text-black"}`}
      >
        {/* ✅ Desktop Layout */}
        <div className="hidden md:flex items-center justify-between px-6 py-2 text-sm font-medium">
          {/* Left: Location */}
          <a
            href="https://maps.app.goo.gl/LCmcG25VxgHods9c9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-yellow-300 transition hover:!text-[#646cff]"
          >
            <FaMapMarkerAlt className="text-lg" />
            <span>{t("header.location")}</span>
          </a>

          {/* Center: Marquee */}
          <div className="overflow-hidden h-6 w-[60%] text-center">
            <div className="animate-marquee-updown whitespace-nowrap">
              {/* {t("header.announcement")} */}
            </div>
          </div>

          
          
          {/* Right: Social Icons */}
          <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:!text-[#646cff]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/alhadafmetalcoating/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:!text-[#646cff]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

        {/* ✅ Mobile Layout */}
        <div className="flex md:hidden flex-col items-center gap-2 px-4 py-2 text-xs">
          <div className="w-full overflow-hidden text-center">
            <div className="animate-marquee-updown whitespace-nowrap">
              {t("header.announcement")}
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/LCmcG25VxgHods9c9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs hover:text-yellow-300 transition"
          >
            <FaMapMarkerAlt className="text-sm" />
            <span>{t("header.location")}</span>
          </a>

          <div className="flex gap-4 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/alhadafmetalcoating/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* 🔻 Main Header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between px-8 py-4">
          {/* Left Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.location.href = "/"}>
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

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-center px-4 py-3">
          <div className="flex items-center cursor-pointer" onClick={() => window.location.href = "/"}>
            <img
              src="/assets/logo.png"
              alt="Al-Hadaf Metal Coating LLC Logo"
              className="h-12 w-auto"
            />
          </div>

          <Drawer>
            <DrawerTrigger className="p-2 rounded text-white bg-yellow-500">
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
    </header>
  );
}

export default Header;