import { ArrowBack, ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary,Card, CardContent, Grid } from "@mui/material"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Text from "../../atoms/Typography/Text"
import Info from "../UserInfo/Info"

const CandidateInfo = ()=>{
    
    return(
     <>
     
        <Accordion sx={{boxShadow:'5px 5px 5px 5px grey'}}>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                    <h1>CandidateInfo</h1>  
            </AccordionSummary>
            <AccordionDetails>
                  <Card>
                       <CardContent>
                            <Grid container rowSpacing={3} columnSpacing={3}>
                                 <Grid item xs={4}>
                                    <Info/>
                                 </Grid>
                                 <Grid item xs={4}>
                                    <Info/>
                                 </Grid>
                                 <Grid item xs={4}>
                                    <Info/>
                                 </Grid>
                                 <Grid item xs={4}>
                                    <Info/>
                                 </Grid>
                                 <Grid item xs={4}>
                                    <Info/>
                                 </Grid>
                                 <Grid item xs={4}>
                                    <Info/>
                                 </Grid>
                            </Grid> 
                       </CardContent>
                  </Card>
            </AccordionDetails>
        </Accordion>
     </>
    )
}


export default CandidateInfo