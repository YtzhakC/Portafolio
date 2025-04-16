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
    about: "About Me",
    services: "My Services",
    projects: "My Projects",
    contact: "Contact",
    heroTitle: "Full Stack Developer",
    heroDescription: "I create modern and responsive web applications with cutting-edge technologies.",
    learnMore: "Learn More",
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
    servicesDescription: "Here are the services I offer to help bring your digital ideas to life.",
    webDevelopment: "Web Development",
    webDevelopmentDesc: "Creating responsive and modern websites using the latest technologies and frameworks.",
    uiUxDesign: "UI/UX Design",
    uiUxDesignDesc: "Designing intuitive user interfaces and experiences that engage and delight users.",
    databaseManagement: "Database Management",
    databaseManagementDesc: "Setting up and optimizing databases for efficient data storage and retrieval.",
    mobileDevelopment: "Mobile Development",
    mobileDevelopmentDesc: "Building cross-platform mobile applications that work seamlessly on all devices.",
    projectsDescription: "Check out some of my recent projects and the technologies I used to build them.",
    projectTitle1: "E-commerce Platform",
    projectDesc1: "A full-featured online store with product management, cart functionality, and payment processing.",
    projectTitle2: "Portfolio Website",
    projectDesc2: "A modern portfolio website showcasing projects and skills with a sleek, responsive design.",
    projectTitle3: "Task Management App",
    projectDesc3: "A collaborative task management application with real-time updates and team features.",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    contactDescription: "Interested in working together? Feel free to reach out through any of the channels below.",
    getInTouch: "Get in Touch",
    contactInfo: "Contact Information",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send Message",
  },
  es: {
    about: "Sobre Mí",
    services: "Mis Servicios",
    projects: "Mis Proyectos",
    contact: "Contacto",
    heroTitle: "Desarrollador Full Stack",
    heroDescription: "Creo aplicaciones web modernas y responsivas con tecnologías de vanguardia.",
    learnMore: "Saber Más",
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
    contactDescription:
      "¿Interesado en trabajar juntos? No dudes en contactarme a través de cualquiera de los canales a continuación.",
    getInTouch: "Ponte en Contacto",
    contactInfo: "Información de Contacto",
    email: "Correo",
    phone: "Teléfono",
    message: "Mensaje",
    send: "Enviar Mensaje",
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
