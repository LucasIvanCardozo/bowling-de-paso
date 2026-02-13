import type { MenuItem } from '../../types/menu'
import styles from './itemCarta.module.css'

export default function ItemCarta({ item }: { item: MenuItem }) {
  return (
    <div className={styles.container}>
      <h2>{item.name}</h2>
      <ul>
        {item.subItems.map(({ name, description, price }) => (
          <li className={styles.product} key={name}>
            <div className={styles.productData}>
              <p className={styles.productName}>‧{name}</p>
              <div className={styles.dots}>
                <p>.......................................................................................................................</p>
              </div>
              <p className={styles.productPrice}>{price ? `$${price}` : ''}</p>
            </div>
            {description ? <p className={styles.productDescription}> ({description})</p> : ''}
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
