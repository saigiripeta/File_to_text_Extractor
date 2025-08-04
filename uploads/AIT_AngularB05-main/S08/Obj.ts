var user:{
    name:string,
    id?:number
}= {
    name:"raj",
    
}


var product : {
    name:string,
    id:number
}

var iphone :{
    name:string,
    id:number
}

var obj1 = {
    id:101,
    gender:"male"
}

var obj2= {
      ...obj1,
      gender:"female"
}

console.log(obj2)

