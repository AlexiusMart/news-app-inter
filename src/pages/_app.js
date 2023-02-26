// import {Provider} from 'react-redux'
// import {store} from '@/redux/store'
import {ThemeProvider} from '@mui/material/styles'

import theme from '@/theme/theme'

import '@/styles/base/base.scss'

const App = ({Component, pageProps}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Provider store={store}> */}
          <Component {...pageProps} />
        {/* </Provider> */}
      </ThemeProvider>
    </>
  )
}

export default App
