export const states = [
    {label:"Years Exprience", value: 2},
    {label:"Projects Completed", value: 10},
    {label:"Happy Clients", value: 30},
    {label:"Student Taught", value: 50}
]

import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Monitor,
  Palette,
  PenTool,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import {FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";


export const highlights = [
  { icon: MapPin, text: "Based in San Francisco, CA" },
  { icon: Briefcase, text: "Open for freelance work" },
  { icon: GraduationCap, text: "CS Graduate from Stanford" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sohrabiafshin6962@gmail.com",
    href: "mailto:hello@johndoe.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "09377447164",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Shiraz, Iran",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise SaaS products. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple web applications. Collaborated with design team to implement responsive UIs.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    type: "education",
    title: "Master of Computer Science",
    company: "Stanford University",
    period: "2018 - 2020",
    description:
      "Specialized in distributed systems and machine learning. Thesis on scalable microservices architecture.",
    technologies: ["Research", "AI/ML", "Distributed Systems"],
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "WebAgency Co.",
    period: "2018 - 2020",
    description:
      "Developed client websites and e-commerce platforms. Gained experience in agile methodologies.",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "UC Berkeley",
    period: "2014 - 2018",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const projects = [
  {
  title: "Grocery E-Commerce Website",
  description:
    "A modern grocery shopping platform with product browsing, category filtering, shopping cart, responsive design, and a seamless online shopping experience.",
  image: "/images/screen1.jpg",
  techStack: ["React Js", "JavaScript", "CSS", "HTML"],
  demoUrl: "https://frolicking-platypus-2c3249.netlify.app/",
  githubUrl: "https://github.com/imp-521/Grocery-website.git",
},
{
  title: "Personal Portfolio",
  description:
    "A modern and responsive personal portfolio website showcasing projects, technical skills, professional experience, and contact information with a clean and interactive user interface.",
  image: "/images/screen2.jpg",
  techStack: ["ٔNext Js", "TypeScript", "Tailwind Css"],
  githubUrl: "https://github.com/imp-521/Portfolio.git",
},
{
  title: "Restaurant Website",
  description:
    "A modern and fully responsive grocery e-commerce website featuring product listings, categories, reusable React components, mobile navigation, and a clean user-friendly shopping interface.",
  image: "/images/screen3.jpg",
  techStack: ["HTML", "Tailwind CSS", "JavaScript"],
  demoUrl: "https://frolicking-platypus-2c3249.netlify.app/",
  githubUrl: "https://github.com/imp-521/Grocery-website.git",
},
{
  title: "Coffee Shop Website",
  description:
    "A modern and responsive coffee shop website featuring a stylish menu, engaging sections, smooth interactions, and a clean user-friendly design for showcasing coffee and cafe products.",
  image: "/images/screen4.jpg",
  techStack: ["HTML", "CSS", "JavaScript"],
  githubUrl: "https://github.com/imp-521/Coffee-website.git",
},
{
  title: "Food Website",
  description:
    "A modern and responsive food website featuring an attractive landing page, food menu, interactive sections, and a clean user-friendly interface designed to provide an engaging browsing experience.",
  image: "/images/screen5.jpg",
  techStack: ["HTML", "CSS", "JavaScript"],
  githubUrl: "https://github.com/imp-521/Food-website.git",
}
];

export const skillCategories = [
  {
    skills: [
  { name: "HTML5", icon: Code2 },
  { name: "CSS3", icon: Palette },
  { name: "TypeScript", icon: Terminal },
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind", icon: Palette },
  { name: "Bootstrap", icon: Layers },
  { name: "Vue.js", icon: Layout },
  { name: "Angular", icon: Monitor },
  { name: "Git", icon: GitBranch },
  ]
  }
];
