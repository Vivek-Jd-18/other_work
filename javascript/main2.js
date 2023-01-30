const fs = require("fs");

function updater(location, obj) {

    let usersjson = fs.readFileSync(location, "utf-8");
    // console.log(usersjson)
    let users = JSON.parse(usersjson);

    let arr = []
    // var obj = {
    //     username: "James",
    //     surname: "Brandon",
    //     goals: 3,
    //     assists: 2
    // }

    users.map((data) => {
        arr.push(data)
    })
    arr.push(obj)

    usersjson = JSON.stringify(arr, null, 2);

    fs.writeFileSync(location, usersjson, "utf-8");

    let usersjson2 = fs.readFileSync(location, "utf-8");
    console.log(usersjson2)

}


updater("./files/data1.json", {
    "name": "Dani Carvajal",
    "club": "RMA",
    "country": "colombia"
})
