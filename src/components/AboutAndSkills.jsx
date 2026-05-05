import { Monitor, Smartphone, Cloud } from 'lucide-react';
import { JsIcon, ReactIcon, NextIcon, VueIcon, MongoIcon, GitIcon, TailwindIcon, CssIcon, VsCodeIcon, GoogleColabIcon, TableauIcon, PowerBIIcon, PostmanIcon, RestApiIcon, JupyterIcon, GithubIcon, MysqlIcon, JavaIcon, OpenCVIcon, WebDevIcon, DataAnalyticsIcon, PythonIcon, LucideIcon } from './TechIcons';

export default function AboutAndSkills() {
  return (
    <section className="section" id="about">
      <div className="container" style={styles.container}>
        <div style={styles.splitLayout}>

          {/* Left Side: Services List */}
          <div style={styles.leftColumn}>
            <div style={styles.serviceItem}>
              <div style={styles.dot} />
              <Monitor size={32} color="var(--text-primary)" strokeWidth={1.5} />
              <span style={styles.serviceText}>Website Development</span>
            </div>

            <div style={styles.serviceItem}>
              <div style={styles.dot} />
              <Smartphone size={32} color="var(--text-primary)" strokeWidth={1.5} />
              <span style={styles.serviceText}>App Development</span>
            </div>

            <div style={styles.serviceItem}>
              <div style={styles.dot} />
              <Cloud size={32} color="var(--text-primary)" strokeWidth={1.5} />
              <span style={styles.serviceText}>Website Hosting</span>
            </div>
          </div>

          {/* Right Side: About & Stats */}
          <div style={styles.rightColumn}>
            <h2 style={styles.aboutHeading}>About me</h2>
            <p style={styles.aboutDescription}>
              I started my software journey from photography. Through that, I learned to
              love the process of creating from scratch. Since then, this has led me to
              software development as it fulfills my love for learning and building things.
            </p>

            <div style={styles.statsRow}>
              <div style={styles.statBlock}>
                <div style={styles.statNumber}>120 <span style={styles.statPlus}>+</span></div>
                <div style={styles.statLabel}>Completed<br />Projects</div>
              </div>
              <div style={styles.statBlock}>
                <div style={styles.statNumber}>95 <span style={styles.statPlus}>%</span></div>
                <div style={styles.statLabel}>Client<br />satisfaction</div>
              </div>
              <div style={styles.statBlock}>
                <div style={styles.statNumber}>10 <span style={styles.statPlus}>+</span></div>
                <div style={styles.statLabel}>Years of<br />experience</div>
              </div>
            </div>
          </div>

        </div>

        <div style={styles.divider} />

        <h3 className="skills-title">My Skills</h3>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="icon-wrapper">{skill.icon}</div>
              <h4 className="skill-name">{skill.name}</h4>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skills = [
  { name: 'Web Development', icon: <WebDevIcon />, desc: 'Building, creating, and maintaining websites and web apps.' },
  { name: 'Data Analytics', icon: <DataAnalyticsIcon />, desc: 'Analyzing raw data to make conclusions about that information.' },
  { name: 'JavaScript', icon: <JsIcon />, desc: 'Strong JS knowledge and advanced web development.' },
  { name: 'React', icon: <ReactIcon />, desc: 'Building fast and efficient React App\'s and websites.' },
  { name: 'Next.js', icon: <NextIcon />, desc: 'Full server-side rendering, dynamic routing & SEO scale.' },
  { name: 'Vue.js', icon: <VueIcon />, desc: 'I build web interfaces & one page applications using Vue.' },
  { name: 'MongoDB', icon: <MongoIcon />, desc: 'Using MongoDB for scalable databases on the backend.' },
  { name: 'Git', icon: <GitIcon />, desc: 'DevOps tool for streamlined source code management.' },
  { name: 'Tailwind CSS', icon: <TailwindIcon />, desc: 'A utility-first widely used frontend CSS framework.' },
  { name: 'CSS & Sass', icon: <CssIcon />, desc: 'I use Sass as my preferred CSS pre-processor.' },
  { name: 'Jupyter Notebook', icon: <JupyterIcon />, desc: 'Creating and sharing documents that contain live code.' },
  { name: 'VS Code', icon: <VsCodeIcon />, desc: 'Streamlined code editor with support for operations like debugging.' },
  { name: 'GitHub', icon: <GithubIcon />, desc: 'Hosting for software development and version control.' },
  { name: 'Google Colab', icon: <GoogleColabIcon />, desc: 'Hosted Jupyter notebook service that requires no setup.' },
  { name: 'Tableau', icon: <TableauIcon />, desc: 'Visual analytics platform transforming the way we use data.' },
  { name: 'PowerBI', icon: <PowerBIIcon />, desc: 'Interactive data visualization software product.' },
  { name: 'Postman', icon: <PostmanIcon />, desc: 'API platform for building and using APIs.' },
  { name: 'RestAPI', icon: <RestApiIcon />, desc: 'Architectural style for providing standards between computer systems.' },
  { name: 'MySQL', icon: <MysqlIcon />, desc: 'Relational database management system based on SQL.' },
  { name: 'Python', icon: <PythonIcon />, desc: 'High-level programming language used for general-purpose programming.' },
  { name: 'Java', icon: <JavaIcon />, desc: 'Object-oriented programming language for enterprise scale apps.' },
  { name: 'OpenCV', icon: <OpenCVIcon />, desc: 'Library of programming functions for real-time computer vision.' },
  { name: 'Lucide', icon: <LucideIcon />, desc: 'Beautiful and consistent icon toolkit made by the community.' }
];

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '0.5rem',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    marginBottom: '4rem',
  },
  splitLayout: {
    display: 'flex',
    width: '100%',
    maxWidth: '900px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4rem',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  leftColumn: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    borderLeft: '2px solid var(--primary-color)',
    paddingLeft: '2.5rem',
    position: 'relative'
  },
  serviceItem: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  dot: {
    position: 'absolute',
    left: '-2.85rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'var(--primary-color)',
  },
  serviceText: {
    color: 'var(--text-primary)',
    fontSize: '1.15rem',
    fontWeight: '600',
  },
  rightColumn: {
    flex: '1.5 1 400px',
    display: 'flex',
    flexDirection: 'column',
  },
  aboutHeading: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    marginBottom: '1.5rem',
    letterSpacing: '-1px',
  },
  aboutDescription: {
    color: 'var(--text-secondary)',
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '3.5rem',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  statBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },
  statNumber: {
    fontSize: '2.8rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  statPlus: {
    color: 'var(--primary-color)',
    fontSize: '2.5rem',
  },
  statLabel: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  divider: {
    width: '100%',
    maxWidth: '900px',
    height: '1px',
    backgroundColor: 'var(--border-color)',
    margin: '2rem 0',
    borderBottom: '1px solid var(--primary-color)',
  }
};
