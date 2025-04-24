"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  translations: Translations
}

const translations: Translations = {
  en: {
    // Navigation
    profile: "Profile",
    aboutMe: "About Me",
    objectives: "Objectives",
    missionVisionValues: "Mission, Vision & Values",
    skills: "Skills",
    certifications: "Certifications",
    services: "Services",
    projects: "Projects",
    contact: "Contact",

    // Hero Section
    heroTitle: "Full Stack Developer",
    heroDescription: "I create modern and responsive web applications with cutting-edge technologies.",
    learnMore: "Learn More",

    // About Me Section
    whoAmI: "Who am I?",
    aboutMeDescription1:
      "I am a passionate full-stack developer dedicated to creating innovative digital solutions that solve real-world problems. My mission is to develop tools that make people's lives easier and connect them in meaningful ways.",
    aboutMeDescription2:
      "My vision is to continue growing both professionally and personally, learning from each experience and challenging myself to step out of my comfort zone. I value teamwork, continuous learning, and creating real impact in every project I undertake.",
    experience: "Experience",
    experienceValue: "5 months",
    location: "Location",
    locationValue: "Bucaramanga, Santander",
    email: "Email",
    phone: "Phone",

    // Objectives Section
    objectivesDescription: "My professional goals and aspirations that drive my career path.",
    shortTermGoal: "Short-term Goal",
    shortTermGoalDesc: "Expand my expertise in modern JavaScript frameworks and contribute to open-source projects.",
    mediumTermGoal: "Medium-term Goal",
    mediumTermGoalDesc: "Lead development teams on innovative projects and mentor junior developers.",
    longTermGoal: "Long-term Goal",
    longTermGoalDesc:
      "Create technological solutions that positively impact society and establish my own tech company.",

    // Mission, Vision & Values
    mission: "Mission",
    missionDesc: "To develop innovative digital solutions that solve real-world problems and enhance user experiences.",
    vision: "Vision",
    visionDesc:
      "To become a leading figure in technology innovation, known for creating impactful and accessible digital products.",
    values: "Values",
    valuesDesc: "The principles that guide my professional practice:",
    value1: "Excellence in every line of code",
    value2: "Continuous learning and improvement",
    value3: "Ethical and responsible development",
    value4: "Collaboration and knowledge sharing",

    // Skills
    skillsDescription: "My technical and soft skills that I've developed throughout my career.",
    technicalSkills: "Technical Skills",
    softSkills: "Soft Skills",
    problemSolving: "Problem Solving",
    problemSolvingDesc: "Ability to analyze complex situations, identify root causes, and develop effective solutions.",
    teamCollaboration: "Team Collaboration",
    teamCollaborationDesc: "Strong ability to work collaboratively, share knowledge, and contribute to team success.",
    communication: "Effective Communication",
    communicationDesc:
      "Clear and concise communication skills, both written and verbal, adapting to different audiences.",
    adaptability: "Adaptability & Learning",
    adaptabilityDesc: "Quick to adapt to new technologies and environments, with a passion for continuous learning.",

    // Certifications
    certificationsDescription: "Professional certifications and courses I've completed to enhance my skills.",
    viewCertificate: "View Certificate",

    // Services
    servicesDescription: "Here are the services I offer to help bring your digital ideas to life.",
    webDevelopment: "Web Development",
    webDevelopmentDesc: "Creating responsive and modern websites using the latest technologies and frameworks.",
    uiUxDesign: "UI/UX Design",
    uiUxDesignDesc: "Designing intuitive user interfaces and experiences that engage and delight users.",
    databaseManagement: "Database Management",
    databaseManagementDesc: "Setting up and optimizing databases for efficient data storage and retrieval.",
    backendDevelopment: "Backend Development",
    backendDevelopmentDesc:
      "Building robust server-side applications and APIs that power web applications with efficient data processing and business logic.",

    // Projects
    projectsDescription: "Check out some of my recent projects and the technologies I used to build them.",
    projectTitle1: "Environmentalists Database",
    projectDesc1: "A database system for environmental research.",
    projectTitle2: "KanBan Board",
    projectDesc2: "A task management board with drag-and-drop functionality.",
    projectTitle3: "Academic Attendance Management System",
    projectDesc3: "A system to track student attendance.",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",

    // Contact
    contactDescription: "Interested in working together? Feel free to reach out through any of the channels below.",
    getInTouch: "Get in Touch",
    contactInfo: "Contact Information",
    message: "Message",
    send: "Send Message",

    // About (keeping for reference)
    about: "About Me",
    aboutTitle: "Who am I?",
    aboutDescription1:
      "I am a passionate full-stack developer with expertise in building modern web applications. I specialize in creating responsive, user-friendly interfaces and robust backend systems.",
    aboutDescription2:
      "With a strong foundation in multiple programming languages and frameworks, I can help bring your ideas to life with clean, maintainable code and intuitive user experiences.",
    name: "Name",
    availability: "Availability",
    availabilityValue: "Available for freelance",
  },
  es: {
    // Navigation
    profile: "Perfil",
    aboutMe: "Sobre Mí",
    objectives: "Objetivos",
    missionVisionValues: "Misión, Visión y Valores",
    skills: "Habilidades",
    certifications: "Certificaciones",
    services: "Servicios",
    projects: "Proyectos",
    contact: "Contacto",

    // Hero Section
    heroTitle: "Desarrollador Full Stack",
    heroDescription: "Creo aplicaciones web modernas y responsivas con tecnologías de vanguardia.",
    learnMore: "Saber Más",

    // About Me Section
    whoAmI: "¿Quién soy yo?",
    aboutMeDescription1:
      "Soy un desarrollador full-stack apasionado dedicado a crear soluciones digitales innovadoras que resuelvan problemas reales. Mi misión es desarrollar herramientas que faciliten la vida de las personas y las conecten de manera significativa.",
    aboutMeDescription2:
      "Mi visión es seguir creciendo tanto profesional como personalmente, aprendiendo de cada experiencia y desafiándome a salir de mi zona de confort. Valoro el trabajo en equipo, el aprendizaje continuo y crear un impacto real en cada proyecto que emprendo.",
    experience: "Experiencia",
    experienceValue: "5 meses",
    location: "Ubicación",
    locationValue: "Bucaramanga, Santander",
    email: "Correo",
    phone: "Teléfono",

    // Objectives Section
    objectivesDescription: "Mis metas y aspiraciones profesionales que impulsan mi trayectoria.",
    shortTermGoal: "Objetivo a Corto Plazo",
    shortTermGoalDesc:
      "Ampliar mi experiencia en frameworks modernos de JavaScript y contribuir a proyectos de código abierto.",
    mediumTermGoal: "Objetivo a Mediano Plazo",
    mediumTermGoalDesc: "Liderar equipos de desarrollo en proyectos innovadores y mentorear a desarrolladores junior.",
    longTermGoal: "Objetivo a Largo Plazo",
    longTermGoalDesc:
      "Crear soluciones tecnológicas que impacten positivamente a la sociedad y establecer mi propia empresa tecnológica.",

    // Mission, Vision & Values
    mission: "Misión",
    missionDesc:
      "Desarrollar soluciones digitales innovadoras que resuelvan problemas reales y mejoren la experiencia del usuario.",
    vision: "Visión",
    visionDesc:
      "Convertirme en una figura líder en innovación tecnológica, reconocido por crear productos digitales impactantes y accesibles.",
    values: "Valores",
    valuesDesc: "Los principios que guían mi práctica profesional:",
    value1: "Excelencia en cada línea de código",
    value2: "Aprendizaje y mejora continua",
    value3: "Desarrollo ético y responsable",
    value4: "Colaboración y compartir conocimiento",

    // Skills
    skillsDescription: "Mis habilidades técnicas y blandas que he desarrollado a lo largo de mi carrera.",
    technicalSkills: "Habilidades Técnicas",
    softSkills: "Habilidades Blandas",
    problemSolving: "Resolución de Problemas",
    problemSolvingDesc:
      "Capacidad para analizar situaciones complejas, identificar causas raíz y desarrollar soluciones efectivas.",
    teamCollaboration: "Colaboración en Equipo",
    teamCollaborationDesc:
      "Fuerte capacidad para trabajar de forma colaborativa, compartir conocimientos y contribuir al éxito del equipo.",
    communication: "Comunicación Efectiva",
    communicationDesc:
      "Habilidades de comunicación claras y concisas, tanto escritas como verbales, adaptándome a diferentes audiencias.",
    adaptability: "Adaptabilidad y Aprendizaje",
    adaptabilityDesc: "Rápida adaptación a nuevas tecnologías y entornos, con pasión por el aprendizaje continuo.",

    // Certifications
    certificationsDescription: "Certificaciones profesionales y cursos que he completado para mejorar mis habilidades.",
    viewCertificate: "Ver Certificado",

    // Services
    servicesDescription: "Estos son los servicios que ofrezco para ayudar a dar vida a tus ideas digitales.",
    webDevelopment: "Desarrollo Web",
    webDevelopmentDesc:
      "Creación de sitios web responsivos y modernos utilizando las últimas tecnologías y frameworks.",
    uiUxDesign: "Diseño UI/UX",
    uiUxDesignDesc: "Diseño de interfaces de usuario intuitivas y experiencias que atraen y deleitan a los usuarios.",
    databaseManagement: "Gestión de Bases de Datos",
    databaseManagementDesc:
      "Configuración y optimización de bases de datos para un almacenamiento y recuperación eficiente de datos.",
    backendDevelopment: "Desarrollo Backend",
    backendDevelopmentDesc:
      "Construcción de aplicaciones robustas del lado del servidor y APIs que potencian aplicaciones web con procesamiento eficiente de datos y lógica de negocio.",

    // Projects
    projectsDescription:
      "Echa un vistazo a algunos de mis proyectos recientes y las tecnologías que utilicé para construirlos.",
    projectTitle1: "Base de Datos Ambientalistas",
    projectDesc1: "Un sistema de base de datos para investigación ambiental.",
    projectTitle2: "Tablero KanBan",
    projectDesc2: "Un tablero de gestión de tareas con funcionalidad de arrastrar y soltar.",
    projectTitle3: "Sistema de Gestión de Asistencia Académica",
    projectDesc3: "Un sistema para rastrear la asistencia de estudiantes.",
    liveDemo: "Demo en Vivo",
    sourceCode: "Código Fuente",

    // Contact
    contactDescription:
      "¿Interesado en trabajar juntos? No dudes en contactarme a través de cualquiera de los canales a continuación.",
    getInTouch: "Ponte en Contacto",
    contactInfo: "Información de Contacto",
    message: "Mensaje",
    send: "Enviar Mensaje",

    // About (keeping for reference)
    about: "Sobre Mí",
    aboutTitle: "¿Quién soy?",
    aboutDescription1:
      "Soy un desarrollador full-stack apasionado con experiencia en la creación de aplicaciones web modernas. Me especializo en crear interfaces responsivas y fáciles de usar, así como sistemas backend robustos.",
    aboutDescription2:
      "Con una sólida base en múltiples lenguajes de programación y frameworks, puedo ayudar a dar vida a tus ideas con código limpio y mantenible, y experiencias de usuario intuitivas.",
    name: "Nombre",
    availability: "Disponibilidad",
    availabilityValue: "Disponible para freelance",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  return <LanguageContext.Provider value={{ language, setLanguage, translations }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
