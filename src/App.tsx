
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import theme from './theme'
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <main>
          Hello world!
      </main>
    </ThemeProvider>
  )
}

export default App
