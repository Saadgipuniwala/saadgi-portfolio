// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT
// Everything editable about the portfolio lives in this one file.
// Sourced from Saadgi's resume + project screenshots. Remaining "EDIT_ME"
// flags mark the few things still unconfirmed (exact LinkedIn URL, profile
// photo, and screenshots for Student Performance Prediction / Forest Fire).
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Saadgi Puniwala",
  role: "AI/ML • Data Science • Embedded Systems",
  tagline: "Turning ideas into intelligent systems.",
  location: "Bengaluru, India",
  email: "saadgipuniwala07@gmail.com",
  phone: "+91 7869724435",
  resumeUrl: "/resume.pdf",
  photo: "/profile/photo.jpeg", // EDIT_ME — add your photo to /public/profile/photo.jpg
  bio: [
    "I'm Saadgi Puniwala, a Computer Science (Data Science) undergraduate at Dayananda Sagar University, currently maintaining a 9.09 CGPA at the end of my second year.",
    "My interests lie at the intersection of artificial intelligence, machine learning, embedded systems and data-driven software development. I enjoy transforming ideas into practical solutions by combining software with real-world hardware.",
    "Over the past two years, I've worked on projects ranging from machine learning models and RF signal intelligence dashboards to intelligent IoT systems, while continuously strengthening my problem-solving skills through data structures, algorithms and competitive programming.",
    "I'm currently preparing for AI/ML and Data Science internship opportunities while expanding my experience through research, hands-on engineering projects and continuous learning."
  ],
  socials: {
    github: "https://github.com/Saadgipuniwala",
    linkedin: "https://www.linkedin.com/in/saadgi-puniwala-51a43a31a",
    leetcode: "https://leetcode.com/u/Saadgi_puniwala/",
  },
};

export const journey = [
  {
    year: "Aug 2024",
    title: "Started B.Tech in Computer Science (Data Science)",
    org: "Dayananda Sagar University",
    description:
      "Began my undergraduate journey with a strong focus on programming, mathematics, data structures, algorithms, and computer science fundamentals.",
  },
  {
    year: "Nov 2024",
    title: "MATLAB & Simulink Workshop",
    org: "Dayananda Sagar University",
    description:
      "Explored MATLAB and Simulink through hands-on sessions covering simulation, modeling, and engineering workflows.",
  },
  {
    year: "Aug 2025",
    title: "Smart India Hackathon (Internal Round)",
    org: "Team Synktra • Problem ID SIH25063",
    description:
      "Designed a cost-effective monitoring solution for detecting breakage in low-voltage AC distribution overhead conductors and advanced to the internal evaluation round.",
  },
  {
    year: "Nov 2025",
    title: "MathWorks Certifications",
    org: "MathWorks",
    description:
      "Completed MATLAB Onramp and Introduction to Symbolic Math with MATLAB, strengthening engineering computing and mathematical modeling skills.",
  },
  {
    year: "Jan 2026",
    title: "Student Performance Prediction System",
    org: "Machine Learning Project",
    description:
      "Built a machine learning model to predict student academic performance using demographic, academic, and behavioural features with data preprocessing, feature engineering, and model evaluation.",
  },
  {
    year: "Feb 2026",
    title: "Battlefield RF Signal Intelligence Dashboard",
    org: "DSU Code Clash",
    description:
      "Developed an interactive dashboard for RF signal visualization and machine learning-based classification during the DSU Code Clash competition.",
  },
  {
    year: "Mar 2026",
    title: "Hands-on IoT Workshop",
    org: "DSU × Karunadu Technologies",
    description:
      "Worked with ESP32, embedded systems, sensors, serial communication, and IoT hardware through practical implementation sessions.",
  },
  {
    year: "Apr 2026",
    title: "Smart Window Ventilation System",
    org: "IoT & Embedded Systems Project",
    description:
      "Designed an intelligent IoT-based ventilation system that automatically controls window movement using temperature, humidity, rain, occupancy, and ambient light sensors.",
  },
  {
    year: "Apr 2026",
    title: "Celesta AI & Code Competition",
    org: "DSU Annual Tech Fest",
    description:
      "Participated in Dayananda Sagar University's annual technical fest, presenting AI-driven engineering solutions and collaborating on innovative problem statements.",
  },
  {
    year: "Present",
    title: "Forest Fire Prediction System",
    org: "Current Project",
    description:
      "Currently developing an AI-assisted early forest fire prediction system for Uttarakhand using weather, satellite, and environmental datasets while preparing for AI/ML internships and strengthening DSA.",
  },
];

