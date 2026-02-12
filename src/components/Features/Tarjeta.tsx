import styles from './tarjeta.module.css'
import { useState } from 'react'
import medal1 from '@/assets/images/medal1.webp'
import medal2 from '@/assets/images/medal2.webp'
import medal3 from '@/assets/images/medal3.webp'
import bolo from '@/assets/svgs/boloBlanco.svg'

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
  const medals = [medal1, medal2, medal3]

  const handleTrans = () => {
    if (!waitTransition) {
      setWaitTransition(true)
      setVerInfo(!verInfo)
      setTimeout(() => setWaitTransition(false), 600)
    }
  }

  return (
    <li className={styles.container} data-verinfo={verInfo ? 'true' : undefined} onClick={() => handleTrans()}>
      <img className={styles.medal} src={medals[pos - 1]} alt="Medalla" data-verinfo={verInfo ? 'true' : undefined} loading="lazy" />
      <div className={styles.front} data-verinfo={verInfo ? 'true' : undefined}>
        <img src={img} loading="lazy" alt={`Imagen de ${name}`} />
        <button>
          <p>ver info</p>
        </button>
      </div>
      <div className={styles.back} data-verinfo={verInfo ? 'true' : undefined}>
        <div className={styles.personData}>
          <p>
            {name} {lastName}
          </p>
          <p className={styles.personAge}>{age} años</p>
        </div>
        <div className={styles.personRecord}>
          <img src={bolo} alt="Bolo" loading="lazy" />
          <p>{record}</p>
        </div>
      </div>
    </li>
  )
}
