const add = function(a,b){
    return a + b;
}

const subtract = function(a,b){
    return a - b; 
}

const multiply = function(a,b){
    return a * b;
}

const divide = function(a,b){
    return a / b;
}

let exp = [];
let sub = 0;
let maxNum = 18;
let operator = [];
let num = [];
function operate(exp){
    if(exp[0] == 0){exp.splice(0,1)}
    if(exp[0] == '-'){sub = exp.splice(0,1);}
    // if(exp.length > maxNumber){
    //     arr.splice( 0, exp.length - maxNum);
    // }
    console.log("sub:" + sub)

    let rExp = exp;

    index = 0;

    let operator = [];
    let num = [];

    for(i=0; i< rExp.length ; i++){
        if(isNaN(parseInt(rExp[index]) && rExp[index] != ".") ){
            operator.push(rExp[index])
            rExp.splice(index, 1)
        break;
        }
        else{
            num.push(rExp[index])
            rExp.splice(index, 1)
            continue;
        }
    }
    num.unshift(sub)
    let num2 = parseFloat(rExp.join(''))
    let num1 = parseFloat(num.join(''))

    switch (operator[index]) {
        case "+" :
            return add(num1,num2)
        case "-" :
            return subtract(num1,num2)
        case "*" :
            return multiply(num1,num2)
        case "/" :
            if(num2 !=  0){
            return divide(num1,num2)
            }
            else{
            return "ERROR"
            }
    }
}

//Number buttons
const one = document.querySelector('#i1');
one.addEventListener('click', () => {
    exp.push("1");
    document.getElementById('pero').innerText = exp.join('');
})

const two = document.querySelector('#i2');
two.addEventListener('click', () => {
    exp.push("2");
    document.getElementById('pero').innerText = exp.join('');
})

const three = document.querySelector('#i3');
three.addEventListener('click', () => {
    exp.push("3");
    document.getElementById('pero').innerText = exp.join('');
})

const four = document.querySelector('#i4');
four.addEventListener('click', () => {
    exp.push("4");
    document.getElementById('pero').innerText = exp.join('');
})

const five = document.querySelector('#i5');
five.addEventListener('click', () => {
    exp.push("5");
    document.getElementById('pero').innerText = exp.join('');
})

const six = document.querySelector('#i6');
six.addEventListener('click', () => {
    exp.push("6");
    document.getElementById('pero').innerText = exp.join('');
})

const seven = document.querySelector('#i7');
seven.addEventListener('click', () => {
    exp.push("7");
    document.getElementById('pero').innerText = exp.join('');
})

const eight = document.querySelector('#i8');
eight.addEventListener('click', () => {
    exp.push("8");
    document.getElementById('pero').innerText = exp.join('');
})

const nine = document.querySelector('#i9');
nine.addEventListener('click', () => {
    exp.push("9");
    document.getElementById('pero').innerText = exp.join('');
})

const zero = document.querySelector('#i0');
zero.addEventListener('click', () => {
    exp.push("0");
    document.getElementById('pero').innerText = exp.join('');
})

const AC = document.querySelector('#iAC');
AC.addEventListener('click', () => {
    exp.length = 0;
    subCount = 0;
    document.getElementById('pero').innerText = exp.join('');
    dot.disabled = false;
    document.getElementById('para').innerText = "";
})

// Operators

let subCount = 0;
const oper1 = document.querySelector('#oper1');
oper1.addEventListener('click', () => {
    if(exp.length != 0){
    exp.push("+");
    document.getElementById('pero').innerText = exp.join('');
    dot.disabled = false;
    oper1.disabled =  true;
    if(subCount == 2){oper2.disabled = true}
    oper3.disabled =  true;
    oper4.disabled =  true;
    }
})

const oper2 = document.querySelector('#oper2');
oper2.addEventListener('click', () => {
    exp.push("-");
    document.getElementById('pero').innerText = exp.join('');
    subCount++;
    if(subCount == 2){
    dot.disabled = false;
    oper1.disabled =  true;
    oper2.disabled = true;
    oper3.disabled =  true;
    oper4.disabled =  true;
    }
})

const oper3 = document.querySelector('#oper3');
oper3.addEventListener('click', () => {
    if(exp.length != 0){
    exp.push("*");
    document.getElementById('pero').innerText = exp.join('');
    dot.disabled = false;
    oper1.disabled =  true;
    if(subCount == 2){oper2.disabled = true}
    oper3.disabled =  true;
    oper4.disabled =  true;
    }
})

const oper4 = document.querySelector('#oper4');
oper4.addEventListener('click', () => {
    if(exp.length != 0){
    exp.push("/");
    document.getElementById('pero').innerText = exp.join('');
    dot.disabled = false;
    oper1.disabled =  true;
    if(subCount == 2){oper2.disabled = true}
    oper3.disabled =  true;
    oper4.disabled =  true;
    }
})

const rem = document.querySelector('#rem');
rem.addEventListener('click', () => {
    exp.pop();
    document.getElementById('pero').innerText = exp.join('');
    oper1.disabled =  false;
    oper2.disabled =  false;
    oper3.disabled =  false;
    oper4.disabled =  false;
})

const dot = document.querySelector('#idot');
dot.addEventListener('click', () => {
    exp.push(".");
    document.getElementById('pero').innerText = exp.join('');
    dot.disabled = true;
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {

    if(exp.length != 0){
    let storeVar =  String(operate(exp));
    document.getElementById('para').innerText = storeVar;
    exp.length = 0;
    console.log(exp);
    exp.push(storeVar);
    console.log(exp);
    dot.disabled = false;
    oper1.disabled =  false;
    oper2.disabled =  false;
    oper3.disabled =  false;
    oper4.disabled =  false;
    }
})
