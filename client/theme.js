import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#bee3b1',
      main: '#86b376',
      dark: '#4f7841',
      contrastText: '#d5f1f5',
    },
    secondary: {
      light: '#e39b96',
      main: '#fc42ff',
      dark: '#7a150d',
      contrastText: '#d5f1f5',
    },
      openTitle: '#629c9a',
      protectedTitle: '#fc42ff',
      type: 'light'
    }
  })

  export default theme