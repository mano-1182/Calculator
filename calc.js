var a = document.getElementById("display");
var btn = document.getElementById("num");
var num1='',num2='',sign,copyans;
function add(event){
    let symbol = event.target.textContent
    if(symbol === 'AC'){
        num1 = '';
        num2='';
        sign='';
        a.textContent = '';
    }
    else if(symbol==='C'){
        num1 = num1.slice(0,-1)
        a.textContent = num1
    }
    else if(symbol === '+' || symbol === '-' || 
    symbol === '*' ||  symbol === '/'){
        a.textContent = ''
        sign = symbol
        num2 = num1
        num1 = ''
    }
    else if(symbol === '='){
        if(sign==='+'){
            a.textContent = (Number(num2) + Number(num1)).toFixed(4)
            num1 = a.textContent
        }
        if(sign==='-'){
            a.textContent = (Number(num2) - Number(num1)).toFixed(4)
            num1 = a.textContent
            }
        if(sign==='*'){
            a.textContent = (Number(num2) * Number(num1)).toFixed(4)
            num1 = a.textContent
            }
        if(sign==='/'){
            a.textContent = parseFloat(num2) / parseFloat(num1)
            a.textContent = Number(a.textContent).toFixed(4)
            num1 = a.textContent
            }
    }
    else if(symbol==='Ans'){
        copyans = a.textContent
    }
    else{
        num1 = num1.concat(symbol)
        a.textContent = num1
    }
}