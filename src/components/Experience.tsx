"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block font-mono text-sm text-accent-light">
            03. Experience
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Where I&apos;ve <span className="gradient-text">Made Impact</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-2xl p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" />

          <div className="relative">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-accent-light">
                    {"companyUrl" in experience && experience.companyUrl ? (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-foreground hover:underline"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )}{" "}
                    <span className="text-muted">
                      (outsourced to {experience.client},{" "}
                      {experience.clientDetail})
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 text-sm text-muted sm:text-right">
                <span className="flex items-center gap-2 sm:justify-end">
                  <Calendar size={14} />
                  {experience.period}
                </span>
                <span className="flex items-center gap-2 sm:justify-end">
                  <MapPin size={14} />
                  {experience.location}
                </span>
              </div>
            </div>

            <p className="mb-6 text-muted leading-relaxed">
              {experience.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {experience.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
