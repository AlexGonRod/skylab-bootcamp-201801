//larger_integer
function largerInteger(a, b) {

    if (a > b) {
        console.log(a)

    } else {
        console.log(b)
    }

}
largerInteger(2, 3)

//sign_product

function signProduct(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        alert('The sign is -');
    }
}

signProduct(3, -7, 2)

//sort_numbers
function sortNumbers() {
    var numbers = [0, -1, 4]

    numbers.sort(function (a, b) {
        return b - a;
    })
    console.log(numbers)

}
sortNumbers()

//function shortNumber(num1,num2,num3){
if (num1 > num2 && num1 > num3 && num2 > num3)
    return num1 + " " + num2 + " " + num3;
else if (num2 > num1 && num2 > num3 && num1 > num3)
    return num2 + " " + num1 + " " + num3;
else if (num3 > num1 && num3 > num2 && num1 > num2)
    return num3 + " " + num1 + " " + num2;
else if (num1 > num2 && num1 > num3 && num2 < num3)
    return num1 + " " + num3 + " " + num2;
}
console.log(shortNumber(4, 0, -1));

//largest_number

function largestNumbers(a, b, c, d, e) {

    if (a > b && a > c && a > d && a > e) {
        console.log('Largest number is ' + a)

    } else if (b > a && b > c && b > d && b > e) {
        console.log('Largest number is ' + b);

    } else if (c > a && c > b && c > d && c > e) {
        console.log('Largest number is ' + c);

    } else if (d > a && d > b && d > c && d > e) {
        console.log('Largest number is ' + d);

    } else {
        console.log('Largest number is ' + e)
    }
}
largestNumbers(-5, -2, -6, 0, -1)

//odd_or_even
function oddOrEvent() {

    for (var i = 0; i <= 15; i++) {
        if (i % 2) {
            console.log(i + " is odd")
        } else {
            console.log(i + " is even")
        }
    }

}
oddOrEvent()

//FizzBuzz

function fizzBuzz() {
    for (var i = 0; i < 100; i++) {
        if (i % 3 == 0) {
            console.log(i + ' Fizz');

        } else if (i % 5 == 0) {
            console.log(i + ' Buzz')

        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + ' FizzBuzz')

        } else {
            console.log(i)

        }
    }
}

fizzBuzz()

//

function nested() {
    var resultado = '';
    for (var i = 0; i < 6; i++) {
        console.log(resultado += '*');

    }
}

nested()