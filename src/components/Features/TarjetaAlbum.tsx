import styles from './tarjetaAlbum.module.css'
import bolo from '@/assets/svgs/boloBlanco.svg'

export default function TarjetaAlbum({ name, lastName, age, img, record }: { name: string; lastName: string; age: number; img: string; record: string }) {
  return (
    <li className={styles.container}>
      <img src={img} alt={`Imagen de ${name} ${lastName}`} loading="lazy" />
      <div className={styles.personData}>
        <p>
          {name} {lastName}
        </p>
        <div className={styles.underLine}>
          <p>{age} años</p>
          <div className={styles.record}>
            <p>{record}</p>
            <div className={styles.pin}>
              <img src={bolo} alt="Bolo" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
