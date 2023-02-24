import {ThemeProvider} from '@mui/material/styles'
import theme from '@/theme/theme'

import '@/styles/base/base.scss'

const App = ({Component, pageProps}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
