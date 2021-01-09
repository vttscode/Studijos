function hi(){
   console.log(' Hi JavaScript') 
}

const person = {
    name:'Maximus',
    sayHi:hi
}
// same how person
const person1 = new Object({
    name:'Maxi',
    sayHi:hi
} )
// person2 with person prototype
const person2 = Object.create(person)
console.log(person2.name)  //Maximus
person2.name = 'John'
console.log(person2.name)  //John

//I can add prototype mehtod
Object.prototype.hello = function(){
    console.log(' Hello prototype')
}


const number= new Number('42')
const number2= new Number(42)
const number1= 42
let x
let bool =true
let bool1 =new Boolean(true)
const str='42'
const str1=new String('42')