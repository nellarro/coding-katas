// must start at the first number of the sequence and the second
// those are represented with variables a, b
// the sum is a counter initially so it must begin at zero

 let a = 1
 let b = 2
 let sum = 0
// want to end the code when it reaches 4 million
// the first number has to be even so the first number 'a' has to be...
// divisible by 2 with a remainder of 0
// if the number is even then the sum of the first output will equal...
// the sum plus 'a'.
// when that initializes- the variables have to change to the next...
// number in the fibonacci sequence that fits the parameters so...
// 'a' becomes 'b'. 'b' becomes 'c'. 'c' equals 'a' + 'b'
 while (a < 4000000) {
   if (a % 2 === 0) {
     sum = sum + a
   } let c = a + b
   a = b
   b = c
 }

 console.log(sum)

 // This linter took me like 8200 years so I just used JSFiddle
