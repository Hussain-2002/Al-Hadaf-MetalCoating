// ✅ src/pages/Service.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trans, useTranslation } from "react-i18next";
import {
  Brush,
  ShieldCheck,
  Zap,
  Factory,
  Layers,
  Clock,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// ✅ Import all 6 service components
import PowderCoating from "../Components/PowderCoating";
import Galvanizing from "../Components/Galvanizing";
import Electroplating from "../Components/Electroplating";
import TinPlating from "../Components/TinPlating";
import MetalPlating from "../Components/MetalPlating";
import AntiqueFinish from "../Components/AntiqueFinish";

const T = Trans; // alias for readability

// ──────────────────────────────────────────────
// SERVICE PAGE (Frontend Component Rendering)
// ──────────────────────────────────────────────
const ITEM_H = 64; // Tailwind h-16 = 64px

// ✅ All 6 services with professional Lucide icons
const SERVICE_META = [
  { key: "powder", slug: "powder-coating", icon: Brush, label: "Powder Coating", component: PowderCoating },
  { key: "galvanizing", slug: "galvanizing", icon: ShieldCheck, label: "Galvanizing", component: Galvanizing },
  { key: "electroplating", slug: "electroplating", icon: Zap, label: "Electroplating", component: Electroplating },
  { key: "tin", slug: "tin-plating", icon: Factory, label: "Tin Plating", component: TinPlating },
  { key: "metal", slug: "metal-plating", icon: Layers, label: "Metal Plating", component: MetalPlating },
  { key: "antique", slug: "antique-finish", icon: Clock, label: "Antique Finish", component: AntiqueFinish },
];

export default function ServicePage() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);

  // 🔹 Detect slug dynamically from URL path (frontend only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const slug = window.location.pathname.split("/").pop();
    const index = SERVICE_META.findIndex((s) => s.slug === slug);
    if (index >= 0) setSelected(index);
  }, []);

  // 🔹 Get the selected component
  const SelectedComponent = SERVICE_META[selected].component;

  // 🔹 Navigation functions
  const goToPrev = () => {
    setSelected((prev) => (prev > 0 ? prev - 1 : SERVICE_META.length - 1));
  };

  const goToNext = () => {
    setSelected((prev) => (prev < SERVICE_META.length - 1 ? prev + 1 : 0));
  };

  // ──────────────────────────────────────────────
  // UI Layout Section
  // ──────────────────────────────────────────────
  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="pt-36 pb-20">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Page Heading */}
          <div className="mb-10 text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">
              <T i18nKey="servicePage.heading">
                Surface Alchemy — Premium Finishes
              </T>
            </h1>
            <p className="text-sm text-gray-600">
              <T i18nKey="servicePage.sub">
                Choose a service to learn more about our capabilities.
              </T>
            </p>
          </div>

          {/* MOBILE HORIZONTAL NAVIGATION - Below heading */}
          <div className="block md:hidden mb-8">
            <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-full p-2 max-w-md mx-auto">
              {/* Left Arrow */}
              <button
                onClick={goToPrev}
                className="p-2 hover:bg-gray-200 rounded-full transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              {/* Center Icon (Selected Service) */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex-1 flex items-center justify-center py-3 px-4 bg-red-600 rounded-full">
                      {React.createElement(SERVICE_META[selected].icon, {
                        className: "w-6 h-6 text-white",
                      })}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-semibold">{SERVICE_META[selected].label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Right Arrow */}
              <button
                onClick={goToNext}
                className="p-2 hover:bg-gray-200 rounded-full transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Service Name Display */}
            <div className="text-center mt-3">
              <p className="text-sm font-semibold text-gray-700">
                {SERVICE_META[selected].label}
              </p>
            </div>
          </div>

          {/* DESKTOP LAYOUT: Sidebar + Content */}
          <div className="flex gap-8">
            {/* LEFT SIDEBAR - DESKTOP ONLY - Vertical with Arrows */}
            <div className="hidden md:flex flex-col items-center">
              {/* Up Arrow */}
              <button
                onClick={goToPrev}
                className="p-2 mb-2 hover:bg-gray-100 rounded-full transition-all"
              >
                <ChevronUp className="w-6 h-6 text-gray-700" />
              </button>

              {/* Middle Icon (Selected Service) */}
              <TooltipProvider>
                <div className="relative bg-gray-100 rounded-2xl p-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                        {React.createElement(SERVICE_META[selected].icon, {
                          className: "w-8 h-8 text-white",
                        })}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-gray-900 text-white px-3 py-2 rounded-md shadow-md">
                      <p className="font-semibold">{SERVICE_META[selected].label}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>

              {/* Down Arrow */}
              <button
                onClick={goToNext}
                className="p-2 mt-2 hover:bg-gray-100 rounded-full transition-all"
              >
                <ChevronDown className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* RIGHT PANEL - Dynamic Service Component */}
            <div className="flex-1">
              {/* Render the selected service component */}
              <SelectedComponent />
            </div>
          </div>

          {/* Permalink info */}
          <div className="mt-6 text-sm text-gray-500 text-center md:text-left">
            <span>Viewing: </span>
            <code className="bg-gray-100 px-2 py-1 rounded text-xs">
              {SERVICE_META[selected].label}
            </code>
            <span className="ml-4 text-xs text-gray-400">
              Use arrows to switch services.
            </span>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}