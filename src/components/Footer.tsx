"use client";

import React from "react";
import { portfolioConfig } from "@/data/portfolioConfig";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {portfolioConfig.personalInfo.name}.
            Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-gray-600">
            Üçüncü Binyıl Akademi Workshop Hatırası
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            Şununla inşa edildi:
            <span className="text-blue-500">Next.js</span> +
            <span className="text-emerald-500">Framer Motion</span> +
            <span className="text-blue-400">Tailwind</span>
          </div>
          <p className="text-[10px] opacity-50">
            Geleceğin Yazılımcıları Burada Yetişiyor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
