// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"


{
// Block scope
let blockVar = "I'm block-scoped with let";
let blockLet = "Block scoped let";
const blockConst = "Block scoped constant";

// Valid inside the block
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);
}

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    // console.log(functionVar); Throws ReferenceError
    // console.log(functionLet); Throws ReferenceError
    // console.log(functionConst); Throws ReferenceError
    