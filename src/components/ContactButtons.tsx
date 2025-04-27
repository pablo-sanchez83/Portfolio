import { motion } from 'framer-motion';

interface ContactButton {
  icon: string;
  label: string;
  url: string;
  isMail?: boolean;
}

const ContactButtons = () => {
  const buttons: ContactButton[] = [
    {
      icon: '/contact/email.svg',
      label: 'Email',
      url: 'mailto:pablosanchezperianez83@gmail.com',
      isMail: true
    },
    {
      icon: '/contact/linkedin.svg',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pablo-s%C3%A1nchez-peria%C3%B1ez-75419a25a/'
    },
    {
      icon: '/contact/github.svg',
      label: 'GitHub',
      url: 'https://github.com/pablo-sanchez83'
    }
  ];

  return (
    <div className="contact-buttons">
      {buttons.map((button) => (
        <motion.a
          key={button.label}
          href={button.url}
          target={button.isMail ? undefined : "_blank"}
          rel={button.isMail ? undefined : "noopener noreferrer"}
          className="contact-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={button.icon} alt={`${button.label} icon`} className="contact-icon" />
          <span className="contact-label">{button.label}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default ContactButtons; 