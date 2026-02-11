import styles from './index.module.css'
import useIntersection from '../../hooks/useIntersection'

export default function Page() {
  const { ref: ref1, isVisible: isV1 } = useIntersection<HTMLDivElement>({
    threshold: 0,
  })
  const { ref: ref2, isVisible: isV2 } = useIntersection<HTMLElement>({
    threshold: 0,
  })

  return (
    <>
      <main className={styles.main}>
        <div ref={ref1} data-isvisible={isV1 ? 'true' : 'false'}>
          <img src="/images/pelotaHistoria.webp" alt="pelota de bowling con transparencia" loading="lazy" />
          <header ref={ref2} data-isvisible={isV2 ? 'true' : 'false'}>
            <h1>historia</h1>
            <p>de nuestro bowling</p>
          </header>
        </div>
      </main>
      <article className={styles.article}>
        <div></div>
        <section className={styles.sectionsList}>
          <section>
            <img src="/images/tijeras.webp" alt="Tijeras" loading="lazy" />
            <div>
              <h2>14 de Septiembre 1988</h2>
              <p>
                ¡El comienzo de una leyenda! En la emblemática Avenida <b>Paso y Santa Fe</b>, dimos vida a nuestro querido <b>bowling</b>. Aquel día, marcado
                en la historia, inauguramos un espacio de diversión sin igual. Desde entonces, hemos sido el punto de encuentro para amantes del <b>bowling</b>{' '}
                de todas las edades. Nuestro compromiso inquebrantable es brindar experiencias excepcionales y momentos inolvidables. ¡Únete a nosotros y forma
                parte de nuestra historia en constante crecimiento!
              </p>
              <img src="/images/inauguracion.webp" alt="" loading="lazy" />
            </div>
          </section>
          <section>
            <img src="/images/circuloNegado.webp" alt="Señal que indica prohibición" loading="lazy" />
            <div>
              <h2>8 de Agosto 2022</h2>
              <p>
                <b>Cerramos temporalmente</b> nuestro querido bowling debido a desafíos económicos, una decisión difícil y devastadora para nuestro equipo y
                comunidad de jugadores. A pesar de ello, estamos comprometidos en encontrar soluciones y reabrir en un futuro cercano. Agradecemos el apoyo y
                comprensión durante este periodo difícil y esperamos recibirlos nuevamente para crear momentos inolvidables juntos.
              </p>
              <img src="/images/cierre.webp" alt="" loading="lazy" />
            </div>
          </section>
          <section>
            <img src="/images/confetis.webp" alt="Confetis" loading="lazy" />
            <div>
              <h2>10 de Marzo 2023</h2>
              <p>
                ¡<b>Estamos de vuelta y en un lugar mejor!</b> Después de superar desafíos económicos, hemos reabierto en <b>Cordoba 2866</b>. Este nuevo
                espacio nos ofrece más oportunidades para brindar una experiencia excepcional de bowling. Esperamos dar la bienvenida a nuestros jugadores y a
                la comunidad, creando recuerdos inolvidables en nuestro renovado establecimiento. ¡Los esperamos con entusiasmo en nuestro emocionante nuevo
                lugar!
              </p>
              <img src="/images/abrimos.webp" alt="" loading="lazy" />
            </div>
          </section>
        </section>
      </article>
    </>
  )
}
