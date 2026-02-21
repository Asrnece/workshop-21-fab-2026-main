"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[40px] border-white/5 relative overflow-hidden text-center">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Hadi Birlikte <br />
          <span className="text-gradient">Harika İşler Yapalım</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Şu anda yeni fırsatlara açığım. Bir sorunuz varsa veya sadece selam
          vermek isterseniz, size geri dönmek için elimden geleni yapacağım!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <a
            href={`mailto:${portfolioConfig.personalInfo.email}`}
            className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
          >
            Merhaba De 👋
          </a>

          <div className="flex gap-6">
            {portfolioConfig.socialLinks.map((link) => {
              const Icon = (LucideIcons as any)[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-2xl text-gray-400 hover:text-white hover:border-blue-500/50 transition-all"
                  title={link.name}
                >
                  {Icon && <Icon size={24} />}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
