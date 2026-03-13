import '../animations.css'
import Footer from '../components/layouts/Footer'
import Nav from '../components/layouts/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
