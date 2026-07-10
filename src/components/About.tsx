"use client";

import { motion } from "framer-motion";
import { stats, personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block font-mono text-sm text-accent-light">
            01. About Me
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Developing and Supporting{" "}
            <span className="gradient-text">Enterprise Financial Applications</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg">
              {personalInfo.summary}
            </p>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {personalInfo.passion}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass group rounded-2xl p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="mb-1 text-3xl font-bold gradient-text sm:text-4xl"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
