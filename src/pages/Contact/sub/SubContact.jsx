import React from 'react'
import './SubContact.scss'

function SubContact() {
     const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };
  return (
    <section id="contact" className="contact">
      {/* Floating Shapes */}
      <div className="contact-floating-shapes">
        <div className="contact-shape contact-shape-1"></div>
        <div className="contact-shape contact-shape-2"></div>
        <div className="contact-shape contact-shape-3"></div>
        <div className="contact-shape contact-shape-4"></div>
        <div className="contact-shape contact-shape-5"></div>
        <div className="contact-shape contact-shape-6"></div>
      </div>

      <div className="container">
        <div className="contact-content">
          <h2 className="section-title fade-in">Let’s Work Together</h2>

          <p className="fade-in">
            Ready to bring your vision to life? Let’s discuss how we can create
            something amazing together. I’m always excited to take on new
            challenges and collaborate on innovative projects.
          </p>

          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );


}

export default SubContact