export const skills = {
  Programming: [
    "Python",
    "C",
    "C++",
    "SQL (MySQL)",
    "MongoDB",
  ],

  "AI & Machine Learning": [
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Data Preprocessing",
    "Feature Engineering",
    "Model Training",
    "Model Evaluation",
    "Predictive Analytics",
  ],

  "Web Development": [
    "HTML",
    "CSS",
    "Flask",
    "Streamlit",
    "GitHub Pages",
    "Streamlit Cloud",
  ],

  "Embedded Systems & IoT": [
    "ESP32",
    "Arduino IDE",
    "Sensor Integration",
    "Serial Communication",
    "Servo Motor Control",
    "AHT10",
    "PIR",
    "LDR",
    "YL-83 Rain Sensor",
    "MG996R Servo",
  ],

  "Tools & Platforms": [
    "Git",
    "GitHub",
    "VS Code",
    "Jupyter Notebook",
    "Google Colab",
    "Kaggle",
  ],

  "Computer Science": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
  ],
};

export const achievements = [
  {
    label: "CGPA",
    value: "9.09",
    suffix: "/10",
    note: "",
  },
  {
    label: "Projects Built",
    value: "4",
    suffix: "+",
    note: "",
  },
  {
    label: "Research Paper",
    value: "1",
    suffix: "",
    note: "Under Review",
  },
  {
    label: "LeetCode Problems",
    value: "50",
    suffix: "+",
    note: "",
  },
  {
    label: "Hackathons",
    value: "3",
    suffix: "",
    note: "",
  },
  {
    label: "Certifications",
    value: "8",
    suffix: "+",
    note: "",
  },
];

