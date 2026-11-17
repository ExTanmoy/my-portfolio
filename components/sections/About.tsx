import React from "react";
import { Code2, Zap, Sparkles, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { personalInfo, education } = portfolioData;

  const highlights = [
    {
      icon: Code2,
      title: "1+ Year Experience",
      description: "Hands-on experience building, testing, and shipping responsive full stack web applications.",
    },
    {
      icon: Zap,
      title: "Performance & SEO",
      description: "Dedicated to rapid load times, clean code semantics, and search engine optimization best practices.",
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Workflow",
      description: "Leveraging cutting-edge AI developer tooling to accelerate delivery and write resilient software.",
    },
    {
      icon: GraduationCap,
      title: "Academic Background",
      description: `${education.degree} from ${education.institution}, bringing strong analytical and structured thinking.`,
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Me"
      className="relative w-full border-t border-border/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 pb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            About Me
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Background & Engineering Mindset
          </h2>
        </div>

        {/* Two-Column Content Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Narrative Column */}
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              I am <span className="font-medium text-foreground">{personalInfo.name}</span>, a Full Stack Developer based in {personalInfo.location}. With over a year of dedicated web development experience, I specialize in crafting modern web solutions with React, Next.js, TypeScript, Tailwind CSS, and Node.js.
            </p>

            <p>
              My focus centers on developing practical web applications that solve real-world problems. Whether building live commodity price tracking utilities, fitness planning companions, or interactive tech stack curators, I prioritize clean architecture, intuitive user interfaces, and robust state management.
            </p>

            <p>
              I place high value on performance optimization, SEO best practices, and AI-assisted development workflows to write maintainable code efficiently. Driven by a passion for artificial intelligence, my long-term goal is to transition into an <span className="font-semibold text-emerald-400">AI Engineer</span>, bridging the gap between scalable full stack systems and intelligent autonomous software.
            </p>
          </div>

          {/* Right Highlights Column */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative rounded-xl border border-border/70 bg-card/60 p-5 shadow-xs transition-colors hover:border-primary/40 hover:bg-card/90"
                >
                  <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/20">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
