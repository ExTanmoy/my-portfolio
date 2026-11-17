import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Send, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const { personalInfo, socialLinks } = portfolioData;

  const githubLink = socialLinks.find((link) => link.platform === "GitHub");
  const linkedInLink = socialLinks.find((link) => link.platform === "LinkedIn");

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative w-full py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Greeting, Name, Title, Bio, CTAs, Socials */}
          <div className="flex flex-col items-start space-y-6 text-left lg:col-span-7">
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span>Available for full-time & freelance projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="text-primary">{personalInfo.name}</span>
              </h1>
              <p className="text-xl font-semibold tracking-tight text-emerald-400 sm:text-2xl">
                {personalInfo.role}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Full Stack Developer based in {personalInfo.location}, specializing in building high-performance, responsive web applications with React, Next.js, TypeScript, and clean backend APIs.
            </p>

            {/* Location Badge */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-primary" aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "gap-2 shadow-xs"
                )}
              >
                <span>View Projects</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 border-border/80 hover:bg-muted/60"
                )}
              >
                <span>Contact Me</span>
                <Send className="size-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/40 w-full max-w-md">
              <span className="text-xs font-medium text-muted-foreground">Find me on:</span>
              <div className="flex items-center gap-2">
                {githubLink && (
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`GitHub profile: ${personalInfo.name}`}
                  >
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
                  </a>
                )}

                {linkedInLink && (
                  <a
                    href={linkedInLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`LinkedIn profile: ${personalInfo.name}`}
                  >
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
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-2xl transition-all duration-300 hover:border-primary/40">
                <div className="relative size-full overflow-hidden rounded-xl bg-muted/40">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 400px"
                    priority
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Status Pill Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-border/80 bg-card/95 px-3.5 py-1.5 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground whitespace-nowrap">
                  <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
