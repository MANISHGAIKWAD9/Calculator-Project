var buttons = document.getElementsByClassName("button");
var temp = document.getElementsByTagName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null; 

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value == 'AC'){
            display.innerText = '';
        }else if(value == '+/-'){
            operand1 = parseFloat(display.textContent);
            operand1 = -1 * operand1;
            display.innerText = operand1;
        }else if(value == '%'){
            operand1 = parseFloat(display.textContent);
            operand1 = operand1/100;
            display.innerText = operand1;
        }else if(value == '/'){
            operand1 = parseFloat(display.textContent);
            operator = '/';
            display.innerText = '';
        }else if(value == '*'){
            operand1 = parseFloat(display.textContent);
            operator = '*';
            display.innerText = '';
        }else if(value == '-'){
            operand1 = parseFloat(display.textContent);
            operator = '-';
            display.innerText = '';
        }
        else if(value == '+'){
            operand1 = parseFloat(display.textContent);
            operator = '+';
            display.innerText = '';
        }else if(value == '.'){
            display.innerText += '.';
        }else if(value == '='){
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if(result){
                display.innerText = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }else{
            display.innerText += value;
        }
    });
}