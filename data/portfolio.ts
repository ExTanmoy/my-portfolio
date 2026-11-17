export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  resumeUrl: string;
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

export type HobbyName = "Reading" | "Sports" | "Traveling";

export interface Hobby {
  title: HobbyName;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  technologies: string[];
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges: string[];
  futureImprovements: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  education: Education;
  skills: SkillGroup[];
  hobbies: Hobby[];
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
    // TODO: Replace "#" with the hosted resume URL when the file is available.
    // A fragment keeps the CTA clickable without linking to a fake resume file.
    resumeUrl: "#",
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
  hobbies: [
    {
      title: "Reading",
      description:
        "I enjoy reading books and exploring new ideas that help me learn and grow.",
    },
    {
      title: "Sports",
      description:
        "I enjoy playing and watching sports to stay active and maintain a healthy balance.",
    },
    {
      title: "Traveling",
      description:
        "I love exploring new places, experiencing different cultures, and discovering new perspectives.",
    },
  ],
  projects: [
    {
      id: "bazar-dor",
      slug: "bazardor",
      title: "BAZAR DOR",
      description:
        "A Bangla market price tracking web application featuring Bengali price sorting, market-wise price comparison across divisions, and daily price trends to help consumers monitor essential goods.",
      overview:
        "Bazar Dor (বাজার দর) is a Bangla-first market price tracker. It displays daily prices of essential groceries—including rice, lentils, oil, vegetables, fish, meat, eggs, milk, and spices—with day-over-day price changes and market-wise prices across Bangladesh's six divisions.",
      image: "/images/project-ss-1.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "DaisyUI",
        "Better Auth",
        "MongoDB Atlas",
        "REST API",
      ],
      keyFeatures: [
        "Browse daily grocery prices and price changes.",
        "Market-wise prices across Bangladesh's six divisions.",
        "Email/password, Google, and GitHub authentication using Better Auth and MongoDB Atlas.",
        "Protected product details and an editable user profile.",
        "Scrolling price ticker and daily top six price risers and fallers.",
        "Category pages with numeric sorting that supports Bengali numerals.",
        "Custom DaisyUI theme, loading skeletons, and toast notifications.",
      ],
      challenges: [
        "Sorting Bengali-digit prices (৳১২০) required converting them into numbers before comparison.",
        "Configuring Better Auth account linking so users could access the same account through email and Google.",
        "Handling duplicate sign-up issues caused by automatic sign-in behavior and displaying authentication errors correctly.",
        "Improving database response times by deploying Vercel functions in the same region as the MongoDB database.",
      ],
      futureImprovements: [
        "Price history charts for each product.",
        "Email price alerts.",
        "Allow verified users to submit local market prices.",
        "English/Bangla language switch.",
      ],
      liveUrl: "https://a7-bazar-dor-green.vercel.app/",
      githubUrl: "https://github.com/ExTanmoy/a7-bazar-dor",
    },
    {
      id: "fitlog",
      slug: "fitlog",
      title: "FITLOG",
      description:
        "A dark-themed fitness companion featuring workout planning, Context API state management, and localStorage persistence for organizing exercises and daily training routines.",
      overview:
        "FitLog is a dark, minimal gym companion where users can browse workouts, add exercises to their daily plan, and save favourites. The interface follows a Figma design and is fully responsive.",
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
        "Figma",
      ],
      keyFeatures: [
        "Workout library with categories and detail pages.",
        "Personal workout plan and saved workouts using React Context.",
        "localStorage persistence across page reloads.",
        "Toast notifications for add and remove actions.",
        "Responsive, Figma-based interface.",
      ],
      challenges: [
        "Preventing hydration mismatches by loading localStorage data after the component mounts.",
        "Matching Figma spacing, typography, and colors across different screen sizes.",
        "Keeping workout plans and saved lists synchronized across pages using shared Context state.",
      ],
      futureImprovements: [
        "User accounts and cross-device synchronization.",
        "Workout timer and set/rep tracking.",
        "Weekly progress charts.",
      ],
      liveUrl: "https://a06-fit-log.vercel.app/",
      githubUrl: "https://github.com/ExTanmoy/a06-fit-log",
    },
    {
      id: "devstack",
      slug: "devstack",
      title: "DEVSTACK",
      description:
        "An interactive developer stack management web app featuring categorized technology selection, duplicate prevention, and custom stack management with instant state updates.",
      overview:
        "DevStack is a React application for exploring developer technologies and building a personal technology stack. Technology data is loaded from a JSON file and displayed through responsive cards with ratings, difficulty levels, and badges.",
      image: "/images/project-ss-3.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Vite"],
      keyFeatures: [
        "Technology data loaded from a JSON file with a loading spinner.",
        "Responsive card grid with ratings, difficulty levels, and badges.",
        "\"Your Stack\" sidebar with add, remove, and remove-all functionality.",
        "Duplicate prevention with warning toast notifications.",
        "Consistent brand gradient managed from a single place.",
      ],
      challenges: [
        "Understanding the correct use of useEffect to fetch JSON data once on component mount.",
        "Preventing duplicate technologies from being added and providing clear feedback.",
        "Maintaining a consistent gradient across the logo, hero, and buttons.",
      ],
      futureImprovements: [
        "Save technology stacks using shareable links.",
        "Filter and search technologies by category.",
        "Compare two technologies side by side.",
      ],
      liveUrl: "https://devstack-a05-ph-ex.netlify.app/",
      githubUrl: "https://github.com/ExTanmoy/A05-DevStack-React-Ts",
    },
  ],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolioData.projects.find((project) => project.slug === slug);
}
