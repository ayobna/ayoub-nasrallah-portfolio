"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, languages } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block font-mono text-sm text-accent-light">
            05. Education
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Learning & <span className="gradient-text">Growth</span>
          </h2>
        </motion.div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.program}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group flex flex-col rounded-2xl p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                  <GraduationCap size={20} />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-mono text-xs text-muted">{item.period}</span>
                  {"status" in item && item.status === "upcoming" && (
                    <span className="rounded-md bg-cyan/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-cyan">
                      Upcoming
                    </span>
                  )}
                </div>
              </div>
              <h3 className="mb-1 font-semibold text-foreground">
                {item.program}
              </h3>
              <p className="mb-3 text-sm text-accent-light">
                {"institutionUrl" in item && item.institutionUrl ? (
                  <a
                    href={item.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-foreground hover:underline"
                  >
                    {item.institution}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  item.institution
                )}
              </p>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              {"project" in item && item.project && (
                <div className="mt-auto flex items-center gap-2 rounded-lg border border-border bg-surface-elevated px-3 py-2">
                  <Award size={14} className="text-emerald" />
                  <span className="text-sm">
                    <span className="text-muted">Project: </span>
                    {"projectUrl" in item && item.projectUrl ? (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-accent-light hover:underline"
                      >
                        {item.project}
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">
                        {item.project}
                      </span>
                    )}
                    {"grade" in item && item.grade && (
                      <span className="ml-2 rounded bg-emerald/10 px-1.5 py-0.5 text-xs font-bold text-emerald">
                        {item.grade}/100
                      </span>
                    )}
                  </span>
                </div>
              )}
              {"stack" in item && item.stack && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="mb-6 text-center text-lg font-semibold">Languages</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {languages.map((lang, i) => (
              <div key={lang.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-muted">{lang.level}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-surface-elevated">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-cyan"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