export const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "In Progress",
  },
  {
    name: "Python for Data Science",
    issuer: "NPTEL (Elite • Top 5%)",
    year: "2026",
  },
  {
    name: "MATLAB Onramp",
    issuer: "MathWorks",
    year: "2025",
  },
  {
    name: "Introduction to Symbolic Math with MATLAB",
    issuer: "MathWorks",
    year: "2025",
  },
  {
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    year: "2026",
  },
  {
    name: "Introduction to Data Visualization",
    issuer: "Simplilearn",
    year: "2026",
  },
  {
    name: "Programming Using Java",
    issuer: "Infosys Springboard",
    year: "2025",
  },
  {
    name: "Programming Using JavaScript",
    issuer: "Infosys Springboard",
    year: "2025",
  },
  {
    name: "Hands-on IoT Workshop",
    issuer: "DSU × Karunadu Technologies",
    year: "2026",
  },
];
export const currentWork = [
  {
    title: "Forest Fire Prediction System",
    description:
      "Developing an AI-powered early warning system for predicting forest fire risk in Uttarakhand using weather, satellite, and environmental datasets.",
    progress: 60,
    tag: "Current Project",
  },
  {
    title: "LeetCode Progress (50+ → 150+ → 300+)",
    description:
      "Strengthening problem-solving and interview readiness through consistent DSA practice, with a goal of solving 300+ problems.",
    progress: 17,
    tag: "Learning",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    description:
      "Expanding analytical skills through data visualization, SQL, spreadsheets, business analytics, and data-driven decision making.",
    progress: 70,
    tag: "In Progress",
  },
  {
    title: "Internship Preparation",
    description:
      "Preparing for AI/ML, Data Science, and Software Engineering internship opportunities through projects, DSA, certifications, and continuous learning.",
    progress: 80,
    tag: "Career Focus",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// PROJECTS — order is intentional: Overhead → Smart Window → RF Signal →
// Student Performance → Forest Fire (current build)
// ─────────────────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  cover: string;
  status: "Shipped" | "Building";
  year: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  features: string[];
  challenges: string[];
  results: string[];
  metrics?: string[];
  highlights?: string[];
  github?: string;
  live?: string;
  screenshots: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "overhead-conductor-fault-detection",
    name: "Overhead Conductor Fault Detection",
    shortName: "Overhead Fault Detection",
    tagline:
      "An IoT-enabled fault detection platform for monitoring low-voltage overhead conductors in real time.",
    cover: "/images/overhead/omodel.jpeg",
    status: "Shipped",
    year: "2025",
    problem:
      "Detecting low-voltage AC distribution overhead conductor failures is often delayed due to manual inspection, increasing the risk of power outages, equipment damage, and public safety hazards.",
    solution:
      "Designed a cost-effective IoT-based monitoring platform for Smart India Hackathon (SIH25063) that combines wireless pole sensors, LoRa communication, a Raspberry Pi gateway, a Flask backend, and a role-based dashboard to detect conductor faults, monitor pole health, and streamline maintenance operations in real time.",
    architecture: [
      "ESP32 reads current values from the DFRobot AC Current Sensor installed on each pole.",
      "LoRa (RYLR896) wirelessly transmits sensor data to a Raspberry Pi Zero 2 W gateway.",
      "A Flask backend processes incoming readings and classifies poles as Healthy, Warning, or Alert.",
      "Google Maps API visualizes live pole locations and health status.",
      "A role-based dashboard enables officers to monitor, assign, and track maintenance tasks."
    ],
    techStack: [
      "Python",
      "Flask",
      "ESP32",
      "LoRa (RYLR896)",
      "Raspberry Pi Zero 2 W",
      "Google Maps API",
      "HTML",
      "CSS",
      "JavaScript",
      "DFRobot AC Current Sensor",
    ],
    features: [
      "Real-time voltage/current monitoring per pole, auto-classified as Healthy, Warning, or Alert",
      "Instant alert notifications the moment a pole crosses a fault threshold",
      "Historical data analysis for reviewing trends per pole over time",
      "Google Maps–pinned pole locations with exact GPS coordinates and live current readings",
      "Role-based access — a Dashboard/Officer view and a Staff Management view",
      "End-to-end repair workflow: assign a task with a due date to a field staff member and track it to resolution",
      "Wireless LoRa sensor communication, so poles don't need continuous power or network infrastructure",
    ],
    challenges: [
      "Accurate fault detection — separating real breakage signatures from normal current fluctuation",
      "Network stability over LoRa across pole-to-gateway distances",
      "Hardware compatibility across the ESP32, LoRa transceiver, and Raspberry Pi gateway stack",
      "Designing for user training — officers and field staff needed a dashboard usable with minimal onboarding",
    ],
    results: [
      "Advanced to the Smart India Hackathon internal evaluation round as Team Synktra.",
      "Developed a complete end-to-end IoT monitoring solution integrating hardware, backend, and dashboard.",
      "Successfully demonstrated the working prototype and technical architecture before the evaluation panel.",
    ],

    metrics: [
      "Real-time monitoring",
      "LoRa-based wireless communication",
      "Role-based dashboard",
      "GPS-enabled monitoring"
    ],
    highlights: [
      "SIH25063",
      "Team Synktra",
      "IoT",
      "LoRa",
      "Flask"
    ],
    github: "https://github.com/Saadgipuniwala/overhead-conductor-sih",
    live: "https://overhead-conductor-fault-detection-1.onrender.com",
    screenshots: [
      { src: "/images/overhead/dashboard.png", caption: "Officer dashboard — live Healthy / Warning / Alert status across all monitored poles" },
      { src: "/images/overhead/login.png", caption: "Smart Voltage Breakage Detection System — role-based login and key feature overview" },
      { src: "/images/overhead/pole-detail.png", caption: "Pole detail view — GPS-pinned location, live current reading, and task assignment" },
      { src: "/images/overhead/technical-approach.jpg", caption: "Presenting the hardware + software technical approach to the SIH panel" },
      { src: "/images/overhead/team-presentation.jpg", caption: "Team Synktra demoing the working prototype during evaluation" },
      { src: "/images/overhead/sih-problem-statement.png", caption: "SIH25063 — Problem Statement: Disaster Management theme, Hardware category" },
    ],
  },
  {
    slug: "smart-window-ventilation",
    name: "IoT-Based Smart Ventilation System",
    shortName: "Smart Window Ventilation",

    tagline:
      "An intelligent IoT-based ventilation system that automatically adapts to changing environmental conditions.",

    cover: "/images/window/model.jpeg",

    status: "Shipped",

    year: "2026",

    problem:
      "Manual window control cannot adapt to changing environmental conditions such as temperature, humidity, rainfall, occupancy, and ambient light, often resulting in poor indoor comfort and energy inefficiency.",

    solution:
      "Developed an intelligent IoT-based ventilation system that continuously monitors environmental conditions and automatically adjusts window movement using a rule-based decision engine. A real-time dashboard provides live sensor readings, decision insights, and system monitoring.",

    architecture: [
      "ESP32 reads environmental data from AHT10, PIR, LDR, and rain sensors.",
      "A rule-based decision engine evaluates environmental conditions and determines the optimal window angle.",
      "An MG996R servo motor automatically adjusts the window position.",
      "A Flask backend receives sensor data and communicates with the dashboard over Wi-Fi.",
      "A live dashboard visualizes telemetry, sensor analytics, AI decision reasoning, and system status in real time."
    ],

    techStack: [
      "ESP32",
      "Arduino IDE",
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Chart.js",
      "AHT10",
      "PIR",
      "LDR",
      "YL-83 Rain Sensor",
      "MG996R Servo"
    ],

    features: [
      "Real-time monitoring of temperature, humidity, rainfall, occupancy, and ambient light",
      "Automatic window control using intelligent rule-based decision making",
      "Interactive dashboard with live telemetry and environmental analytics",
      "Built-in sensor fault detection and system health monitoring",
      "Historical sensor trends and session statistics",
      "Manual override mode for user-controlled operation"
    ],

    challenges: [
      "Designing an explainable rule-based decision engine for multiple environmental conditions.",
      "Detecting faulty or unresponsive sensors without additional hardware.",
      "Maintaining reliable Wi-Fi communication between the ESP32 and dashboard.",
      "Integrating hardware components into a stable working prototype."
    ],

    results: [
      "Built a fully functional IoT prototype for intelligent environmental monitoring.",
      "Implemented automated window control using multiple environmental sensors.",
      "Presented as Project ID 20 at Techzibition-26 during DSU's Annual Technical Fest.",
      "Successfully demonstrated real-time monitoring and automated ventilation control."
    ],

    metrics: [
      "5+ environmental sensors",
      "Real-time monitoring",
      "Automatic window control",
      "Wi-Fi enabled dashboard"
    ],

    highlights: [
      "IoT",
      "ESP32",
      "Embedded Systems",
      "Automation",
      "Techzibition-26"
    ],

    github:
      "https://github.com/Saadgipuniwala/AI-Powerd-Smart-window--ventilation--_ENV_control",

    live:
      "https://saadgipuniwala.github.io/AI-Powerd-Smart-window--ventilation--_ENV_control/",

    screenshots: [
      {
        src: "/images/window/dashboard-1.png",
        caption:
          "SmartVent AI dashboard displaying live environmental telemetry, decision insights, and automated window control.",
      },
      {
        src: "/images/window/analysis-1.png",
        caption:
          "Real-time environmental analysis showing temperature, humidity, rainfall, ambient light, occupancy, and window position.",
      },
      {
        src: "/images/window/charts-1.png",
        caption:
          "Historical sensor trends, environmental analytics, and system performance statistics.",
      },
      {
        src: "/images/window/model.jpeg",
        caption:
          "Working hardware prototype integrating the ESP32, AHT10, PIR, LDR, YL-83 rain sensor, MG996R servo motor, and automated window mechanism.",
      },
      {
        src: "/images/window/poster.jpeg",
        caption:
          "Project poster presented at Techzibition-26, Dayananda Sagar University's Annual Technical Fest (Project ID 20).",
      },
      {
        src: "/images/window/team-photo.png",
        caption:
          "Demonstrating the Smart Window Ventilation System during Techzibition-26 at Dayananda Sagar University.",
      },
    ],
  },
  {
    slug: "rf-signal-intelligence-dashboard",
    name: "Battlefield RF Signal Intelligence Dashboard",
    shortName: "RF Signal Intelligence Dashboard",
    tagline:
      "An interactive machine learning dashboard for RF signal visualization, modulation classification, and intelligent threat assessment.",

    cover: "/images/rf/dashboard-1.png",

    status: "Shipped",

    year: "2026",

    problem:
      "Analyzing RF spectrum data manually is time-consuming and challenging, particularly when dealing with multiple communication signals. Rapid visualization, modulation classification, and signal interpretation are essential for supporting timely decision-making in defense-oriented and spectrum monitoring applications.",

    solution:
      "Developed an interactive Streamlit-based dashboard that visualizes RF spectrum data, classifies modulation types using machine learning on the RML2016.10a dataset, and provides an intelligent rule-based threat assessment with real-time analytics.",

    architecture: [
      "RF signal data is loaded from the RML2016.10a modulation dataset or simulated input.",
      "Machine learning models classify signals across multiple digital and analog modulation schemes.",
      "A rule-based intelligence engine combines modulation type, confidence score, and SNR to estimate the signal threat category.",
      "A Streamlit dashboard presents live waveform visualization, spectrum analysis, classification results, and interactive analytics."
    ],

    techStack: [
      "Python",
      "Streamlit",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "RML2016.10a Dataset"
    ],

    features: [
      "Interactive RF signal visualization with waveform and spectrum analysis",
      "Machine learning–based modulation classification across multiple RF signal types",
      "Rule-based threat assessment with confidence scores and recommended operator actions",
      "Real-time dashboard displaying classification results, signal metrics, and performance analytics",
      "Session analytics including detection distribution, SNR trends, precision, recall, and F1-score visualization",
      "Signal comparison and modulation reference panel for easier interpretation"
    ],

    challenges: [
      "Designing an intuitive dashboard capable of presenting complex RF signal information clearly.",
      "Balancing accurate modulation classification with meaningful threat interpretation.",
      "Integrating signal visualization, machine learning inference, and analytics into a responsive application."
    ],

    results: [
      "Developed a fully functional RF Signal Intelligence Dashboard for visualization and classification.",
      "Integrated machine learning with interactive analytics for real-time RF signal interpretation.",
      "Demonstrated automated modulation classification and intelligent threat assessment using the RML2016.10a dataset.",
      "Presented the project during the DSU Code Clash competition as an AI-powered RF signal analysis system."
    ],

    metrics: [
      "10+ Modulation Classes",
      "Real-Time Visualization",
      "Interactive Analytics",
      "Threat Assessment"
    ],

    highlights: [
      "Machine Learning",
      "Signal Processing",
      "Data Visualization",
      "Streamlit Dashboard",
      "DSU Code Clash 2026"
    ],

    github:
      "https://github.com/Saadgipuniwala/rf-signal-dashboard-synktra",

    screenshots: [
      {
        src: "/images/rf/dashboard-1.png",
        caption:
          "Interactive dashboard displaying live RF signal visualization and classification."
      },
      {
        src: "/images/rf/classification.png",
        caption:
          "Signal classification interface supporting multiple modulation schemes."
      },
      {
        src: "/images/rf/threat-analysis.png",
        caption:
          "Threat assessment dashboard with confidence scores, analytics, and recommended actions."
      },
      {
        src: "/images/rf/timeline.png",
        caption:
          "Session timeline showing RF signal detection and classification history."
      },
      {
        src: "/images/rf/modulation-ref.png",
        caption:
          "Reference panel illustrating supported RF modulation classes and signal categories."
      }
    ],
  },
  {
    slug: "student-performance-prediction",
    name: "Student Performance Prediction",
    shortName: "Student Performance Prediction",
    tagline: "Forecasting academic outcomes with machine learning across 1,000+ student records.",
    cover: "/images/student/cover.png",
    video: "/videos/student-performance-demo.mp4",

    status: "Shipped",
    year: "2025",

    problem:
      "Educators often identify at-risk students too late because performance indicators such as academic history, study habits, and demographic factors are rarely analyzed together.",

    solution:
      "An end-to-end machine learning pipeline that preprocesses student data, engineers meaningful features, trains multiple models, and predicts academic outcomes using Random Forest and Logistic Regression.",

    architecture: [
      "Data preprocessing and feature engineering from student academic records.",
      "Model training and comparison using Random Forest and Logistic Regression.",
      "Evaluation using accuracy, confusion matrix, cross-validation, and feature importance analysis.",
    ],

    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter Notebook"
    ],

    features: [
      "Complete ML workflow from raw dataset to prediction",
      "Model benchmarking with multiple classification algorithms",
      "Visual analysis through confusion matrices and feature importance plots",
    ],

    challenges: [
      "Cleaning inconsistent student records and handling missing values",
      "Selecting evaluation metrics beyond accuracy for reliable predictions",
    ],

    results: [
      "Achieved 85%+ prediction accuracy on 1,000+ student records",
      "Built a reproducible ML pipeline for academic risk prediction",
    ],

    github:
      "https://github.com/Saadgipuniwala/Student-Performance-Prediction",

    screenshots: [],
  },
];
