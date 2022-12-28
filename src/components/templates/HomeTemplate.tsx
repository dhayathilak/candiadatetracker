const HomeTemplate =(props: any)=>{
    return(
        <div>
          {props.header}
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