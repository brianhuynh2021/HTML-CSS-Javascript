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
console.log(document.images)

var firstItem = document.getElementById("item-1");
console.log(firstItem);

var myList = document.getElementsByClassName("mylist");
var pra = document.getElementsByTagName("p");
console.log(myList);
console.log(pra);

firstItem.style.color = "red";
// myList[0].hidden = true;
myList[1].style.display = "none";

for (var i = 0; i < pra.length; i++) {
    pra[i].style.color = "blue";
}

var submitBtn = document.getElementById("submit"),
    container = document.querySelector(".container");

submitBtn.addEventListener("click", function(event) {
    console.log('Hey, I\'ve been clicked');
});

container.addEventListerner("mouseenter", mouseEnterContainer);

function mouseEnterContainer() {
    console.log("Mouse entered container triggered");

    container.removeEventListener("mouseenter", mouseEnterContainer);
}

document.addEventListener("keyup", function(event) {
    console.log(event.keyCode);
});