import { SearchOutlined } from "@mui/icons-material"
import { Input, InputAdornment, TextField } from "@mui/material"

interface propTypes{
    name?: string
    placeholder: string

}

const Search = (props:propTypes)=>{
    return(
       <>
        <TextField InputProps={{'startAdornment': <InputAdornment position="start"><SearchOutlined/></InputAdornment>}} fullWidth placeholder={props.placeholder} className={props.name}/>
       </>
    )
}

export default Search