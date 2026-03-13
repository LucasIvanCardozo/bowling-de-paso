import styles from './logoTexto.module.css'

export default function LogoTexto({ color = 'black' }: { color?: string }) {
  return (
    <div className={styles.container} style={{ color: color }}>
      <p className={styles.title}>BOWLING</p>
      <p className={styles.subTitle}>DE PASO</p>
    </div>
  )
}
