import { SearchOutlined } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"

const Search = ()=>{
    return(
       <>
        <InputAdornment position="start">
           <SearchOutlined/>
        </InputAdornment>
        <TextField/>
       </>
    )
}

export default Search