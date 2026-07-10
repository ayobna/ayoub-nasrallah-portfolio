"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Sparkles,
  GitBranch,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Cloud,
  Sparkles,
  GitBranch,
  Boxes,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block font-mono text-sm text-accent-light">
            02. Skills
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || Layout;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass group rounded-2xl p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs text-muted transition-colors group-hover:border-accent/20 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
