//const {add, mul} = require('./mathUtils')

import {add,mul} from "./mathUtils.js" //ES6 模块规范

console.log(add(20,30))
console.log(mul(300,40))


// webpack --mode=development ./src/main.js  --output   ./dist/bundle.js