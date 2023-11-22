'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MdClose, MdDensityMedium, MdDehaze } from "react-icons/md";
import { FaAlignRight } from 'react-icons/fa'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// import Logo from '../../assets/logo.png'

import styles from './TheHeader.module.scss'
import LanguageDropdown from 'components/LanguageDropdown/LanguageDropdown';
import { SocialIcons } from 'components/SocialIcons'

export const TheHeader = ({ logo, items }) => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');
  // State for showing/hiding the modal
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const pathname = usePathname();

  // Add a function to toggle the modal state
  const toggleContactModal = () => {
    setContactModalOpen(!isContactModalOpen);
  };

  const closeMenu = (e) => {
    // Check if the clicked element is the "languageMobile" element
    const isLanguageMobile = e.target.closest(`.${styles.languageMobile}`);

    // Close the menu only if the clicked element is not "languageMobile"
    if (!isLanguageMobile) {
      setNavVisible(false);
    }
  }

  useEffect(() => {
    if (isNavVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      // Get all the sections and their corresponding links
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll(`.${styles.navListItem}`);

      // Find the section that is currently in the viewport
      let activeSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          activeSection = section.getAttribute('id');
        }
      });

      // Update the active navigation item
      setActiveNavItem(activeSection);
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
        className: styles.headerScrolled,
        targets: `.${styles.header}`
      }
    });
  }, []);

  return (
    <header className={`${styles.header} ${hasScrolled ? styles.headerScrolled : ''}`}>
      <div className="container">
        <div className={styles.headerWpapper}>
          <div className={styles.headerLogo}>
            <Link
              href="/"
              onClick={closeMenu}
            >
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={100}
                className={styles.headerLogoImage}
              />
            </Link>
          </div>
          <div className={`${styles.headerMenu} ${isNavVisible ? styles.navVisible : ''}`} onClick={closeMenu}>
            <nav className={styles.nav}>
              {(items || []).map((item) => {
                const trimmedPathname = pathname.replace(/\/$/, "").toLowerCase();
                const trimmedDestination = item.destination.replace(/\/$/, "").toLowerCase();
                const isActive = trimmedPathname === trimmedDestination;
                return (
                  <div key={item.id} className={styles.navList}>
                    <div className={styles.navListItem}>
                      <div className={styles.linkWrapper}>
                        <div className={styles.destination}>
                          <Link
                            href={item.destination || ""}
                            className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        </div>
                        {!!item.subMenuItems && item.subMenuItems.length > 0 && (
                          <div
                            className={`${styles['sub-menu-arrow']} ${openSubMenus.includes(item.id) ? styles.open : ''
                              }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSubMenu(item.id);
                            }}
                          />
                        )}
                      </div>
                      {!!item.subMenuItems && item.subMenuItems.length > 0 && (
                        <div
                          className={`${styles['sub-menu']} ${openSubMenus.includes(item.id) ? styles['sub-menu-open'] : ''
                            }`}
                        >
                          {item.subMenuItems.map((subMenuItem) => (
                            <Link
                              href={subMenuItem.destination}
                              key={subMenuItem.id}
                              className={styles['sub-menu-item']}
                              onClick={closeMenu}
                            >
                              {subMenuItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </nav>
            <div className={styles.languageMobile}>
              <LanguageDropdown />
            </div>
            <div className={styles.socialMobile}>
              <SocialIcons />
            </div>
          </div>
          <div className={styles.languageDesktop}>
            <LanguageDropdown />
          </div>
          <div
            className={`${styles.burgerMenu} ${isNavVisible ? styles.open : ''}`}
            onClick={() => {
              setNavVisible(!isNavVisible);
            }}
          >
            {isNavVisible ? (
              <MdClose className={styles.icon} fontSize="1.8em" />
            ) : (
              <MdDehaze className={styles.icon} fontSize="1.8em" />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}