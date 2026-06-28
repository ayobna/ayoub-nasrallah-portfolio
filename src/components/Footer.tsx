import { personalInfo } from "@/data/portfolio";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {year}{" "}
          <span className="font-medium text-foreground">
            {personalInfo.name}
          </span>
          . All rights reserved.
        </p>
        <SocialLinks />
        <p className="font-mono text-xs text-muted">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
