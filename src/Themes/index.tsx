import { blue, grey} from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';


declare module '@mui/material/styles'{
    interface Theme{

    }
}

const baseTheme: Theme = createTheme({
    palette:{
        primary: {
            main: blue[700]
        },
        secondary:{
            main: grey[500]
        },
        mode:'light',
        background:{
            paper: grey[200],
            default: blue[200]
        }

    },
    components:{
        
    }


})


export default baseTheme