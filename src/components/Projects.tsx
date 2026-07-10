"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
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
            04. Projects
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Selected academic and training projects from my education and
            professional development programs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group flex flex-col rounded-2xl p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                  <FolderGit2 size={20} />
                </div>
                <span className="font-mono text-xs text-muted">
                  {project.context}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {"link" in project && project.link && (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.link.label} for ${project.name}`}
                  title={`${project.link.label} — ${project.name}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light transition-colors hover:text-foreground hover:underline"
                >
                  {project.link.label}
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
