
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import theme from './theme'
import { Home } from './screens/Home'
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <main>
          <Home/>
      </main>
    </ThemeProvider>
  )
}

export default App
