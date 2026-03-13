import styles from './anotacion.module.css'

export default function Anotacion({ der, izq, sum, width, special }: { der?: number; izq?: number; sum?: number; width?: number; special?: boolean }) {
  return !width || width > 1024 ? (
    special ? (
      <div className={styles.center}>
        <div className={styles.centerSup}>
          <div className={styles.centerBox}></div>
          <div className={styles.centerBox}>
            <div className={styles.centerText}>
              <p>demostrá</p>
              <p>destreza</p>
            </div>
          </div>
          <div className={styles.centerBox}>
            <div className={styles.centerText}>
              <p>completá</p>
              <p>misiones</p>
            </div>
          </div>
        </div>
        <div className={styles.centerInf}>
          <p>premios y diversión</p>
        </div>
      </div>
    ) : (
      <div className={styles.side}>
        <div className={styles.sideSup}>
          <div className={styles.sideBox}></div>
          <div className={styles.sideBox}>
            <p>{der}</p>
          </div>
          <div className={styles.sideBox}>
            <p>{izq}</p>
          </div>
        </div>
        <div className={styles.sideInf}>
          <p>{sum}</p>
        </div>
      </div>
    )
  ) : null
}
