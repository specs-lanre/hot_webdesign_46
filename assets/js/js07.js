function addit(){
val1=document.getElementById('val1').value
val2=document.getElementById('val2').value
display=document.getElementById('data')
val1=parseFloat(val1)
val2=parseFloat(val2)
result=val1+val2
data = `${val1} + ${val2} = ${result}`
console.log(data)
display.innerHTML=data

}


//strings
text1="the quick brown fox "
text2="jumped over the lazy white dogs "
text3="1234567890"

expr = /fox/
result = expr.test(text1)
console.log("1--->",result)

expr = /FOX/
result = expr.test(text1)
console.log("2--->",result)


expr = /FOX/i
result = expr.test(text1)
console.log("2--->",result)


var tx=/welcome/ig
var dtext="welcome to classs.you are welcome !"
var result = tx.test(dtext)
console.log("3--->",result)




var tx=/welcome/ig
var dtext="welcome to classs.you are welcome !"
var result = dtext.match(tx)
console.log("4--->",result)




console.log(text1[0])
console.log(text1[1])
console.log(text1[2])
console.log(text1[3])
console.log(text1[5])
console.log(text1[50])
val4=text1.charAt(7)
console.log("the xter at pos 7 is",val4)



//the quick brown fox
function find_it(){
val1=document.getElementById('content').value
val2=document.getElementById('tosearch').value
display=document.getElementById('data')
result = val1.search(val2)
data = ""
if (result==-1)  {
    display.innerHTML="item was NOT found"
}
else{display.innerHTML="item WAS found"}
}


console.log("==>",text1.length)