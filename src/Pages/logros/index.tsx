import { useEffect, useState } from 'react'
import styles from './index.module.css'
import dbRecords from '../../lib/db/dbRecords.json'
import useIntersection from '../../hooks/useIntersection'
import Confetis from '../../components/Features/Confetis'
import Anotacion from '../../components/Features/Anotacion'
import Tarjeta from '../../components/Features/Tarjeta'
import TarjetaAlbum from '../../components/Features/TarjetaAlbum'
import type { People } from '../../types/people'
import type { Scoreboard } from '../../types/scoreboard'
import { useWidth } from '../../hooks/useWidth'

export default function Page() {
  const { width } = useWidth()
  const [winners, setWinners] = useState<People[]>([])
  const [totalPeople, setTotalPeople] = useState<People[]>([])
  const [scoreboard, setScoreboard] = useState<Scoreboard[]>([])
  const { ref: ref1, isVisible: isV1 } = useIntersection<HTMLHeadingElement>({
    threshold: 0,
  })
  const { ref: ref2, isVisible: isV2 } = useIntersection<HTMLImageElement>({
    threshold: 0,
  })

  const people = dbRecords as unknown as People[]

  useEffect(() => {
    const lastMonth = people
      // esto se quita para evitar que filtre los datos en los del ultimo mes
      /*.filter((person) => {
        const dateParse = Date.parse(person.date);
        return dateNow - dateParse < 2592000000 && dateNow - dateParse > 0;
      })*/
      .sort((a, b) => (a.record > b.record ? -1 : 1))
      .reduce((acc, item) => {
        const repeated = acc.filter((person) => person.name === item.name && person.lastName === item.lastName)
        if (repeated.length === 0) {
          acc.push(item)
        }
        return acc
      }, [] as People[])

    const winnersAux = lastMonth.slice(0, 3) as People[]
    const totalPeopleAux = lastMonth.reduce((acc, item) => {
      if (!winnersAux.includes(item)) {
        acc.push(item)
      }
      return acc
    }, [] as People[])
    setWinners(winnersAux)
    setTotalPeople(totalPeopleAux)
  }, [people])

  useEffect(() => {
    const scoreboardAux = [] as Scoreboard[]
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        const randomDer = Math.floor(Math.random() * 8)
        const randomIzq = Math.floor(Math.random() * 9 - randomDer)
        const suma = randomDer + randomIzq
        scoreboardAux.push({ der: randomDer, izq: randomIzq, sum: suma })
      } else {
        const randomDer = Math.floor(Math.random() * 8)
        const randomIzq = Math.floor(Math.random() * (10 - randomDer))
        const sumaTotal = randomIzq + randomDer + scoreboardAux[i - 1].sum
        scoreboardAux.push({ der: randomDer, izq: randomIzq, sum: sumaTotal })
      }
    }
    setScoreboard(scoreboardAux)
  }, [])

  return (
    <>
      <main className={styles.main}>
        <div className={styles.titulo}>
          <div>
            <Confetis />
            <h1 ref={ref1} data-isvisible={isV1 ? 'true' : 'false'}>
              LOGROS
            </h1>
            <Confetis direction={true} />
          </div>
          <p>Un buen jugador</p>
          <p>merece ser recompenzado</p>
        </div>
      </main>
      <article className={styles.article}>
        <div className={styles.boxes}>
          <div className={styles.boxesSide}>
            <Anotacion
              der={scoreboard[0] && scoreboard[0].der}
              izq={scoreboard[0] && scoreboard[0].izq}
              sum={scoreboard[0] && scoreboard[0].sum}
              width={width}
            />
            <Anotacion
              der={scoreboard[1] && scoreboard[1].der}
              izq={scoreboard[1] && scoreboard[1].izq}
              sum={scoreboard[1] && scoreboard[1].sum}
              width={width}
            />
            <Anotacion
              der={scoreboard[2] && scoreboard[2].der}
              izq={scoreboard[2] && scoreboard[2].izq}
              sum={scoreboard[2] && scoreboard[2].sum}
              width={width}
            />
            <Anotacion der={scoreboard[3] && scoreboard[3].der} izq={scoreboard[3] && scoreboard[3].izq} sum={scoreboard[3] && scoreboard[3].sum} />
            <Anotacion der={scoreboard[4] && scoreboard[4].der} izq={scoreboard[4] && scoreboard[4].izq} sum={scoreboard[4] && scoreboard[4].sum} />
          </div>
          <Anotacion special={true} />
          <div className={styles.boxesSide}>
            <Anotacion der={scoreboard[5] && scoreboard[5].der} izq={scoreboard[5] && scoreboard[5].izq} sum={scoreboard[5] && scoreboard[5].sum} />
            <Anotacion der={scoreboard[6] && scoreboard[6].der} izq={scoreboard[6] && scoreboard[6].izq} sum={scoreboard[6] && scoreboard[6].sum} />
            <Anotacion
              der={scoreboard[7] && scoreboard[7].der}
              izq={scoreboard[7] && scoreboard[7].izq}
              sum={scoreboard[7] && scoreboard[7].sum}
              width={width}
            />
            <Anotacion
              der={scoreboard[8] && scoreboard[8].der}
              izq={scoreboard[8] && scoreboard[8].izq}
              sum={scoreboard[8] && scoreboard[8].sum}
              width={width}
            />
            <Anotacion
              der={scoreboard[9] && scoreboard[9].der}
              izq={scoreboard[9] && scoreboard[9].izq}
              sum={scoreboard[9] && scoreboard[9].sum}
              width={width}
            />
          </div>
        </div>
        <section className={styles.pin100}>
          <img className={styles.pin100Arrow} src="/images/flecha.svg" alt="Flecha curva" loading="lazy" />
          <div>
            <div className={styles.pin100Animation}>
              <img className={styles.pin100Wind} src="/images/viento.svg" alt="Viento" ref={ref2} data-isvisible={isV2 ? 'true' : 'false'} loading="lazy" />
              <div className={styles.pin100Ball}>
                <img src="/images/elipse.svg" alt="Pelota" data-isvisible={isV2 ? 'true' : 'false'} loading="lazy" />
                <img src="/images/100PalosTexto.svg" alt="Texto en SVG ('100 bolos')" data-isvisible={isV2 ? 'true' : 'false'} loading="lazy" />
              </div>
              <img className={styles.pin100Pins} src="/images/100Palos.svg" alt="Bolos" loading="lazy" />
            </div>
            <img className={styles.pin100Glass} src="/images/vaso100Palos.webp" alt="Vaso de regalo" loading="lazy" />
          </div>
        </section>
        {/*  <section className={styles.pin130}>
          <img
            className={styles.section_130Palos_palos}
            src={palos130}
            alt=""
          />
          <div className={styles.section_130Palos_ball}>
            <img
              className={styles.section_130Palos_textImg}
              src={text130}
              alt=""
            />
            <img
              className={styles.section_130Palos_ballImg}
              src={ball}
              alt=""
            />
          </div>
          <img className={styles.section_130Palos_wind} src={wind} alt="" />
          <div className={styles.comingsoon}>
            <p className={styles.comingsoon_text}>
              <b>PROXIMAMENTE</b>
            </p>
          </div>
        </section> */}
        <article className={styles.records}>
          <section className={styles.winners}>
            <div className={styles.winnersImg}>
              <img src="/images/nube.webp" alt="Nube" loading="lazy" />
              <h2>
                los cracks de <br />
                {Intl.DateTimeFormat('es-ES', { month: 'long' }).format(+new Date() - 2592000000)}
              </h2>
            </div>
            <ul>
              {winners.map(({ name, lastName, age, record }, index) => (
                <Tarjeta key={name} name={name} lastName={lastName} age={age} img={`../assets/images/fondoCarta.webp`} record={record} pos={index + 1} />
              ))}
            </ul>
          </section>
          <section className={styles.album}>
            <h2>grandes jugadores del mes</h2>
            <ul>
              {totalPeople.map(({ name, lastName, age, record }) => (
                <TarjetaAlbum key={name} name={name} lastName={lastName} age={age} img={`../assets/images/fondoCarta.webp`} record={record} />
              ))}
            </ul>
          </section>
        </article>
      </article>
    </>
  )
}
