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
    objectives: "Objectives",
    missionVisionValues: "Mission, Vision & Values",
    certifications: "Certifications",
    services: "Services",
    projects: "Projects",
    contact: "Contact",

    // Hero Section
    heroTitle: "Full Stack Developer",
    heroDescription: "I create modern and responsive web applications with cutting-edge technologies.",
    learnMore: "Learn More",

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
    mobileDevelopment: "Mobile Development",
    mobileDevelopmentDesc: "Building cross-platform mobile applications that work seamlessly on all devices.",

    // Projects
    projectsDescription: "Check out some of my recent projects and the technologies I used to build them.",
    projectTitle1: "E-commerce Platform",
    projectDesc1: "A full-featured online store with product management, cart functionality, and payment processing.",
    projectTitle2: "Portfolio Website",
    projectDesc2: "A modern portfolio website showcasing projects and skills with a sleek, responsive design.",
    projectTitle3: "Task Management App",
    projectDesc3: "A collaborative task management application with real-time updates and team features.",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",

    // Contact
    contactDescription: "Interested in working together? Feel free to reach out through any of the channels below.",
    getInTouch: "Get in Touch",
    contactInfo: "Contact Information",
    email: "Email",
    phone: "Phone",
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
    experience: "Experience",
    location: "Location",
    locationValue: "New York, USA",
    availability: "Availability",
    availabilityValue: "Available for freelance",
  },
  es: {
    // Navigation
    profile: "Perfil",
    objectives: "Objetivos",
    missionVisionValues: "Misión, Visión y Valores",
    certifications: "Certificaciones",
    services: "Servicios",
    projects: "Proyectos",
    contact: "Contacto",

    // Hero Section
    heroTitle: "Desarrollador Full Stack",
    heroDescription: "Creo aplicaciones web modernas y responsivas con tecnologías de vanguardia.",
    learnMore: "Saber Más",

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
    mobileDevelopment: "Desarrollo Móvil",
    mobileDevelopmentDesc:
      "Creación de aplicaciones móviles multiplataforma que funcionan sin problemas en todos los dispositivos.",

    // Projects
    projectsDescription:
      "Echa un vistazo a algunos de mis proyectos recientes y las tecnologías que utilicé para construirlos.",
    projectTitle1: "Plataforma de Comercio Electrónico",
    projectDesc1:
      "Una tienda en línea completa con gestión de productos, funcionalidad de carrito y procesamiento de pagos.",
    projectTitle2: "Sitio Web de Portafolio",
    projectDesc2:
      "Un sitio web de portafolio moderno que muestra proyectos y habilidades con un diseño elegante y responsivo.",
    projectTitle3: "Aplicación de Gestión de Tareas",
    projectDesc3:
      "Una aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real y funciones de equipo.",
    liveDemo: "Demo en Vivo",
    sourceCode: "Código Fuente",

    // Contact
    contactDescription:
      "¿Interesado en trabajar juntos? No dudes en contactarme a través de cualquiera de los canales a continuación.",
    getInTouch: "Ponte en Contacto",
    contactInfo: "Información de Contacto",
    email: "Correo",
    phone: "Teléfono",
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
    experience: "Experiencia",
    location: "Ubicación",
    locationValue: "Nueva York, EE.UU.",
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
