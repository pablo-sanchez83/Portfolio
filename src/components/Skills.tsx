import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  logo?: string;
  emoji?: string;
  category: string;
}

const Skills = () => {
  const [skills] = useState<Skill[]>([
    // Backend
    { name: 'Java', logo: '/skills/Java.svg', category: 'Backend' },
    { name: 'Spring', logo: '/skills/Spring.svg', category: 'Backend' },
    { name: 'NodeJS', logo: '/skills/NodeJS.svg', category: 'Backend' },
    { name: 'Python', logo: '/skills/Python.svg', category: 'Backend' },
    { name: 'NestJS', logo: '/skills/NestJS.svg', category: 'Backend' },
    { name: 'Express', logo: '/skills/Express.svg', category: 'Backend' },
    { name: 'Django', logo: '/skills/Django.svg', category: 'Backend' },

    // Frontend
    { name: 'TypeScript', logo: '/skills/TypeScript.svg', category: 'Frontend' },
    { name: 'HTML', logo: '/skills/HTML.svg', category: 'Frontend' },
    { name: 'CSS', logo: '/skills/CSS.svg', category: 'Frontend' },
    { name: 'TailwindCSS', logo: '/skills/Tailwind.svg', category: 'Frontend' },
    { name: 'Angular', logo: '/skills/Angular.svg', category: 'Frontend' },
    { name: 'React', logo: '/skills/React.svg', category: 'Frontend' },
    { name: 'NextJS 14+', logo: '/skills/NextJS.svg', category: 'Frontend' },
    { name: 'Astro', logo: '/skills/Astro.svg', category: 'Frontend' },

    // Bases de datos
    { name: 'PostgreSQL', logo: '/skills/PostgresSQL.svg', category: 'Bases de datos' },
    { name: 'MySQL', logo: '/skills/SQL.svg', category: 'Bases de datos' },
    { name: 'MongoDB', logo: '/skills/MongoDB.svg', category: 'Bases de datos' },
    { name: 'Apache Spark', logo: '/skills/Spark.svg', category: 'Bases de datos' },
    { name: 'Hadoop', logo: '/skills/Hadoop.svg', category: 'Bases de datos' },
    { name: 'Cassandra', logo: '/skills/Cassandra.svg', category: 'Bases de datos' },

    // Inteligencia Artificial
    { name: 'TensorFlow', logo: '/skills/TensorFlow.svg', category: 'Inteligencia Artificial' },
    { name: 'PyTorch', logo: '/skills/PyTorch.svg', category: 'Inteligencia Artificial' },
    { name: 'Scikit-learn', logo: '/skills/scikit-learn.svg', category: 'Inteligencia Artificial' },
    { name: 'Keras', logo: '/skills/Keras.svg', category: 'Inteligencia Artificial' },

    // Big Data
    { name: 'Apache Kafka', logo: '/skills/Kafka.svg', category: 'Big Data' },
    { name: 'Pandas', logo: '/skills/Pandas.svg', category: 'Big Data' },
    { name: 'NumPy', logo: '/skills/NumPy.svg', category: 'Big Data' },

    // Otras
    { name: 'Git', logo: '/skills/Git.svg', category: 'Otras' },
    { name: 'Docker', logo: '/skills/Docker.svg', category: 'Otras' },
    { name: 'Jenkins', logo: '/skills/Jenkins.svg', category: 'Otras' },
    { name: 'AWS', logo: '/skills/AWS.svg', category: 'Otras' },

    // Idiomas
    { name: 'Español', emoji: '🇪🇸', category: 'Idiomas' },
    { name: 'Inglés', emoji: '🇬🇧', category: 'Idiomas' },

    // Softskills
    { name: 'Creatividad', emoji: '🎨', category: 'Softskills' },
    { name: 'Trabajo en equipo', emoji: '🤝', category: 'Softskills' },
    { name: 'Profesionalidad', emoji: '👔', category: 'Softskills' },
    { name: 'Adaptabilidad', emoji: '🔄', category: 'Softskills' },
    { name: 'Pensamiento analítico', emoji: '🔍', category: 'Softskills' },
    { name: 'Resolución de problemas', emoji: '💡', category: 'Softskills' }
  ]);

  const categorias = {
    'Backend': {
      title: 'Backend',
      skills: skills.filter(skill => skill.category === 'Backend'),
      color: '#4CAF50' // Verde
    },
    'Frontend': {
      title: 'Frontend',
      skills: skills.filter(skill => skill.category === 'Frontend'),
      color: '#2196F3' // Azul
    },
    'Bases de datos': {
      title: 'Bases de datos',
      skills: skills.filter(skill => skill.category === 'Bases de datos'),
      color: '#9C27B0' // Púrpura
    },
    'Inteligencia Artificial': {
      title: 'Inteligencia Artificial',
      skills: skills.filter(skill => skill.category === 'Inteligencia Artificial'),
      color: '#FF5722' // Naranja oscuro
    },
    'Big Data': {
      title: 'Big Data',
      skills: skills.filter(skill => skill.category === 'Big Data'),
      color: '#795548' // Marrón
    },
    'Softskills': {
      title: 'Softskills',
      skills: skills.filter(skill => skill.category === 'Softskills'),
      color: '#00BCD4' // Cyan
    },
    'Idiomas': {
      title: 'Idiomas',
      skills: skills.filter(skill => skill.category === 'Idiomas'),
      color: '#E91E63' // Rosa
    },
    'Otras': {
      title: 'Otras',
      skills: skills.filter(skill => skill.category === 'Otras'),
      color: '#FF9800' // Naranja
    },
  };

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Habilidades</h2>
        <div className="skills-categories">
          {Object.entries(categorias).map(([key, categoria]) => (
            <motion.div
              key={key}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 style={{ color: categoria.color }}>{categoria.title}</h3>
              <div className="skills-grid">
                {categoria.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="skill-header">
                      {skill.logo ? (
                        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                      ) : (
                        <span className="skill-emoji">{skill.emoji}</span>
                      )}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 