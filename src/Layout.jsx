import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <div className='Site'>
        <Navbar></Navbar>
        
        <main className='MainContent'>
            <Outlet/>
        </main>

        <Footer></Footer>
    </div>
  )
}

export default Layout
