// const a:string = "Watch"
// const b = "watch"
// console.log(a)
// console.log(b)
// const myArr = [1, 2, 3, 4, 5,"six"]
// myArr.push("nine")
// console.log(myArr)
var UserNamsespace;
(function (UserNamsespace) {
    var Employee = /** @class */ (function () {
        function Employee() {
            this.name = "Vivek";
        }
        Employee.prototype.getName = function () {
            return this.name;
        };
        return Employee;
    }());
    UserNamsespace.Employee = Employee;
})(UserNamsespace || (UserNamsespace = {}));
var obj = new UserNamsespace.Employee();
console.log(obj.getName());
