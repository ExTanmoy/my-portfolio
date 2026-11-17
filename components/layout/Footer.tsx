import React from "react";
import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const currentYear = await getCurrentYear();
  const { personalInfo, socialLinks } = portfolioData;

  const githubLink = socialLinks.find((link) => link.platform === "GitHub");
  const linkedInLink = socialLinks.find((link) => link.platform === "LinkedIn");

  return (
    <footer className="w-full border-t border-border/60 bg-background/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand & Professional Info */}
          <div className="max-w-md space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-xs font-bold tracking-wider text-primary">
                TD
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm font-medium text-emerald-400">
              {personalInfo.role}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Building scalable, high-performance web applications with modern frontend and backend architectures.
            </p>
          </div>

          {/* Connect & Social Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm" aria-label="Social and contact links">
              {githubLink && (
                <li>
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md py-0.5"
                    aria-label={`GitHub profile: ${personalInfo.name}`}
                  >
                    <svg
                      className="size-4 shrink-0 transition-colors group-hover:text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GitHub</span>
                    <ExternalLink className="size-3 text-muted-foreground/60 transition-colors group-hover:text-primary" aria-hidden="true" />
                  </a>
                </li>
              )}

              {linkedInLink && (
                <li>
                  <a
                    href={linkedInLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md py-0.5"
                    aria-label={`LinkedIn profile: ${personalInfo.name}`}
                  >
                    <svg
                      className="size-4 shrink-0 transition-colors group-hover:text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span>LinkedIn</span>
                    <ExternalLink className="size-3 text-muted-foreground/60 transition-colors group-hover:text-primary" aria-hidden="true" />
                  </a>
                </li>
              )}

              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md py-0.5"
                  aria-label={`Send email to ${personalInfo.email}`}
                >
                  <Mail className="size-4 shrink-0 transition-colors group-hover:text-primary" aria-hidden="true" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </span>
            <Link
              href="#home"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
