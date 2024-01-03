import React from 'react'
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaRegEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from 'react-icons/fa'

import styles from './TheFooter.module.scss';
import Link from 'next/link';
// import { FooterBullet } from '../FooterBullet';
// import { FormMain } from '../FormMain';

// import Logo from '../../assets/logo.png'
import Image from 'next/image';

const footerBullets = [
  'Admission',
  'Visas',
  'Transfers',
  'Residency',
];

export const TheFooter = ({ logo, linksFaq, linksNavigate, linksServices }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerBottomWrapper}>
          <div className={styles.footerBottomGrid}>
            <div className={styles.gridItem}>
              <div className={styles.footerBottomLogo}>
                <Link className={styles.logoLink} href="/">
                  <Image
                    src={logo}
                    width={200}
                    height={100}
                    alt="PoliPathWay"
                    className={styles.footerBottomLogoImage}
                  />
                </Link>
              </div>
              <div className={styles.footerBottomSocial}>
                {/* <Link
                  href="https://t.me/+zLBhFlT7W1Q0MWM0"
                  target='_blank'
                  className={styles.footerBottomSocialItem}
                >
                  <FaTelegramPlane fontSize="1.2em" padding="5px" fill="#fff" />
                </Link> */}
                <Link
                  href="https://www.instagram.com/academgo.en/"
                  target='_blank'
                  className={styles.footerBottomSocialItem}
                >
                  <FaInstagram fontSize="1.2em" padding="5px" fill="#fff" />
                </Link>
                <Link
                  href="https://www.facebook.com/academgo"
                  target='_blank'
                  className={styles.footerBottomSocialItem}
                >
                  <FaFacebookF fontSize="1.2em" padding="5px" fill="#fff" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@academgo.en"
                  target='_blank'
                  className={styles.footerBottomSocialItem}
                >
                  <FaTiktok fontSize="1.2em" padding="5px" fill="#fff" />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send/?phone=48505118058&text&type=phone_number&app_absent=0"
                  target='_blank'
                  className={styles.footerBottomSocialItem}
                >
                  <FaWhatsapp fontSize="1.2em" padding="5px" fill="#fff" />
                </Link>
              </div>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.gridNavigate}>
                <div className={styles.gridItemContent}>
                  <div>
                    <p className={styles.gridItemSubtitle}>Navigate</p>
                  </div>
                  <div>
                    <ul className={styles.gridItemLinks}>
                      {linksNavigate.map((link) => (
                        <li key={link.id} className={styles.gridItemLink}>
                          <Link href={link.destination}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.gridItemContent}>
                  <div>
                    <p className={styles.gridItemSubtitle}>Services</p>
                  </div>
                  <div>
                    <ul className={styles.gridItemLinks}>
                      {linksServices.map((link) => (
                        <li key={link.id} className={styles.gridItemLink}>
                          <Link href={link.destination}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.copyrigth}>
            <p>© {new Date().getFullYear()} PoliPathWay</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
