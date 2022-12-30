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
          <div>
            {props.maincontent}
          </div>
        </div>
    )
}

export default HomeTemplate