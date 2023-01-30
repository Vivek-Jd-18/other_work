//@classes


interface Iemp {
    name: string;
    age: number;
    getName: () => string;
    getAge: () => number;
    getSalary: (number, age) => number;
}

class Employee implements Iemp {
    name: string
    age: number

    constructor(_name: string, _age: number) {
        this.name = _name
        this.age = _age
    }

    getName(): string {
        return this.name
    }
    getAge(): number {
        return this.age
    }
    getSalary(skill: number, age: number): number {
        return (age * skill) ** 2
    }

}

let obj = new Employee("James", 29)
console.log("age is : " + obj.getAge())
console.log("name is :" + obj.getName())
console.log("salary is :" + obj.getSalary(10, obj.getAge()) + " $")



//@ Tuples
// let tp1: [(string | number), (string | number)]
// tp1 = ["gagan", 22]
// tp1 = [22, "gagan"]
// console.log(tp1)


//@ union types
// function typ(data: (string | number)):string{
//     if(typeof data=="string"){
//         return "string type"
//     }else{
//         return "number type"
//     }
// }
// console.log(typ(12))
// console.log(typ("twelve"))

//@ enums as a type fro key map
// interface IkeyMap{
//     key:number;
//     val:string;
// }

// let data1:IkeyMap = {key:1,val:"one"} 
// console.log(data1.key)




//@ interface as a function type
// interface IkeyMap {
//     key: number;
//     val: string;
// }

// function adder(a: number, b: string): void {
//     console.log("your dictionary is like : " + a, b)
// }

// let newData: IkeyMap = adder;
// newData(1, "one") 

//@interface for  an array
// interface IArr { 
//     [ind: number]:number
// }

// let ar1:IArr = [1,2,3,34,4,455]
// console.log(ar1)



//@ interface for creating objects/properties

// interface IEmp{
//     name:string;
//     code:number;
//     address?:string;
//     readonly accNumber:string;
// }

// let emp1:Iemp = {
//     name:"Joshua",  
//     code:6,
//     address:"Germany"
//     accNumber:12,
// }
// console.log(emp1)



//@ enums
export enum Color {
    blue,
    navyBlue,
    cyan
}
const dt1: Color = Color.blue
console.log(Color.cyan)
console.log(dt1)

export let key = 17


namespace slide2 {
    export function passGenerator<T>(p1: T): T {
        let res;
        for (let i = 0; i < 5; i++) {
            res *= i
        }
        return res
    }
}