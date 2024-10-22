import React from 'react';
import styles from './Footer.module.scss';
import FacebookIcon from '../svg/FacebookIcon/FacebookIcon';
import InstagramIcon from '../svg/InstagramIcon/InstagramIcon';
import XTwitterIcon from '../svg/XTwitterIcon/XTwitterIcon';
import GitHubIcon from '../svg/GitHubIcon/GitHubIcon';
import LinkedinIcon from '../svg/LinkedinIcon/LinkedinIcon';
import TelegramIcon from '../svg/TelegramIcon/TelegramIcon';
import WhatsAppIcon from '../svg/WhatsAppIcon/WhatsAppIcon';
import EmailIcon from '../svg/EmailIcon/EmailIcon';


const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <section className={styles.navigation}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </section>
      <section className={styles.socialMedia}>
                <a
                  href="https://www.facebook.com/ros.lisovyi"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <FacebookIcon/>
                </a>
                <a 
                  href="https://www.instagram.com/ros.lisovyi/"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon/>
                </a>
                <a
                  href="https://x.com/rokokos971"
                  title="X-twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XTwitterIcon/>
                </a>
                <a
                  href="https://www.linkedin.com/in/roslisovyi/"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon />
                </a>
                <a
                href="https://github.com/rokokos97"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
                <a
                href="https://t.me/lisovyi_rostyslav"
                title="Telegram"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <TelegramIcon />
                </a>
                <a
                href="mailto:lisovyi.rostyslav@gmail.com"
                title="Telegram"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <EmailIcon />
                </a>
                <a
                href="https://wa.me/380932759149"
                title="Telegram"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                </a>
            </section>
            <section className={styles.copyRight}>
                <p>© 2024 Rostyslav Lisovyi</p>
            </section>
    </footer>
  );
};

export default Footer;