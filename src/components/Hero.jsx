export default function Hero({ onContactClick }) {
  return (
    <section className="section" id="home" style={styles.hero}>
      <div className="container" style={styles.container}>
        <p style={styles.greeting}>Hi, my name is</p>
        <h1 style={styles.title}>Gagan Khandale.</h1>
        <h2 style={styles.subtitle}>I build things for the web.</h2>
        <p style={styles.description}>
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Building modern, user-focused web applications with clean design and efficient engineering.
        </p>

        <div style={styles.buttons}>
          <button className="btn-primary" onClick={onContactClick}>Contact me</button>
        </div>

        <div style={styles.divider} />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    paddingTop: '0.2rem',
    paddingBottom: '3rem',
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '1000px',
  },
  greeting: {
    color: 'var(--primary-color)',
    fontFamily: 'var(--font-mono)',
    fontSize: 'clamp(14px, 5vw, 16px)',
    fontWeight: '400',
    marginBottom: '0.5rem',

  },
  title: {
    color: 'var(--text-primary)',
    fontSize: 'clamp(40px, 8vw, 80px)',
    fontWeight: '700',
    lineHeight: '1.1',
    margin: 0,
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontSize: 'clamp(40px, 8vw, 80px)',
    fontWeight: '700',
    lineHeight: '1.1',
    marginTop: '0.5rem',
    marginBottom: '1rem',
  },
  description: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    maxWidth: '540px',
    marginBottom: '2rem',
    lineHeight: '1.5',
  },
  buttons: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'var(--border-color)',
    marginTop: '4rem',
    borderBottom: '1px solid var(--primary-color)',
  }
};
