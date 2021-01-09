function hi(){
    console.log(' Hi JavaScript', this) 
 }

const person = {
    name:'Maximus',
    sayHi:hi, //this === Object person
    hiWindow:hi.bind(Window),  //this === Object Window
    hiWindowThis:hi.bind(this),  //this === Object Window
    hiDocument:hi.bind(Document),  //this === Object Document
    logInfo(job,level){
        console.group(`${this.name} info:`)
        console.log(`name is: ${this.name} `)
        console.log(`job is: ${job} `)
        console.log(`level is: ${level} `)
        console.groupEnd()

        }
    }

person.logInfo('front','senior')

const person2 = {
    name : 'Jane'
}

person.logInfo.bind(person2,'back','junior')()
person.logInfo.call(person2,'back','mid','not used')
person.logInfo.apply(person2,['back','senior'])

const arr = [1,2,3]

Array.prototype.multBy = function(n){
    return this.map(i=> i*n)
}
console.log(arr.multBy(3))
