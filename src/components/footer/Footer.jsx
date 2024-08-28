 

import { useState } from 'react';
import style from './Footer.module.css'; 

export function Footer () {
  const [language, setLanguage] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown () {
    setShowDropdown(!showDropdown);
  };

  function selectLanguage (lang) {
    setLanguage(lang);
    setShowDropdown(false); 
  };

  
  return (
    <footer className={style.footer}>
      <div className={style.footerTop}>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className={style.emailForm}>
          <input type="email" placeholder="Email address" className={style.emailInput} />
          <button className={style.getStartedButton}>Get Started</button>
        </div>
        <p className={style.footerContact}>Questions? Contact us.</p>
      </div>

      <div className={style.footerLinks}>
        <ul className={style.footerList}>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Speed Test</a></li>
          <li><a href="#">Ad Choices</a></li>
        </ul>

        <ul className={style.footerList}>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Legal Guarantee</a></li>
        </ul>

        <ul className={style.footerList}>
          <li><a href="#">Account</a></li>
          <li><a href="#">Ways to Watch</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Legal Notices</a></li>
        </ul>

        <ul className={style.footerList}>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Only on Netflix</a></li>
        </ul>
      </div>

      <div className={style.footerBottom}>
      <select className={style.languageSelect}>
        <option value="english">English</option>
        <option value="lithuanian">Lietuvių</option>
      </select>
        <p className={style.country}>Netflix Lithuania</p>
      </div>
    </footer>
  );
};

export default Footer;