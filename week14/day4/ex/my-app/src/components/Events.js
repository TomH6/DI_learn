import React from "react"; // only for class components


class Events extends React.Component{
    constructor(){
        super();
        this.state = {
            isToggleOn : true
        }
    }
   
    render(){
        const clickMe = () => {  
            alert(' I WAS CLICKED!')
        }
        const input = document.getElementById('input');
        const btn = document.getElementById('on_off');
        const handleKeyPress = (event) =>{
            if(event.key == 'Enter'){
                alert(`The Enter key was pressed, your input is: ${event.target.value}`)
            } 
        }
        const onOff = ()=> {
            if(this.state.isToggleOn){
                this.state.isToggleOn = false
                btn.textContent = 'OFF'
                console.log(btn.textContent);
            } else {
                this.state.isToggleOn = true
                btn.textContent = 'ON'
                console.log(btn.textContent);
            }
            console.log(this.state.isToggleOn);
        }
        return(
            <>
                <button onClick={clickMe}>
                    Click me
                </button>
                    {/* Or instead of an arrow function:
                <button onClick={("click", function(){alert("I was clicked!")})}>Click me</button> */}
                <input id="input" type='text' placeholder="Press Enter after typing" onKeyPress={handleKeyPress}/>
                <button id="on_off" onClick={onOff}>
                    on/off
                </button>
            </>
        )

    }
}

export default Events
