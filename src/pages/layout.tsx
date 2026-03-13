import '../animations.css'
import Footer from '../components/Layouts/Footer'
import Nav from '../components/Layouts/Nav'
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
