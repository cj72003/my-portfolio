import styles from "./Contact.module.css";
import { 
  FaEnvelope, FaPhone, FaHome, 
  FaFacebook, FaGithub, FaLinkedin, 
  FaInstagram, FaWhatsapp 
} from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const Contact = () => {
  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.footerRow}>
          
          <h3 className={styles.contactHeading}>Contact Me</h3>

          <div className={styles.contactDetails}>
            <p><FaEnvelope /> camillejuego2@gmail.com</p>
            <span className={styles.separator}>|</span>
            <p><FaPhone /> +63 912 345 6789</p>
            <span className={styles.separator}>|</span>
            <p><FaHome /> Cabiawan, Rizal, Science City of Muñoz, Nueva Ecija</p>
          </div>

          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/639123456789" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://t.me/username" target="_blank" rel="noopener noreferrer"><SiTelegram /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Contact;
