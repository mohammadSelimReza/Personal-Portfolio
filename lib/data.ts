// ═══════════════════════════════════════════════
// Portfolio Data — Selim Reza
// ═══════════════════════════════════════════════

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    isPromoted?: boolean;
    award?: string;
}

export interface Project {
    title: string;
    role: string;
    description: string;
    architectureHighlight: string;
    tech: string[];
    github: string;
    featured?: boolean;
}

export interface SkillCategory {
    category: string;
    icon: string;
    skills: { name: string; color: string }[];
}

export interface Goal {
    icon: string;
    label: string;
    description: string;
}

// ─── Experience ───────────────────────────────

export const experiences: Experience[] = [
    {
        title: "Backend Developer (Promoted)",
        company: "Join Venture AI",
        period: "Apr 2025 – Present",
        description:
            "R&D for AI-based projects, designing data schemas, flows, and high-performance API architectures. Built real-time Customer Support Chat using WebSockets and implemented Atomic Transactions for 100% data integrity.",
        achievements: [
            "Built real-time WebSocket chat with Atomic Transactions for 100% data integrity",
            "Engineered EDA workflows for OTP and notification systems using Celery + Redis",
            "Managed live deployments, domain configs, and client communication",
            "Led AI-based R&D projects with high-performance API architectures",
        ],
        isPromoted: true,
        award: "🏆 Best Backend Developer of the Quarter — Nov 2025",
    },
    {
        title: "Backend Developer (Contract)",
        company: "FAARNS (Remote)",
        period: "Dec 2024 – Present",
        description:
            "Built two production platforms from scratch — a drop-shipping and a parcel-forwarding system. Now providing ongoing maintenance and performance scaling.",
        achievements: [
            "Built & launched AmericaToBD.us — drop-shipping & parcel-forwarding platform",
            "Built & launched AmericaToBD.com — global shopping automation platform",
            "Currently maintaining both products with performance scaling & monitoring",
        ],
    },
];

// ─── Projects ─────────────────────────────────

export const projects: Project[] = [
    {
        title: "Scan2Home — Real Estate Platform",
        role: "Backend & AI Integration Engineer",
        description:
            "A robust microservices architecture orchestrating property inventory management and automated data extraction.",
        architectureHighlight:
            "Django (Core API) decoupled from an isolated FastAPI AI module via a secure internal Docker network, reverse-proxied by Nginx. AI module operates without internet access — enterprise-grade security.",
        tech: ["Django", "FastAPI", "PostgreSQL 16", "Docker Compose", "GitHub Actions"],
        github: "https://github.com/mohammadSelimReza/Scan2Home-Smart-Reusable-Board",
        featured: true,
    },
    {
        title: "Global Shopping Automation Engine",
        role: "Backend Developer & Deployment Engineer",
        description:
            "A resilient product sourcing platform automating data extraction across major international marketplaces (Amazon, eBay, Nike).",
        architectureHighlight:
            "Headless browser automation with Playwright + BeautifulSoup, backed by PostgreSQL storage and Cloudinary media. Graceful degradation to manual forms on failure — zero stuck orders.",
        tech: ["Playwright", "BeautifulSoup", "Django 5.x", "WeasyPrint", "JWT"],
        github: "https://github.com/mohammadSelimReza/Global-shopping-automation-and-forwarding-platform-server",
    },
    {
        title: "Phlebotomy Staffing Orchestrator",
        role: "Backend Engineer",
        description:
            "Cross-border marketplace backend orchestrating matching, scheduling, and billing between businesses and medical professionals.",
        architectureHighlight:
            "Complex Stripe subscription lifecycles — multi-tier billing, invoice cycles, and split payments. Deep user modularity (availability matrices vs. digital compliance contracts).",
        tech: ["Stripe API", "Redis", "Docker", "Django REST Framework"],
        github: "https://github.com/mohammadSelimReza/Phlebotomy-Staffing-App-s-Backend-Server",
    },
    {
        title: "Bestowe — AI Gift Finder",
        role: "Backend Developer",
        description:
            "Intelligent backend providing personalized gift recommendations and multi-user split-funding mechanisms.",
        architectureHighlight:
            "LLM-integrated recommendation engine with multi-user pool funding — reconciling Stripe payments with Shopify API for third-party marketplace checkout.",
        tech: ["LLMs", "LangChain", "Stripe API", "Shopify API", "PostgreSQL"],
        github: "https://github.com/mohammadSelimReza/Project-Bestowe-Smart-Gift-Finder-Backend",
    },
    {
        title: "EduSoft E-Learning Platform",
        role: "Full-Stack Developer",
        description:
            "Feature-rich e-learning platform with browsing, enrollment, payments, and interactive learning experiences.",
        architectureHighlight:
            "JWT authentication with RBAC, Swagger-documented APIs, SSLCommerz payment integration, and React frontend with Tailwind CSS.",
        tech: ["Django", "DRF", "PostgreSQL", "SSLCommerz", "React", "Tailwind CSS"],
        github: "https://github.com/mohammadSelimReza/EduSoft---Learning-Management-System",
    },
];

