import React from 'react';
import AnimatedBody from "../animations/AnimatedBody";

const Contacts: React.FC = () => {
  const githubLink = 'https://github.com/Ampersand-Alexander';
  const linkedinLink = 'https://www.linkedin.com/in/yourusername';
  const email = 'mailto:youremail@example.com';

  return (
    <section className="contacts-section">
      <div className="contact-header text-[30px]">
        <AnimatedBody
                      delay={0.5}
                      text="Contact Me"
                      
                  />
      </div>
      <div className="contact-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src={'github.png'} alt="GitHub" width="30" height="30" />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img src={'github.png'} alt="LinkedIn" width="30" height="30" />
        </a>
        <a href={email}>
          <img src={'github.png'} alt="Email" width="30" height="30" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
