"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SocialLinks from "@/components/SocialLinks";

function getWhatsAppUrl() {
  const text = encodeURIComponent(personalInfo.whatsappMessage);
  return `https://wa.me/${personalInfo.whatsapp}?text=${text}`;
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block font-mono text-sm text-accent-light">
            06. Contact
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            I&apos;m open to new opportunities and interesting projects. Feel free
            to reach out — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass glow-accent mx-auto max-w-2xl rounded-2xl p-8 sm:p-12"
        >
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
              title="Send email"
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-elevated p-4 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
            >
              <Mail
                size={22}
                className="text-accent-light transition-transform group-hover:scale-110"
              />
              <span className="text-xs text-muted">Email</span>
              <span className="text-center text-sm font-medium text-foreground">
                {personalInfo.email}
              </span>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/-/g, "")}`}
              aria-label="Call phone number"
              title="Call phone number"
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-elevated p-4 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
            >
              <Phone
                size={22}
                className="text-accent-light transition-transform group-hover:scale-110"
              />
              <span className="text-xs text-muted">Phone</span>
              <span className="text-center text-sm font-medium text-foreground">
                {personalInfo.phone}
              </span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send WhatsApp message"
              title="Send WhatsApp message"
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-elevated p-4 transition-all hover:border-emerald/40 hover:shadow-lg hover:shadow-emerald/10"
            >
              <span className="text-emerald transition-transform group-hover:scale-110">
                <WhatsAppIcon size={22} />
              </span>
              <span className="text-xs text-muted">WhatsApp</span>
              <span className="text-center text-sm font-medium text-foreground">
                Send a Message
              </span>
            </a>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-elevated p-4">
              <MapPin size={22} className="text-accent-light" />
              <span className="text-xs text-muted">Location</span>
              <span className="text-center text-sm font-medium text-foreground">
                {personalInfo.location}
              </span>
            </div>
          </div>

          <div className="mb-6 flex justify-center">
            <SocialLinks iconSize={22} />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${personalInfo.email}?subject=Hello%20Ayoub%20-%20Let's%20Connect`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent py-4 font-medium text-white transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
            >
              <Send size={18} />
              Send Me an Email
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald py-4 font-medium text-white transition-all hover:bg-emerald/90 hover:shadow-xl hover:shadow-emerald/30"
            >
              <WhatsAppIcon size={18} />
              Send WhatsApp Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
