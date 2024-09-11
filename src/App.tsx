
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import theme from './theme'
import { Home } from './screens/Home'
import { MovieProvider } from './contexts/Movie.context'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <MovieProvider>
        <Header/>
        <Home/>
      </MovieProvider>
    </ThemeProvider>
  )
}

export default App
