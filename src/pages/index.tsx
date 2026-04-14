import styles from './index.module.css'
import useIntersection from '../hooks/useIntersection'
import { useSeasonalSchedule } from '../hooks/useSeasonalSchedule'
import logo from '@/assets/images/logo.webp'
import fondoHojas from '@/assets/images/fondo-hojas.webp'
import video from '@/assets/videos/video.mp4'
import pistaBowling from '@/assets/images/section-2/pista_bowling.webp'
import genteDelStaff from '@/assets/images/section-2/gente_del_staff.webp'
import genteComiendoMucha from '@/assets/images/section-2/gente_comiendo_mucha.webp'
import genteComiendo from '@/assets/images/section-2/gente_comiendo.webp'
import chicaTirandoBowling from '@/assets/images/section-2/chica_tirando_bowling.webp'
import aPuntoDeTirar from '@/assets/images/section-2/a_ punto_de_tirar_en_pista.webp'
import pool from '@/assets/images/section-fun/pool.webp'
import maquinitas from '@/assets/images/section-fun/maquinitas.webp'
import hombresJugandoMaquinitas from '@/assets/images/section-fun/hombres-jugando-maquinitas.webp'
import ninoJugandoMaquinitas from '@/assets/images/section-fun/niño-jugando-maquinitas.webp'
import comida from '@/assets/images/section-fun/comida.webp'
import tragoFrutosRojos from '@/assets/images/section-fun/trago-frutos-rojos.webp'
import tragoLimon from '@/assets/images/section-fun/trago-limon.webp'
import sirviendoUnTrago from '@/assets/images/section-fun/sirviendo-un-trago.webp'
import genteBrindando from '@/assets/images/section-fun/gente-brindando.webp'
import trofeo from '@/assets/images/section-fun/trofeo.webp'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import hojaDeLado from '@/assets/images/hojas-left.webp'

