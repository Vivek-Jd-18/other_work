var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="./par.ts" />
var ParentFile;
(function (ParentFile) {
    var Chi = /** @class */ (function (_super) {
        __extends(Chi, _super);
        function Chi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Chi.prototype.getName = function () {
            return this.name;
        };
        return Chi;
    }(ParentFile.Par));
    ParentFile.Chi = Chi;
})(ParentFile || (ParentFile = {}));
var obj = new ParentFile.Par();
// console.log(obj.setName("Julian "))
// console.log(obj.getName())
