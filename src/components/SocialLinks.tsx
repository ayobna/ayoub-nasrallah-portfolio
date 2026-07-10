import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function SocialLinks({
  className = "",
  iconSize = 20,
}: {
  className?: string;
  iconSize?: number;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={personalInfo.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        title="LinkedIn profile"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-elevated text-muted transition-all hover:border-accent/40 hover:text-accent-light hover:shadow-lg hover:shadow-accent/10"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href={personalInfo.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        title="GitHub profile"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-elevated text-muted transition-all hover:border-accent/40 hover:text-accent-light hover:shadow-lg hover:shadow-accent/10"
      >
        <Github size={iconSize} />
      </a>
    </div>
  );
}
