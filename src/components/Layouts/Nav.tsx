import styles from './nav.module.css'
import { useState, useEffect } from 'react'
import LogoTexto from '../Features/LogoTexto'
import useIntersection from '../../hooks/useIntersection'
import { NavLink, useLocation } from 'react-router'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [waitTransition, setWaitTransition] = useState(false)
  const location = useLocation()

  const { ref: ref1, isVisible } = useIntersection({
    threshold: 0,
  })

  // Close menu when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }, 10)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const handleButton = () => {
    if (!waitTransition) {
      setWaitTransition(true)
      setMenuOpen(!menuOpen)
      setTimeout(() => setWaitTransition(false), 300)
    }
  }

  return (
    <nav className={styles.container} ref={ref1} data-isvisible={isVisible}>
      <div className={styles.background} onClick={handleButton} data-open={menuOpen}></div>
      <div className={styles.logo}>
        <LogoTexto color="#eee" />
      </div>
      <button className={styles.button} aria-label="boton del menú" data-open={menuOpen} onClick={handleButton}>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </button>
      <ul className={styles.ul} data-open={menuOpen}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles.link}`} to={link.to}>
              {link.name}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            className={styles.link + ' ' + styles.contact}
            onClick={() => {
              scrollToId('contactanos')
              setMenuOpen(false)
            }}
          >
            CONTACTANOS
          </button>
        </li>
      </ul>
    </nav>
  )
}

const navLinks = [
  { name: 'INICIO', to: '/' },
  { name: 'MENU', to: '/menu' },
  { name: 'LOGROS', to: '/logros' },
  { name: 'HISTORIA', to: '/historia' },
]

const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
