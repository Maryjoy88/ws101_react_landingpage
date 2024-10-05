// src/App.js
import React, { useEffect, useRef } from 'react';
import './App.css'; // Import your custom CSS here
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const starRef = useRef(null); // Reference to the star element

  const handleLearnMore = () => {
    alert("See the information below and don't mind the Star po hehe. Thanks!");
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (starRef.current) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        starRef.current.style.left = `${mouseX}px`;
        starRef.current.style.bottom = `${window.innerHeight - mouseY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero onLearnMore={handleLearnMore} starRef={starRef} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#footer">Footer</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = ({ onLearnMore, starRef }) => (
  <section id="hero">
    <div className="star" id="star" ref={starRef}></div>
    <h1>Welcome to Web Development</h1>
    <p>Discover the importance of building a strong online presence.</p>
    <button onClick={onLearnMore}>Learn More</button>
  </section>
);

const About = () => (
  <section id="about">
    <h2>About Web Development</h2>

    <h3>What is Web Development?</h3>
    <p>Web development is the process of creating websites and applications for the internet. It involves a variety of tasks, including web design, coding, and content management.</p>

    <h3>Why is Web Development Important?</h3>
    <p>In today's digital age, having a strong online presence is crucial for businesses and individuals alike. Web development enables organizations to reach a wider audience, engage with customers, and promote their products and services effectively.</p>

    <h3>Key Components of Web Development</h3>
    <p>Web development can be broadly divided into three main components:</p>
    <div className="component-container">
      {components.map((component) => (
        <Component key={component.title} {...component} />
      ))}
    </div>

    <h3>Popular Frameworks and Tools</h3>
    <p>Web developers use various frameworks and tools to streamline their workflow:</p>
    <ul>
      {frameworks.map((framework) => (
        <li key={framework}>{framework}</li>
      ))}
    </ul>

    <h3>Career Opportunities</h3>
    <p>Web development offers numerous career paths, including web developer, UI/UX designer, and project manager. The demand for skilled developers continues to grow.</p>

    <h3>Future Trends</h3>
    <p>Emerging trends in web development include responsive design, Progressive Web Apps (PWAs), and a focus on accessibility to ensure all users can navigate websites easily.</p>

    <p>Want to learn more about web development? Check out online resources and tutorials to get started!</p>
  </section>
);

const Component = ({ icon, title, description }) => (
  <div className="component">
    <i className={icon}></i>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const components = [
  {
    icon: 'fas fa-code',
    title: 'Front-End Development',
    description: 'Creating the visual aspects of a website using HTML, CSS, and JavaScript.'
  },
  {
    icon: 'fas fa-server',
    title: 'Back-End Development',
    description: 'Managing server-side programming and data using languages like PHP, Python, or Ruby.'
  },
  {
    icon: 'fas fa-globe',
    title: 'Full-Stack Development',
    description: 'Proficiency in both front-end and back-end technologies.'
  }
];

const frameworks = [
  '<strong>Front-End Frameworks:</strong> React, Angular, Vue.js',
  '<strong>Back-End Frameworks:</strong> Node.js, Django, Ruby on Rails',
  '<strong>Version Control:</strong> Git and GitHub for managing code changes and collaboration.'
];

const Contact = () => (
  <section id="contact">
    <h2>Contact Me</h2>
    <p>If you have any questions or would like to get in touch, feel free to reach out!</p>

    <h3>Email</h3>
    <p><a href="mailto:maryjoyfreires@gmail.com">my email</a></p>

    <h3>Phone</h3>
    <p>09103204345</p>

    <h3>Social Media</h3>
    <p>
      <a href="https://web.facebook.com/profile.php?id=100083235788399" target="_blank" rel="noopener noreferrer">Facebook</a> /
      <a href="https://github.com/Maryjoy88" target="_blank" rel="noopener noreferrer">GitHub</a>
    </p>
  </section>
);

const Footer = () => {
  <footer id="footer">
    <p>&copy; Maryjoy Freires 2024. All rights reserved.</p>
  </footer>
};

export default App;