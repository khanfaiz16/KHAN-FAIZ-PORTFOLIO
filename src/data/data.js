export const personalData = {
  name: "Khan Mohd. Faiz",
  shortName: "KHAN FAIZ",
  initials: "KF",
  role: "MCA Student · Full Stack Java Developer · Solution Architect",
  location: "Vasai East, Maharashtra, India",
  email: "khanfaiztech1609@gmail.com",
  phone: "+91 73855 40220",
  whatsappUrl: "https://wa.me/917385540220",
  linkedinUrl: "https://www.linkedin.com/in/mohd-faiz-khan-085555319/",
  githubUrl: "https://github.com/khanfaiz16",
  cvUrl: "/Khan_Faiz_Resume.pdf",
  availability: "Currently Open"
};

export const pentrixaData = {
  name: "Pentrixa Tech",
  role: "Founder",
  tagline: "Build. Innovate. Scale.",
  website: "https://www.pentrixa-tech.com/",
  logo: "/pentrixa-logo.png",
  summary:
    "I founded Pentrixa Tech, a digital solutions company in Mumbai that helps businesses design, build and scale their digital products.",
  services: [
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "Custom Software Development",
    "AI Solutions",
    "Business Automation",
    "Business Intelligence"
  ]
};

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Pentrixa', id: 'pentrixa' },
  { label: 'Education', id: 'education' }
];

export const contactTopics = [
  'Full-Time Role',
  'Solution Architect / Pre-Sales',
  'Spring Boot Backend',
  'React Full-Stack',
  'Consulting / Freelance'
];

export const projectsData = [
  {
    title: 'Amrun Pharma – Pharmaceutical Website & Admin Portal',
    description: 'A responsive pharmaceutical website with a database-driven product catalogue and an enquiry-based ordering workflow.',
    points: [
      'Built a dedicated Owner/Admin Portal on Supabase with secure access controls to manage products, packaging images, availability and launch status.',
      'Designed the enquiry-based ordering flow for customers, with no online payment gateway required.'
    ],
    stack: ['React.js', 'Vite', 'Supabase', 'PostgreSQL', 'Supabase Auth'],
    screenshot: null,
    liveLink: null,
    repoLink: null
  },
  {
    title: 'Hospital Management System – Enterprise ERP',
    description: 'A full-stack hospital ERP built on MVC architecture for multi-department hospital workflows.',
    points: [
      'Covers patient registration, doctor appointments, ward bed allocation, electronic prescriptions (EHR), OT scheduling, lab diagnostics, pharmacy inventory, blood bank and ambulance dispatch.',
      'Built an automated billing engine, a dynamic iText PDF discharge-summary generator and session-based role-based access control (RBAC).'
    ],
    stack: ['Java Servlets', 'Jakarta EE', 'JSP', 'JDBC', 'MySQL', 'Apache Tomcat 10'],
    screenshot: null,
    liveLink: null,
    repoLink: 'https://github.com/khanfaiz16/HospitalManagementSystem'
  },
  {
    title: 'Top Cool Service – Doorstep Appliance Repair Platform',
    description: 'A live commercial web platform for doorstep appliance servicing across 15+ Mumbai and Thane suburban clusters.',
    points: [
      'Multi-step booking workflows, dynamic FAQ accordions and automated dispatch via WhatsApp and phone APIs.',
      'Technical SEO with JSON-LD LocalBusiness schema, XML sitemaps, canonical routing and Google Search Console; deployed on Vercel with CI/CD.'
    ],
    stack: ['React.js', 'Node.js', 'Vercel', 'SEO / JSON-LD', 'CI/CD'],
    screenshot: null,
    liveLink: 'https://topcoolservice.com',
    repoLink: null
  },
  {
    title: 'AuraStore – Full-Stack E-Commerce Application',
    description: 'An e-commerce application with a React frontend and Java Spring Boot REST APIs on MySQL.',
    points: [
      'Passwordless email OTP sign-in with Spring Security and JWT, plus role-based access for users and admins.',
      'Catalogue filtering, cart, checkout with email confirmations, promo coupons and an admin dashboard.'
    ],
    stack: ['React.js', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Email OTP'],
    screenshot: null,
    liveLink: null,
    repoLink: 'https://github.com/khanfaiz16/E-COMMERCE-FULL-STACK'
  },
  {
    title: 'DevCraft Solutions – Full Stack Platform & Repository Hub',
    description: 'A repository distribution hub for computer science students and university examiners.',
    points: [
      'Responsive React + Vite frontend with category filtering and URL-synced search.',
      'Automated build pipeline and SPA routing rules for zero-downtime deployment on Vercel.'
    ],
    stack: ['React.js', 'Vite', 'MySQL', 'Vercel'],
    screenshot: null,
    liveLink: 'https://devcraft-solutions-studio.vercel.app/',
    repoLink: null
  }
];

export const skillCategories = [
  {
    title: 'Solution Design',
    items: ['MVC Architecture', 'RESTful API Design', 'Relational Schema Design', 'Role-Based Access Control', 'Requirement Analysis', 'Technical Documentation']
  },
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'Hibernate', 'JDBC', 'Servlets & JSP', 'Node.js', 'Express.js', 'Supabase']
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive UI/UX']
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'SQL Queries', 'CRUD Operations', 'Query Optimization']
  },
  {
    title: 'Deployment & Tools',
    items: ['Git', 'GitHub', 'CI/CD', 'Vercel', 'Apache Tomcat', 'Postman', 'IntelliJ IDEA', 'VS Code']
  }
];

export const strengths = [
  'Customer Communication',
  'Requirement Analysis',
  'Technical Presentation',
  'Analytical Problem Solving',
  'Adaptability'
];

export const educationData = [
  {
    period: '2025 — 2027 (Expected)',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Viva Institute of Technology, Mumbai University',
    result: 'Pursuing'
  },
  {
    period: '2022 — 2025',
    degree: 'BSc (Information Technology)',
    institution: 'Mahendra Laxman Mhatre Vyavsayik Vidyalaya, Mumbai University',
    result: '8.3 CGPA'
  },
  {
    period: '2022',
    degree: 'Higher Secondary (HSC)',
    institution: 'Vartak College, Vasai · Maharashtra State Board',
    result: '60%'
  },
  {
    period: '2020',
    degree: 'Secondary School (SSC)',
    institution: 'Ludhani Vidya Mandir · Maharashtra State Board',
    result: '76.20%'
  }
];
