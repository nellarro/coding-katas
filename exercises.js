/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

 let letters = ['b', 'c', 'd', 'e']
 let numbers = [2, 3, 4, 5]

 .sort(letters)
 console.log(letters)

 let greet = 'Hello, my darling'
 console.log(greet.concat(' ' + 'Jenell' + '!'))

 console.log(numbers.indexOf(4))

 console.log(greet.split(''))

 letters = letters.join()
 console.log(letters)

 console.log(numbers.pop('a'))

 numbers.push(5)
 console.log(numbers)

 console.log(numbers.slice(1, 2))

 console.log(numbers.splice(1, 2))

 console.log(numbers.shift())

 console.log(numbers.unshift())

 function biggerThan (value) {
   return value >= 28
 }
 let filtered = [82, 35, 12, 29.5, 7, 8].filter(biggerThan)
 console.log(filtered)

 let newNumbers = numbers.map(function (number) {
   return newNumbers * 2
 })

 console.log(newNumbers)
// .map()
