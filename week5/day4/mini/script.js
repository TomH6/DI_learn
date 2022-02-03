let colorPicker = document.querySelectorAll('.colors');
let currentColor = 'white';
console.log(currentColor)

for (let index = 0; index < colorPicker.length; index++) {
    const element = colorPicker[index];
    console.log(colorPicker)
    element.addEventListener('click',(e)=>{
        currentColor = e.target.style.backgroundColor 
        console.log(currentColor)
        console.log(e.target.style.backgroundColor)
    })
}

let mousedown = false;
let grid2 = document.querySelector('#rightbox');
grid2.addEventListener('mousedown', function(){

    mousedown = true;
})
grid2.addEventListener('mouseup', function(){
    
    mousedown = false;
})
let tocolor = document.querySelectorAll('.blancSq')
for (let index = 0; index < tocolor.length; index++) {
    const element = tocolor[index];
    element.addEventListener('mouseover', (e)=>{
        if(mousedown){
            e.target.style.backgroundColor = currentColor
        }  
    })
}