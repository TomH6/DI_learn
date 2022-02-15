const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];
const rowsContainer = document.getElementById('rowsContainers');

let cardGnrator = ({id,name,username,email,image})=>{
  let toReturn = document.createElement('div')
  toReturn.id = `robot${id}`
  toReturn.dataset.robotId = id
  toReturn.classList.add('card','col-3')
  let toReturndiv = document.createElement('div')
  toReturndiv.classList.add('card-body','align-content-center','flex-column','d-flex','justify-content-around')
  let img = document.createElement('img')
  img.src = image
  img.classList.add("card-img-top",'rounded-circle')
  img.alt = `${username}`
  let robotName = document.createElement('h5')
  robotName.classList.add('card-title','name','mb-0')
  robotName.textContent = name
  let robotMail = document.createElement('p')
  robotMail.classList.add("card-text", "name")
  let smallP = document.createElement("small")
  smallP.className = "text-muted"
  smallP.textContent = email
  robotMail.appendChild(smallP)
  

  toReturndiv.appendChild(img)
  toReturndiv.appendChild(robotName)
  toReturndiv.appendChild(robotMail)
  toReturn.append(toReturndiv)
  return toReturn
}

let newCards = robots.map(cardGnrator)
console.log(newCards)

let createRow = ()=> {
  let toReturn = document.createElement('div')
  toReturn.classList.add('row','mb-3','justify-content-around')
  return toReturn
}

let injectAll = ()=> {
  let currentRow
  
  newCards.forEach((card, i)=>{
    
    if(!(i%3)){
      currentRow = createRow()
    }
    currentRow.append(card)
    if (!(i%3)){
      rowsContainer.appendChild(currentRow)
    }
  }
)}

injectAll()

let cardFilter = document.querySelector('input')

let findCard = (e)=>{
  let message = e.target.value

  let match = robots.filter(robot=>robot.name.includes(message)).map(e=>e.id)
  newCards.forEach(e=>{
    match.includes(parseInt(e.dataset.robotId))
    ?e.classList.remove("d-none")
    :e.classList.add("d-none")
  })
}


cardFilter.addEventListener('input',findCard)