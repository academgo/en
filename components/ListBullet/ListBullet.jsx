import styles from './ListBullet.module.scss'

export const ListBullet = ({ items }) => {
  return (
    <div className={styles.listBullet}>
      {items && (
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
