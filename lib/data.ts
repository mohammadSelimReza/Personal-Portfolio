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
    liveUrl?: string;
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
        title: "Backend Developer",
        company: "Star Innovative Technologies Ltd.",
        period: "Apr 2026 – Present",
        description:
            "Optimizing FastAPI backend performance, maintaining production REST APIs, and enforcing code quality through structured PR reviews.",
        achievements: [
            "Optimized API response times by profiling slow ORM queries and restructuring PostgreSQL indexes, reducing average endpoint latency from 2s to under 200ms",
            "Maintained and extended production REST APIs consumed by web and mobile clients, owning the full cycle from schema migration to deployment",
            "Conducted code reviews on PRs and enforced consistent coding standards across the backend team using a main/staging branch workflow",
        ],
    },
    {
        title: "Backend Developer",
        company: "Join Venture AI",
        period: "Apr 2025 – Apr 2026",
        description:
            "Built RESTful APIs, WebSocket services, and event-driven pipelines for three production applications serving global clients. Managed CI/CD and production deployments.",
        achievements: [
            "Designed database schemas and built RESTful APIs and WebSocket services using Python and Django for three production applications (Scan2Home, Phlebotomy Staffing, Tether Voice Platform)",
            "Engineered event-driven OTP and notification pipelines using Celery + Redis, handling async task queuing that reliably delivered notifications under load",
            "Set up GitHub Actions CI/CD pipelines, reviewed intern PRs before merging to main, and managed production deployments on VPS with server monitoring",
        ],
        award: "🏆 Best Backend Developer of the Quarter — Nov 2025",
    },
    {
        title: "Backend Developer (Remote)",
        company: "FAARNS",
        period: "Dec 2024 – Jun 2025",
        description:
            "Built the complete backend for americatobd.com — a production e-commerce platform with automated product scraping, live financial transactions, and payment gateway integrations.",
        achievements: [
            "Built the complete backend for americatobd.com, a production e-commerce platform with automated product scraping from Amazon, eBay, Walmart, and Nike",
            "Developed admin dashboard with order tracking, customer management, and platform monitoring — handling real financial transactions",
            "Implemented JWT authentication, role-based access control, and integrated Bkash payment gateway for the Bangladeshi market",
            "Designed and maintained PostgreSQL database with proper migrations, joins, and indexing",
        ],
    },
];

// ─── Projects ─────────────────────────────────