function Page() {
  const { season, hours, metaDescription } = useSeasonalSchedule()

  const { ref: logoRef, isVisible: logoVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  })
  const { ref: ref1, isVisible: isV1 } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  })
  const { ref: ref2, isVisible: isV2 } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  })
  const { ref: ref3, isVisible: isV3 } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  })

  return (
    <>
      <Helmet>
        <title>Bowling de Paso</title>
        <meta name="description" content={metaDescription} />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Bowling de Paso - Diversión sin límites en Mar del Plata" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.bowlingdepaso.com.ar/logo-og.webp" />
        <meta property="og:url" content="https://www.bowlingdepaso.com.ar/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bowling de Paso - Diversión sin límites en Mar del Plata" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://www.bowlingdepaso.com.ar/logo-og.webp" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              (() => {
                const summerHours = [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    opens: '18:00',
                    closes: '02:00',
                  },
                ]
                const regularHours = [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
                    opens: '17:00',
                    closes: '01:00',
                  },
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Friday', 'Saturday'],
                    opens: '17:00',
                    closes: '03:00',
                  },
                ]
                return {
                  '@context': 'https://schema.org',
                  '@type': 'LocalBusiness',
                  name: 'Bowling de Paso',
                  image: 'https://www.bowlingdepaso.com.ar/logo-og.webp',
                  url: 'https://www.bowlingdepaso.com.ar',
                  telephone: '+54 223 536-8630',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Córdoba 3766',
                    addressLocality: 'Mar del Plata',
                    addressRegion: 'Buenos Aires',
                    postalCode: '7600',
                    addressCountry: 'AR',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -38.0177,
                    longitude: -57.5565,
                  },
                  openingHoursSpecification: season === 'summer' ? summerHours : regularHours,
                  priceRange: '$$',
                  servesCuisine: ['Argentine', 'Bar', 'Entertainment'],
                  sameAs: ['https://www.instagram.com/elbowlingdepaso/', 'https://www.facebook.com/elbowlingdepaso2442'],
                }
              })()
            ),
          }}
        />
      </Helmet>

      {/* Hero Section - Completely Redesigned */}
      <main className={styles.hero} style={{ backgroundImage: `url(${fondoHojas})` }}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          {/* Logo Container */}
          <div ref={logoRef} className={styles.logoContainer} data-visible={logoVisible ? 'true' : 'false'}>
            <img src={logo} alt="Bowling de Paso - Desde 1988" className={styles.logo} width="400" height="200" />
          </div>

          {/* Tagline */}
          <div className={styles.taglineContainer}>
            <h1 className={styles.tagline}>
              <span className={styles.taglineMain}>Diversión sin límites</span>
              <span className={styles.taglineSub}>en cada tiro</span>
            </h1>
          </div>

          {/* Quick Info */}
          <div className={styles.quickInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Abierto</span>
              <span className={styles.infoValue}>Todos los días</span>
            </div>
            <div className={styles.infoDivider} />
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Horario</span>
              <div className={styles.hoursContainer}>
                {hours.lines.map((line, index) => (
                  <span key={index} className={styles.infoValue}>
                    {line}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.infoDivider} />
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Ubicación</span>
              <span className={styles.infoValue}>Córdoba 3766</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaContainer}>
            <a
              href="https://api.whatsapp.com/send?phone=542235368630&text=Hola!%20Quer%C3%ADa%20hacer%20una%20reserva%20para%20jugar%20al%20bowling!%F0%9F%8E%B3%F0%9F%8E%B3"
              className={styles.ctaPrimary}
            >
              Reservar mesa
            </a>
            <Link to="/historia" className={styles.ctaSecondary}>
              Conocer más
            </Link>
          </div>
        </div>
      </main>

      {/* Rest of the content - keeping existing sections below */}
      <article id="conocer" className={styles.article}>
        <img className={styles.hoja1} src={hojaDeLado} alt="Hojas" />
        <img className={styles.hoja2} src={hojaDeLado} alt="Hojas" />
        <section className={styles.intro}>
          <div className={styles.introText}>
            <p>Sabemos que lo importante es disfrutar de la compañía mutua.</p>
            <p>¡Por eso es el lugar ideal para pasar un rato agradable todos juntos!</p>
          </div>
        </section>
        <section className={styles.sectionFirst}>
          <h2>nos&nbsp;mudamos!</h2>
          <div className={styles.sectionFirstData}>
            <div className={styles.sectionFirstImg} ref={ref1} data-isvisible={isV1 ? 'true' : 'false'}>
              <video src={video} loop autoPlay muted controls></video>
            </div>
            <p>
              ¡Tenemos grandes noticias! Nos mudamos a un nuevo lugar espectacular, más amplio y completamente renovado para brindarte una experiencia de
              entretenimiento única. Desde el momento en que ingresás, te va a encantar nuestro diseño moderno y elegante. Además ahora te ofrecemos más
              opciones gastronómicas y áreas de descanso mejoradas. Vení y descubrí todo lo que preparamos para vos en nuestra nueva ubicación.
            </p>
          </div>
        </section>
        <section className={styles.sectionSecond}>
          <h2>qué&nbsp;podemos ofrecerte?</h2>
          <div className={styles.sectionSecondData}>
            <div className={styles.sectionSecondImg} ref={ref2} data-isvisible={isV2 ? 'true' : 'false'}>
              <img src={pistaBowling} alt="Pista de bowling" loading="lazy" />
              <img src={aPuntoDeTirar} alt="Persona a punto de tirar en pista" loading="lazy" />
              <img src={chicaTirandoBowling} alt="Chica tirando bowling" loading="lazy" />
              <img src={genteDelStaff} alt="Staff del bowling" loading="lazy" />
              <img src={genteComiendo} alt="Personas comiendo" loading="lazy" />
              <img src={genteComiendoMucha} alt="Variedad gastronómica" loading="lazy" />
            </div>
            <p>
              ¡Vení a nuestro bowling y pasá un rato inolvidable! Podés festejar tu cumpleaños, ganar <strong>líneas gratis</strong> y disfrutar de diversión
              asegurada. Además, te ofrecemos una variedad de comidas, cervezas y cócteles en un ambiente increíble. ¡Te esperamos para vivir momentos geniales!
              Es el plan perfecto <strong>para vos</strong>. ¡No te lo podés perder!
            </p>
          </div>
        </section>
        <section className={styles.sectionThird}>
          <div className={styles.sectionThirdImg} ref={ref3} data-isvisible={isV3 ? 'true' : 'false'}>
            <img src={pool} alt="Mesa de pool profesional" loading="lazy" />
            <img src={maquinitas} alt="Máquinas arcade" loading="lazy" />
            <img src={hombresJugandoMaquinitas} alt="Personas jugando máquinas arcade" loading="lazy" />
            <img src={ninoJugandoMaquinitas} alt="Niño jugando máquinas arcade" loading="lazy" />
            <img src={comida} alt="Opciones gastronómicas" loading="lazy" />
            <img src={tragoFrutosRojos} alt="Trago de frutos rojos" loading="lazy" />
            <img src={tragoLimon} alt="Trago de limón" loading="lazy" />
            <img src={sirviendoUnTrago} alt="Preparación de cócteles" loading="lazy" />
            <img src={genteBrindando} alt="Personas brindando" loading="lazy" />
            <img src={trofeo} alt="Trofeo de competencia" loading="lazy" />
          </div>
          <div>
            <h2> diversión!</h2>{' '}
            <p>
              ¡Sumérgete en una experiencia de entretenimiento completa en nuestro centro renovado! Aquí encontrarás una emocionante variedad de actividades
              para disfrutar al máximo. Además del fascinante bowling, podés deleitarte con nuestras increíbles <strong>maquinitas arcade</strong> y nuestra{' '}
              <strong>mesa de pool profesional</strong>. La diversión está garantizada para todos los gustos y edades.
            </p>
          </div>
        </section>
      </article>
    </>
  )
}

export default Page
