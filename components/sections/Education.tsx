import React from "react";
import { GraduationCap, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      aria-label="Education"
      className="relative w-full border-t border-border/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 pb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Academic Background
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Education
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            Academic qualifications supporting analytical problem-solving and structured software engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-2xl">
          <div className="group relative rounded-xl border border-border/70 bg-card/60 p-6 shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-card/90">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/20">
                <GraduationCap className="size-6" aria-hidden="true" />
              </div>

              <div className="space-y-1.5">
                <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Higher Education
                </span>
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {education.degree}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Building2 className="size-4 text-primary/80" aria-hidden="true" />
                  <span>{education.institution}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
