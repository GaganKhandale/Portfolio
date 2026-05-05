import React from 'react';
import { Download } from 'lucide-react';
import resumePdf from '../assets/Gagan_Khandale_.pdf';

export default function ResumePage() {
  return (
    <div className="container" style={styles.page}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>My Resume</h1>
        <a href={resumePdf} download="Gagan_Khandale_Resume.pdf" className="btn-primary" style={styles.downloadBtn}>
          <Download size={20} />Download
        </a>
      </div>

      <div style={styles.resumeImageContainer}>
        <iframe
          src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
          title="Gagan Khandale Resume"
          style={styles.resumeImage}
          scrolling="no"
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
    paddingTop: '3rem',
    paddingBottom: '5rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    minHeight: '80vh',
    animation: 'fadeIn 0.5s ease',
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  pageTitle: {
    fontSize: 'clamp(30px, 5vw, 50px)',
    fontWeight: '700',
    color: 'var(--text-primary)',
    margin: 0,
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    textDecoration: 'none',
  },
  resumeImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '700px',
    maxWidth: '1500px',
    margin: '0 auto',
    backgroundColor: 'var(--card-bg)',
    padding: '1.5rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    overflow: 'hidden',
  },
  resumeImage: {
    display: 'block',
    width: '100%',
    aspectRatio: '11 / 11',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
  }
};
