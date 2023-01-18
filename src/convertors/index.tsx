import axios from "axios"



export async function getData(){
    const resp = await axios.get('http://127.0.0.1:5000/candidates')
    return(resp.data)
}



export async function getCurrentdata(id: any){
   const currentresp = await axios.get(`http://127.0.0.1:5000/candidates/${id}`)
   console.log(currentresp.data,'in convertor')
   return(currentresp.data[0])
}
