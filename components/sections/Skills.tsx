import React from "react";
import {
  Monitor,
  Palette,
  Server,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { portfolioData, type SkillCategoryName } from "@/data/portfolio";

const CATEGORY_ICONS: Record<SkillCategoryName, LucideIcon> = {
  Frontend: Monitor,
  Styling: Palette,
  Backend: Server,
  Authentication: ShieldCheck,
  Other: Wrench,
};

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative w-full border-t border-border/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 pb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Technical Stack
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            A comprehensive overview of the modern frameworks, styling systems, backend tools, and workflows I utilize in development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => {
            const Icon = CATEGORY_ICONS[group.category] || Wrench;

            return (
              <div
                key={group.category}
                className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-card/60 p-6 shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-card/90"
              >
                <div>
                  {/* Category Header */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/20">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        {group.category}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {group.skills.length} technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md border border-border/70 bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground/90 transition-colors hover:border-primary/50 hover:bg-muted/80 hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
