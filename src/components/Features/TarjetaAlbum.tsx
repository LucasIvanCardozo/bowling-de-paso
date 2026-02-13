import styles from './tarjetaAlbum.module.css'
import { BoloBlanco } from '../../assets/svgs'
import type { PlayerRecord } from '../../types/record'

export default function TarjetaAlbum({ name, lastName, age, img, score }: Omit<PlayerRecord, 'id' | 'date'> & { img: string }) {
  return (
    <li className={styles.container}>
      <img src={img} alt={`Imagen de ${name} ${lastName}`} loading="lazy" />
      <div className={styles.personData}>
        <p>
          {name} {lastName}
        </p>
        <div className={styles.underLine}>
          <p>{age ? `${age} años` : ''}</p>
          <div className={styles.record}>
            <p>{score}</p>
            <div className={styles.pin}>
              <BoloBlanco />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
