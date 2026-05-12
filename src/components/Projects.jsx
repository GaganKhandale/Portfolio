import React, { useState } from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { ReactIcon, NodeIcon, ExpressIcon, MongoIcon, TailwindIcon, JsIcon, NextIcon, CssIcon, GithubIcon, TypeScriptIcon, PythonIcon, ScssIcon, DockerIcon, PhpIcon, TensorFlowIcon, JupyterIcon, HTMLIcon, LucideIcon } from './TechIcons';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Fashion Exchange',
    type: 'Online Fashion Trading Platform',
    category: 'Websites',
    gradient: 'linear-gradient(135deg, #0f172a, #1e293b)',
    description: 'A modern, online fashion platform for clothing and accesories in affordable prices.',
    githubLink: 'https://github.com/GaganKhandale/Fashion-Exchange',
    techStack: [
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'SCSS', icon: <ScssIcon /> },
      { name: 'JavaScript', icon: <JsIcon /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'TypeScript', icon: <TypeScriptIcon /> },
      { name: 'CSS', icon: <CssIcon /> }
    ]
  },
  {
    id: 2,
    title: 'Personal Expense Tracker',
    type: 'Expense Tracking Web App',
    category: 'Websites',
    gradient: 'linear-gradient(135deg, #0f172a, #334155)',
    description: 'A fully functional expense tracking web application with proper user authentication and responsive UI.',
    githubLink: 'https://github.com/GaganKhandale/Personal-Expense-Tracker',
    techStack: [
      { name: 'PHP', icon: <PhpIcon /> },
      { name: 'CSS', icon: <CssIcon /> },
    ]
  },
  {
    id: 3,
    title: 'Traffic Close Call',
    type: 'Image Classification',
    category: 'Websites',
    gradient: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
    description: 'An Image Classifier that offers insights about the chances of accident of vehicles.',
    githubLink: 'https://github.com/GaganKhandale/Traffic-Close-Call',
    techStack: [
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'TensorFlow', icon: <TensorFlowIcon /> },
      { name: 'Jupyter Notebook', icon: <JupyterIcon /> }
    ]
  },
  {
    id: 4,
    title: 'Facial Emotion Recognition',
    type: 'Image Classification',
    category: 'Websites',
    gradient: 'linear-gradient(135deg, #0f172a, #312e81)',
    description: 'An Image Classifier that offers real-time insights about emotions from facial expressions.',
    githubLink: 'https://github.com/GaganKhandale/Facial-Emotion-Recognition',
    techStack: [
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'CSS', icon: <CssIcon /> },
      { name: 'TypeScript', icon: <TypeScriptIcon /> },
      { name: 'JavaScript', icon: <JsIcon /> },
      { name: 'Next.js', icon: <NextIcon /> }
    ]
  },
  {
    id: 5,
    title: 'Netflix UI Clone',
    type: 'UI/UX Design',
    category: 'UI/UX',
    gradient: 'linear-gradient(135deg, #0f172a, #064e3b)',
    description: 'A visually stunning UI/UX design of Netflix.',
    githubLink: 'https://github.com/GaganKhandale/Netflix-HomePage',
    techStack: [
      { name: 'HTML', icon: <HTMLIcon /> },
      { name: 'CSS', icon: <CssIcon /> },
    ]
  },
  {
    id: 6,
    title: 'Portfolio',
    type: 'Personal Portfolio',
    category: 'UI/UX',
    gradient: 'linear-gradient(135deg, #0f172a, #78350f)',
    description: 'My Personal Portfolio Website, where I showcase my projects, skills, and other details.',
    githubLink: 'https://github.com/GaganKhandale/Portfolio',
    techStack: [
      { name: 'Next.js', icon: <NextIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
      { name: 'TypeScript', icon: <TypeScriptIcon /> },
      { name: 'JavaScript', icon: <JsIcon /> },
      { name: 'CSS', icon: <CssIcon /> },
      { name: 'Lucide', icon: <LucideIcon /> },
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Node.js', icon: <NodeIcon /> },
      { name: 'Express.js', icon: <ExpressIcon /> }
    ]
  }
];

const filters = ['All', 'Websites', 'Web Apps', 'E-commerce', 'UI/UX'];

const Projects = ({ onContactClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="section projects-section" id="portfolio">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="projects-header">
          <div className="projects-header-left">
            <p className="projects-subtitle">MY WORK</p>
            <h2 className="projects-title">Projects<span>.</span></h2>
            <p className="projects-desc">
              A collection of websites and web applications<br />I've built with passion and purpose.
            </p>
          </div>
          <div className="projects-filters">
            {filters.map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              {/* Inner card for existing project visuals */}
              <div className="project-card-inner">
                <div className="project-image-container">
                  <div className="project-number">{project.number}</div>
                  <div className="project-placeholder" style={{ background: project.gradient }}></div>
                </div>
                <div className="project-content">
                  <div className="project-top-row">
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.type}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mega pop-up tooltip */}
              <div className="project-popup">
                <div className="popup-header">
                  <h3>{project.title} - {project.type}</h3>
                </div>
                <p className="popup-desc">{project.description}</p>
                <div className="popup-divider"></div>

                <div className="popup-tech">
                  <h4>Tech Stack</h4>
                  <div className="popup-tech-grid">
                    {project.techStack.map((tech, i) => (
                      <div key={i} className="tech-pill">
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="popup-divider"></div>

                <a href={project.githubLink} target="_blank" rel="noreferrer" className="popup-github">
                  <GithubIcon />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <div className="cta-icon-wrapper">
              <Rocket size={28} />
            </div>
            <div className="cta-text">
              <h3>Have a project in mind?</h3>
              <p>Let's build something amazing together.</p>
            </div>
          </div>
          <button className="btn-filled" onClick={onContactClick}>
            Let's Talk <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
