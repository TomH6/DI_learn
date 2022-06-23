import { useContext } from "react";
import { AppContext } from "./Counter";

const TestContext = (props) => {
    const {counter, setCounter} = useContext(AppContext);
    return (
        <>
            hello TestContext
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter+10)}>+10</button>
        </>
    )
}

export default TestContext;