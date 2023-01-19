import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AdverseNotice from "../components/molecules/Pre-AdverseNotice"
import Sidebar from "../components/organisms/Sidebar"
import HomeTemplate from "../components/templates"
import { getCurrentdata } from "../convertors"
import { currentdata } from "../Services/services"

const AdversePage = ()=>{
    let {id} = useParams()
    console.log(id)
    const [currentdata,setCurrentData] = useState<currentdata[]>([])
    async function getcurrent(){
        let resp = await getCurrentdata(id)
        setCurrentData(resp)
    }
    useEffect(()=>{
        getcurrent()
    },[])
    console.log(currentdata)


    return (
        <HomeTemplate maincontent={<AdverseNotice data={currentdata}/>} sidebar={<Sidebar/>} />
    )
}

export default AdversePage