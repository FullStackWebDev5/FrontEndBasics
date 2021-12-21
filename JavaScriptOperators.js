/*
Operator Types in Js:
1. Arithmetic Operators: + - * / % ++ -- **
2. Comparison Operators: == === != !== > >= < <=
3. Bitwise Operator: &(AND) |(OR) ^(XOR) ~(NOT)
4. Logical Operator: &&(AND) ||(OR) !(NOT)
5. Assignment Operator: = += -= *= /= **=
*/

// var x = 10
// var y = 25

// console.log(y / x)
// console.log(y % x) // O/P: 5 Remainder   Eg: 25/10 - Quotient: 2 Remainder: 5

/* 
Increment:
- Post: x++: Firstly returns the current value, then increment
- Pre: ++x: Firstly increment, then return the current value

Decrement:
- Post: x--: Firstly returns the current value, then decrement
- Pre: --x: Firstly decrement, then return the current value
*/

// console.log(x**3)
// console.log(--x)

// let x = 2
// let y = '2'

// console.log(x !== y ? 'Not Equal' : 'Equal')

/* 
1 - 0001
2 - 0010
3 - 0011
4 - 0100

AND
0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1

OR
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1

XOR
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 0
*/

// let x = 2     // 0010
// let y = 5     // 0101

// let z = x | y // 0111 = 4 + 2 + 1 = 7 

// let a = 2       // 0010

// console.log(~a) // 1st Step: 1101 -> 1's COMPLEMENT -> 0010 -> 2's COMPLEMENT -> 0011 -> Which is 3, but since negative so -> -3

/*
|| : Either the first OR the second is true
&& : Both the first and the second is true
! : Negation Scenario
*/

// if(user == 'Avinash' || user == 'Dipshika'){

// }

// console.log(5 > 8 && 5 > 3 ? 'true' : 'false')

// console.log(!(5>3) ? 'true' : 'false')

let x = 3
let y = 6

x*=y //  x = x * y

console.log(x)