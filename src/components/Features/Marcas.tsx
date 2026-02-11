import styles from './marcas.module.css'

export default function Marcas() {
  return (
    <aside className={styles.container}>
      <ul>
        <li>
          <img src="/images/quilmesLogo.webp" alt="Logo de la marca Quilmes" loading="lazy" />
        </li>
        <li>
          <img src="/images/patagoniaLogo.webp" alt="" loading="lazy" />
        </li>
        <li>
          <img src="/images/stellaLogo.webp" alt="Logo de la marca Stella" loading="lazy" />
        </li>
        <li>
          <img src="/images/cocaLogo.webp" alt="Logo de la marca Coca-Cola" loading="lazy" />
        </li>
      </ul>
    </aside>
  )
}
