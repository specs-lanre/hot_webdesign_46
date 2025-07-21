
//COMPARISON OPERATORS
val1=100
y=10
zee=300
dee="300"
///EQUALS TO ==
result = val1==zee
console.log("**",result)

result = dee==zee
console.log("**>>",result)


///EQUALS TO === check if equal in value and type
result = dee===zee
console.log("**",result)

///GREATER THAN  check if greatr than
result = dee>zee
console.log("**",result)

///LESSER THAN  check if greatr than
result = dee<zee
console.log("**",result)

///LESSER THAN  or equals check if lesser than or equals
result = dee<=zee// dee<zee or dee==zee
console.log("**-->",result)


///greater THAN  or equals check if greater than or equals
result = dee>=zee// dee<zee or dee==zee
console.log("**-->",result)

///greater THAN  or equals check if greater than or equals
result = dee>=zee// dee<zee or dee==zee
console.log("**-->",result)




//logic operators
//and ,or ,not
rs1 = dee==zee
console.log("==>",rs1)

rs2 = val1==zee
console.log("==>",rs2)


console.log("===>",rs1 && rs2)

console.log("===>",rs1 || rs2)
console.log("===>",!(rs1 || rs2))


//check condition using if and else
age=16
if (age >=18){
    console.log("you can drive")
}
else{
  console.log("you can not  drive, because you are less tan 18 !")  
}


//check condition using tenary oprator
age>=18? console.log("yes") :console.log("noo")
