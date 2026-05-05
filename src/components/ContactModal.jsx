import React, { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "603f2a1e-5434-4ffa-a90a-51af27a8cbff");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! Redirecting...");
        event.target.reset();

        // Redirect to main page and close modal after 2 seconds
        setTimeout(() => {
          window.location.hash = '';
          onClose();
          setResult("");
        }, 2000);
      } else {
        console.log("Error", data);
        setResult(data.message);
        setTimeout(() => setResult(""), 5000);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
      setTimeout(() => setResult(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <h2 className="modal-heading">DON'T BE SHY...</h2>
        <p className="modal-subtitle">
          Let’s connect if you’re interested in building, learning, or collaborating !!<br />
          Drop me a line and I'll get back to you in no time.<br />
          Or, give me a call: <strong>+91 7219495242</strong>
        </p>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="4" required></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ marginTop: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {result && (
              <p style={{ textAlign: 'center', marginTop: '15px', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '500' }}>
                {result}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
