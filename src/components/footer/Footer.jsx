 

import { useState } from 'react';
import style from './Footer.module.css'; 

export function Footer () {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown () {
    setShowDropdown(!showDropdown);
  };


  
  return (
    <footer className={style.footer}>
      <div className={style.footerTop}>


        <ul className={style.footerList}>
          <li><a href="#">Susisiekite su mumis <br />+37064308702 <br />nuoma25@proton.me</a></li>
        </ul>
      </div>

      <div className={style.footerBottom}>

      </div>
    </footer>
  );
};

export default Footer;