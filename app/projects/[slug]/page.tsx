import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { getProjectBySlug, portfolioData } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { cn, isValidHttpUrl } from "@/lib/utils";
import { Suspense } from "react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${portfolioData.personalInfo.name}`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectDetailsFallback />}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}

async function ProjectDetailContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const liveUrl = isValidHttpUrl(project.liveUrl) ? project.liveUrl : undefined;
  const githubUrl = isValidHttpUrl(project.githubUrl)
    ? project.githubUrl
    : undefined;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <header className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Project Details
            </span>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "gap-2 shadow-xs"
                  )}
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span>Live Project</span>
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2 border-border/80 hover:bg-muted/60"
                  )}
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
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border/70 bg-muted/30 shadow-xl">
              <Image
                src={project.image}
                alt={`${project.title} interface preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </header>

        {/* Content Sections */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-10 lg:col-span-8">
            <section aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Overview
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
            </section>

            <section
              aria-labelledby="features-heading"
              className="border-t border-border/50 pt-10"
            >
              <h2
                id="features-heading"
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Key Features
              </h2>
              <ul className="mt-4 space-y-3">
                {project.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:col-span-4 lg:row-span-2">
            <div className="rounded-xl border border-border/70 bg-card/60 p-6 shadow-xs lg:sticky lg:top-8">
              <h2
                id="tech-stack-heading"
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Technology Stack
              </h2>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-labelledby="tech-stack-heading"
              >
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="inline-flex items-center rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground/80"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-10 lg:col-span-8">
            <section
              aria-labelledby="challenges-heading"
              className="border-t border-border/50 pt-10"
            >
              <h2
                id="challenges-heading"
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Challenges Faced
              </h2>
              <ul className="mt-4 space-y-3">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex gap-3 rounded-xl border border-border/70 bg-card/60 p-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    <AlertTriangle
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="future-heading"
              className="border-t border-border/50 pt-10"
            >
              <h2
                id="future-heading"
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Future Improvements
              </h2>
              <ul className="mt-4 space-y-3">
                {project.futureImprovements.map((improvement) => (
                  <li
                    key={improvement}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Sparkles
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <Link
            href="/#projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 border-border/80 hover:bg-muted/60"
            )}
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

function ProjectDetailsFallback() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p role="status" className="text-muted-foreground">
          Loading project details...
        </p>
      </div>
    </main>
  );
}
