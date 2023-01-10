import { blue, grey, indigo, purple} from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';
import { DefaultTheme } from '@mui/styles';
import '@fontsource/inter'
// import inter


declare module '@mui/material/styles'{
    interface Theme{
        palette:{
        primary:{
            main: string
        },
        secondary:{
            main:string
        }
      }
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      dashed: true;
    }
  }

const baseTheme: Theme= createTheme({
    palette:{
        primary: {
            main: grey[900]
        },
        secondary:{
            main: indigo[400]
        },

        background:{
            paper: grey[100],
        }

    },
    components:{

        'MuiButton':{
            styleOverrides:{
                contained:{
                    backgroundColor:'#224DFF'
                }
            },
            variants:[{
                props:{variant:'dashed'},
                style:{background:indigo[400]}
            }]
                
            
        },
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
                    fontFamily:'Inter',
                    fontStyle:'normal',
                    fontWeight:'500',
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