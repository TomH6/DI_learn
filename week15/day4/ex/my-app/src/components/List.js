const List = (props) => {
    return(
        <>
            {   
                (props.arr).map(item => {

                    let display = props.property !== "" ? item[props.property] : item;

                    return(
                        <>
                            <li>{display}</li>
                        </>
                    )
                })
            }     
        </>
    )
}

export default List;