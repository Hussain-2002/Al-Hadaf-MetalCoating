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
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const T = Trans; // alias for readability

// ──────────────────────────────────────────────
// SERVICE PAGE (Frontend Dynamic Slug Logic)
// ──────────────────────────────────────────────
const ITEM_H = 64; // Tailwind h-16 = 64px

// ✅ All 6 services with professional Lucide icons
const SERVICE_META = [
  { key: "powder", slug: "powder-coating", icon: Brush, label: "Powder Coating" },
  { key: "galvanizing", slug: "galvanizing", icon: ShieldCheck, label: "Galvanizing" },
  { key: "electroplating", slug: "electroplating", icon: Zap, label: "Electroplating" },
  { key: "tin", slug: "tin-plating", icon: Factory, label: "Tin Plating" },
  { key: "metal", slug: "metal-plating", icon: Layers, label: "Metal Plating" },
  { key: "antique", slug: "antique-finish", icon: Clock, label: "Antique Finish" },
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

  // 🔹 Translation helpers for i18n
  const titleFor = (key) => t(`serviceSection.items.${key}.title`);
  const descFor = (key) => t(`serviceSection.items.${key}.description`);
  const shortFor = (key) => t(`serviceSection.items.${key}.shortDesc`);

  // 🔹 Define mini-preview components for each service
  const ServiceComponents = {
    powder: () => (
      <ServiceDetail
        title={titleFor("powder")}
        desc={descFor("powder")}
        short={shortFor("powder")}
        color="linear-gradient(to right,#dc2626,#b91c1c)"
        route="/services/powder-coating"
      />
    ),
    galvanizing: () => (
      <ServiceDetail
        title={titleFor("galvanizing")}
        desc={descFor("galvanizing")}
        short={shortFor("galvanizing")}
        color="linear-gradient(to right,#0ea5a4,#0284c7)"
        route="/services/galvanizing"
      />
    ),
    electroplating: () => (
      <ServiceDetail
        title={titleFor("electroplating")}
        desc={descFor("electroplating")}
        short={shortFor("electroplating")}
        color="linear-gradient(to right,#7c3aed,#6d28d9)"
        route="/services/electroplating"
      />
    ),
    tin: () => (
      <ServiceDetail
        title={titleFor("tin")}
        desc={descFor("tin")}
        short={shortFor("tin")}
        color="linear-gradient(to right,#f59e0b,#d97706)"
        route="/services/tin-plating"
      />
    ),
    metal: () => (
      <ServiceDetail
        title={titleFor("metal")}
        desc={descFor("metal")}
        short={shortFor("metal")}
        color="linear-gradient(to right,#10b981,#047857)"
        route="/services/metal-plating"
      />
    ),
    antique: () => (
      <ServiceDetail
        title={titleFor("antique")}
        desc={descFor("antique")}
        short={shortFor("antique")}
        color="linear-gradient(to right,#92400e,#6b21a8)"
        route="/services/antique-finish"
      />
    ),
  };

  const Comp = ServiceComponents[SERVICE_META[selected].key];

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

          {/* Layout Split: Sidebar + Content */}
          <div className="flex gap-8">
            {/* LEFT SIDEBAR - Vertical Icon Tabs */}
            <TooltipProvider>
              <div className="relative">
                <div
                  className="relative w-20 flex flex-col items-center py-6"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {/* Highlight Cylinder */}
                  <div
                    className="absolute left-0 w-full rounded-l-full"
                    style={{
                      height: `${ITEM_H}px`,
                      transform: `translateY(${selected * ITEM_H}px)`,
                      transition: "transform 280ms cubic-bezier(.2,.9,.2,1)",
                      background:
                        "linear-gradient(90deg, rgba(220,38,38,0.12), rgba(99,102,241,0.08))",
                      zIndex: 1,
                    }}
                  />

                  {/* Icon Buttons */}
                  {SERVICE_META.map((s, idx) => {
                    const Icon = s.icon;
                    return (
                      <Tooltip key={s.key}>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => setSelected(idx)}
                            aria-pressed={idx === selected}
                            className={`relative z-10 w-full h-16 flex items-center justify-center transition-all duration-200 ${
                              idx === selected
                                ? "text-white scale-110"
                                : "text-gray-400 hover:text-gray-200"
                            }`}
                          >
                            <Icon
                              size={24}
                              className="transition-transform duration-300 hover:scale-125"
                            />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 text-white text-xs px-3 py-1 rounded-md shadow-md">
                          {s.label}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </TooltipProvider>

            {/* RIGHT PANEL - Dynamic Service Content */}
            <div className="flex-1">
              <Card
                className="w-full min-h-[420px] rounded-2xl overflow-hidden relative shadow-lg"
                style={{
                  background: "linear-gradient(180deg,#0b1220 0%, #111827 70%)",
                }}
              >
                {/* Background Accent */}
                <div
                  style={{
                    position: "absolute",
                    right: "-120px",
                    top: "-40px",
                    width: "360px",
                    height: "360px",
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.1), transparent 40%)",
                    filter: "blur(40px)",
                    zIndex: 0,
                  }}
                />
                <div className="relative z-10 px-8 py-12 md:py-20 text-white">
                  {/* Small Tag Label */}
                  <span className="inline-block mb-4 px-3 py-1 rounded-full text-sm text-gray-300 bg-white/10">
                    {t(`serviceSection.items.${SERVICE_META[selected].key}.title`)}
                  </span>

                  {/* Render Service Component */}
                  {Comp && <Comp />}
                </div>
              </Card>
            </div>
          </div>

          {/* Permalink info */}
          <div className="mt-6 text-sm text-gray-500">
            <span>Permalink: </span>
            <code className="bg-gray-100/20 px-2 py-1 rounded text-xs">
              {`/service/${SERVICE_META[selected].slug}`}
            </code>
            <span className="ml-4 text-xs text-gray-400">
              Click an icon or open the slug URL directly.
            </span>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

// ──────────────────────────────────────────────
// 🔹 Reusable Service Detail Component
// ──────────────────────────────────────────────
function ServiceDetail({ title, desc, short, color, route }) {
  return (
    <div className="max-w-3xl mx-auto text-left">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h2>
      <p className="text-gray-200 mb-6">{desc}</p>
      <p className="text-gray-300 mb-6">{short}</p>

      <div className="flex gap-3">
        {/* View More → navigates to full component like PowderCoating.jsx */}
        <Button
          onClick={() => (window.location.href = route)}
          className="px-5 py-2 transition-all hover:scale-105"
          style={{ background: color, color: "#fff" }}
        >
          <T i18nKey="serviceSection.viewMore">View More</T>
        </Button>

        {/* Get Quote → always goes to /contact */}
        <Button
          onClick={() => (window.location.href = "/contact")}
          className="px-5 py-2 border border-gray-500 transition-all hover:scale-105"
          style={{ background: "transparent", color: "#fff" }}
        >
          <T i18nKey="servicePage.quoteBtn">Get Quote</T>
        </Button>
      </div>
    </div>
  );
}