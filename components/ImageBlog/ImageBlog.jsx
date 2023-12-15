import Image from 'next/image'
import styles from './ImageBlog.module.scss'


export const ImageBlog = ({ src, alt }) => {
  return (
    <div className={styles.imageBlog}>
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={400}
        className={styles.image}
      />
    </div>
  )
}
