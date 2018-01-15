
var display = document.getElementById('viewer');
var maxLength = 11;
var resultado = '';


function numerosAdd(x){
    
    if(display.value.length <= maxLength){
        display.value += x;
        
    }else{
     display.value = '   Too much!'; 
        
    }

    if(display.value === resultado){
        display.value ='';
        display.value += x;
        
    }
    
    
    if(x === 'C'){
        display.value = '';
        resultado = '';
        
    }
}

function backspace() {
  var num = display.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  display.value = newNum;
}

function opsAdd(x){
    
    var stringLength = display.value.length; 
    var lastChar = display.value.charAt(stringLength - 1); 
    
    if(display.value.length === 0){
        x = '';
      
        
    }
     
    if(lastChar !== x || lastChar === '.'){
        
        display.value += x;
    }
        
    if(display.value === resultado){
        display.value += x;
    }
    
    
}


function numerosAddDot(){
    
    if(display.value.length == 0){
        display.value = '0.';
        
    }else if(display.value.indexOf('.') === -1) {
        display.value = display.value + '.';  
    
    }  
}
    
function result(num){
    
    num = display.value;
    num = eval(num);
    display.value = num;
    
    
    if(display.value.indexOf('.') !== -1){
    display.value = num.toFixed(2);
    
    }
    
    
}

numerosAdd(x)
opsAdd()
numerosAddDot()
result()
backspace()