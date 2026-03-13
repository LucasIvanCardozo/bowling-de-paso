import styles from './index.module.css';
import useIntersection from '../hooks/useIntersection';
import LogoTexto from '../components/Features/LogoTexto';
import { Estrellas, BoloBlanco } from '../assets/svgs';
import video from '@/assets/videos/video.mp4';
import paraCambiar from '@/assets/images/paraCambiar.webp';
import maquinita from '@/assets/images/maquinita.webp';
import { Helmet } from 'react-helmet-async';
import hojaDeLado from '@/assets/images/hojas-left.webp';

function Page() {
  const { ref: ref1, isVisible: isV1 } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });
  const { ref: ref2, isVisible: isV2 } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });
  const { ref: ref3, isVisible: isV3 } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });
  const { ref: ref4, isVisible: isV4 } = useIntersection<HTMLImageElement>({
    threshold: 0,
  });
  const { ref: ref5, isVisible: isV5 } = useIntersection<SVGSVGElement>({
    threshold: 0,
  });

  return (
    <>
      <Helmet>
        <title>Bowling de Paso</title>
        <meta
          name="description"
          content="Diviértete en nuestro moderno bowling en Mar del Plata. Bolos, aperitivos y diversión para todas las edades. ¡Únete! Abierto de 17hs a 2:30hs."
        />
      </Helmet>
      <main className={styles.main}>
        <div
          className={styles.banner}
          ref={ref4}
          data-isvisible={isV4 ? 'true' : 'false'}
        >
          <Estrellas className={styles.estrellas} />
          <h1>
            <LogoTexto />
          </h1>
          <BoloBlanco
            className={styles.pin}
            ref={ref5}
            data-isvisible={isV5 ? 'true' : 'false'}
          />
        </div>
      </main>
      <article className={styles.article}>
        <img className={styles.hoja1} src={hojaDeLado} alt="Hojas" />
        <img className={styles.hoja2} src={hojaDeLado} alt="Hojas" />
        <section className={styles.intro}>
          <div className={styles.introText}>
            <p>Sabemos que lo importante es disfrutar de la compañía mutua.</p>
            <p>
              ¡Por eso es el lugar ideal para pasar un rato agradable todos
              juntos!
            </p>
          </div>
          <div className={styles.introTime}>
            <div className={styles.introDays}>
              <p>abierto</p>
              <p>todos los días!</p>
              <p>de 17hs a 2:30hs</p>
            </div>
            <div className={styles.introSlash}></div>
            <div>
              <p>ubicación</p>
              <p>córdoba</p>
              <p>3766</p>
            </div>
          </div>
        </section>
        <section className={styles.sectionFirst}>
          <h2>nos&nbsp;mudamos!</h2>
          <div className={styles.sectionFirstData}>
            <div
              className={styles.sectionFirstImg}
              ref={ref1}
              data-isvisible={isV1 ? 'true' : 'false'}
            >
              <video src={video} loop autoPlay muted controls></video>
            </div>
            <p>
              ¡Tenemos grandes noticias! Nos mudamos a un nuevo lugar
              espectacular, más amplio y completamente renovado para brindarte
              una experiencia de entretenimiento única. Desde el momento en que
              ingresás, te va a encantar nuestro diseño moderno y elegante.
              Además ahora te ofrecemos más opciones gastronómicas y áreas de
              descanso mejoradas. Vení y descubrí todo lo que preparamos para
              vos en nuestra nueva ubicación.
            </p>
          </div>
        </section>
        <section className={styles.sectionSecond}>
          <h2>qué&nbsp;podemos ofrecerte?</h2>
          <div className={styles.sectionSecondData}>
            <div
              className={styles.sectionSecondImg}
              ref={ref2}
              data-isvisible={isV2 ? 'true' : 'false'}
            >
              <img src={paraCambiar} alt="imagen del bowling" loading="lazy" />
            </div>
            <p>
              ¡Vení a nuestro bowling y pasá un rato inolvidable! Podés festejar
              tu cumpleaños, ganar <strong>líneas gratis</strong> y disfrutar de
              diversión asegurada. Además, te ofrecemos una variedad de comidas,
              cervezas y cócteles en un ambiente increíble. ¡Te esperamos para
              vivir momentos geniales! Es el plan perfecto{' '}
              <strong>para vos</strong>. ¡No te lo podés perder!
            </p>
          </div>
        </section>
        <section className={styles.sectionThird}>
          <div
            className={styles.sectionThirdImg}
            ref={ref3}
            data-isvisible={isV3 ? 'true' : 'false'}
          >
            <img src={maquinita} alt="Maquinita de juegos" loading="lazy" />
          </div>
          <div>
            <h2> diversión!</h2>{' '}
            <p>
              ¡Sumérgete en una experiencia de entretenimiento completa en
              nuestro centro renovado! Aquí encontrarás una emocionante variedad
              de actividades para disfrutar al máximo. Además del fascinante
              bowling, podés deleitarte con nuestras increíbles{' '}
              <strong>maquinitas arcade</strong> y nuestra{' '}
              <strong>mesa de pool profesional</strong>. La diversión está
              garantizada para todos los gustos y edades.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}

export default Page;
