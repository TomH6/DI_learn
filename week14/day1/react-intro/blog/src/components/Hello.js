const Hello = () => {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5+5;
    return(
        <div>
            <h1>'Hello world!'</h1> 
            {myelement}
            <h2>React is {sum} times better with JSX</h2> 
        </div>       
    )
}
export default Hello;