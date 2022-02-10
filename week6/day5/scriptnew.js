
let objArray =[
    {id:0, author:"Micheal Jordan", quote:"The key to success is failure.", likes: 0},
    {id:1, author:"Micheal Jordan", quote:"I've missed more than 9,000 shots in my career. I've lost almost 300 games. ...", likes: 0},
    {id:2, author:"Micheal Jordan", quote:"Failure makes me work even harder.", likes: 0},
    {id:3, author:"Micheal Jordan", quote:"I've never been afraid to fail.", likes: 0},
    {id:4, author:"Micheal Jordan", quote:"I know fear is an obstacle for some people", likes: 0}
  ]
  // FUNCTIONS
  let currentId
  let getAllIds = ()=>objArray.map(e=>e.id)
  let getAQuote = (id)=> objArray.find(obj => obj.id === id)
  let quoteRetriver = ()=>{
    let ids = getAllIds()
    let randomIdGen =()=> ids[Math.floor(Math.random()*ids.length)]
    let randomId = currentId
    while (randomId===currentId) {
      currentId = randomIdGen()
    }
  
    let randomQuote =  getAQuote(currentId);
    return randomQuote
  }
  
  let htmfFeeder = (e)=>{
    let quote = quoteRetriver()
    console.log(quote)
    let quoteElem = document.querySelector("#quote")
    let authorElem = document.querySelector("#author")
    let likeselem = document.querySelector("#likes")
  
    quoteElem.textContent = quote.quote
    authorElem.textContent = quote.author
    likeselem.textContent = quote.likes
  }
  
  let addNewQuote = (e)=>{
    e.preventDefault();
    
    let newQuote = {}
    let  authorInput = document.querySelector(`[name = "author"]`)
    let quoteInput = document.querySelector(`[name = "quote"]`)
  
    if(authorInput.value !="" && quoteInput.value !=""){
      newQuote.quote = quoteInput.value
      newQuote.author = authorInput.value
      newQuote.id = Math.max(...getAllIds())+1
      objArray.push(newQuote)
      quoteInput.value =""
      authorInput.value =""
    }
  
  }
  
  
  let quoteLengthWithSpacefnct = ()=>{
    
    let currentProprety = getAQuote(currentId).quote.length
    let currentSpan = document.querySelector("#quoteLengthWithSpaceValue")
    currentSpan.textContent = currentProprety
  }
  let quoteLengthWithoutSpacefnct = ()=>{
    
    let currentProprety = getAQuote(currentId).quote.replace(/\s/g,'').length
    let currentSpan = document.querySelector("#quoteLengthWithoutSpaceValue")
    currentSpan.textContent = currentProprety
  }
  let quoteLengthWordfnct = ()=>{
    
    let currentProprety = getAQuote(currentId).quote.trim().split(" ").length
    let currentSpan = document.querySelector("#quoteLengthWordValue")
    currentSpan.textContent = currentProprety
  }
  
  let add = ()=>{
    
    getAQuote(currentId).likes+=1
    let likeselem = document.querySelector("#likes")
    likeselem.textContent = getAQuote(currentId).likes
  }
  
  let remove = ()=>{
    let currentLike = getAQuote(currentId).likes
    console.log(currentLike)
    getAQuote(currentId).likes =  (currentLike-1)>=0
    ? currentLike-1
    :currentLike
  
  
    let likeselem = document.querySelector("#likes")
    likeselem.textContent = getAQuote(currentId).likes
  }
  
  //domelems
  let quoteGen = document.querySelector("#quoteGen")
  let form = document.querySelector("form")
  
  let quoteLengthWithSpace = document.querySelector("#quoteLengthWithSpace")
  let quoteLengthWithoutSpace = document.querySelector("#quoteLengthWithoutSpace")
  let quoteLengthWord = document.querySelector("#quoteLengthWord");
  
  let minusButton = document.querySelector("#remove");
  
  let plusButton = document.querySelector("#add");
  
  
  
  //events
  quoteGen.addEventListener("click",htmfFeeder)
  form.addEventListener("submit",addNewQuote)
  
  
  quoteLengthWithSpace.addEventListener("click",quoteLengthWithSpacefnct)
  quoteLengthWithoutSpace.addEventListener("click",quoteLengthWithoutSpacefnct)
  quoteLengthWord.addEventListener("click",quoteLengthWordfnct)
  
  minusButton.addEventListener("click",remove)
  
  plusButton.addEventListener("click",add)