let fruits = ["Apple", "Orange", "Plum","berries","mango"];
console.log(fruits)
console.log(fruits[3])

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}


result = ages.every(checkAdult);
console.log(result)


let a = [20, 30, 40, 50];
a.splice(1, 3);
a.splice(1, 0, 3, 4, 5);
console.log(a);


function addit(p1, p2) {
    return p1 * p2;
}
document.getElementById("demo").innerHTML = addit(4, 3);



           function sayHello()  {
                             alert("Hello World")
            }


            function doFunction(x) {
  x.style.background = "yellow";
}




