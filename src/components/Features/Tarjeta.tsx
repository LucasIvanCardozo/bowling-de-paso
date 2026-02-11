import styles from './tarjeta.module.css'
import { useState } from 'react'

export default function Tarjeta({
  name,
  lastName,
  age,
  img,
  record,
  pos,
}: {
  name: string
  lastName: string
  age: number
  img: string
  record: string
  pos: number
}) {
  const [verInfo, setVerInfo] = useState(false)
  const [waitTransition, setWaitTransition] = useState(false)
  const medals = ['/images/medal1.webp', '/images/medal2.webp', '/images/medal3.webp']

  const handleTrans = () => {
    if (!waitTransition) {
      setWaitTransition(true)
      setVerInfo(!verInfo)
      setTimeout(() => setWaitTransition(false), 600)
    }
  }

  return (
    <li className={styles.container} data-verInfo={verInfo ? 'true' : undefined} onClick={() => handleTrans()}>
      <img className={styles.medal} src={medals[pos - 1]} alt="Medalla" data-verInfo={verInfo ? 'true' : undefined} loading="lazy" />
      <div className={styles.front} data-verInfo={verInfo ? 'true' : undefined}>
        <img src={img} loading="lazy" alt={`Imagen de ${name}`} />
        <button>
          <p>ver info</p>
        </button>
      </div>
      <div className={styles.back} data-verInfo={verInfo ? 'true' : undefined}>
        <div className={styles.personData}>
          <p>
            {name} {lastName}
          </p>
          <p className={styles.personAge}>{age} años</p>
        </div>
        <div className={styles.personRecord}>
          <img src="/images/boloBlanco.svg" alt="Bolo" loading="lazy" />
          <p>{record}</p>
        </div>
      </div>
    </li>
  )
}
