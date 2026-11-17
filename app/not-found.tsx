import Link from "next/link";
import { FolderOpen, Home, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

const quickLinks = [
  { href: "/#home", label: "Home", icon: Home },
  { href: "/#projects", label: "Projects", icon: FolderOpen },
  { href: "/#contact", label: "Contact", icon: Mail },
] as const;

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse"
          />
          Error 404
        </span>

        <p
          aria-hidden="true"
          className="mt-8 select-none bg-gradient-to-b from-foreground/90 via-foreground/60 to-foreground/10 bg-clip-text text-7xl font-extrabold leading-none tracking-tighter text-transparent sm:text-8xl"
        >
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          This page took a wrong turn
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or
          maybe never left the drawing board. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "gap-2 shadow-xs"
            )}
          >
            <Home className="size-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2"
            )}
          >
            <FolderOpen className="size-4" aria-hidden="true" />
            <span>View Projects</span>
          </Link>
        </div>

        <div className="mt-12 w-full rounded-xl border border-border/70 bg-card/60 p-6 shadow-xs">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Quick navigation
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {quickLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-center gap-3 rounded-lg border border-border/70 bg-muted/20 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-card/90 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Still stuck?{" "}
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Email me
          </a>{" "}
          and I&apos;ll point you in the right direction.
        </p>
      </div>
    </main>
  );
}