import Image from 'next/image'
import styles from './QrBlock.module.scss'
import qrCode from "../../assets/qr.png";

export const QrBlock = () => {
  return (
    <div className={styles.qrBlock}>
      <div className={styles.qrBlockWrapper}>
        <div className={styles.qrBlockImage}>
          <Image
            unoptimized
            src={qrCode}
            alt="QR Code"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.qrBlockText}>
          <p className={styles.text}>You can find more information</p>
        </div>
      </div>
    </div>
  )
}
