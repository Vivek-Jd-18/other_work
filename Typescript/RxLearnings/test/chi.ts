///<reference path="./par.ts" />
namespace ParentFile {
    export class Chi extends Par {
        getName() {
            return this.name;
        }
    }
}


let obj = new ParentFile.Par();
// console.log(obj.setName("Julian "))
// console.log(obj.getName())