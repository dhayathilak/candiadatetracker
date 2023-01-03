import {ReactElement} from 'react'


interface propTypes{
  sidebar: ReactElement,
  maincontent: ReactElement
}


const HomeTemplate =(props: propTypes)=>{
    return(
        <div>
          <div>
            {props.sidebar}
          </div>
          <div style={{marginLeft: '250px',marginTop:'10px',width:'80%',height:'90%'}}>
            {props.maincontent}
          </div>
        </div>
    )
}

export default HomeTemplate