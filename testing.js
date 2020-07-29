var obj1={
    name:"sravan",
    id:"sra1",
    function: function(name,id){
        console.log(name+ " - "+id);
    }
}
var obj2={
    name:"sravan2",
    id:"sra2"
}
obj1.function.call({obj2}, obj2.name,obj2.id);