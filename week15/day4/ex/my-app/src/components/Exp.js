
const Exp = (props) => {

    // console.log(props)

    return(
         <div>
            <img src={props.src} alt={`${props.key}`} />  
            <a href={props.url}>{props.companyName}</a>
            <h6>{props.title}</h6>
            <h6>{props.startDate + props.location}</h6>
            <h6>{props.description}</h6>
        </div>
    )
}

export default Exp;