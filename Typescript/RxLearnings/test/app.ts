// const a:string = "Watch"
// const b = "watch"
// console.log(a)
// console.log(b)

// const myArr = [1, 2, 3, 4, 5,"six"]
// myArr.push("nine")
// console.log(myArr)


namespace UserNamsespace{
    export class Employee{
        name = "Vivek"
        getName():string{
            return this.name;
        }
    }
}

let obj =new UserNamsespace.Employee();
console.log(obj.getName())