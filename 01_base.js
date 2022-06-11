// alert('vladick alloe')
// //camelCase
// const firstName = 'Pedik'
// // const age = 29 // number
// const isProgrammer = true // boolean

// const $ = 'some value'
// const _ = 'private'

// const withNum5 = '5'

// const lastName = prompt('ВВЕДИ СВОЮ ФАМІЛІЮ!!')
// alert(firstName + ' ' + lastName)

//оператори
// let currentYear = 2022
// const birthYear = 1993

// const age = currentYear + birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a| c += a
// c = c - a| c -= a


// console.log(a * b)
// console.log(a - b)
// console.log(a + b)
// console.log(a / b)

// console.log(++currentYear)
// console.log(--currentYear)

// Типы данных

// const isProgrammer = true
// const name = 'Vseslav'
// const age = 29
// let x
// null
// console.log(typeof isProgrammer)

// приоритет операторов 

// const fullAge = 29
// const birthYear = 1993
// const currentYear = 2022
// // >< >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 28 >= 29 => true
// console.log(isFullAge)

//условные операторы
// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus == 'ready') {
//     console.log('курс уже готов')
// }
// else if (courseStatus === 'pending') {
//     console.log('Курс пока в процессе')
// }

// const num1 = 30 // number 
// const num2 = '30' // string

//пишем ===

// const isReady = true

// if (isReady)
// {
//     console.log('Все готово')
// }

// else {
//     console.log('all good')
// }

// Тернарное выражение
// isReady ? console.log('all good') : console.log('not alright')

//Булевая логика

//функции

//массивы

// const cars = ['mazda', 'Mercedes', 'Ford']
// console.log(cars)

// // const cars = new Array('maz', 'mer', 'Ford')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[cars.lenght]
// cars[3] = 'Mazda'

// Циклы
const cars = ['mazda', 'Mercedes', 'Ford']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
// }

// for (let car of cars) [
//     console.log(car)
// ]

//Обьекты

const person = {
 firstName: 'Vseslav',
 lastName: 'Perekhrestenko',
 year: 1993,
 languages: ['Ru' , 'En'],
 hasWife: false,
 greet: function(){
    console.log('greet')
 }
}

console.log(person.firstName)
console.log(person['lastName'])
const key  = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true

console.log(person)

person.greet()

