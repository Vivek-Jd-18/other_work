// @ generics functions

// function funAD<T>(data: T) {
//     return data
// }

// console.log(funAD<string>("vivek"))
// console.log(funAD<number>(12))
// console.log(funAD(12))

//@ generic classes

// class    Student<X, Y, Z>{
//     name: X;
//     age: Y;
//     rollNumber: Z;

//     constructor(_name: X) {
//         this.name = _name;
//     }
//     getName(): X {
//         return this.name
//     }
//     setName<X>(name: X): void {
//         this.name = name
//     }
// }

// let ob = new Student<string, number, number>("yuvraj");
// console.log(ob.getName())
// ob.setName<string>("Surya")
// console.log(ob.getName())



//@ generic interface as functions

// interface Inter<A, B> {
//     name: A;
//     age: B;
// }

// function fun1<A, B>(name: A, age: B): void {
//     console.log(`hello name is :${name} and age is ${age} `);
// }

// let myFun:Inter<number,number> = fun1;
// myFun(4,2)


//@ modules in typescript
import { key } from "../slide2/slide2";
console.log(key)


// ///<reference path ="./slide2.ts" />
// let Abc = passGenerator()

///<reference path ="one.ts" />
console.log(data)