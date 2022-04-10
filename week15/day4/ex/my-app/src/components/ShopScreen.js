const ShopScreen = (props) => {

    if(props.error){
        throw new Error ('errorrrr');
    }
    return(
        <>
          <h1>Shop Screen</h1> <br/>
        </>    
    )
};

export default ShopScreen;

