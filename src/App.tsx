import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactButtons from './components/ContactButtons'
import ExperienceCard from './components/ExperienceCard'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackToTop(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const experiences = [
    {
      title: 'Desarrollador Full Stack',
      company: 'Dialogo Tecnológico',
      period: '04/2024 - 04/2025',
      description: 'Desarrollo de aplicaciones web completas con enfoque en backend, implementando arquitecturas escalables y microservicios.',
      image: '/experience/dialogo.jpg',
      techStack: ['Java', 'Spring', 'SQL', 'Docker', 'AWS', 'Angular', 'Python', 'Git', 'MongoDB'],
      link: 'https://www.dialogotecnologico.com/'
    },
    {
      title: 'Tecnico de Sistemas',
      company: 'Grupo Intercom Azuqueca de Henares',
      period: '04/2022 - 06/2022',
      description: 'Reparación de analisis de sistemas y mantenimiento de equipos informáticos. Atencion al cliente y a empresas.',
      image: '/experience/intercom.webp',
      techStack: ['Linux', 'Windows', 'Office'],
      link: 'http://www.grupointercom.info/'
    }
  ]

  return (
    <div className="app">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="typewriter-container"
          >
            <Typewriter
              options={{
                strings: [
                  'Desarrollador Full Stack',
                  'Especialista en Backend',
                  'Arquitecto de APIs RESTful',
                  'Desarrollador de Microservicios',
                  'Experto en Sistemas Distribuidos',
                  'Desarrollador de Aplicaciones Web'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                cursor: '|',
                wrapperClassName: 'typewriter-text'
              }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Construyo soluciones robustas y escalables con enfoque en el backend y arquitecturas distribuidas
          </motion.p>
        </motion.div>
        <button 
          className="scroll-down-button"
          onClick={scrollToAbout}
          aria-label="Ir a la sección Sobre Mí"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22L4 14l1.41-1.41L12 19.17l6.59-6.58L20 14z"/>
            <path d="M12 10L4 2l1.41-1.41L12 7.17l6.59-6.58L20 2z"/>
          </svg>
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <div className="about-image-container">
            <img 
              src="/fotopersonal.jpeg" 
              alt="Tu foto de perfil" 
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h2>Sobre Mí</h2>
            <p>
              Desarrollador Full Stack con más de 2 años de experiencia, especializado en arquitecturas backend y desarrollo de sistemas distribuidos.
              Domino tecnologías modernas como Node.js, Python, Java y frameworks como Spring Boot, NestJS y Express. Mi enfoque se centra en crear
              soluciones escalables y mantenibles, implementando las mejores prácticas de desarrollo y patrones de diseño.
              Actualmente profundizando en Inteligencia Artificial y Big Data, con el objetivo de integrar estas tecnologías en soluciones empresariales.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 10l1.41 1.41L12 4.83l6.59 6.58L20 10z"/>
        </svg>
      </button>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Experiencia</h2>
          <div className="experience-cards">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Contacto</h2>
          <ContactButtons />
        </motion.div>
      </section>
    </div>
  )
}

export default App
