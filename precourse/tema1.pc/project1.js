var total = [];
function calc(num1, num2){

if(typeof num2 === 'undefined'){
    return Math.sqrt(num1).toFixed(2);

}else if(typeof num1 === 'string' && typeof num2 === 'string'){
        console.log('Only numbers, please');

    }else{

    function sum(){
    return num1 + num2;

    }

    function subs(){
        return num1 - num2;
    }

    function mult(){
    return num1 * num2;
    }

    function div(){
    return num1 / num2;
    }


total.push(num1 + " + " + num2 + " = " + sum() + ", " + num1 + " - " + num2 + " = " + subs() + ", " + num1 + " * " + num2 + " = " + mult() + ", " + num1 + " / " + num2 + " = " + div());
console.log(total.join());


}
}
calc(7, 3)


//

function calc(){
    var totalSum = 0;
    for(num in arguments){
        totalSum += arguments[num];
    }
    console.log(totalSum.toFixed(2));


    function substract(){
        var totalRest = 0;
        for(num in arguments){
            if(totalRest === 0){
                totalRest += arguments[num];
                totalRest !== 0;

            }else{
                totalRest -= arguments[num];
            }
        }
        console.log(totalRest.toFixed(2));
    }

    function multiply(){
        var totalMult = 0;
        for(num in arguments){
            if(totalMult === 0){
                totalMult += arguments[num];
                totalMult !== 0;

            }else{
                totalMult *= arguments[num];
            }
        }
        console.log(totalMult.toFixed(2));
    }

    function divide(){
        var totalDiv = 0;
        for(num in arguments){
            if(totalDiv === 0){
                totalDiv += arguments[num];
                totalDiv !== 0;

            }else{
                totalDiv *= arguments[num];
            }
        }
        console.log(totalDiv.toFixed(2));
    }


    function newPrompt(){
        var promptNew = prompt("New numbers? y/n");

        if(promptNew === '' || promptNew === 'n'){
            console.log("Bye!...");
        }else{
            return newPrompt;
        }
    }



    substract(1,2,3,4,5,6,7,8,9)
    multiply(1,2,3,4,5,6,7,8,9)
    divide(123, 2, 3)
    newPrompt()
}

calc(1,2,3,4,5,6,7,8,9)
