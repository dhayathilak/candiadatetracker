import axios from "axios"



export async function getData(){
    const resp = await axios.get('http://localhost:3000/Candidates')
    return(resp.data)
}



export async function getCurrentdata(id: any){
   const currentresp = await axios.get(`http://localhost:3000/Candidates/${id}`)
   return(currentresp.data)
}
