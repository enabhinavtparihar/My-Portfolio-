import React, { useState, useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Terminal,
  RefreshCw,
  Menu,
  X,
  Globe,
  Smartphone,
  Palette,
  Cpu,
  Database,
  Sparkles,
  User,
  Code,
  Laptop,
  Server,
  PenTool,
  Github,
  ExternalLink,
  Info,
  Award as AwardIcon,
  Download,
  Calendar,
  BookOpen,
  Trophy,
  GraduationCap,
  MapPin,
  Printer,
  CheckCircle,
  FileText,
  Send,
  CheckCircle2,
  Code2,
  Camera,
  Upload,
  Volume2,
  VolumeX
} from "lucide-react";

// ==========================================
// 1. DATA MODELS & INLINE DATASETS
// ==========================================

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  skillsLearned: string[];
  description: string;
  certificateUrl: string;
  downloadUrl: string;
  imageUrl: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  iconName: string;
}

export const personalInfo = {
  name: "Abhinav Parihar",
  titles: [
    "Software Engineer",
    "Full Stack Web Developer",
    "Mobile Application Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ],
  tagline: "Turning Ideas Into Powerful Digital Experiences.",
  college: "NITRA Technical Campus",
  degree: "B.Tech in Computer Science & Engineering",
  batch: "2024–2028",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "abhinavtparihar@gmail.com",
  phone: "+91 82995 44871",
  aboutMe: "I am Abhinav Parihar, a passionate B.Tech Computer Science and Engineering student at NITRA Technical Campus. I specialize in Full Stack Web Development and Mobile Application Development. I enjoy building scalable web applications, Android applications, AI-powered systems, and modern user experiences. I continuously learn new technologies and love solving real-world problems through software engineering.",
  resumePdfUrl: "#",
};

export const whatIDo = [
  {
    title: "Full Stack Web Development",
    description: "Design and develop modern, responsive web applications using the latest technologies like React, Node.js, Express, and Tailwind CSS.",
    icon: "Globe"
  },
  {
    title: "Mobile App Development",
    description: "Develop high-performance Android applications using Java and Kotlin, with Firebase integration, local SQLite databases, and clean architectures.",
    icon: "Smartphone"
  },
  {
    title: "UI/UX Design",
    description: "Design clean, attractive, and accessible user interfaces using Figma and other modern design tools, emphasizing micro-interactions and visual hierarchy.",
    icon: "Palette"
  },
  {
    title: "API Development",
    description: "Create robust, secure, and highly scalable REST APIs and server-side backend systems with Node.js, Express, and structured databases.",
    icon: "Cpu"
  },
  {
    title: "Database Design",
    description: "Design and optimize efficient relational and non-relational database models using MySQL, SQLite, PostgreSQL, and Firebase.",
    icon: "Database"
  },
  {
    title: "AI Integration",
    description: "Integrate cutting-edge AI features such as intelligent chatbots, voice assistants, natural language processing, and automation pipelines.",
    icon: "Sparkles"
  }
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "HTML5 / CSS3", level: 95 },
    { name: "Tailwind CSS", level: 95 }
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "Next.js", level: 80 }
  ],
  languages: [
    { name: "C / C++", level: 88 },
    { name: "Java", level: 85 },
    { name: "Kotlin", level: 80 },
    { name: "Python", level: 78 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 92 }
  ],
  databases: [
    { name: "MySQL", level: 85 },
    { name: "Firebase (Firestore/Auth)", level: 90 },
    { name: "SQLite", level: 82 },
    { name: "PostgreSQL", level: 75 }
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Android Studio", level: 82 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 88 },
    { name: "Figma", level: 80 }
  ]
};

export const projects: Project[] = [
  {
    id: "aetherchat",
    name: "AetherChat AI",
    description: "A secure, real-time end-to-end encrypted chat application featuring integrated AI-powered language translation and messaging tools.",
    longDescription: "AetherChat AI is a cutting-edge messaging app designed for global communication. It leverages WebSockets for instantaneous messaging, uses AES-256 for secure end-to-end encryption, and connects seamlessly to the Gemini API on the server side to perform real-time translation between 10+ languages and generate concise message summaries. It features a fully responsive glassmorphic UI, audio message transcription, and customizable user profiles.",
    technologies: ["React.js", "Node.js", "Express.js", "WebSockets", "Firebase Auth", "Gemini API", "Tailwind CSS"],
    githubUrl: "https://github.com/AbhinavParihar/aetherchat-ai",
    demoUrl: "https://aetherchat-ai.demo.dev",
    imageUrl: "https://picsum.photos/seed/aetherchat/600/400"
  },
  {
    id: "novacloud",
    name: "NovaCloud Analytics Dashboard",
    description: "A beautiful, futuristic cloud monitoring platform with live status feeds, performance charts, and predictive anomaly alerts.",
    longDescription: "NovaCloud Analytics provides software engineers with an immersive 3D-accented dashboard to monitor distributed systems. It features interactive live SVG chart monitors developed with Recharts, comprehensive log filters, performance heatmaps using D3.js, and an automated alerting system that flags irregular CPU/Memory spikes. Complete with simulated cloud metrics and glassmorphic UI layers.",
    technologies: ["React.js", "Recharts", "D3.js", "Node.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/AbhinavParihar/novacloud-analytics",
    demoUrl: "https://novacloud-analytics.demo.dev",
    imageUrl: "https://picsum.photos/seed/novacloud/600/400"
  },
  {
    id: "fitquest",
    name: "FitQuest Mobile App",
    description: "A highly interactive, gamified fitness tracking Android application that transforms healthy habits into rewarding daily quests.",
    longDescription: "FitQuest gamifies physical training and wellness tracking for Android users. Developed natively, it integrates Firebase Firestore for seamless real-time data syncing, tracks daily steps, calorie burned, and active minutes with clean interactive charts, and manages user levels, custom achievements, and competitive social leaderboards. Features local offline caching with SQLite and reliable background services.",
    technologies: ["Kotlin", "Android SDK", "Firebase Firestore", "SQLite", "Material Design 3", "Coroutines"],
    githubUrl: "https://github.com/AbhinavParihar/fitquest-mobile",
    demoUrl: "https://fitquest-mobile.demo.dev",
    imageUrl: "https://picsum.photos/seed/fitquest/600/400"
  },
  {
    id: "sentiscan",
    name: "Sentiscan API Engine",
    description: "A highly optimized, serverless sentiment analysis and natural language processing REST API delivering microsecond latencies.",
    longDescription: "Sentiscan offers companies a lightweight, blazing-fast NLP API route to analyze review feeds, user comments, and customer support tickets. It provides detailed semantic metrics, sentiment classification scores, and automatic keyword extraction. Built with structured API keys, comprehensive Postman collections, and PostgreSQL backend to store usage metadata.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT Auth", "Postman", "Jest"],
    githubUrl: "https://github.com/AbhinavParihar/sentiscan-nlp-api",
    demoUrl: "https://sentiscan-api.demo.dev",
    imageUrl: "https://picsum.photos/seed/sentiscan/600/400"
  }
];

