
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '.src/Layout.jsx';
import About from '/src/pages/About.jsx'
import Home from '/src/pages/Home.jsx'
import Services from '/src/pages/Services.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "service",
        element: <Services />
      }
     
    ]
  }

])



createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider router={router} />
  </StrictMode >
  

)