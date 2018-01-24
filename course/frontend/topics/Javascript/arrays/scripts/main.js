
// ///
// function isArray(arr) {
//     return arr instanceof Array;
// }

// function _isArray(arr) {
//     return Array.isArray(arr);
// }

// function _isArray(a) {
//     // TODO make this impl null / undefined safe!
//     return a.constructor == Array
// }

// function _isArray(array) {
//     // TODO make this impl null / undefined safe!
//     // WARN! this impl also passes tests 6 and 7, but shouldn't!
//     return array.length >= 0 && ((typeof array) == "object");
// }

// function _isArray(element) {
//     if (element === null || element === undefined) {
//         return false;
//     }
//     var result = Object.prototype.toString.call(element).slice(8, -1);
//     return (result == "Array") ? true : false;
// }

// console.log('0) isArray(undefined) should result false', isArray(undefined));
// console.log('0.1) isArray(null) should result false', isArray(null));
// console.log('1) isArray([]) should result true', isArray([]));
// console.log('2) isArray([1, 2, 3]) should result true', isArray([1, 2, 3]));
// console.log('3) isArray("string") should result false', isArray('string'));
// console.log('4) isArray({}) should result false', isArray({}));
// console.log('5) isArray(1) should result false', isArray(1));
// console.log('6) isArray({ length: 0 }) should result false', isArray({
//     length: 0
// }));
// console.log('7) isArray({ length: 1 }) should result false', isArray({
//     length: 1
// }));


// ///
// function _joinElements(arr) {
//     // TODO make this impl null / undefined safe!
//     var output = '';
//     for (var i = 0; i <= arr.length - 1; i++) {
//         if (i == arr.length - 1) {
//             output += arr[i];
//         } else {
//             output += arr[i] + ', ';
//         }
//     }
//     return output;
// }

// function joinElements(a) {
//     // TODO make this impl null / undefined safe!
//     return a.join(',');
// }

// //console.log('0) joinElements(undefined) should result joined elements', joinElements(undefined));
// console.log('1) joinElements([1, 2, 3]) should result joined elements', joinElements([1, 2, 3]));

// ///

// function _arrayClone(a) {
//     // ERROR! do not pass the tests! should return a new array copy of the original!
//     return new Array(a)
// }

// function arrayClone(arr) {
//     return arr.slice();
// }

// function _arrayClone(array) {
//     // INFO same as before, but more extensive.
//     return array.slice(0, array.length);
// }

// var arr = [1, 2, 3];
// var res;
// console.log('1) arrayClone([1, 2, 3])', res = arrayClone(arr), 'and should be a new array', res != arr);
// arr = [1, 2, 3, [1, 2, 3]];
// console.log('1) arrayClone([1, 2, 3, [1, 2, 3]])', res = arrayClone(arr), 'and should be a new array', res != arr);

// function recursiveArrayClone(source) {
//     var result = [];
//     for (var i = 0; i < source.length; i++) {
//         if (isArray(source[i])) {
//             // Ejemplo de recursividad
//             result.push(recursiveArrayClone(source[i]));
//         } else {
//             result.push(source[i]);
//         }
//     }
//     return result;
// }

// console.log('1) recursiveArrayClone([1, 2, 3, [1, 2, 3]])', res = recursiveArrayClone(arr), 'and should be a new array', res != arr, 'and sub-array should be a new array', arr[3] != res[3]);


// //findDifferences //TODO

// function findDifferences(a, b) {
//     var word = a.concat(b);
//     var counter = 0;
//     var differences = [];

//     for (var i = 0; i < word.length; i++) {

//         for (var j = 0; j < wordd.length; j++) {
//             if (word[i] !== word[j]) {
//                 counter++
//                 differences.push(word[i])
//             }

//         }
//     }
//     return differences
// }

// findDifferences([1, 2, 3], [100, 2, 1, 10])
// findDifferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])
// findDifferences([1, 2, 3], [100, 2, 1, 10])

// //sum and product //TODO

// function sumAndProduct(a) {
//     var result = '';

// }
// sumAndProduct([1, 2, 3, 4])

// //addItems
// var result = [];
// function addItems(a) {
//     result.push(a)
//     return result;

// }
// addItems('hagsd')

// //generateArrayLength

// function generateArray(a, b) {
//     var result = [];
//     for (var i = a; i <= b; i++) {
//         result.push(i);
//     }
//     console.log(result.join(','));
// }
// generateArray(1, 4)
// generateArray(-6, 4)

// //last 

// function last(a, b) {
//     var result = a.reverse();
//     return result.splice(0, b);
// }
// console.log(last([7, 9, 0, -2]))
// console.log(last([7, 9, 0, -2], 3))
// console.log(last([7, 9, 0, -2], 6))

// //sortItem
// function sortItem(a) {
//     var numbers = a
//     numbers.sort(function (a, b) {
//         return a - b
//     });
//     return numbers;
// }
// sortItem([-3, 8, 7, 6, 5, -4, 3, 2, 1])

// //getRandom

// function getRandom(a) {
//     return a[Math.floor(Math.random() * a.length)]

// }
// console.log(getRandom([1, 2, 3, 4, 5]))

// //findDuplicates TODO

// //MergeArrays TODO

// function mergeArrays() {
//     var array1 = [1,2,3];
//     var array2 = [2,30,1];
//     var fullArray = [];
//     for(var i = 0; i < array1.length; i++){
//         if (fullArray.indexOf() === -1) {
//             fullArray.push(array1[i]);
//         for (var i = 0; i < array2.length; i++) {
//             if (fullArray.indexOf() === -1) {
//                 fullArray.push(array2[i]);
//             }
//         } 
//     }
    
//     return fullArray;
// }
// console.log(mergeArrays())

// // mergeArrays

//     function mergeArrays() {
//         var array1 = [1, 2, 3];
//         var array2 = [2, 30, 1];

//         for (var i = 0; i < array2.length; i++) {

//             if (array1.indexOf(array2[i]) === -1) {
//                 array1.push(array2[i]);
//             }

//         }
//         return array1


//     }
//     mergeArrays()

// //separateEven

// function separateEven(a){
//     var even = a.join('-')
//     return even;
// }
// separateEven(025468)

//removeDuplicate
    var duplicate = [];

    function duplicates(arr) {
        for (var i = 0; i < arr.length; i++) {

            if (duplicate.indexOf(arr[i]) == -1) {

                duplicate.push(arr[i]);
            }

        }
        return duplicate;
    }
    duplicates(["Alice", "John", "Maria", "John"])


//showChoice
    function showChoice(arr) {
        var chain = '';
        for (var i = 0; i < arr.length; i++) {
            switch (i + 1) {
                case 1:
                    chain += (i + 1) + 'st choice is ' + arr[i] + '\n';
                    break;
                case 2:
                    chain += (i + 1) + 'nd choice is ' + arr[i] + '\n';
                    break;
                case 3:
                    chain += (i + 1) + 'rd choice is ' + arr[i] + '\n';
                    break;

                default:
                    chain += (i + 1) + 'th choice is ' + arr[i] + '\n';
                    break;
            }

        }
        return chain;
    }
    console.log(showChoice(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]))