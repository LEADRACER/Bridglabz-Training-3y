// Simple examples for common JavaScript operators

// Arithmetic operators
let a = 10;
let b = 3;
console.log('Arithmetic operators');
console.log('Addition:', a + b);        // 13
console.log('Subtraction:', a - b);     // 7
console.log('Multiplication:', a * b);  // 30
console.log('Division:', a / b);        // 3.3333333333333335
console.log('Remainder:', a % b);       // 1
console.log('Exponentiation:', a ** b); // 1000

// Increment / decrement
let num = 5;
console.log('Before increment:', num);
console.log('Post increment:', num++);  // 5
console.log('After post increment:', num); // 6
console.log('Pre increment:', ++num);    // 7
console.log('Post decrement:', num--);   // 7
console.log('After post decrement:', num); // 6
console.log('Pre decrement:', --num);     // 5

// Assignment operators
let x = 10;
x += 5;   // x = x + 5
console.log('Assignment +=:', x); // 15
x -= 3;   // x = x - 3
console.log('Assignment -=:', x); // 12
x *= 2;   // x = x * 2
console.log('Assignment *=:', x); // 24
x /= 4;   // x = x / 4
console.log('Assignment /=:', x); // 6
x %= 5;   // x = x % 5
console.log('Assignment %=: ', x); // 1
x **= 3;  // x = x ** 3
console.log('Assignment **=: ', x); // 1

// Comparison operators
console.log('Comparison operators');
console.log('Equal ==:', 5 == '5');      // true
console.log('Strict equal ===:', 5 === '5'); // false
console.log('Not equal !=:', 5 != '5');  // false
console.log('Strict not equal !==:', 5 !== '5'); // true
console.log('Greater than >:', 8 > 5);  // true
console.log('Less than <: ', 2 < 5);    // true
console.log('Greater than or equal >=:', 5 >= 5); // true
console.log('Less than or equal <=:', 4 <= 3); // false

// Logical operators
console.log('Logical operators');
console.log('AND &&:', true && false); // false
console.log('OR ||:', true || false); // true
console.log('NOT !:', !true); // false

// Bitwise operators
console.log('Bitwise operators');
console.log('Bitwise AND:', 5 & 3); // 1
console.log('Bitwise OR:', 5 | 3); // 7
console.log('Bitwise XOR:', 5 ^ 3); // 6
console.log('Bitwise NOT:', ~5); // -6
console.log('Left shift:', 5 << 1); // 10
console.log('Right shift:', 5 >> 1); // 2
console.log('Zero-fill right shift:', 5 >>> 1); // 2

// Unary operators
console.log('Unary operators');
console.log('Unary plus:', + '10'); // 10
console.log('Unary minus:', -5); // -5
console.log('Logical NOT:', !0); // true
console.log('typeof:', typeof 'hello'); // string
console.log('void:', void 0); // undefined

// Ternary operator
console.log('Ternary operator');
let age = 18;
console.log(age >= 18 ? 'Adult' : 'Minor'); // Adult

// Nullish coalescing
console.log('Nullish coalescing: ', null ?? 'Default value'); // Default value
console.log('Nullish coalescing: ', 0 ?? 42); // 0

// Optional chaining
const user = { profile: { name: 'Alice' } };
console.log('Optional chaining:', user.profile?.name); // Alice
console.log('Optional chaining fallback:', user.contact?.phone ?? 'No phone'); // No phone

// String concatenation operator
console.log('String concat:', 'Hello' + ' ' + 'World'); // Hello World

// Equality / identity examples
console.log('Loose equal:', 1 == true); // true
console.log('Strict equal:', 1 === true); // false
