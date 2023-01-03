import { SearchOutlined } from "@mui/icons-material"
import { Input, InputAdornment, TextField } from "@mui/material"

const Search = ()=>{
    return(
       <>
        <TextField InputProps={{'startAdornment': <InputAdornment position="start"><SearchOutlined/></InputAdornment>}} fullWidth/>
       </>
    )
}

export default Search