export const projects: Project[] = [
    {
        title: "AmericaToBD — Production E-Commerce Platform",
        role: "Backend Developer",
        description:
            "Cross-border e-commerce platform serving real users with live financial transactions since 2025. Automated product scraping from Amazon, eBay, Walmart, and Nike with graceful fallback to manual purchase forms.",
        architectureHighlight:
            "Headless browser automation with Playwright + BeautifulSoup, backed by PostgreSQL storage. Admin dashboard for order lifecycle management, customer tracking, and sales monitoring. Integrated Bkash payment gateway.",
        tech: ["Django", "PostgreSQL", "Playwright", "BeautifulSoup", "Bkash", "JWT"],
        github: "https://github.com/mohammadSelimReza/Global-shopping-automation-and-forwarding-platform-server",
        liveUrl: "https://americatobd.com",
        featured: true,
    },
    {
        title: "Scan2Home — Microservices Real Estate Platform",
        role: "Backend & AI Integration Engineer",
        description:
            "Property management platform with AI-powered analysis. Microservices architecture with isolated AI module running in secure Docker containers.",
        architectureHighlight:
            "Django (Core API) decoupled from an isolated FastAPI AI module via a secure internal Docker network, reverse-proxied by Nginx. AI module operates without internet access — enterprise-grade security. GitHub Actions CI/CD for automated testing and deployment.",
        tech: ["Django", "FastAPI", "PostgreSQL", "Redis", "Docker Compose", "GitHub Actions"],
        github: "https://github.com/mohammadSelimReza/Scan2Home-Smart-Reusable-Board",
    },
    {
        title: "Phlebotomy Staffing Backend",
        role: "Backend Engineer",
        description:
            "Cross-border marketplace backend for matching, scheduling, and billing between clinical businesses and medical professionals.",
        architectureHighlight:
            "Complex Stripe subscription lifecycles — multi-tier billing, invoice cycles, and split payments. User lifecycle management with credential verification, compliance contracts, and availability scheduling.",
        tech: ["Django REST Framework", "PostgreSQL", "Stripe API", "Redis", "Docker", "CI/CD"],
        github: "https://github.com/mohammadSelimReza/Phlebotomy-Staffing-App-s-Backend-Server",
    },
    {
        title: "Tether — AI Voice Platform",
        role: "Backend Developer",
        description:
            "Voice cloning and real-time AI chat platform with streaming TTS, WebSocket communication, and Firebase push notifications.",
        architectureHighlight:
            "Microservice architecture with Django + FastAPI. Real-time AI voice streaming with WebSockets. Cross-platform push notifications via Firebase FCM.",
        tech: ["Django", "FastAPI", "PostgreSQL", "Redis", "Firebase FCM", "Docker"],
        github: "https://github.com/mohammadSelimReza/AI-Voice-Conversation-Platform-Backend-Server",
    },
    {
        title: "Car Rental (RentHub)",
        role: "Backend Developer",
        description:
            "Multi-role marketplace with WebSocket real-time chat, RBAC across 4 roles, and automated Stripe booking payments & agency payouts.",
        architectureHighlight:
            "Django Channels for real-time WebSocket chat. RBAC across 4 user roles. Stripe integration for booking payments and automated agency payouts via Celery.",
        tech: ["Django 6.0", "DRF", "Django Channels", "Celery", "PostgreSQL", "Redis", "Stripe"],
        github: "https://github.com/mohammadSelimReza/Car-Rental-Management",
    },
    {
        title: "Bestowe — AI Gift Finder",
        role: "Backend Developer",
        description:
            "LLM-powered gift recommendation engine with collaborative pool-funding via Stripe + Shopify API for split payment reconciliation.",
        architectureHighlight:
            "LLM-integrated recommendation engine with multi-user pool funding — reconciling Stripe payments with Shopify API for third-party marketplace checkout.",
        tech: ["Django DRF", "LLMs", "Stripe API", "Shopify API", "PostgreSQL"],
        github: "https://github.com/mohammadSelimReza/Project-Bestowe-Smart-Gift-Finder-Backend",
    },
    {
        title: "JobPulse — SMS Job Alerts API",
        role: "Backend Developer",
        description:
            "Production REST API distributing job offers via SMS with OTP auth, Orange SMS API (OAuth2), and Celery Beat automated broadcasts.",
        architectureHighlight:
            "Phone-based OTP authentication. Celery Beat for daily broadcast scheduling. USSD webhook support, CSV bulk upload, phone blacklisting, and admin dashboard.",
        tech: ["Django 6.0", "DRF", "Celery", "PostgreSQL", "Redis", "Orange SMS API"],
        github: "https://github.com/mohammadSelimReza/JobPulse-Web-App",
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
        category: "Databases & Caching",
        icon: "🗄️",
        skills: [
            { name: "PostgreSQL", color: "#4169E1" },
            { name: "Redis", color: "#DC382D" },
            { name: "MySQL", color: "#4479A1" },
        ],
    },
    {
        category: "DevOps & Cloud",
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
        category: "Auth & Payments",
        icon: "🔒",
        skills: [
            { name: "JWT", color: "#000000" },
            { name: "RBAC", color: "#5C2D91" },
            { name: "OAuth2", color: "#EB5424" },
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
        description: "Production systems that serve real users at scale",
    },
    {
        icon: "☁️",
        label: "Cloud & AWS",
        description: "EC2, S3, VPC, RDS — production infrastructure",
    },
    {
        icon: "🐳",
        label: "DevOps",
        description: "Docker, CI/CD, automated deployment pipelines",
    },
    {
        icon: "📊",
        label: "System Design",
        description: "Scalable architectures, microservices, event-driven systems",
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
        href: "https://www.linkedin.com/in/selim-reza-dev/",
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
    { href: "#contact", label: "Contact" },
];
