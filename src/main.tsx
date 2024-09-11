import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Header } from './components/Header/index.tsx'
import { Home } from './screens/Home/index.tsx'
import { Detail } from './screens/Details/index.tsx'
import { ThemeProvider } from 'styled-components'
import theme from './theme/index.tsx'
import { List } from './screens/List/index.tsx'

const router = createBrowserRouter([
  {
    element: (
      <ThemeProvider theme={theme}>
        <Header/>
        <Outlet/>
      </ThemeProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details/:id/:type',
        element: <Detail />
      },
      {
        path: '/list/:category',
        element: <List/>
      }
    ]
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
