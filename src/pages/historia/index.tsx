import styles from './index.module.css'
import useIntersection from '../../hooks/useIntersection'
import pelotaHistoria from '@/assets/images/pelotaHistoria.webp'
import tijeras from '@/assets/images/tijeras.webp'
import inauguracion from '@/assets/images/inauguracion.webp'
import circuloNegado from '@/assets/images/circuloNegado.webp'
import cierre from '@/assets/images/cierre.webp'
import confetis from '@/assets/images/confetis.webp'
import abrimos from '@/assets/images/abrimos.webp'
import { Helmet } from 'react-helmet-async'

export default function Page() {
  const { ref: ref1, isVisible: isV1 } = useIntersection<HTMLDivElement>({
    threshold: 0,
  })
  const { ref: ref2, isVisible: isV2 } = useIntersection<HTMLElement>({
    threshold: 0,
  })

  return (
    <>
      <Helmet>
        <title>Historia - Bowling de Paso </title>
        <meta
          name="description"
          content="Descubre la historia de Bowling de Paso en Mar del Plata, desde humildes inicios hasta ser el epicentro del entretenimiento. Crea recuerdos con nosotros!"
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Historia - Bowling de Paso" />
        <meta property="og:description" content="Conocé la historia de Bowling de Paso, más de 30 años de diversión en Mar del Plata." />
        <meta property="og:image" content="https://www.bowlingdepaso.com.ar/logo-og.webp" />
        <meta property="og:url" content="https://www.bowlingdepaso.com.ar/#/historia" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Historia - Bowling de Paso" />
        <meta name="twitter:description" content="Conocé la historia de Bowling de Paso, más de 30 años de diversión en Mar del Plata." />
        <meta name="twitter:image" content="https://www.bowlingdepaso.com.ar/logo-og.webp" />
        {/* JSON-LD AboutPage Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Bowling de Paso",
            "description": "Bowling, pool, arcade y gastronomía en Mar del Plata"
          }
        }) }} />
      </Helmet>
      <main className={styles.main}>
        <div ref={ref1} data-isvisible={isV1 ? 'true' : 'false'}>
          <img src={pelotaHistoria} alt="pelota de bowling con transparencia" loading="lazy" />
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
            <img src={tijeras} alt="Tijeras" loading="lazy" />
            <div>
              <h2>20 de Abril 1988</h2>
              <p>
                ¡El comienzo de una leyenda! En la emblemática Avenida <b>Paso y Santa Fe</b>, dimos vida a nuestro querido <b>bowling</b>. Aquel día, marcado
                en la historia, inauguramos un espacio de diversión sin igual. Desde entonces, hemos sido el punto de encuentro para amantes del <b>bowling</b>{' '}
                de todas las edades. Nuestro compromiso inquebrantable es brindar experiencias excepcionales y momentos inolvidables. ¡Únete a nosotros y forma
                parte de nuestra historia en constante crecimiento!
              </p>
              <img src={inauguracion} alt="" loading="lazy" />
            </div>
          </section>
          <section>
            <img src={circuloNegado} alt="Señal que indica prohibición" loading="lazy" />
            <div>
              <h2>7 de Agosto 2022</h2>
              <p>
                <b>Cerramos temporalmente</b> nuestro querido bowling debido a desafíos económicos, una decisión difícil y devastadora para nuestro equipo y
                comunidad de jugadores. A pesar de ello, estamos comprometidos en encontrar soluciones y reabrir en un futuro cercano. Agradecemos el apoyo y
                comprensión durante este periodo difícil y esperamos recibirlos nuevamente para crear momentos inolvidables juntos.
              </p>
              <img src={cierre} alt="" loading="lazy" />
            </div>
          </section>
          <section>
            <img src={confetis} alt="Confetis" loading="lazy" />
            <div>
              <h2>9 de Marzo 2023</h2>
              <p>
                ¡<b>Estamos de vuelta y en un lugar mejor!</b> Después de superar desafíos económicos, hemos reabierto en <b>Cordoba 3766</b>. Este nuevo
                espacio nos ofrece más oportunidades para brindar una experiencia excepcional de bowling. Esperamos dar la bienvenida a nuestros jugadores y a
                la comunidad, creando recuerdos inolvidables en nuestro renovado establecimiento. ¡Los esperamos con entusiasmo en nuestro emocionante nuevo
                lugar!
              </p>
              <img src={abrimos} alt="" loading="lazy" />
            </div>
          </section>
        </section>
      </article>
    </>
  )
}
