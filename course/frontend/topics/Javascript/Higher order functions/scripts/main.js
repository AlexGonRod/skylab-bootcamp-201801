var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'].split('')
var monthsUpper = []

var result = months.map(function(x){
    return x.slice(0,1).toUpperCase()
})

// filter
var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];


function filterItems(query) {
    return months.filter(function (el) {
        return el.indexOf(query) > -1;
    })
}

console.log(filterItems('j'));


