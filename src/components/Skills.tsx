"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";
import { cn } from "./lib/utils";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Yetenek <span className="text-gradient">Havuzum</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Fikirleri hayata geçirmek için kullandığım teknolojiler ve araçlar.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {portfolioConfig.skills.map((skill, idx) => {
            const IconComponent = (LucideIcons as any)[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center border-white/5 transition-all group-hover:border-blue-500/50">
                  <div className="p-3 rounded-xl bg-white/5 text-blue-400 transition-colors group-hover:text-blue-300">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <span className="font-semibold text-sm text-gray-300 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
