import { Mail, Phone, Instagram, Twitter, Facebook } from 'react-icons'; // import appropriate icons
import "../Components/ContactSection.css"
const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="title">Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="icon" />
              <a href="mailto:contact@rhythmnight.com" className="contact-link">
                contact@rhythmnight.com
              </a>
            </div>
            <div className="contact-item">
              <Phone className="icon" />
              <a href="tel:+1234567890" className="contact-link">
                +123 456 7890
              </a>
            </div>
          </div>
          <div className="social-links">
            <h3 className="social-title">Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={24} />
              </a>
              <a href="#" className="social-link">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