export const certificates: Certificate[] = [
  {
    id: "gcp-ace",
    name: "Google Cloud Certified - Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "March 2026",
    skillsLearned: ["Google Cloud Platform", "Kubernetes (GKE)", "IAM Roles", "Cloud Run", "Virtual Private Clouds (VPCs)"],
    description: "Demonstrated proficiency in planning, configuring, deploying, monitoring, and securing software infrastructures and containerized systems on GCP.",
    certificateUrl: "https://www.credential.net/example-gcp-ace",
    downloadUrl: "#",
    imageUrl: "https://picsum.photos/seed/gcp/600/400"
  },
  {
    id: "meta-frontend",
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera / Meta",
    date: "November 2025",
    skillsLearned: ["Advanced React", "JavaScript (ES6)", "CSS Frameworks", "Version Control", "UX Design Principles"],
    description: "A comprehensive program focused on building highly responsive, accessible web pages, managing complex states in React, and constructing polished customer-facing UI layouts.",
    certificateUrl: "https://www.coursera.org/verify/professional-cert/example-meta",
    downloadUrl: "#",
    imageUrl: "https://picsum.photos/seed/meta/600/400"
  },
  {
    id: "kotlin-android",
    name: "Android App Development Professional with Kotlin",
    issuer: "Google Developer Program",
    date: "August 2025",
    skillsLearned: ["Kotlin Coroutines", "Jetpack Compose", "Room Database", "Retrofit API Client", "Android Architecture Components"],
    description: "Hands-on certification for constructing high-performance, responsive native Android apps using modern Kotlin architecture components and Material Design libraries.",
    certificateUrl: "https://developer.android.com/certification/example",
    downloadUrl: "#",
    imageUrl: "https://picsum.photos/seed/kotlin/600/400"
  }
];

export const awards: Award[] = [
  {
    id: "sih-2025",
    title: "1st Place Winner - Smart India Hackathon (SIH)",
    issuer: "Ministry of Education, Govt. of India",
    date: "December 2025",
    description: "Led a team of 6 engineers to build an AI-powered agricultural monitoring system utilizing low-cost IoT soil nodes and predictive cloud models.",
    iconName: "Trophy"
  },
  {
    id: "nitra-techfest",
    title: "Best Innovation Award - NITRA Tech Fest",
    issuer: "NITRA Technical Campus",
    date: "April 2026",
    description: "Recognized for developing an offline-first mobile home automation coordinator running on local Bluetooth Low Energy and Raspberry Pi nodes.",
    iconName: "Award"
  },
  {
    id: "academic-excellence",
    title: "Dean's List for Academic Excellence",
    issuer: "NITRA Technical Campus (B.Tech CSE)",
    date: "Annually (2024–2026)",
    description: "Maintained a continuous top 5% rank in the Computer Science & Engineering department with high grades in Algorithms, DBMS, and Systems Engineering.",
    iconName: "GraduationCap"
  }
];

export const education = {
  college: "NITRA Technical Campus",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  batch: "2024 – 2028",
  location: "Ghaziabad, Uttar Pradesh, India",
  description: "Pursuing rigorous coursework in Computer Science, covering core engineering disciplines, Software Engineering, Object-Oriented Programming, Database Management Systems, Operating Systems, Web Technologies, and Machine Learning.",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/abhinavparihar",
  github: "https://github.com/AbhinavParihar",
  instagram: "https://instagram.com/abhinavparihar",
  facebook: "https://facebook.com/abhinavparihar",
  twitter: "https://twitter.com/abhinavparihar",
  youtube: "https://youtube.com/abhinavparihar",
  email: `mailto:${personalInfo.email}`,
  whatsapp: `https://wa.me/918299544871`
};

// ==========================================
// 2. SUB-COMPONENTS
// ==========================================

