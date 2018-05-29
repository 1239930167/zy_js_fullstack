function add(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
// 函数是一等对象，object
// fn 要做什么运算，传进来
// 高阶函数，函数的参数或者返回值是函数
function compute(a, b, fn) {
return fn(a,b);

    // switch (operate) {
    //     case '+':
    //         return add(a, b)
    //         break;
    //         case'-':
    //         return minus(a,b);
    //         break;
    //         case'*':
    //         return multiply(a,b);
    //         break;
    //         case'/':
    //         return divide(a,b);
    // }
}
// 函数传过来，函数名代表函数
console.log(compute(5,8,add));
console.log(compute(5,8,minus));

// js callback fn
// 练习将函数作为参数