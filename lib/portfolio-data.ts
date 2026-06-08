export const profile = {
  name: "Bonny Ongom",
  title: "Software Engineer",
  heroHeadline: "Software Engineer Building Web Applications, Automation & Digital Systems",
  tagline:
    "I help businesses and organizations transform ideas into scalable websites, applications, automation workflows, and digital platforms.",
  heroIntro:
    "My experience spans software development, automation, SEO, and digital systems for clients and organizations in Germany and internationally.",
  location: "Cologne, Germany",
  email: "bonnyongom91@gmail.com",
  phone: "+49 1573 6792740",
  portfolio: "https://bonnyongom.com/",
  github: "https://github.com/bonnyongom",
  photo: "/bonny-ongom.png",
  cvEnglish: "/cv/Bonny-Ongom-CV-English.pdf",
  cvGerman: "/cv/Bonny-Ongom-Lebenslauf-Deutsch.pdf",
  valueStatement:
    "I enjoy solving real-world business problems through software, automation, and modern web technologies — owning projects from architecture and development through deployment and maintenance.",
  about: [
    "I'm a Software Engineer based in Germany with a Bachelor's degree in Software Engineering and ongoing studies in Cyber Security.",
    "Over the past year, I have delivered more than 10 client projects while working with businesses, NGOs, and organizations. My work ranges from web applications and digital platforms to automation solutions, SEO optimization, and AI-assisted systems.",
  ],
}

export const coreTechStack = [
  "React",
  "Next.js",
  "Node.js",
  "JavaScript",
  "Python",
  "PostgreSQL",
  "Playwright",
  "SEO",
]

export const currentFocus = [
  "Cyber Security (B.Sc. Expected March 2027)",
  "Full-Stack Development",
  "Automation Engineering",
  "Technical SEO & Performance Optimization",
  "AI-Assisted Digital Systems",
]

export const projectHighlights = [
  { value: "10+", label: "Client Projects Delivered" },
  { value: "2", label: "Enterprise Automation Projects" },
  { value: "1", label: "SEO Management Contract for German NGO" },
  { value: "5+", label: "Full-Stack Applications Developed" },
  { value: "DE", label: "Registered Freelance IT Consultant in Germany" },
]

export const availability = {
  modes: ["Remote", "Hybrid", "On-site"],
  location: "Cologne, Germany",
}

export type Experience = {
  period: string
  role: string
  company: string
  location: string
  summary: string
  points: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    period: "Aug 2025 — Present",
    role: "Freelance Software Developer & IT Consultant",
    company: "BOSH IT — IT Solutions",
    location: "Germany",
    summary:
      "Design, development, deployment, and maintenance of web applications, automation solutions, and digital systems for businesses, NGOs, and organizations.",
    points: [
      "Delivered 10+ websites, web applications, automation solutions, and digital systems for businesses and organizations in Germany.",
      "Designed and developed scalable websites, business platforms, automation workflows, and client-facing digital systems.",
      "Implemented frontend and backend functionality, REST APIs, e-commerce, and CMS solutions.",
      "Developed browser automation workflows and performed migrations and deployments.",
    ],
    tags: ["JavaScript", "React", "Node.js", "Playwright", "SEO", "WordPress"],
  },
  {
    period: "2025 — Present",
    role: "SEO Manager (Freelance Contract)",
    company: "SHOFCO Germany",
    location: "Germany",
    summary:
      "Ongoing SEO Manager responsible for technical SEO, website optimization, search visibility improvements, performance monitoring, and digital growth initiatives for SHOFCO Germany.",
    points: [
      "Implemented technical SEO and optimized website structure and metadata.",
      "Improved search visibility and content discoverability.",
      "Managed Google Search Console and monitored website performance.",
    ],
    tags: ["Technical SEO", "Google Analytics", "Search Console", "Performance"],
  },
]

export type Project = {
  name: string
  status: string
  description: string
  image: string
  problem: string
  solution: string
  outcome: string
  tags: string[]
  private?: boolean
}

export const projects: Project[] = [
  {
    name: "Future Talents Platform",
    status: "Production",
    description: "Full-stack web application for talent management and engagement.",
    image: "/projects/future-talents.png",
    problem: "Organizations needed a platform for talent management and engagement.",
    solution:
      "Developed a full-stack web application with complete frontend and backend functionality, user-focused interfaces, and platform features.",
    outcome: "Created a scalable platform supporting user interaction and system functionality.",
    tags: ["React", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Opel Widget Monitor",
    status: "Private Enterprise Project",
    description: "Automation and monitoring solution for Opel digital customer workflows.",
    image: "/projects/widget-monitor.png",
    problem: "Need for automated monitoring and validation of digital customer interaction workflows.",
    solution: "Developed browser automation workflows using Playwright with monitoring and validation processes.",
    outcome: "Improved reliability and monitoring of customer-facing web processes.",
    tags: ["Playwright", "JavaScript", "Automation", "Monitoring"],
    private: true,
  },
  {
    name: "Opel CSI Helper",
    status: "Private Enterprise Project",
    description: "Automation solution supporting customer satisfaction and operational workflows.",
    image: "/projects/csi-helper.png",
    problem: "Manual workflow execution and validation created inefficiencies.",
    solution: "Built automation processes supporting customer satisfaction and operational workflows.",
    outcome: "Reduced manual intervention and improved process consistency.",
    tags: ["Playwright", "JavaScript", "Workflow Automation"],
    private: true,
  },
  {
    name: "Foerderkompass Plus",
    status: "Active Development",
    description: "AI-powered funding discovery platform for NGOs.",
    image: "/projects/foerderkompass.png",
    problem: "NGOs struggle to identify suitable funding opportunities efficiently.",
    solution:
      "Contributed to an AI-powered funding discovery platform with automation and chatbot functionality over structured funding data.",
    outcome: "Improved access to funding information through intelligent workflows.",
    tags: ["Python", "AI", "Chatbot Systems", "Automation"],
  },
  {
    name: "SHOFCO Germany",
    status: "Ongoing",
    description: "Website optimization, technical SEO, and ongoing maintenance for an NGO.",
    image: "/projects/shofco.png",
    problem: "Need for stronger online visibility and technical SEO improvements.",
    solution: "Provided website optimization, technical SEO implementation, and ongoing maintenance.",
    outcome: "Improved website structure, visibility, and ongoing digital performance.",
    tags: ["SEO", "WordPress", "Search Console", "Google Analytics"],
  },
]

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["JavaScript", "Python", "Java", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks & Tech",
    items: ["React", "Next.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Database Design"],
  },
  {
    label: "Automation & AI",
    items: ["Playwright", "Browser Testing", "Workflow Automation", "AI Systems", "Chatbots"],
  },
  {
    label: "SEO & Analytics",
    items: ["Technical SEO", "Search Console", "Google Analytics", "Performance"],
  },
  {
    label: "Platforms & CMS",
    items: ["WordPress", "WooCommerce", "Elementor", "Hosting & Domains"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Figma"],
  },
]

export const education = [
  {
    degree: "Bachelor of Cyber Security",
    school: "International University of Applied Sciences",
    detail: "Ongoing — Expected March 2027",
  },
  {
    degree: "Bachelor of Software Engineering",
    school: "Makerere University",
    detail: "",
  },
]

export const certifications = [
  "German Language Certificate (B1)",
  "CCNA — Cisco Certified Network Associate",
  "Data Analysis with Python",
  "Power BI & Excel",
  "Digital Marketing — Training of Trainers",
]

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "B1 (Certified)" },
]
