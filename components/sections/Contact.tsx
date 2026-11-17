import React from "react";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/sections/CopyEmailButton";
import { cn } from "@/lib/utils";

export function Contact() {
  const { personalInfo, socialLinks } = portfolioData;

  const githubLink = socialLinks.find((link) => link.platform === "GitHub");
  const linkedInLink = socialLinks.find((link) => link.platform === "LinkedIn");

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="relative w-full border-t border-border/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 pb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            Whether you have an upcoming project, are seeking a Full Stack Developer, or want to discuss technical ideas, reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Direct Communication Channels */}
          <div className="flex flex-col justify-between rounded-xl border border-border/70 bg-card/60 p-6 shadow-xs sm:p-8 lg:col-span-7">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Direct Contact
              </h3>

              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-muted/20 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                      <Mail className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <CopyEmailButton email={personalInfo.email} />
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3.5 rounded-lg border border-border/50 bg-muted/20 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <Phone className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Phone / WhatsApp</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 rounded-lg border border-border/50 bg-muted/20 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold text-foreground">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/40">
              <a
                href={`mailto:${personalInfo.email}`}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full sm:w-auto gap-2 shadow-xs"
                )}
              >
                <span>Write an Email</span>
                <Send className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Social Profiles & Developer Links */}
          <div className="flex flex-col justify-between rounded-xl border border-border/70 bg-card/60 p-6 shadow-xs sm:p-8 lg:col-span-5">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Online Profiles
              </h3>

              <div className="space-y-4">
                {githubLink && (
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 p-4 transition-all hover:border-primary/40 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`GitHub profile: ${personalInfo.name}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-md border border-border/60 bg-card text-muted-foreground transition-colors group-hover:text-primary">
                        <svg
                          className="size-4"
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
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">GitHub</p>
                        <p className="text-xs text-muted-foreground">{githubLink.label}</p>
                      </div>
                    </div>
                    <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                  </a>
                )}

                {linkedInLink && (
                  <a
                    href={linkedInLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 p-4 transition-all hover:border-primary/40 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`LinkedIn profile: ${personalInfo.name}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-md border border-border/60 bg-card text-muted-foreground transition-colors group-hover:text-primary">
                        <svg
                          className="size-4"
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
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                        <p className="text-xs text-muted-foreground">{linkedInLink.label}</p>
                      </div>
                    </div>
                    <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              Based in Barishal (GMT+6), open to remote, hybrid, and relocation opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
