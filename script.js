console.log("This is a javascript file just for demo");
var name = "Brian";
var age = 28;
var isMarried = false;
var address = {
    city: "Boston",
    state: "MA",
    zip: "02115"
};
var carModel;

var list = ["John", "Jane", "Mary", 32, false];
    list2 = [];
    list3 = new Array(12, false);

for (var x = 1; x <=10; x++) {
    console.log(x);
}

for (var y = 0; y < list.length; y++) {
    console.log(list[y]);
}
// var x = 0;
// while (x > 0){
//     console.log(x);
// }

function add(val1, val2) {
    return val1 + val2;
}

console.log(add(45, 7));

var square = function(number) {
    return number * number;
}

console.log(square(5));
