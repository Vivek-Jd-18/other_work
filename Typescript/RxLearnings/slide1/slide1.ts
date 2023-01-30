//@ basic data types

// const message: string = "LALA"
// const num:Number = 22
// const Complexnum:Number = 0x37cf;
// const Complexnum2:Number = 0b111001;
// const flag:Boolean = true

// console.log(message)
// console.log(num)
// console.log(flag)
// console.log(Complexnum)
// console.log(Complexnum2)



//@ number methods

// const num1 = 0.00000022
// console.log(num1.toExponential(2))
// console.log(num1.toFixed(3))
// console.log(num1.toLocaleString())
// console.log(num1.toPrecision(4))
// console.log(num1.toString())
// console.log(num1.valueOf())



// @ functions

// function fun():void{
//     console.log("hiii")
//     // return "hi"
// }
// fun()
// console.log(fun())



//@ strings
// {

//     const name: string = "Musiala@"
//     const sur_name: string = "jamal"
//     // console.log(`AMF ${sur_name}  ${name}`)


//     console.log(name.charAt(0))
//     console.log(name.concat(sur_name))
//     console.log(name.indexOf("s"))
//     console.log(name.replace("M","S"))
//     console.log(name.split("i",3))
//     console.log(name.toUpperCase())
//     console.log(name.toLowerCase())
//     console.log(name.includes("s"))
//     console.log(name.endsWith("@"))
//     console.log(name.lastIndexOf("a"))
//     console.log(name.match("@"))
//     console.log(name.slice(0,3))
// }


// //@null
// {
//     const data: undefined = undefined
//     console.log(data)
//     let abc;
//     console.log(abc)
// }



//@boolean

// {
//     const flag:boolean=false
//     console.log(flag)
// }



//@ any
// {
//     function fun(a:any, b:any):number{
//         return a+b
//     }
//     console.log(fun(2,3))
// }





//@ array

// {
//     const arr: Array<number> = [1,2,4,3,5,6,7]
//     console.log(arr[2])
//     const arr2: number[] = [1,2,4,3,5,6,7]
//     console.log(arr2[3])
// }

//@ multi type array

// {
//     const arr: Array<number | string> = [1, "two", 3, "four" , 5, "six"]
//     console.log(arr[1])
//     const arr2: (number|string)[] = [1, "two", 3, "four" , 5, "six"]
//     console.log(arr2[3])
// }



//@ accessing array elements
// {
//     const arr: Array<number | string> = [1, "two", 3, "four", 5, "six"]
//     console.log(arr[1])

//     //@ 1 normal for loop
//     // for (let i = 0; i < arr.length; i++) {
//     //     console.log(arr[i])
//     // }

//     //@ 2 for in loop
//     // for (let i in  arr) {
//     //     console.log(i)
//     //     console.log(arr[i])
//     // }

//     //@ 3 for of loop
//     for (let i of arr) {
//         console.log(i)
//     }
// }

//@ array methods
// {
//     const arr: Array<number | string> = [1, "two", 3, "four", 5, "six"]
//     const arr2: Array<number> = [1, 2, 3, 4, 5, 6, 7]
//     // for (let i in arr) {
//     //     if(typeof arr[i]=="string"){
//     //         delete arr[i]
//     //     }
//     // }
//     // console.log(arr)
//     console.log(arr2.copyWithin(2,2,5))
//     console.log(arr2.shift())
// }


//@ filter method
{
    const ard: Array<number> = [2, 3, 4, 5, 6, 7, 8, 9]
    var dt = ard.filter((current, i, ard) => {
        return current % 2 != 0
    })
    console.log(dt)
}