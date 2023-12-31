import React from 'react';
import AnimatedBody from "../animations/AnimatedBody";

const Contacts: React.FC = () => {
  const githubLink = 'https://github.com/Ampersand-Alexander';
  const linkedinLink = 'https://www.linkedin.com/in/ampersand-alexander/';
  const email = 'mailto:alextran.engineering@gmail.com';

  return (
    <section className="contacts-section" id="contact"
      style={{paddingTop: "400px",
       paddingBottom:"500px",
       backdropFilter: "blur(10px)",
       background: "linear-gradient(180deg, rgba(0,0,25,0.7) 0%, rgba(0,0,0,1) 70%)",
       zIndex: 1,
       }}>
      <div className="contact-header text-[30px]">
        <AnimatedBody
                      delay={0.5}
                      text="Contact Me"
                      
                  />
      </div>
      <div className="contact-links">
        <a className="contact-icon" href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src={'github.png'} alt="GitHub" width="50" height="50" />
        </a>
        <a className="contact-icon" href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img src={'linkedin.png'} alt="LinkedIn" width="50" height="50" />
        </a>
        <a className="contact-icon" href={email}  target="_blank" rel="noopener noreferrer">
          <img src={'gmail.png'} alt="Email" width="50" height="50" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
