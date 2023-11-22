'use client';
import React, { useState } from 'react';
import styles from './LanguageDropdown.module.scss';
import Link from 'next/link';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Set "EN" as the default language

  const toggleDropdown = () => {
    // Add code to toggle the dropdown if needed
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    // You can also add logic to change the language in your app here
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        {selectedLanguage}
      </div>
      <div className={styles.dropdownMenu}>
        <Link href="https://ru.academgo.com" className={styles.dropdownItem} onClick={() => selectLanguage('RU')}>RU</Link>
      </div>
    </div>
  );
};

export default LanguageDropdown;