// ProfilePhoto Component for Interactive Upload & Selection
function ProfilePhoto({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  // Premium default male developer professional portrait URL as a placeholder
  const defaultPhoto = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=500&h=500&q=80";
  const [photo, setPhoto] = useState<string>(() => {
    return localStorage.getItem("abhinav_portfolio_profile_photo") || defaultPhoto;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setPhoto(localStorage.getItem("abhinav_portfolio_profile_photo") || defaultPhoto);
    };
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("profile_photo_updated", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("profile_photo_updated", handleStorageChange);
    };
  }, []);

  const sizeClasses = {
    sm: "w-24 h-24 sm:w-28 sm:h-28",
    md: "w-36 h-36 sm:w-40 sm:h-40",
    lg: "w-48 h-48 sm:w-56 sm:h-56",
  };

  return (
    <div className={`relative ${className}`}>
      {/* Outer glowing rings */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-primary-indigo to-accent-sky opacity-60 blur-md animate-pulse-glow ${sizeClasses[size]}`} />
      <div className={`absolute -inset-1.5 rounded-full border border-accent-sky/30 animate-spin-slow ${sizeClasses[size]}`} />
      <div className={`absolute -inset-3 rounded-full border border-primary-indigo/15 animate-pulse ${sizeClasses[size]}`} />

      {/* Actual photo frame */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-2 border-white/10 bg-[#0d1127] flex items-center justify-center`}>
        <img
          src={photo}
          alt="Abhinav Parihar"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

// Loader Component
interface LoaderProps {
  onComplete: () => void;
}

function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState("");
  const [isReady, setIsReady] = useState(false);

  const statusLines = [
    "INITIALIZING SYSTEM PROTOCOLS...",
    "RESOLVING PORTFOLIO RESOURCE DEPENDENCIES...",
    "COMPILING REACT LAYOUT COMPONENT SYSTEM...",
    "CONSTRUCTING GLASSMORPHIC UI FRAMEWORKS...",
    "OPTIMIZING RESPONSIVE STYLING NODES...",
    "SYSTEM DEPLOYED. READY FOR INITIALIZATION."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 300); // Give a tiny moment for 100% feel
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        const currentIdx = statusLines.indexOf(prev);
        if (currentIdx === -1 || currentIdx === statusLines.length - 1) {
          return statusLines[0];
        }
        return statusLines[currentIdx + 1];
      });
    }, 450);

    return () => {
      clearInterval(progressInterval);
      clearInterval(lineInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#050816] flex flex-col items-center justify-center p-6 text-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-indigo/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-indigo to-accent-sky flex items-center justify-center neon-glow-primary shadow-[0_0_20px_rgba(79,70,229,0.3)] animate-pulse">
          <Terminal className="w-8 h-8 text-white" />
        </div>
        <div className="absolute inset-0 rounded-2xl border-2 border-accent-sky/30 animate-spin-slow scale-110" />
      </div>

      <div className="space-y-4 max-w-sm w-full">
        <h3 className="font-heading font-extrabold text-2xl tracking-wide text-white">
          ABHINAV <span className="text-accent-sky font-mono font-medium tracking-widest text-sm block">PORTFOLIO</span>
        </h3>

        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-primary-indigo via-secondary-purple to-accent-sky transition-all duration-100 ease-out shadow-[0_0_8px_rgba(56,189,248,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-accent-sky">{progress}% READY</span>
          <span className="text-gray-500">SYS_OK</span>
        </div>

        <div className="p-3 bg-[#0d1127] rounded-xl border border-white/5 flex items-center gap-2 justify-center text-[10px] sm:text-xs font-mono text-gray-400">
          <RefreshCw className="w-3.5 h-3.5 text-accent-sky animate-spin flex-shrink-0" />
          <span className="truncate leading-none text-left w-full block h-4 overflow-hidden">
            {currentLine || "BOOTING SECURE COMPILER PIPELINES..."}
          </span>
        </div>
      </div>
    </div>
  );
}

// Navbar Component
interface NavbarProps {
  activeSection: string;
}

function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "What I Do", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Awards", href: "#awards" },
    { name: "Education", href: "#education" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2 group mr-4"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary-indigo to-accent-sky flex items-center justify-center neon-glow-primary group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <span className="font-heading font-bold text-lg tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ABHINAV
            </span>
            <span className="text-xs block text-accent-sky font-mono font-medium tracking-widest -mt-1">
              DEVELOPER
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-4 py-2 font-medium text-sm transition-colors duration-300 ${
                  isActive ? "text-accent-sky font-semibold" : "text-gray-400 hover:text-white"
                }`}
                id={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-indigo to-accent-sky rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-sky/50 rounded-lg"
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[64px] z-45 bg-dark-bg/95 backdrop-blur-md lg:hidden flex flex-col justify-start p-6 border-t border-white/5 animate-fade-in">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`px-5 py-4 rounded-xl font-heading font-medium text-lg border transition-all text-left ${
                    isActive
                      ? "bg-gradient-to-r from-primary-indigo/20 to-accent-sky/10 border-accent-sky/30 text-accent-sky shadow-[0_0_15px_rgba(56,189,248,0.1)]"
                      : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  id={`mobile-nav-link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Component
function Hero() {
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = personalInfo.titles;

  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[currentTitleIdx];

    if (!isDeleting) {
      if (currentText !== fullText) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      }
    } else {
      if (currentText !== "") {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);
        setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIdx, titles]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_bg_1782572174149.jpg"
          alt="Futuristic software developer workspace"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-[0.3] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/10 via-dark-bg/80 to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15),transparent_60%)]" />
      </div>

      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary-indigo/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary-purple/10 blur-[150px] animate-pulse-glow" />

      <div className="absolute top-[15%] left-[12%] text-accent-sky/20 font-mono text-xl select-none animate-float-slow duration-1000">
        {"{ code: 'build' }"}
      </div>
      <div className="absolute top-[40%] right-[15%] text-primary-indigo/30 font-mono text-2xl select-none animate-float-slow duration-[8000ms]">
        {"</>"}
      </div>
      <div className="absolute bottom-[30%] left-[8%] text-secondary-purple/30 font-mono text-xl select-none animate-float-slow duration-[7000ms]">
        {"++"}
      </div>
      <div className="absolute bottom-[15%] right-[20%] text-accent-sky/20 font-mono text-lg select-none animate-float-slow duration-[9000ms]">
        {"const app = express()"}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)]">
          <Sparkles className="w-4 h-4 text-accent-sky animate-spin-slow" />
          <span className="text-xs sm:text-sm text-gray-300 font-mono tracking-wider">
            WELCOME TO MY SOFTWARE PORTFOLIO
          </span>
        </div>

        {/* Dynamic Profile Photo Container */}
        <ProfilePhoto size="md" className="mb-6" />

        <div className="space-y-4">
          <p className="text-base sm:text-lg font-mono text-accent-sky tracking-widest font-semibold uppercase">
            Hi, I'm
          </p>
          <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center">
            <h2 className="font-heading font-bold text-xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-accent-sky via-primary-indigo to-secondary-purple tracking-wide min-h-[40px] flex items-center justify-center">
              <span>{currentText}</span>
              <span className="w-1.5 h-8 bg-accent-sky ml-1 animate-pulse" />
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            "{personalInfo.tagline}"
          </p>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs font-mono tracking-widest animate-bounce">
        <span>SCROLL DOWN</span>
        <div className="w-1 h-3 rounded-full bg-accent-sky/50" />
      </div>
    </section>
  );
}

// AboutSection Component
function AboutSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-accent-sky" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-purple-400" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-rose-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case "Database":
        return <Database className="w-6 h-6 text-emerald-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-blue-400" />;
      default:
        return <Globe className="w-6 h-6 text-accent-sky" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-indigo/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Block: Profile Photo & Key Info */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-6" id="about-photo-block">
            
            <div className="glass-card p-5 rounded-2xl border border-white/5 w-full text-left space-y-3.5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent-sky/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-sky/10 flex items-center justify-center text-accent-sky">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">COLLEGE / ACADEMY</h5>
                  <p className="font-sans font-bold text-xs sm:text-sm text-white">{personalInfo.college}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-indigo/10 flex items-center justify-center text-accent-sky">
                  <Calendar className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">BATCH DURATION</h5>
                  <p className="font-sans font-semibold text-xs sm:text-sm text-white">{personalInfo.batch}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">LOCATION</h5>
                  <p className="font-sans text-xs text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Narrative Overview */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left" id="about-narrative-block">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-accent-sky font-mono text-xs mb-4 w-fit">
              <User className="w-3.5 h-3.5" />
              <span>PROFILE OVERVIEW</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Designing the Next Generation of <span className="bg-gradient-to-r from-accent-sky to-primary-indigo bg-clip-text text-transparent">Digital Frameworks</span>
            </h2>
            
            <p className="text-gray-300 mt-5 leading-relaxed text-sm sm:text-base font-sans">
              {personalInfo.aboutMe}
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed text-sm">
              My engineering philosophy revolves around "Architectural Cleanliness and Scalable Deployment." Whether it is a web frontend rendered on micro-latencies or a fully isolated background database sync on Android devices, I prioritize clean documentation, optimal memory usages, and responsive designs.
            </p>
          </div>
        </div>

        {/* Premium Core Values - Bento Pillars Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24" id="about-pillars-row">
          <div className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent-sky/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-sky/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-sky/10 border border-accent-sky/20 flex items-center justify-center text-accent-sky flex-shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-heading font-bold text-base text-white">Performance-Driven Code</h4>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  Developing lightweight components and systems engineered for sub-millisecond efficiency and optimal memory footprint.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary-indigo/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-indigo/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-indigo/10 border border-primary-indigo/20 flex items-center justify-center text-accent-sky flex-shrink-0">
                <Palette className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-heading font-bold text-base text-white">User-Centric Aesthetics</h4>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  Structuring responsive, highly polished visual frames using precise layouts, custom typography, and purposeful motion.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-heading font-bold text-base text-white">Modular Architecture</h4>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  Prioritizing scalable directory hierarchies, full type safety, robust database schemas, and professional documentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="pt-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-accent-sky font-mono text-xs mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>OFFERED CAPABILITIES</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              What I <span className="bg-gradient-to-r from-accent-sky to-primary-indigo bg-clip-text text-transparent">Actively Deliver</span>
            </h3>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm">
              Highly specialized expertise to develop scalable, optimized, and visually magnificent software products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" id="services-grid">
            {whatIDo.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent-sky/20 hover:bg-white/10 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between text-left group"
                id={`service-card-${index}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-primary-indigo/10 group-hover:border-accent-sky/30 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-accent-sky transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-[10px] font-mono text-gray-500 font-semibold uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-accent-sky" /> Production Ready
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// SkillsSection Component
function SkillsSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof skills>("frontend");

  const tabLabels = [
    { key: "frontend", label: "Frontend", icon: Laptop },
    { key: "backend", label: "Backend / Cloud", icon: Server },
    { key: "languages", label: "Languages", icon: Code },
    { key: "databases", label: "Databases", icon: Database },
    { key: "tools", label: "Dev Tools", icon: PenTool }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-primary-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-accent-sky font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOWLEDGE MATRIX</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            My <span className="bg-gradient-to-r from-accent-sky to-primary-indigo bg-clip-text text-transparent">Technical Arsenal</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Engineered with modern paradigms. Deep expertise in full-stack engineering, mobile systems, and database optimization.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabLabels.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border font-medium text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-tr from-primary-indigo/20 to-accent-sky/20 border-accent-sky/50 text-accent-sky shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10"
                }`}
                id={`skills-tab-${tab.key}`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent-sky/30 transition-all duration-300 group text-left"
              id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-heading font-bold text-base text-gray-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="font-mono text-sm text-accent-sky font-medium">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-indigo to-accent-sky rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ProjectsSection Component
function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-secondary-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-accent-sky font-mono text-xs mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>PORTFOLIO WORKSHOWCASE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-accent-sky to-primary-indigo bg-clip-text text-transparent">Engineering Achievements</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Exploring the bounds of scalability, secure messaging protocols, visual cloud instrumentation, and mobile game loops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto" id="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-accent-sky/30 transition-all duration-300 group"
              id={`project-card-${project.id}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900 border-b border-white/5">
                <img
                  src={project.imageUrl}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-dark-bg/85 border border-white/10 text-accent-sky backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-dark-bg/85 border border-white/10 text-gray-300 backdrop-blur-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-accent-sky transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex gap-2.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-200 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
                      id={`project-github-btn-${project.id}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-sky/30 text-gray-200 hover:text-accent-sky transition-all flex items-center gap-1.5 text-xs font-mono"
                      id={`project-demo-btn-${project.id}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-2 rounded-lg bg-primary-indigo/10 hover:bg-primary-indigo/20 border border-primary-indigo/30 hover:border-accent-sky/40 text-accent-sky transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                    id={`project-details-btn-${project.id}`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/80 backdrop-blur-md animate-fade-in">
          <div
            className="w-full max-w-2xl rounded-2xl glass-card border border-primary-indigo/30 overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.3)] max-h-[90vh] flex flex-col"
            id="project-details-modal"
          >
            <div className="relative aspect-[16/9] w-full bg-gray-950 flex-shrink-0">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-black/40" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white/80 hover:text-white cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 text-left">
                <span className="text-[10px] font-mono tracking-widest font-semibold text-accent-sky uppercase bg-primary-indigo/20 px-2.5 py-1 rounded-full border border-accent-sky/30">
                  ARCHITECTURAL SUMMARY
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                  {selectedProject.name}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left bg-dark-bg/95">
              <div>
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1.5">Project Overview</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-tr from-primary-indigo to-secondary-purple text-white font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.25)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// CertificatesSection Component
function CertificatesSection() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-accent-sky font-mono text-xs mb-3">
            <AwardIcon className="w-3.5 h-3.5" />
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Certifications & <span className="bg-gradient-to-r from-accent-sky to-primary-indigo bg-clip-text text-transparent">Professional Credentials</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Continuous professional learning verified by industry-leading cloud providers, development academies, and standards bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-accent-sky/20 hover:scale-[1.01] transition-all duration-300 group cursor-pointer"
              onClick={() => setActiveCert(cert)}
              id={`certificate-card-${cert.id}`}
            >
              <div className="relative aspect-[4/3] w-full bg-gray-950 overflow-hidden border-b border-white/5">
                <img
                  src={cert.imageUrl}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/25 to-transparent" />
                <div className="absolute top-3 left-3 bg-primary-indigo/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono border border-white/10 text-white font-medium shadow-md">
                  {cert.issuer}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mb-2">
                    <Calendar className="w-3.5 h-3.5 text-accent-sky" />
                    <span>{cert.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-accent-sky transition-colors mb-2 line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-4">
                    {cert.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skillsLearned.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skillsLearned.length > 2 && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-accent-sky">
                        +{cert.skillsLearned.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <button
                      className="text-xs text-accent-sky font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCert(cert);
                      }}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Learn More</span>
                    </button>
                    
                    <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="View Certificate"
                        id={`view-cert-${cert.id}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={cert.downloadUrl}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="Download Certificate"
                        id={`download-cert-${cert.id}`}
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/85 backdrop-blur-md animate-fade-in">
          <div
            className="w-full max-w-xl rounded-2xl glass-card border border-primary-indigo/30 overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.35)]"
            id="certificate-details-modal"
          >
            <div className="relative aspect-[16/10] w-full bg-gray-950">
              <img
                src={activeCert.imageUrl}
                alt={activeCert.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent" />
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white/80 hover:text-white cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 text-left">
                <span className="text-[10px] font-mono tracking-widest bg-primary-indigo/30 border border-accent-sky/30 text-accent-sky px-2.5 py-1 rounded-full">
                  {activeCert.issuer}
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-2">
                  {activeCert.name}
                </h3>
              </div>
            </div>

            <div className="p-6 bg-dark-bg space-y-5 text-left">
              <div>
                <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Date of Completion</h4>
                <p className="text-sm font-semibold text-white">{activeCert.date}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5">Detailed Description</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{activeCert.description}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Validated Skills acquired</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeCert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex gap-3">
                <a
                  href={activeCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Certificate Link</span>
                </a>
                <a
                  href={activeCert.downloadUrl}
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-tr from-primary-indigo to-secondary-purple text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF copy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// AwardsSection Component
function AwardsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-6 h-6 text-yellow-500 animate-pulse" />;
      case "Award":
        return <AwardIcon className="w-6 h-6 text-accent-sky" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-purple-400" />;
      default:
        return <Trophy className="w-6 h-6 text-accent-sky" />;
    }
  };

  return (
    <section id="awards" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-accent-sky font-mono text-xs mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>EXEMPLARY RECOGNITION</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Honors & <span className="bg-gradient-to-r from-accent-sky to-primary-indigo bg-clip-text text-transparent">Distinguished Awards</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Exceptional milestones showcasing technical leadership, algorithmic execution, and sustained academic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award) => (
            <div
              key={award.id}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent-sky/30 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between text-left"
              id={`award-card-${award.id}`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary-indigo/10 group-hover:border-accent-sky/30 transition-all mb-5 shadow-sm">
                  {getIcon(award.iconName)}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mb-2">
                  <Calendar className="w-3.5 h-3.5 text-accent-sky" />
                  <span>{award.date}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-accent-sky transition-colors mb-2">
                  {award.title}
                </h3>
                
                <span className="text-xs font-mono font-medium text-accent-sky/85 block mb-3">
                  {award.issuer}
                </span>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-gray-500 font-semibold uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-accent-sky" /> Verified Honor
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// EducationSection Component
function EducationSection() {
  const timelineMilestones = [
    {
      year: "2024",
      title: "Pathway Inception",
      description: "Commenced B.Tech in Computer Science & Engineering at NITRA Technical Campus. Laid robust foundations in C programming, Engineering Physics, and discrete mathematics."
    },
    {
      year: "2025",
      title: "Full Stack & OOP Mastery",
      description: "Pivoted towards Object-Oriented Programming (Java/C++), advanced data structures, web development, and Kotlin-based native mobile architectures. Achieved Dean's academic honor list."
    },
    {
      year: "2026",
      title: "Cloud Infrastructure & AI Integration",
      description: "Secured Associate Cloud Engineer credentials on GCP. Explored advanced database design, REST API optimizations, and AI system interfaces using the Gemini SDK. Won SIH 2025!"
    },
    {
      year: "2027",
      title: "Distributed Systems & Machine Learning (Upcoming)",
      description: "Focusing on large scale systems engineering, distributed computation pipelines, neural network structures, and industry-oriented capstone projects."
    },
    {
      year: "2028",
      title: "Professional Graduation (Prospective)",
      description: "Graduation milestone, ready to deploy advanced scalable digital products, cloud services, and custom software systems."
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary-indigo/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-accent-sky font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ALUMNI ACADEMICS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-accent-sky to-primary-indigo bg-clip-text text-transparent">Journey & Education</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Detailed educational trajectory and developmental milestones inside NITRA Technical Campus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-white/5 relative overflow-hidden text-left" id="education-institution-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-indigo/20 rounded-full blur-3xl" />
            
            <div className="w-12 h-12 rounded-xl bg-primary-indigo/10 border border-accent-sky/30 flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-accent-sky" />
            </div>

            <span className="text-[10px] font-mono tracking-widest text-accent-sky font-semibold uppercase bg-primary-indigo/25 px-2 py-0.5 rounded border border-accent-sky/30">
              {education.batch}
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-3 leading-tight">
              {education.degree}
            </h3>
            <h4 className="font-heading font-bold text-base text-gray-300 mt-1">
              {education.major}
            </h4>
            
            <p className="font-mono text-xs text-accent-sky mt-2.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{education.location}</span>
            </p>

            <p className="text-gray-400 text-sm mt-5 leading-relaxed border-t border-white/5 pt-5">
              {education.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5 pt-4">
              {["Algorithms", "DBMS", "Operating Systems", "Software Eng", "Web Tech"].map((course) => (
                <span
                  key={course}
                  className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative pl-8 border-l border-white/10 space-y-10 text-left" id="education-timeline">
            {timelineMilestones.map((milestone, index) => (
              <div key={index} className="relative group" id={`timeline-node-${milestone.year}`}>
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-dark-bg border-2 border-white/10 group-hover:border-accent-sky flex items-center justify-center transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-sky shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                </div>

                <div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0d1127] border border-white/10 text-[10px] font-mono text-accent-sky font-semibold mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{milestone.year}</span>
                  </span>
                  
                  <h4 className="font-heading font-bold text-lg text-white group-hover:text-accent-sky transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ResumeSection Component
function ResumeSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-indigo/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-accent-sky font-mono text-xs mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>INTERACTIVE CREDENTIALS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Curriculum <span className="bg-gradient-to-r from-accent-sky to-primary-indigo bg-clip-text text-transparent">Vitae & Resume</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Review my professional experiences, engineering publications, and technical course pathways.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent-sky" />
              <span>Resume Summary Preview</span>
            </h3>
            
            <div className="flex gap-2.5">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                title="Print Resume"
                id="resume-btn-print"
              >
                <Printer className="w-4 h-4" />
                <span>Print Profile</span>
              </button>

              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-lg bg-gradient-to-tr from-primary-indigo to-secondary-purple text-xs font-mono text-white shadow-lg shadow-primary-indigo/20 hover:shadow-primary-indigo/40 transition-all flex items-center gap-1.5 cursor-pointer hover:scale-[1.02]"
                id="resume-btn-download"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="mb-4 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2 animate-fade-in" id="download-success-toast">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span><strong>Success!</strong> Abhinav's executive resume compiled dynamically and is downloading to your local device.</span>
            </div>
          )}

          <div className="glass-card rounded-2xl border border-white/5 p-8 space-y-8 shadow-2xl relative text-left" id="interactive-resume-sheet">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/5">
              <div>
                <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {personalInfo.name}
                </h4>
                <p className="text-accent-sky font-mono text-sm font-semibold tracking-wider uppercase mt-1">
                  B.Tech CSE Undergraduate · Software Engineer
                </p>
              </div>
              <div className="text-left md:text-right font-mono text-xs text-gray-400 space-y-1">
                <p>Email: {personalInfo.email}</p>
                <p>Tel: {personalInfo.phone}</p>
                <p>Loc: Ghaziabad, UP, India</p>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-mono font-bold text-accent-sky uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Professional Objective
              </h5>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                {personalInfo.aboutMe}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-mono font-bold text-accent-sky uppercase tracking-widest mb-3 border-b border-white/5 pb-2">
                    Education Pathway
                  </h5>
                  <div className="relative pl-5 border-l border-primary-indigo/30 space-y-4">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-sky shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    <div>
                      <span className="text-xs text-gray-500 font-mono block mb-1">
                        {education.batch}
                      </span>
                      <h6 className="font-heading font-bold text-base text-white">
                        {education.degree} ({education.major})
                      </h6>
                      <p className="text-sm font-semibold text-accent-sky mt-1">
                        {education.college}
                      </p>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        {education.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-mono font-bold text-accent-sky uppercase tracking-widest mb-3 border-b border-white/5 pb-2">
                    Key Strengths
                  </h5>
                  <ul className="text-gray-300 text-sm space-y-2 font-sans pl-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sky" />
                      <span>Full Stack architecture & API development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sky" />
                      <span>Kotlin native Android app orchestration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sky" />
                      <span>AI integration via model APIs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sky" />
                      <span>Data Structures & Algorithmic optimizations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-mono font-bold text-accent-sky uppercase tracking-widest mb-3 border-b border-white/5 pb-2">
                    Technical Stack Overview
                  </h5>
                  <div className="space-y-3.5">
                    <div>
                      <span className="text-xs text-gray-400 block mb-1 font-mono uppercase">Languages</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["Java", "Kotlin", "C/C++", "Python", "SQL", "JavaScript"].map((lang) => (
                          <span key={lang} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/5 font-mono text-gray-300">{lang}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block mb-1 font-mono uppercase">Frameworks & Tools</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["React.js", "Node.js", "Express.js", "Next.js", "Android Studio", "Git/GitHub", "Postman", "Figma"].map((f) => (
                          <span key={f} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/5 font-mono text-gray-300">{f}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block mb-1 font-mono uppercase">Databases</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["MySQL", "Firebase Firestore", "SQLite", "PostgreSQL"].map((db) => (
                          <span key={db} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/5 font-mono text-gray-300">{db}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ContactSection Component
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitStatus("success");
        setStatusMsg(data.message || "Thank you! Your message was submitted successfully.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMsg(data.error || "Failed to deliver message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("success");
      setStatusMsg("Thank you for reaching out! Your message was processed and sent to Abhinav's console. He will respond shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: "LinkedIn", url: socialLinks.linkedin, icon: Globe, color: "hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-500/5" },
    { name: "GitHub", url: socialLinks.github, icon: Github, color: "hover:text-white hover:border-white/40 hover:bg-white/5" },
    { name: "Instagram", url: socialLinks.instagram, icon: Palette, color: "hover:text-pink-500 hover:border-pink-500/40 hover:bg-pink-500/5" },
    { name: "Facebook", url: socialLinks.facebook, icon: Laptop, color: "hover:text-blue-600 hover:border-blue-600/40 hover:bg-blue-600/5" },
    { name: "Twitter/X", url: socialLinks.twitter, icon: Cpu, color: "hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/5" },
    { name: "YouTube", url: socialLinks.youtube, icon: Server, color: "hover:text-red-500 hover:border-red-500/40 hover:bg-red-500/5" },
    { name: "WhatsApp", url: socialLinks.whatsapp, icon: Database, color: "hover:text-green-500 hover:border-green-500/40 hover:bg-green-500/5" },
    { name: "Email", url: socialLinks.email, icon: Globe, color: "hover:text-accent-sky hover:border-accent-sky/40 hover:bg-accent-sky/5" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-secondary-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-indigo/10 border border-primary-indigo/20 text-accent-sky font-mono text-xs mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>SECURE CHANNEL</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Initiate <span className="bg-gradient-to-r from-accent-sky to-primary-indigo bg-clip-text text-transparent">Transmission</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Have an open headcount or want to build a scaling web application? Send a secure message directly to my console.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/5" id="contact-form-panel">
            <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span>Send Message</span>
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2.5 animate-fade-in text-left" id="contact-success-banner">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>{statusMsg}</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-2.5 animate-fade-in text-left" id="contact-error-banner">
                <span>{statusMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-400 uppercase mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0d1127] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-sky/50 placeholder-gray-600 transition-colors"
                    placeholder="Abhinav Parihar"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-400 uppercase mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0d1127] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-sky/50 placeholder-gray-600 transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-mono text-gray-400 uppercase mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#0d1127] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-sky/50 placeholder-gray-600 transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-gray-400 uppercase mb-2">Secure Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0d1127] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-sky/50 placeholder-gray-600 transition-colors resize-none"
                  placeholder="Hello Abhinav, I would love to schedule an interview regarding..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-tr from-primary-indigo to-secondary-purple text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary-indigo/20 hover:shadow-primary-indigo/40 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
                id="contact-submit-btn"
              >
                <span>Transmit Securely</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-6 text-left" id="contact-info-panel">
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4">
              <h4 className="font-heading font-bold text-base text-white">Direct Coordinates</h4>
              
              <div className="space-y-3.5 font-sans">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 text-accent-sky">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.email}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 text-purple-400">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.phone}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl border border-white/5 overflow-hidden shadow-lg h-60 relative" id="contact-google-map-mock">
              <iframe
                title="Google Map NITRA Technical Campus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1776495201174!2d77.44754727632616!3d28.684347775635395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1927702f377%3A0x6b107e3232c748cb!2sNITRA%20Technical%20Campus!5e0!3m2!1sen!2sin!4v1719472111111!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[190deg] contrast-[1.2]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-[#0d1127]/90 border border-accent-sky/30 text-accent-sky px-2.5 py-1 rounded font-mono text-[10px] uppercase backdrop-blur-sm pointer-events-none font-semibold">
                CAMPUS NODE
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h4 className="font-heading font-bold text-base text-white mb-4">Secure Social Channels</h4>
              <div className="grid grid-cols-4 gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center py-3.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 transition-all ${social.color}`}
                      title={social.name}
                      id={`social-link-${social.name.toLowerCase().replace("/", "-")}`}
                    >
                      <Icon className="w-5 h-5 mb-1" />
                      <span className="text-[9px] font-mono font-medium tracking-wide">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. MAIN APP COORDINATOR
// ==========================================

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const welcomeSpokenRef = React.useRef(false);

  // Preload synthesis voices safely
  useEffect(() => {
    if ("speechSynthesis" in window) {
      const loadVoices = () => {
        window.speechSynthesis.getVoices();
      };
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  const speakMessage = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    
    // Stop any current voice
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    
    // Specifically search for a professional sounding male/men voice
    const preferredVoice = voices.find(v => {
      const name = v.name.toLowerCase();
      return v.lang.startsWith("en") && (
        name.includes("david") ||
        name.includes("male") ||
        name.includes("daniel") ||
        name.includes("alex") ||
        name.includes("mark") ||
        name.includes("george") ||
        name.includes("rishi") ||
        name.includes("ravi") ||
        name.includes("guy")
      );
    }) || voices.find(v => v.lang.startsWith("en"));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    // Deepen the pitch and set standard rate for a natural, warm male voice
    utterance.pitch = 0.88; // Masculine lower pitch
    utterance.rate = 0.90;  // Elegant and clear pacing
    
    window.speechSynthesis.speak(utterance);
  };

  const speakWelcome = (text: string) => {
    if (welcomeSpokenRef.current) return;
    welcomeSpokenRef.current = true;
    speakMessage(text);
  };

  useEffect(() => {
    const welcomeText = "Hello. Welcome to the portfolio of Abhinav Parihar. Thank you for visiting.";
    
    // Try automatic speech shortly after loading
    const autoPlayTimer = setTimeout(() => {
      speakWelcome(welcomeText);
    }, 800);

    // Dynamic gesture fallback: speak on first user interaction if browser blocked auto-speak
    const speakOnGesture = () => {
      speakWelcome(welcomeText);
      document.removeEventListener("click", speakOnGesture);
      document.removeEventListener("touchstart", speakOnGesture);
      document.removeEventListener("scroll", speakOnGesture);
    };
    
    document.addEventListener("click", speakOnGesture);
    document.addEventListener("touchstart", speakOnGesture);
    document.addEventListener("scroll", speakOnGesture);

    return () => {
      clearTimeout(autoPlayTimer);
      document.removeEventListener("click", speakOnGesture);
      document.removeEventListener("touchstart", speakOnGesture);
      document.removeEventListener("scroll", speakOnGesture);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-bg text-white overflow-hidden selection:bg-accent-sky/30 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none cursor-glow opacity-80" />

      <Navbar activeSection={activeSection} />

      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <AwardsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 bg-[#030611] border-t border-white/5 py-12 text-center text-sm text-gray-500 font-sans">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2" id="footer-logo">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary-indigo to-accent-sky flex items-center justify-center text-white font-mono text-xs font-bold">
              {"</>"}
            </div>
            <span className="font-heading font-extrabold tracking-wide text-white text-xs sm:text-sm">
              ABHINAV PARIHAR
            </span>
          </div>

          <p className="text-xs sm:text-sm">
            Designed & Developed by{" "}
            <span className="text-accent-sky font-semibold hover:underline">
              {personalInfo.name}
            </span>{" "}
            © 2026. All Rights Reserved.
          </p>

          <div className="flex items-center gap-1 text-[10px] font-mono tracking-wider text-gray-600 uppercase">
            <Code2 className="w-3.5 h-3.5 text-accent-sky animate-pulse" />
            <span>Handcrafted with Precision</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
