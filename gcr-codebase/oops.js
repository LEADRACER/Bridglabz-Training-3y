class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }

  showAge() {
    console.log(this.name + " is " + this.age + " years old");
  }
}

let person1 = new Person("Rahul", 20);
let person2 = new Person("Priya", 21);

person1.greet();
person1.showAge();
person2.greet();
person2.showAge();

class Student extends Person {
  constructor(name, age, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }

  showDetails() {
    console.log(this.name + " has roll number " + this.rollNo);
  }

  greet() {
    console.log("Hi, I am student " + this.name);
  }
}

let student1 = new Student("Amit", 19, 101);
student1.greet();
student1.showAge();
student1.showDetails();

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log("Deposited: " + amount + ". New balance: " + this.balance);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawn: " + amount + ". New balance: " + this.balance);
    } else {
      console.log("Insufficient balance");
    }
  }

  checkBalance() {
    console.log("Account Balance: " + this.balance);
  }
}

let acc = new BankAccount(12345, 1000);
acc.checkBalance();
acc.deposit(500);
acc.withdraw(300);
acc.withdraw(2000);

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(this.brand + " is starting");
  }

  stop() {
    console.log(this.brand + " is stopping");
  }
}

class ElectricCar extends Car {
  constructor(brand, color, battery) {
    super(brand, color);
    this.battery = battery;
  }

  charge() {
    console.log(this.brand + " is charging. Battery: " + this.battery + "%");
  }

  start() {
    console.log(this.brand + " starts silently with electric motor");
  }
}

let car1 = new ElectricCar("Tesla", "Red", 80);
car1.start();
car1.charge();
car1.stop();

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(this.name + " barks");
};

let dog1 = new Dog("Tommy", "Pug");
dog1.speak();
dog1.bark();

class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    if (value > 0) {
      this._salary = value;
    } else {
      console.log("Invalid salary");
    }
  }

  display() {
    console.log(this.name + " earns " + this._salary);
  }
}

let emp = new Employee("John", 5000);
emp.display();
console.log(emp.salary);
emp.salary = 6000;
emp.display();
emp.salary = -1000;

class MathUtil {
  static add(x, y) {
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }

  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.add(5, 3));
console.log(MathUtil.multiply(4, 2));
console.log(MathUtil.square(6));

class Shape {
  area() {
    console.log("Area not defined");
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  area() {
    let result = this.length * this.width;
    console.log("Area of Rectangle: " + result);
    return result;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    let result = 3.14 * this.radius * this.radius;
    console.log("Area of Circle: " + result);
    return result;
  }
}

let rect = new Rectangle(5, 4);
let circle = new Circle(3);
rect.area();
circle.area();

class User {
  constructor(username) {
    let password = "secret123";
    
    this.username = username;
    
    this.getPassword = function() {
      console.log("Password accessed");
      return password;
    };
  }
}

let user1 = new User("alex");
console.log(user1.username);
console.log(user1.getPassword());

let obj1 = {
  name: "Sam",
  age: 22,
  greet: function() {
    console.log("Hello from object literal");
  }
};

obj1.greet();
console.log(obj1.name);

class animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  name() {
    console.log("look, this is a " + this.name);
  }

  type() {
    console.log(this.name + " is a " + this.type);
  }
}
let animal1 = new animal("Dog", "Mammal");
let animal2 = new animal("Eagle", "Bird");

animal1.name();
animal1.type();
animal2.name();
animal2.type();

class domestic extends animal {
  constructor(name, type, sound) {
    super(name, type);
    this.sound = sound;
  }
  
  sound() {
    console.log(this.name + " makes a " + this.sound + " sound");
  }

}
let domestic1 = new domestic("Dog", "Mammal", "Bark");
let domestic2 = new domestic("Cat", "Mammal", "Meow");

domestic1.sound();
domestic2.sound();

//prototpe oops
function Person(name){
  this.name = name;
}
Person.prototype.greet = function(){
  console.log("Hello " + this.name);
};

const p1 = new Person("John");
const p2 = new Person("Jane");
p1.greet();
p2.greet(); 

//Comparison table
const marks = [85, 92, 78, 96, 88];
marks.forEach((mark, index) => {
  console.log(index, marks);
});