import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: 'LaLigaBloquea',
      description: 'Extensión para navegadores basados en chrome. Avisa de si la web que estas visitando está siendo hosteada por Cloudflare, esto es debido a que LaLiga Española de Futbol ha estado bloqueando páginas hosteadas por Cloudflare para "acabar con la piratería" y para "proteger a los usuarios de internet".',
      imageUrl: '/projects/laligabloquea.png',
      techStack: ['Plasmo', 'TypeScript', 'Node.js', 'Chrome Extension'],
      githubUrl: 'https://github.com/pablo-sanchez83/LaLigaBloquea'
    },
    {
      name: 'WeatherApp-Python',
      description: 'Esta es una aplicación sencilla que monitorea el clima utilizando Python, MySQL y Flask. Permite acceder a información metereológica de manera fácil y concisa.',
      imageUrl: '/projects/weather-app.png',
      techStack: ['MySQL', 'Python', 'Flask', 'api', 'weather'],
      githubUrl: 'https://github.com/pablo-sanchez83/WeatherApp-Python'
    },
    {
      name: 'Eatbook',
      description: 'Web para gestionar reservas de restaurantes. Permite a los usuarios realizar reservas, verificar disponibilidad y cancelar reservas. Y a las empresas poder gestionar sus reservas y clientes.',
      imageUrl: '/projects/eatbook.png',
      techStack: ['React', 'Node.js', 'Django', 'PostgreSQL', 'REST API'],
      githubUrl: 'https://github.com/pablo-sanchez83/Eatbook'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="projects-container"
      >
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              {...project}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 