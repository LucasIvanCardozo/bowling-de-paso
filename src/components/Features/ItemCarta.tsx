import type { MenuItem } from '../../types/menu'
import styles from './itemCarta.module.css'

export default function ItemCarta({ item }: { item: MenuItem }) {
  return (
    <div className={styles.container}>
      <h2>{item.name}</h2>
      <ul>
        {item.subItems.map((subItem) => (
          <li className={styles.product} key={subItem.name}>
            <div className={styles.productData}>
              <p className={styles.productName}>‧{subItem.name}</p>
              <div className={styles.dots}>
                <p>...........................................................................</p>
              </div>
              <p className={styles.productPrice}>$</p>
            </div>
            {subItem.description ? <p className={styles.productDescription}> ({subItem.description})</p> : ''}
          </li>
        ))}
        {item.adicional && (
          <li className={styles.additional}>
            <h4>adicional</h4>
            <p>{item.adicional}</p>
          </li>
        )}
      </ul>
    </div>
  )
}
