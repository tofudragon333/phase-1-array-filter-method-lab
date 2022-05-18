// Code your solution here
// console.log("hello, i am dead.");
// const list = ['Ruby', 'Sunset', 'Bob', 'Dick']
function findMatching(drivers, name) {
    // console.log(name);
    let match = drivers.filter(function(pizza) {
        //console.log(pizza);
        return pizza.toLowerCase() === name.toLowerCase();
    });
    return match;
}
// findMatching(list, "Yennefer of Vengerberg")

function fuzzyMatch(drivers, name) {
    let kindaMatch = drivers.filter(function(pizza) {
        return pizza.charAt(0) === name.charAt(0);
    })
    return kindaMatch;
}

// const list = 

function matchName(drivers, name) {
    // console.log(pizza);
    let exactoMatcho = drivers.filter(arrayItems => arrayItems.name === name);
    return exactoMatcho;
}