export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export type SkillCategoryName = "Frontend" | "Styling" | "Backend" | "Authentication" | "Other";

export interface SkillGroup {
  category: SkillCategoryName;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  education: Education;
  skills: SkillGroup[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Tanmoy Debnath",
    role: "Full Stack Developer",
    location: "Barishal, Bangladesh",
    email: "ExTanmoy0@gmail.com",
    phone: "01756896743",
    avatar: "/images/my-photo.png",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/ExTanmoy",
      label: "github.com/ExTanmoy",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/extanmoy/",
      label: "linkedin.com/in/extanmoy",
    },
  ],
  education: {
    degree: "B.S.S. in Economics",
    institution: "Govt. Brojomohon College",
  },
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Styling",
      skills: ["Tailwind CSS", "Shadcn UI", "DaisyUI"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      category: "Authentication",
      skills: ["Better Auth"],
    },
    {
      category: "Other",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "SEO",
        "Performance Optimization",
        "CRUD",
        "E-commerce",
        "AI-assisted Development",
      ],
    },
  ],
  projects: [
    {
      id: "bazar-dor",
      title: "BAZAR DOR",
      description:
        "A Bangla market price tracking web application featuring Bengali price sorting, market-wise price comparison across divisions, and daily price trends to help consumers monitor essential goods.",
      image: "/images/project-ss-1.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "REST API"],
      liveUrl: "https://a7-bazar-dor-green.vercel.app/",
      githubUrl: "https://github.com/ExTanmoy/a7-bazar-dor",
    },
    {
      id: "fitlog",
      title: "FITLOG",
      description:
        "A dark-themed fitness companion featuring workout planning, Context API state management, and localStorage persistence for organizing exercises and daily training routines.",
      image: "/images/project-ss-2.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "DaisyUI",
        "Context API",
        "LocalStorage",
        "REST API",
      ],
      liveUrl: "https://a06-fit-log.vercel.app/",
      githubUrl: "https://github.com/ExTanmoy/a06-fit-log",
    },
    {
      id: "devstack",
      title: "DEVSTACK",
      description:
        "An interactive developer stack management web app featuring categorized technology selection, duplicate prevention, and custom stack management with instant state updates.",
      image: "/images/project-ss-3.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Vite"],
      liveUrl: "https://devstack-a05-ph-ex.netlify.app/",
      githubUrl: "https://github.com/ExTanmoy/A05-DevStack-React-Ts",
    },
  ],
};
