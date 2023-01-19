
import { Grid, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {ReactElement} from 'react'


interface propTypes{
  sidebar: ReactElement,
  maincontent: ReactElement
}

const useStyles = makeStyles((theme: any)=>({
  root:{
    flexGrow:1
  },
  paper:{
    padding: theme.spacing(6),
    position:'relative',
    height:'100vh'
  },
  container:{
    height: '100vh'
  }
}))

const HomeTemplate =(props: propTypes)=>{
  const style = useStyles();
    return(
        <div className={style.root}>
          <Paper className={style.paper} variant='elevation'>
            <Grid container spacing={3}  className={style.container}>
              <Grid item xs={2}>
                  {props.sidebar}
              </Grid>
              <Grid item xs={10}>
                {props.maincontent}
              </Grid>
            </Grid>
          </Paper>
        </div>  
        
    )
}

export default HomeTemplate