// ─── Skills ───────────────────────────────────

export const skillCategories: SkillCategory[] = [
    {
        category: "Backend & APIs",
        icon: "⚡",
        skills: [
            { name: "Python", color: "#3776AB" },
            { name: "Django", color: "#092E20" },
            { name: "DRF", color: "#ff1709" },
            { name: "FastAPI", color: "#009688" },
            { name: "Celery", color: "#37814A" },
            { name: "Node.js", color: "#339933" },
        ],
    },
    {
        category: "Data & Caching",
        icon: "🗄️",
        skills: [
            { name: "PostgreSQL", color: "#4169E1" },
            { name: "Redis", color: "#DC382D" },
            { name: "MySQL", color: "#4479A1" },
        ],
    },
    {
        category: "DevOps & Infra",
        icon: "🐳",
        skills: [
            { name: "Docker", color: "#2496ED" },
            { name: "GitHub Actions", color: "#2088FF" },
            { name: "Nginx", color: "#009639" },
            { name: "Gunicorn", color: "#499848" },
            { name: "AWS", color: "#FF9900" },
            { name: "Linux", color: "#FCC624" },
        ],
    },
    {
        category: "Auth & Real-Time",
        icon: "🔒",
        skills: [
            { name: "JWT", color: "#000000" },
            { name: "RBAC", color: "#5C2D91" },
            { name: "Stripe", color: "#008CDD" },
            { name: "WebSockets", color: "#010101" },
        ],
    },
    {
        category: "Scraping & AI",
        icon: "🤖",
        skills: [
            { name: "Playwright", color: "#45ba4b" },
            { name: "BeautifulSoup", color: "#8B4513" },
            { name: "OpenAI", color: "#412991" },
            { name: "LangChain", color: "#1C3C3C" },
        ],
    },
    {
        category: "Frontend",
        icon: "🎨",
        skills: [
            { name: "React", color: "#61DAFB" },
            { name: "JavaScript", color: "#F7DF1E" },
            { name: "Tailwind CSS", color: "#06B6D4" },
            { name: "Next.js", color: "#ffffff" },
        ],
    },
];

// ─── Goals ────────────────────────────────────

export const goals: Goal[] = [
    {
        icon: "🔧",
        label: "Backend Engineering",
        description: "Production systems at scale",
    },
    {
        icon: "☁️",
        label: "AWS & Cloud",
        description: "EC2, ECS, S3, RDS, CloudWatch",
    },
    {
        icon: "🐳",
        label: "DevOps",
        description: "Docker, CI/CD, IaC (Terraform)",
    },
    {
        icon: "🔍",
        label: "SRE",
        description: "Monitoring, SLOs, Incident Response",
    },
];

// ─── Terminal Status Lines ────────────────────

export const terminalLines = [
    { type: "prompt" as const, text: "selim@portfolio:~$ system status" },
    { type: "blank" as const, text: "" },
    { type: "label" as const, text: "╭──────────────────────────────────╮" },
    { type: "label" as const, text: "│    SYSTEM STATUS — ALL GREEN    │" },
    { type: "label" as const, text: "╰──────────────────────────────────╯" },
    { type: "blank" as const, text: "" },
    { type: "success" as const, text: "▸ django-api        ● running     :8000" },
    { type: "success" as const, text: "▸ fastapi-ai        ● running     :8001" },
    { type: "success" as const, text: "▸ celery-worker     ● running     x4  " },
    { type: "success" as const, text: "▸ redis-broker      ● running     :6379" },
    { type: "success" as const, text: "▸ postgresql-16     ● running     :5432" },
    { type: "success" as const, text: "▸ nginx-proxy       ● running     :443 " },
    { type: "blank" as const, text: "" },
    { type: "accent" as const, text: "  uptime:   142d 7h 23m" },
    { type: "accent" as const, text: "  deploys:  47 (zero-downtime)" },
    { type: "accent" as const, text: "  latency:  < 95ms p99" },
    { type: "blank" as const, text: "" },
    { type: "prompt" as const, text: "selim@portfolio:~$ █" },
];

// ─── Social Links ─────────────────────────────

export const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/mohammadSelimReza",
        icon: "github",
    },
    {
        label: "LinkedIn",
        href: "http://www.linkedin.com/in/selim-reza-dev",
        icon: "linkedin",
    },
    {
        label: "Email",
        href: "mailto:selim.reza.uits@gmail.com",
        icon: "mail",
    },
];

// ─── Navigation ───────────────────────────────

export const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#goals", label: "Goals" },
    { href: "#contact", label: "Contact" },
];
