import { FaEnvelope, FaPhoneAlt, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'; // Correct imports for Font Awesome icons
import "../Components/ContactSection.css"
const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="title">Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <a href="mailto:contact@rhythmnight.com" className="contact-link">
                contact@rhythmnight.com
              </a>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <a href="tel:+1234567890" className="contact-link">
                +123 456 7890
              </a>
            </div>
          </div>
          <div className="social-links">
            <h3 className="social-title">Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-link">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="social-link">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="social-link">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
