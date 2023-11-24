import React, { useState, useEffect } from 'react';
import styles from './LanguageDropdown.module.scss';
import Link from 'next/link';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleDropdown = () => {
    // Add code to toggle the dropdown if needed
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    // You can also add logic to change the language in your app here
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top -70',
      end: 99999,
      toggleClass: {
        className: styles.dropdownScrolled,
        targets: `.${styles.dropdownItem}`
      }
    });
  }, []);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        {selectedLanguage}
      </div>
      <div className={styles.dropdownMenu}>
        <Link href="https://ru.academgo.com" className={`${styles.dropdownItem} ${hasScrolled ? styles.dropdownScrolled : ''}`} onClick={() => selectLanguage('RU')}>
          RU
        </Link>
      </div>
    </div>
  );
};

export default LanguageDropdown;
