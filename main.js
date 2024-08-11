const map = document.getElementById('map')

document.addEventListener('DOMContentLoaded',function(){
    map.style.width = "600px";
    map.style.height = "600px";
})

class Map{
    constructor(){
        this.map = map;
        this.animals = [];
    }

    addAnimal(){

        const animal_div = new Animal(2);

        map.append(animal_div)
    }

}

class Animal{
    constructor(id){
        
        this.html = document.createElement('div')

        this.html.setAttribute('class','animal')
        this.html.setAttribute('id',"animal-"+ id )
        this.html.setAttribute('animal',id)

        return this.html
    }
}

const map_game = new Map();

map_game.addAnimal()