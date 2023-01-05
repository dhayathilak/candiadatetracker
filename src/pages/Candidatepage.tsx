import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Candidate from "../components/molecules/Candidate/Candidate"
import Sidebar from "../components/organisms/Sidebar/Sidebar"
import HomeTemplate from "../components/templates/HomeTemplate"
import { currentdata, getCurrentdata } from "../Services/services"


const CandidatePage= ()=>{
    let {id} = useParams()
    console.log(id)
    

   
    
    return(
        <HomeTemplate sidebar={<Sidebar/>} maincontent={<Candidate id={id}/>}/>
    )
}


export default CandidatePage