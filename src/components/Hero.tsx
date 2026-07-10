"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-cyan/15 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-2 text-xl font-medium text-foreground sm:text-2xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-8 font-mono text-lg text-accent-light sm:text-xl"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {personalInfo.heroIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-medium text-white transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="/Ayoub-Nasrallah-CV.pdf"
            download="Ayoub-Nasrallah-CV.pdf"
            aria-label="Download CV"
            title="Download CV"
            className="group flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-8 py-3.5 font-medium text-foreground backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-surface-elevated"
          >
            <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <SocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
