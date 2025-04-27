import { motion } from 'framer-motion'

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  image: string
  techStack: string[]
  link: string
}

const ExperienceCard = ({ title, company, period, description, image, techStack, link }: ExperienceCardProps) => {
  return (
    <motion.div 
      className="experience-card"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="experience-image">
        <img src={image} alt={`${company} logo`} />
      </div>
      <div className="experience-content">
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p className="period">{period}</p>
        <p className="description">{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <img 
              key={index} 
              src={`/skills/${tech}.svg`} 
              alt={tech} 
              title={tech}
            />
          ))}
        </div>
        <a href={link} className="experience-link">Ver más detalles</a>
      </div>
    </motion.div>
  )
}

export default ExperienceCard 
