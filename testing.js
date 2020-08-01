var obj1={
    name:"sravan",
    id:"sra1",
    sra1: function(name,s){
        console.log(name+ " - "+s);
    }
}
var obj2={
    name:"sravan2",
    id:"sra2"
}
obj1.sra1.apply({obj2}, [obj2.name,obj2.id]);
