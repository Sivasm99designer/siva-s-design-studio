import resumeAsset from "@/assets/resume.pdf.asset.json";

export const RESUME_URL = resumeAsset.url;

export const contact = {
  email: "sivasm1413@gmail.com",
  phone: "+91 6381077458",
  linkedin: "https://www.linkedin.com/in/sivasm99/",
  behance: "https://www.behance.net/sivasm99",
};

export type Project = {
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Recon",
    subtitle: "CMRL Reconciliation Dashboard",
    year: "2024",
    tags: ["Dashboard", "B2B", "Data Viz"],
    url: "https://www.designpettai.com/work/recon",
    featured: true,
  },
  {
    title: "AquaSat",
    subtitle: "Aquaculture Mapping & Intelligence",
    year: "2025",
    tags: ["Web App", "Maps", "Design System"],
    url: "https://www.designpettai.com/work/AquaSat",
    featured: true,
  },
  {
    title: "Yaary Auto",
    subtitle: "Mobility & Ride Booking UX",
    year: "2024",
    tags: ["Mobile", "iOS & Android", "UX System"],
    url: "https://www.designpettai.com/work/Yaary-auto",
    featured: true,
  },
  {
    title: "Yaary Driver App",
    subtitle: "Native Android Driver Flow",
    year: "2024",
    tags: ["Android", "Onboarding", "Field UX"],
    url: "https://www.designpettai.com/work/YaaryDriverApp",
    featured: true,
  },
  {
    title: "AquaPartner",
    subtitle: "Retailer Sales & Distribution",
    year: "2025",
    tags: ["Mobile", "Commerce", "Research"],
    url: "https://www.designpettai.com/work/AquaPartner",
  },
  {
    title: "AquaFarmer",
    subtitle: "Farmer Operations & Aquaculture Management",
    year: "2025",
    tags: ["Mobile", "Operations", "Localisation"],
    url: "http://designpettai.com/work/AquaFarmer",
  },
  {
    title: "Yaary Marketing",
    subtitle: "Brand & Growth Experience",
    year: "2024",
    tags: ["Marketing", "Brand", "Web"],
    url: "https://www.designpettai.com/work/marketingyaary",
  },
];

export const experience = [
  {
    role: "Product Designer",
    company: "DesignPettai",
    location: "Chennai",
    period: "Oct 2024 — Present",
    points: [
      "Aquaconnect — designed AquaSat, AquaPartner, AquaFarmer and AquaRider from user flows and wireframes to high-fidelity interfaces, covering aquaculture mapping, retailer sales, farmer management and field operations.",
      "AG Specialty Insurance — designed a sports insurance claims platform for student athletes, improving the claims experience with structured flows and streamlined workflows.",
      "The OccuNet Company — designed a healthcare claims system with scalable UI across members, providers, clients, claims, inquiries, negotiations, accounting and system setup.",
    ],
  },
  {
    role: "Associate Product Designer",
    company: "Triffy Digital Pvt Ltd",
    location: "Bengaluru",
    period: "Oct 2023 — Sep 2024",
    points: [
      "CMRL Quick Recon — a B2B reconciliation dashboard for Chennai Metro and partners, simplifying transaction reconciliation and operational workflows.",
      "Yaary Rider — a scalable UX system for Android and iOS with consistent flows for Bike, Auto, Taxi and Metro services.",
      "Yaary Driver — a native Android driver app with localised onboarding and an improved ride-acceptance flow that reduced accidental acceptances and cancellations.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Uishaper Pvt Ltd",
    location: "Tirunelveli",
    period: "Dec 2022 — Sep 2023",
    points: [
      "Designed websites, mobile apps and dashboards with wireframes, high-fidelity UI and prototypes in Figma.",
      "Created Figma Community resources and designed the first three pages of the Uishaper Free Resources website.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Design",
    items: ["User Flows", "Wireframes", "High-Fidelity Mockups", "Prototyping", "Design Systems"],
  },
  {
    label: "Research",
    items: ["User Interviews", "Usability Testing", "Competitive Analysis", "UX Audits"],
  },
  {
    label: "Tools",
    items: ["Figma", "Affinity Photo 2", "Affinity Designer 2", "Adobe Illustrator", "Photoshop"],
  },
  { label: "Code", items: ["HTML", "CSS", "JavaScript"] },
];

export const education = [
  {
    title: "Bachelor of Engineering — Mechanical",
    org: "Francis Xavier Engineering College",
    period: "2018 — 2021",
  },
  {
    title: "Diploma in Mechanical Engineering",
    org: "Sankar Polytechnic College",
    period: "2016 — 2018",
  },
];

export const certifications = [
  { title: "Google UX Design", org: "Coursera", period: "Dec 2023" },
  { title: "UI/UX Design", org: "Scribbles School Of Design", period: "Jun 2022" },
];

export const stats = [
  { value: "3.8+", label: "Years of experience" },
  { value: "20+", label: "Products shipped" },
  { value: "3", label: "Design teams" },
  { value: "7", label: "Public case studies" },
];
