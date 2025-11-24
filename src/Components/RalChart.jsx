import React, { useState, useRef, useEffect } from "react";
import { Download, Grid3X3, Box, X, FileDown } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
const RAL_CATEGORIES = {
  "Yellows": [
    { code: "RAL 1000", hex: "#BEBD7F", name: "Green Beige" },
    { code: "RAL 1001", hex: "#CCB985", name: "Beige" },
    { code: "RAL 1002", hex: "#C6A664", name: "Sand Yellow" },
    { code: "RAL 1003", hex: "#E5BE01", name: "Signal Yellow" },
    { code: "RAL 1004", hex: "#CDA434", name: "Golden Yellow" },
    { code: "RAL 1005", hex: "#A98307", name: "Honey Yellow" },
    { code: "RAL 1006", hex: "#E4A010", name: "Maize Yellow" },
    { code: "RAL 1007", hex: "#DC9D00", name: "Chrome Yellow" },
    { code: "RAL 1011", hex: "#8A6642", name: "Brown Beige" },
    { code: "RAL 1012", hex: "#C7B446", name: "Lemon Yellow" },
    { code: "RAL 1013", hex: "#EAE6CA", name: "Oyster White" },
    { code: "RAL 1014", hex: "#E1CC4F", name: "Ivory" },
    { code: "RAL 1015", hex: "#E6D690", name: "Light Ivory" },
    { code: "RAL 1016", hex: "#EDFF21", name: "Sulfur Yellow" },
    { code: "RAL 1017", hex: "#F5D033", name: "Saffron Yellow" },
    { code: "RAL 1018", hex: "#F8F32B", name: "Zinc Yellow" },
    { code: "RAL 1019", hex: "#9E9764", name: "Grey Beige" },
    { code: "RAL 1020", hex: "#999950", name: "Olive Yellow" },
    { code: "RAL 1021", hex: "#F3DA0B", name: "Rape Yellow" },
    { code: "RAL 1023", hex: "#FAD201", name: "Traffic Yellow" },
    { code: "RAL 1024", hex: "#AEA04B", name: "Ochre Yellow" },
    { code: "RAL 1027", hex: "#9D9101", name: "Curry" },
    { code: "RAL 1028", hex: "#F4A900", name: "Melon Yellow" },
    { code: "RAL 1032", hex: "#D6AE01", name: "Brown Yellow" },
    { code: "RAL 1033", hex: "#F3A505", name: "Dahlia Yellow" },
    { code: "RAL 1034", hex: "#EFA94A", name: "Pastel Yellow" },
  ],
  "Oranges": [
    { code: "RAL 2000", hex: "#ED760E", name: "Yellow Orange" },
    { code: "RAL 2001", hex: "#C93C20", name: "Red Orange" },
    { code: "RAL 2002", hex: "#CB2821", name: "Vermillion" },
    { code: "RAL 2003", hex: "#FF7514", name: "Pastel Orange" },
    { code: "RAL 2004", hex: "#F44611", name: "Pure Orange" },
    { code: "RAL 2005", hex: "#FF2301", name: "Bright Red Orange" },
    { code: "RAL 2008", hex: "#F75E25", name: "Traffic Orange" },
    { code: "RAL 2009", hex: "#F54021", name: "Signal Orange" },
    { code: "RAL 2011", hex: "#EC7C26", name: "Deep Orange" },
    { code: "RAL 2012", hex: "#E55137", name: "Salmon Orange" },
  ],
  "Reds & Pinks": [
    { code: "RAL 3000", hex: "#A2231D", name: "Flame Red" },
    { code: "RAL 3001", hex: "#A52019", name: "Signal Red" },
    { code: "RAL 3002", hex: "#A2231D", name: "Carmine Red" },
    { code: "RAL 3003", hex: "#9B111E", name: "Ruby Red" },
    { code: "RAL 3004", hex: "#75151E", name: "Purple Red" },
    { code: "RAL 3005", hex: "#5E2129", name: "Wine Red" },
    { code: "RAL 3007", hex: "#412227", name: "Black Red" },
    { code: "RAL 3009", hex: "#642424", name: "Oxide Red" },
    { code: "RAL 3011", hex: "#781F19", name: "Brown Red" },
    { code: "RAL 3012", hex: "#C1876B", name: "Beige Red" },
    { code: "RAL 3013", hex: "#A12312", name: "Tomato Red" },
    { code: "RAL 3014", hex: "#D36E70", name: "Antique Pink" },
    { code: "RAL 3015", hex: "#EA899A", name: "Light Pink" },
    { code: "RAL 3016", hex: "#B32821", name: "Coral Red" },
    { code: "RAL 3017", hex: "#E63244", name: "Rose" },
    { code: "RAL 3018", hex: "#D53032", name: "Strawberry Red" },
    { code: "RAL 3020", hex: "#CC0605", name: "Traffic Red" },
    { code: "RAL 3022", hex: "#D95030", name: "Salmon Pink" },
    { code: "RAL 3027", hex: "#C51D34", name: "Raspberry Red" },
    { code: "RAL 3031", hex: "#B32428", name: "Orient Red" },
  ],
  "Violets": [
    { code: "RAL 4001", hex: "#6D3F5B", name: "Red Lilac" },
    { code: "RAL 4002", hex: "#922B3E", name: "Red Violet" },
    { code: "RAL 4003", hex: "#DE4C8A", name: "Heather Violet" },
    { code: "RAL 4004", hex: "#641C34", name: "Claret Violet" },
    { code: "RAL 4005", hex: "#6C4675", name: "Blue Lilac" },
    { code: "RAL 4006", hex: "#A03472", name: "Traffic Purple" },
    { code: "RAL 4007", hex: "#4A192C", name: "Purple Violet" },
    { code: "RAL 4008", hex: "#924E7D", name: "Signal Violet" },
    { code: "RAL 4009", hex: "#A18594", name: "Pastel Violet" },
  ],
  "Blues": [
    { code: "RAL 5000", hex: "#354D73", name: "Violet Blue" },
    { code: "RAL 5001", hex: "#1F3438", name: "Green Blue" },
    { code: "RAL 5002", hex: "#20214F", name: "Ultramarine Blue" },
    { code: "RAL 5003", hex: "#1D1E33", name: "Saphire Blue" },
    { code: "RAL 5004", hex: "#18171C", name: "Black Blue" },
    { code: "RAL 5005", hex: "#1E2460", name: "Signal Blue" },
    { code: "RAL 5007", hex: "#3E5F8A", name: "Brillant Blue" },
    { code: "RAL 5008", hex: "#26252D", name: "Grey Blue" },
    { code: "RAL 5009", hex: "#025669", name: "Azure Blue" },
    { code: "RAL 5010", hex: "#0E294B", name: "Gentian Blue" },
    { code: "RAL 5011", hex: "#231A24", name: "Steel Blue" },
    { code: "RAL 5012", hex: "#3B83BD", name: "Light Blue" },
    { code: "RAL 5013", hex: "#1E213D", name: "Cobalt Blue" },
    { code: "RAL 5014", hex: "#606E8C", name: "Pigeon Blue" },
    { code: "RAL 5015", hex: "#2271B3", name: "Sky Blue" },
    { code: "RAL 5017", hex: "#063971", name: "Traffic Blue" },
    { code: "RAL 5018", hex: "#3F888F", name: "Turquoise Blue" },
    { code: "RAL 5019", hex: "#1B5583", name: "Capri Blue" },
    { code: "RAL 5020", hex: "#1D334A", name: "Ocean Blue" },
    { code: "RAL 5021", hex: "#256D7B", name: "Water Blue" },
    { code: "RAL 5022", hex: "#252850", name: "Night Blue" },
    { code: "RAL 5023", hex: "#49678D", name: "Pastel Blue" },
    { code: "RAL 5024", hex: "#5D9B9B", name: "Pastel Blue" },
  ],
  "Greens": [
    { code: "RAL 6000", hex: "#316650", name: "Patina Green" },
    { code: "RAL 6001", hex: "#287233", name: "Emerald Green" },
    { code: "RAL 6002", hex: "#2D572C", name: "Leaf Green" },
    { code: "RAL 6003", hex: "#424632", name: "Olive Green" },
    { code: "RAL 6004", hex: "#1F3A3D", name: "Blue Green" },
    { code: "RAL 6005", hex: "#2F4538", name: "Moss Green" },
    { code: "RAL 6006", hex: "#3E3B32", name: "Grey Olive" },
    { code: "RAL 6007", hex: "#343B29", name: "Bottle Green" },
    { code: "RAL 6008", hex: "#39352A", name: "Brown Green" },
    { code: "RAL 6009", hex: "#31372B", name: "Fir Green" },
    { code: "RAL 6010", hex: "#35682D", name: "Grass Green" },
    { code: "RAL 6011", hex: "#587246", name: "Reseda Green" },
    { code: "RAL 6012", hex: "#343E40", name: "Black Green" },
    { code: "RAL 6013", hex: "#6C7156", name: "Reed Green" },
    { code: "RAL 6014", hex: "#47402E", name: "Yellow Olive" },
    { code: "RAL 6015", hex: "#3B3C36", name: "Black Olive" },
    { code: "RAL 6016", hex: "#1E5945", name: "Turquoise Green" },
    { code: "RAL 6017", hex: "#4C9141", name: "May Green" },
    { code: "RAL 6018", hex: "#57A639", name: "Yellow Green" },
    { code: "RAL 6019", hex: "#BDECB6", name: "Pastel Green" },
    { code: "RAL 6020", hex: "#2E3A23", name: "Chrome Green" },
    { code: "RAL 6021", hex: "#89AC76", name: "Pale Green" },
    { code: "RAL 6022", hex: "#25221B", name: "Olive Drab" },
    { code: "RAL 6024", hex: "#308446", name: "Traffic Green" },
    { code: "RAL 6025", hex: "#3D642D", name: "Fern Green" },
    { code: "RAL 6026", hex: "#015D52", name: "Opal Green" },
    { code: "RAL 6027", hex: "#84C3BE", name: "Light Green" },
    { code: "RAL 6028", hex: "#2C5545", name: "Pine Green" },
    { code: "RAL 6029", hex: "#20603D", name: "Mint Green" },
    { code: "RAL 6032", hex: "#317F43", name: "Signal Green" },
    { code: "RAL 6033", hex: "#497E76", name: "Mint Turquoise" },
    { code: "RAL 6034", hex: "#7FB5B5", name: "Pastel Turquoise" },
  ],
  "Greys": [
    { code: "RAL 7000", hex: "#78858B", name: "Squirrel Grey" },
    { code: "RAL 7001", hex: "#8A9597", name: "Silver Grey" },
    { code: "RAL 7002", hex: "#7E7B52", name: "Olive Grey" },
    { code: "RAL 7003", hex: "#6C7059", name: "Moss Grey" },
    { code: "RAL 7004", hex: "#969992", name: "Signal Grey" },
    { code: "RAL 7005", hex: "#646B63", name: "Mouse Grey" },
    { code: "RAL 7006", hex: "#6D6552", name: "Beige Grey" },
    { code: "RAL 7008", hex: "#6A5F31", name: "Khaki Grey" },
    { code: "RAL 7009", hex: "#4D5645", name: "Green Grey" },
    { code: "RAL 7010", hex: "#4C514A", name: "Tarpaulin Grey" },
    { code: "RAL 7011", hex: "#434B4D", name: "Iron Grey" },
    { code: "RAL 7012", hex: "#4E5754", name: "Basalt Grey" },
    { code: "RAL 7013", hex: "#464531", name: "Brown Grey" },
    { code: "RAL 7015", hex: "#434750", name: "Slate Grey" },
    { code: "RAL 7016", hex: "#293133", name: "Anthracite Grey" },
    { code: "RAL 7021", hex: "#23282B", name: "Black Grey" },
    { code: "RAL 7022", hex: "#332F2C", name: "Umbra Grey" },
    { code: "RAL 7023", hex: "#686C5E", name: "Concrete Grey" },
    { code: "RAL 7024", hex: "#474A51", name: "Graphite Grey" },
    { code: "RAL 7026", hex: "#2F353B", name: "Granite Grey" },
    { code: "RAL 7030", hex: "#8B8C7A", name: "Stone Grey" },
    { code: "RAL 7031", hex: "#474B4E", name: "Blue Grey" },
    { code: "RAL 7032", hex: "#B8B799", name: "Pebble Grey" },
    { code: "RAL 7033", hex: "#7D8471", name: "Cement Grey" },
    { code: "RAL 7034", hex: "#8F8B66", name: "Yellow Grey" },
    { code: "RAL 7035", hex: "#D7D7D7", name: "Light Grey" },
    { code: "RAL 7036", hex: "#7F7679", name: "Platinum Grey" },
    { code: "RAL 7037", hex: "#7D7F7D", name: "Dusty Grey" },
    { code: "RAL 7038", hex: "#B5B8B1", name: "Agate Grey" },
    { code: "RAL 7039", hex: "#6C6960", name: "Quartz Grey" },
    { code: "RAL 7040", hex: "#9DA1AA", name: "Window Grey" },
    { code: "RAL 7042", hex: "#8D948D", name: "Traffic Grey A" },
    { code: "RAL 7043", hex: "#4E5452", name: "Traffic Grey B" },
    { code: "RAL 7044", hex: "#CAC4B0", name: "Silk Grey" },
    { code: "RAL 7045", hex: "#909090", name: "Telegrey 1" },
    { code: "RAL 7046", hex: "#82898F", name: "Telegrey 2" },
    { code: "RAL 7047", hex: "#D0D0D0", name: "Telegrey 4" },
  ],
  "Browns": [
    { code: "RAL 8000", hex: "#826C34", name: "Green Brown" },
    { code: "RAL 8001", hex: "#955F20", name: "Ochre Brown" },
    { code: "RAL 8002", hex: "#6C3B2A", name: "Signal Brown" },
    { code: "RAL 8003", hex: "#734222", name: "Clay Brown" },
    { code: "RAL 8004", hex: "#8E402A", name: "Copper Brown" },
    { code: "RAL 8007", hex: "#59351F", name: "Fawn Brown" },
    { code: "RAL 8008", hex: "#6F4F28", name: "Olive Brown" },
    { code: "RAL 8011", hex: "#5B3A29", name: "Nut Brown" },
    { code: "RAL 8012", hex: "#592321", name: "Red Brown" },
    { code: "RAL 8014", hex: "#382C1E", name: "Sepia Brown" },
    { code: "RAL 8015", hex: "#633A34", name: "Chestnut Brown" },
    { code: "RAL 8016", hex: "#4C2F27", name: "Mahogany Brown" },
    { code: "RAL 8017", hex: "#45322E", name: "Chocolate Brown" },
    { code: "RAL 8019", hex: "#403A3A", name: "Grey Brown" },
    { code: "RAL 8022", hex: "#212121", name: "Black Brown" },
    { code: "RAL 8023", hex: "#A65E2E", name: "Orange Brown" },
    { code: "RAL 8024", hex: "#79553D", name: "Beige Brown" },
    { code: "RAL 8025", hex: "#755C48", name: "Pale Brown" },
    { code: "RAL 8028", hex: "#4E3B31", name: "Terra Brown" },
  ],
  "Whites & Blacks": [
    { code: "RAL 9001", hex: "#FDF4E3", name: "Cream" },
    { code: "RAL 9002", hex: "#E7EBDA", name: "Grey White" },
    { code: "RAL 9003", hex: "#F4F4F4", name: "Signal White" },
    { code: "RAL 9004", hex: "#282828", name: "Signal Black" },
    { code: "RAL 9005", hex: "#0A0A0A", name: "Jet Black" },
    { code: "RAL 9006", hex: "#A5A5A5", name: "White Aluminum" },
    { code: "RAL 9007", hex: "#8F8F8F", name: "Grey Aluminum" },
    { code: "RAL 9010", hex: "#FFFFFF", name: "Pure White" },
    { code: "RAL 9011", hex: "#1C1C1C", name: "Graphite Black" },
    { code: "RAL 9016", hex: "#F6F6F6", name: "Traffic White" },
    { code: "RAL 9017", hex: "#1E1E1E", name: "Traffic Black" },
    { code: "RAL 9018", hex: "#D7D7D7", name: "Papyrus White" },
  ],
  "Wooden Shades": [
    { code: "WOOD-001", hex: "#F0E68C", name: "Light Maple" },
    { code: "WOOD-002", hex: "#DEB887", name: "Beech Wood" },
    { code: "WOOD-003", hex: "#D2B48C", name: "Tan Wood" },
    { code: "WOOD-004", hex: "#CD853F", name: "Peru Wood" },
    { code: "WOOD-005", hex: "#C19A6B", name: "Sand Wood" },
    { code: "WOOD-006", hex: "#B8956A", name: "Khaki Wood" },
    { code: "WOOD-007", hex: "#A0826D", name: "Taupe Wood" },
    { code: "WOOD-008", hex: "#996515", name: "Golden Oak" },
    { code: "WOOD-009", hex: "#8B7355", name: "Burlywood Oak" },
    { code: "WOOD-010", hex: "#8B4513", name: "Saddle Brown Oak" },
    { code: "WOOD-011", hex: "#7B3F00", name: "Chocolate Wood" },
    { code: "WOOD-012", hex: "#722F37", name: "Wine Barrel" },
    { code: "WOOD-013", hex: "#654321", name: "Dark Brown Wood" },
    { code: "WOOD-014", hex: "#5D3A1A", name: "Chestnut" },
    { code: "WOOD-015", hex: "#4E2A1E", name: "Mahogany" },
    { code: "WOOD-016", hex: "#3D2817", name: "Walnut Dark" },
    { code: "WOOD-017", hex: "#3E2723", name: "Coffee Bean" },
    { code: "WOOD-018", hex: "#2F1B0C", name: "Black Walnut" },
    { code: "WOOD-019", hex: "#E6C9A8", name: "Birch" },
    { code: "WOOD-020", hex: "#D4A76A", name: "Cedar" },
    { code: "WOOD-021", hex: "#C9A882", name: "Teak" },
    { code: "WOOD-022", hex: "#B87333", name: "Copper Wood" },
    { code: "WOOD-023", hex: "#A0785A", name: "Hazel Wood" },
    { code: "WOOD-024", hex: "#9C6B58", name: "Rosewood" },
    { code: "WOOD-025", hex: "#8E6F3E", name: "Olive Wood" },
  ],
};

