import { blue, grey, indigo} from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';
import { DefaultTheme } from '@mui/styles';


declare module '@mui/material/styles'{
    interface Theme{
        palette:{
        primary:{
            main: string
        }
      }
    }
}

const baseTheme: Theme= createTheme({
    palette:{
        primary: {
            main: indigo[500]
        },
        // secondary:{
        //     main: grey[500]
        // },
        // mode:'light',
        background:{
            paper: grey[200],
            default: blue[200]
        }

    },
    typography:{
        fontFamily:'Inter',
        fontWeightMedium:500
    },
    components:{
        'MuiChip':{
            styleOverrides:{
                root:{
                    borderRadius:3,
                    textTransform:'uppercase'
                },
                colorSuccess:{
                    backgroundColor:'#17A076'
                },
                colorWarning:{
                    backgroundColor:'#A08817'
                }
            }
        },
        'MuiAccordion':{
            styleOverrides:{
                root:{
                    background:'#FFFFFF',
                    borderRadius: '8px'
                }
            }
        },
        'MuiCard':{
            styleOverrides:{
                root:{
                    background: '#FAFAFC',
                    border: '1px solid #E5E7ED',
                    borderRadius: '12px'
                }
            }
        },
        'MuiTypography':{
            styleOverrides:{
                root:{
                    fontFamily:'inter',
                    fontStyle:'normal',
                    fontWeight:'500',
                    color:'#2C2C2E'
                }
            }
        },
        'MuiTable':{
            styleOverrides:{
                root:{
                    background:'#FFFFFF',
                    borderRadius:'8px'
                }
            }
        }
    }


})


export default baseTheme