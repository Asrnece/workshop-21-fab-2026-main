"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/data/portfolioConfig";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 glass shadow-2xl">
              <img
                src={portfolioConfig.personalInfo.profileImage}
                alt={portfolioConfig.personalInfo.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Hakkımda <span className="text-gradient">Bilgi</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed italic border-l-4 border-blue-500 pl-6">
              "{portfolioConfig.personalInfo.bio}"
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass p-4 rounded-xl border-white/5">
                <p className="text-blue-400 font-bold text-2xl">3+</p>
                <p className="text-gray-500 text-sm">Yıllık Deneyim</p>
              </div>
              <div className="glass p-4 rounded-xl border-white/5">
                <p className="text-emerald-400 font-bold text-2xl">20+</p>
                <p className="text-gray-500 text-sm">Proje Tamamlandı</p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Yeni projelere açık
              </div>
              <span>•</span>
              <div>{portfolioConfig.personalInfo.location}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
