function toUpperCase(arr) {

    var result = arr.map(function (x) {
        return x.slice(0, 1).toUpperCase() + x.slice(1);
    });
    console.log(result)
}
toUpperCase('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december')

// // filter

// function Filter(arr, query){
//     return arr.filter(function (el) {
//         return el.indexOf(query) > -1;
//     })
// }
// console.log(Filter(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'], 'j'));

// //reduce
// function countVowels(text) {
//     var characters = text.split('');
//     var vowels = 'aeiouAEIOU';

//     var countVowels = characters.reduce(function (acc, current) {
//         if (vowels.indexOf(current) != -1) {
//             return acc + 1;
//         } else {
//             return acc;
//         }
//     }, 0);
//     return countVowels;

// }
// console.log(countVowels('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'))
// //
// function vowel(str){
//     var vowelSplit = str.split('');
//     var char = 'aeiouAEIOU';

//     var countVowels = vowelSplit.reduce(function (el, current){
//         if(char.indexOf(current) != -1){
//             return el +1;
//         }else{
//             return el;
//         }
//     }, 0);
//     return countVowels

// }
// console.log(countVowels('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'))

// //

// var countVowels;
// (function () {
//     var regex = /[aáàäèéëeìíïiòóoöúùüu]/g;

//     countVowels = function (text) {
//         return text.split("").reduce(function (vowelsCount, letter) {

//             if (letter.toLowerCase().match(regex)) {
//                 return vowelsCount += 1
//             }
//             return vowelsCount
//         }, 0)
//     }
// })()


// //every&some TODO


// function everyMonths(months) {
//     var result = months.every(function (elem) {
//         return elem.length >= 5;
//     });
//     console.log('All months have five or more letters: ' + result)
// }
// function someMonths(months) {
//     var some = months.some(function (elements) {
//         return elements.length >= 5;
//     });


//     console.log('Some months have five or more letters: ' + some)
// }
// everyMonth(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'])
// someMonths(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'])

// //callback

// function accessBar(age, func_tion) {

//     age >= 18 ? func_tion("access") : func_tion();;


// }

// function advisor(permition) {
//     var result;
//     permition == "access" ? (result = "the entrance is allowed") : (result = "the entrance is not allowed");
//     console.log(result);
// }

// accessBar(8, advisor);



///
function Map(arr) {

    var result = arr.map(function (letter) {
        return letter.slice(0, 1).toUpperCase() + letter.slice(1);

    });
    console.log(result)
}
Map(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'])

///

function Filter(arr, query){
  var result = arr.filter(function(el){
    return el.indexOf(query);
  })
return result
}
Filter(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'], 'j')

///

function Reduce(str){

    var Str = str.split('');
    var char = 'aeiouAEIOU';

    var result = Str.reduce(function(el, current){
        if(char.indexOf(current) != -1){
            return el + 1;
        }else{
            return el;
        }
    }, 0);
    return result;
}
Reduce('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.')

///

function Every(arr){
    var result = arr.every(function(el){
        return el.length >= 5;
    })
    return result
}

function Some(arr){
    var result = arr.some(function(el){
        return arr.length >=5;
    })
    return result;
}
Every(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'])
Some(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'])