import './App.css'
import {Navbar,Footer} from './components/index.js'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className='min-h-screen flex flex-wrap content-between bg-primary overflow-hidden'>
      <div className='w-full block'>
       <Navbar />
       <main>
         <Outlet />
       </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
