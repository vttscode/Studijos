function createIncrementor(n){
    return function(number){
        return n+number
    }
}


const addFive = createIncrementor(5)
const addTen = createIncrementor(10)

console.log(addFive(42))
console.log(addTen(42))

function logPerson(){
    console.log(`Person: ${this.name},${this.job} `)
}

function myBind (context, fn){
    return function (...args){
        fn.apply(context, args)
    }
}

const person1 = {
    name:'Maximus',
    job:'front'
    }

const person2 = {
    name : 'Jane',
    job:'back'
}

myBind(person1,logPerson)()
myBind(person2,logPerson)()

logPerson.call(person2)
logPerson.apply(person2)
logPerson.bind(person2)()