const RAL_PALETTE = Object.values(RAL_CATEGORIES).flat();

export default function RALChart() {
  const [color, setColor] = useState("#0E294B");
  const [selectedRal, setSelectedRal] = useState("RAL 5010");
  const [rotateX, setRotateX] = useState(20);
  const [rotateY, setRotateY] = useState(-30);
  const [size, setSize] = useState(200);
  const [showChart, setShowChart] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const cubeRef = useRef(null);
  const cubeWrapperRef = useRef(null);
  const chartRef = useRef(null);
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = cubeWrapperRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      dragging.current = true;
      el.style.cursor = "grabbing";
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY;
      lastPos.current = { x: clientX, y: clientY };
      if (e.type === "touchstart") e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!dragging.current) return;
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY;
      if (clientX == null || clientY == null) return;
      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      lastPos.current = { x: clientX, y: clientY };
      setRotateY((r) => (r + dx * 0.45) % 360);
      setRotateX((r) => Math.max(-180, Math.min(180, r - dy * 0.35)));
    };

    const onPointerUp = () => {
      dragging.current = false;
      el.style.cursor = "grab";
    };

    el.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    el.addEventListener("touchstart", onPointerDown, { passive: false });
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp);
    el.style.cursor = "grab";

    return () => {
      el.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      el.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  const handleExportCube = async () => {
    const el = cubeWrapperRef.current;
    if (!el) return;
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(el, { backgroundColor: "#ffffff", scale: 2 });
    const link = document.createElement("a");
    link.download = `${selectedRal || "Custom"}_${color.replace("#", "")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleExportChart = async () => {
    try {
      setIsExporting(true);
      
      // Load jsPDF from CDN if not already loaded
      if (!window.jspdf) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      
      const { jsPDF } = window.jspdf;
      
      // Create PDF - A4 size
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const usableWidth = pageWidth - (margin * 2);
      
      let yPos = margin;
      
      // Add Title
      pdf.setFontSize(20);
      pdf.setFont(undefined, 'bold');
      pdf.text('RAL Color Chart', pageWidth / 2, yPos, { align: 'center' });
      yPos += 10;
      
      pdf.setFontSize(10);
      pdf.setFont(undefined, 'normal');
      pdf.text(`Complete Professional Color Palette - ${RAL_PALETTE.length} Colors`, pageWidth / 2, yPos, { align: 'center' });
      yPos += 15;
      
      // Color box dimensions
      const boxWidth = 25;
      const boxHeight = 15;
      const spacing = 3;
      const colsPerRow = 3;
      const textHeight = 12;
      
      // Process each category
      for (const [category, colors] of Object.entries(RAL_CATEGORIES)) {
        // Check if we need a new page for category header
        if (yPos + 20 > pageHeight - margin) {
          pdf.addPage();
          yPos = margin;
        }
        
        // Category header
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text(`${category} (${colors.length})`, margin, yPos);
        yPos += 8;
        
        // Draw a line under category
        pdf.setLineWidth(0.5);
        pdf.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 5;
        
        // Draw colors
        for (let i = 0; i < colors.length; i++) {
          const color = colors[i];
          const col = i % colsPerRow;
          const xPos = margin + (col * (boxWidth + spacing + 50));
          
          // Check if we need a new page
          if (yPos + boxHeight + textHeight > pageHeight - margin) {
            pdf.addPage();
            yPos = margin;
            
            // Repeat category header on new page
            pdf.setFontSize(14);
            pdf.setFont(undefined, 'bold');
            pdf.text(`${category} (continued)`, margin, yPos);
            yPos += 10;
          }
          
          // Draw color box
          pdf.setFillColor(color.hex);
          pdf.rect(xPos, yPos, boxWidth, boxHeight, 'F');
          
          // Draw border around color box
          pdf.setDrawColor(200, 200, 200);
          pdf.setLineWidth(0.3);
          pdf.rect(xPos, yPos, boxWidth, boxHeight, 'S');
          
          // Add text info
          pdf.setFontSize(8);
          pdf.setFont(undefined, 'bold');
          pdf.setTextColor(0, 0, 0);
          pdf.text(color.code, xPos + boxWidth + 2, yPos + 4);
          
          pdf.setFont(undefined, 'normal');
          pdf.setFontSize(7);
          pdf.text(color.name, xPos + boxWidth + 2, yPos + 8);
          pdf.text(color.hex, xPos + boxWidth + 2, yPos + 12);
          
          // Move to next row after 3 colors
          if ((i + 1) % colsPerRow === 0) {
            yPos += boxHeight + textHeight + 2;
          }
        }
        
        // If last row wasn't complete, still move down
        if (colors.length % colsPerRow !== 0) {
          yPos += boxHeight + textHeight + 2;
        }
        
        yPos += 5; // Space between categories
      }
      
      // Add footer on last page
      pdf.setFontSize(8);
      pdf.setTextColor(128, 128, 128);
      pdf.text('© 2024 Al Hadaf - Professional RAL Color Chart', pageWidth / 2, pageHeight - 5, { align: 'center' });
      
      // Save PDF
      pdf.save('RAL_Color_Chart_Complete.pdf');
      
      setIsExporting(false);
    } catch (err) {
      console.error("Export failed:", err);
      alert("Error exporting chart: " + err.message);
      setIsExporting(false);
    }
  };

  // Download brochure from public/assets folder
  const handleDownloadBrochure = () => {
    const brochurePath = "/assets/brochure.pdf";
    const link = document.createElement("a");
    link.href = brochurePath;
    link.download = "Al_Hadaf_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRalChange = (e) => {
    const code = e.target.value;
    setSelectedRal(code);
    const found = RAL_PALETTE.find((r) => r.code === code);
    if (found) setColor(found.hex);
  };

  const handleColorInput = (e) => {
    setColor(e.target.value);
    setSelectedRal("");
  };

  const selectColor = (ral) => {
    setColor(ral.hex);
    setSelectedRal(ral.code);
    setShowChart(false);
  };

  const faceStyle = {
    background: color,
    boxShadow: `inset 0 0 30px rgba(0,0,0,0.14), 0 12px 30px rgba(2,6,23,0.12)`,
    border: "1px solid rgba(0,0,0,0.08)",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">RAL Color Chart</h1>
            <p className="text-gray-600">Interactive 3D Color Visualization Tool</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Box className="inline w-4 h-4 mr-1" />
                    Choose RAL Color
                  </label>
                  <select
                    value={selectedRal}
                    onChange={handleRalChange}
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 bg-white focus:border-blue-500 focus:outline-none transition"
                  >
                    <option value="">-- Select RAL --</option>
                    {Object.entries(RAL_CATEGORIES).map(([category, colors]) => (
                      <optgroup key={category} label={`${category}`}>
                        {colors.map((r) => (
                          <option key={r.code} value={r.code}>
                            {r.code} — {r.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Custom Hex Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={color}
                      onChange={handleColorInput}
                      className="w-14 h-14 rounded-lg border-2 border-gray-200 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={color}
                      onChange={handleColorInput}
                      className="flex-1 rounded-lg border-2 border-gray-200 px-4 py-3 uppercase font-mono focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cube Size: {size}px
                  </label>
                  <input
                    type="range"
                    min={120}
                    max={300}
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rotate X: {rotateX}°
                  </label>
                  <input
                    type="range"
                    min={-180}
                    max={180}
                    value={rotateX}
                    onChange={(e) => setRotateX(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rotate Y: {rotateY}°
                  </label>
                  <input
                    type="range"
                    min={-180}
                    max={180}
                    value={rotateY}
                    onChange={(e) => setRotateY(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setShowChart(true)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition font-medium shadow-lg flex items-center justify-center gap-2"
                  >
                    <Grid3X3 className="w-4 h-4" />
                    View Chart
                  </button>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    💡 <strong>Tip:</strong> Drag the cube to rotate or use sliders. Select from {RAL_PALETTE.length}+ RAL colors!
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col items-center">
                <div
                  ref={cubeWrapperRef}
                  className="w-full flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
                  style={{
                    minHeight: Math.max(400, size * 1.8),
                    padding: 24,
                    cursor: "grab",
                  }}
                >
                  <div
                    style={{
                      perspective: 1200,
                      width: Math.min(720, size * 2.2),
                      height: Math.max(400, size * 1.8),
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      ref={cubeRef}
                      className="relative"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        transformStyle: "preserve-3d",
                        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                        transition: "transform 160ms ease",
                      }}
                    >
                      {["front", "back", "right", "left", "top", "bottom"].map((side) => {
                        const transforms = {
                          front: `translateZ(${size / 2}px)`,
                          back: `rotateY(180deg) translateZ(${size / 2}px)`,
                          right: `rotateY(90deg) translateZ(${size / 2}px)`,
                          left: `rotateY(-90deg) translateZ(${size / 2}px)`,
                          top: `rotateX(90deg) translateZ(${size / 2}px)`,
                          bottom: `rotateX(-90deg) translateZ(${size / 2}px)`,
                        };
                        return (
                          <div
                            key={side}
                            className="absolute inset-0"
                            style={{ ...faceStyle, transform: transforms[side] }}
                          />
                        );
                      })}

                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: "100%",
                          height: "100%",
                          transform: `translateZ(${size / 2 + 2}px)`,
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0))",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 bg-white rounded-lg shadow-md p-4 border border-gray-100">
                  <div
                    className="w-16 h-16 rounded-lg shadow-inner"
                    style={{ background: color, border: "2px solid rgba(0,0,0,0.1)" }}
                  />
                  <div>
                    <div className="font-bold text-lg text-gray-900">
                      {selectedRal || "Custom Color"}
                    </div>
                    <div className="text-sm font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded mt-1">
                      {color.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {showChart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Complete RAL Color Chart</h2>
                <p className="text-sm text-gray-600 mt-1">{RAL_PALETTE.length} Professional Colors</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleExportChart}
                  disabled={isExporting}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition font-medium shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                  {isExporting ? 'Exporting...' : 'Download Chart'}
                </button>
                <button
                  onClick={handleDownloadBrochure}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition font-medium shadow-lg flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  Download Brochure
                </button>
                <button
                  onClick={() => setShowChart(false)}
                  className="bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 100px)' }}>
              <div ref={chartRef} className="bg-white p-6">
                {Object.entries(RAL_CATEGORIES).map(([category, colors]) => (
                  <div key={category} className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                      {category} ({colors.length})
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {colors.map((ral) => (
                        <button
                          key={ral.code}
                          onClick={() => selectColor(ral)}
                          className="group relative bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-200"
                        >
                          <div
                            className="h-20 w-full"
                            style={{ 
                              backgroundColor: ral.hex,
                              background: ral.hex 
                            }}
                          />
                          <div className="p-2 text-left bg-white">
                            <div className="font-bold text-xs text-gray-900">{ral.code}</div>
                            <div className="text-xs text-gray-600 truncate" title={ral.name}>{ral.name}</div>
                            <div className="text-xs font-mono text-gray-500">{ral.hex}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}