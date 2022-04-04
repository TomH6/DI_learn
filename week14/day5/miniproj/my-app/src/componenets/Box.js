import React from "react";
import quotes from "./QuotesDatabase";

class Box extends React.Component {
    constructor(){
        super();
        this.state = {
            randQuote : this.getRandQuote().randQuote,
            randAuthor : this.getRandQuote().randAuthor
        }    
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);    
    }
    getRandQuote =()=> {
        let randInt = this.getRandomInt(quotes.length)
        let quote = quotes[randInt].quote;
        let author = quotes[randInt].author;
        console.log(quote, author);
        return {
            randQuote : quote,
            randAuthor : author
        }
    }
    changeColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        document.getElementById("box").style.color = "#"+randomColor;
      }
      
      
    handleClick=()=>{
        let newQandA = this.getRandQuote();
        let newColor = this.changeColor();
        console.log(newQandA);
        this.setState(
                {randQuote : newQandA.randQuote, 
                randAuthor : newQandA.randAuthor
                }
             ) 
    }
    render(){
        console.log(this.state.randQuote, this.state.randAuthor);
        return(
            <div id="void">
                <div id="box">
                    <h1><blockqoute>{`"${this.state.randQuote}"`}</blockqoute></h1>
                    <p><cite>{`-${this.state.randAuthor}-`}</cite></p>
                    <button onClick={this.handleClick}>New quote</button>
                </div>
            </div>  
        )
    }
}
export default Box;