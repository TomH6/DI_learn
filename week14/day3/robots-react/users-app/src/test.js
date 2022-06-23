class fruit {
    constructor(){
        this.x = 10;
        this.str = 'string';

    }
    getName(){
        return this.x
    }
}

class orange extends fruit {
    constructor(){
        super() // calling the constructor of fruit
        this.y = 9
    }
    // getName(){      // OVERIDES THE PARENT 
    //     return this.y
    // }
}

const o = new orange();
console.log(o.getName());