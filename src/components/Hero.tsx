"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = portfolioConfig.personalInfo.title;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <span className="px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Üçüncü Binyıl Hatırası
          </span>
          <div className="glass px-4 py-1.5 rounded-full text-sm font-medium border border-blue-500/20 text-blue-400">
            Hoş Geldiniz
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Selam, Ben{" "}
          <span className="text-gradient">
            {portfolioConfig.personalInfo.name}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 h-8 font-mono"
        >
          {text}
          <span className="animate-pulse inline-block w-2 h-6 bg-blue-500 ml-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-blue-600 rounded-xl font-semibold overflow-hidden transition-all hover:pr-10"
          >
            <span className="relative z-10 flex items-center gap-2">
              Projelerimi Gör
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 glass rounded-xl font-semibold hover:bg-white/10 transition-colors"
          >
            İletişime Geç
          </a>
        </motion.div>
      </div>

      {/* Background blobs for aesthetic */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default Hero;
