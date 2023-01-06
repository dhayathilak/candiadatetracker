import axios from "axios"

export type candidatetype = {
    id:number,
    name:string,
    adjunction:string,
    status:string,
    location:string,
    date:string,
    type:string
}

export type currentdata ={
    id: number,
    name: string,
    email:string,
    dob:string,
    phone:string,
    zipcode:string,
    socialsecurity:string,
    driverslicense:string,
    createdat:string,
    status:string,
    adjunction:string,
    package:string,
    completeddate:string,
    turnaroundtime:string

}




export async function getData(){
    const resp = await axios.get('http://localhost:3000/Candidates')
    return(resp.data)
}



export async function getCurrentdata(id: any){
   const currentresp = await axios.get(`http://localhost:3000/Candidates/${id}`)
   return(currentresp.data)
}
