import { createTheme, ThemeProvider } from '@mui/material'
import Header from './layouts/Header.js'
import Main from './layouts/Main.js'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4527a0',
      light: '#7953d2',
      dark: '#000070',
    },
    secondary: {
      main: '#4b9328',
      dark: '#136400',
      light: '#7cc457',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Main />
      </div >
    </ThemeProvider>
  );
}

export default App;
