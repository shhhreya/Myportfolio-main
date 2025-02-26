import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Skills from './Pages/Skills.jsx'
import Project from './Pages/Project.jsx'
import Certification from './Pages/Certification.jsx'
import Education from './Pages/Education.jsx'
import { IconContext } from 'react-icons'
import './index.css'
import PageNotFound from './Pages/Pagenotfound.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path:"/certification",
          element:<Certification/>
        },
        {
          path: "*",
          element: <PageNotFound />,
        }

      ]
  }
])

createRoot(document.getElementById('root')).render(

    <IconContext.Provider value={{ className: 'text-xl' }}>
    <RouterProvider router={router}/>
    </IconContext.Provider>

)
