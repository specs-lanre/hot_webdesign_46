item1={'name':"cofee",
"quantity":1,
"unitprice":1500,
"discount":0,
"details":function () { return this.discount+" ,"+this.name}
}

item2={'name':"bread",
"quantity":1,
"unitprice":1800,
"discount":0,
"details":function () { return this.discount+" ,"+this.name}
}

item3={'name':"butter",
"quantity":1,
"unitprice":2000,
"discount":0}

idname=item1['name']
console.log(idname)

idname=item2['name']
console.log(idname)

idname=item3['name']
console.log(idname)






idname=item1.name
console.log("xx=>>",idname)

idname=item2.name
console.log("xx=>>",idname)

idname=item3.name
console.log("xx=>>",idname)


item4 = new Object()
item4.name="milk"
item4.quantity=1
item4.discount=0
item4.unitprice=4000
console.log(item4)
console.log("===============================")
console.log(item3)
item3.status="in stock"
console.log(item3)


function sample(){
    console.log("this is a function")
}

sample()


item4.details=function () { return this.discount+" ,"+this.name}


item3.details=function () { return this.discount+" ,"+this.name}
console.log("***",item3)

console.log("***",item3.details())


//LOOPs
text5="welcome"
lenx=text5.length

for(x=0;x<lenx;x=x+1){
    console.log(x,text5[x])
}

for(x in item1){
    console.log(x)
}

start=0
stop=text5.length
while(start < stop){
    console.log(start)
    start=start+1
}

Object.keys(item1).forEach(key =>{
console.log(key)

})

allitems=new Object()

x=item1.name
allitems[x]=item1

x=item2.name
allitems[x]=item2

x=item3.name
allitems[x]=item3

x=item4.name
allitems[x]=item4

console.log("***",allitems)