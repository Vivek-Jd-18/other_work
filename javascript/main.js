// const fs = require("fs");

// function reader() {
//     const data = fs.readFileSync('./files/data1.json')
//     console.log(JSON.parse(data))
// }

// function clb() {
//     console.log("well done..!")
// }

// function Writer() {

//     data = {}

//     data["key"] = "val2"

//     console.log(data, "drt")

//     var dataC = JSON.stringify(data, null, 2)

//     fs.appendFile("./files/data1.json", dataC, clb)

//     // const res = fs.readFileSync('./files/data1.json')
//     // console.log(JSON.parse(res))
// }

// // Writer("key", "val")
// reader()
// Writer()
// // reader()


















const fs = require('fs')


//check if file exist
if (!fs.existsSync('./files/data1.json')) {
    //create new file if not exist
    fs.closeSync(fs.openSync('./files/data1.json', 'w'));
}

// read file
const file = fs.readFileSync('./files/data1.json')
const data = {
    studentName: 'Joe',
    address: 'abc'
}
console.log(file)
//check if file is empty
if (file.length == 0) {
    //add data to json file
    fs.writeFileSync("./files/data1.json", JSON.stringify([data]))
} else {
    //append data to jso file
    const json = JSON.parse(file.toString())
    //add json element to json object
    json.push(data);
    fs.writeFileSync("./files/data1.json", JSON.stringify(data))
}