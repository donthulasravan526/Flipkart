$(function(){
    $("#result").hide();
    $("#reset").click(function(){
        $('input[type=checkbox]').prop("checked",false);
    });
    //validation for checks
    $("#submit").click(function(){
        //var flag=true;
        //if ($('input[type=checkbox]').is(":checked")){window.location.href = "success.html";} else{alert("answer required");}
        if ($('input[type=checkbox]').is(":checked")){ 
            var name=$('input[type=checkbox]:checked').parent().prev().find('.name').text();
            //console.log('name');
            $("#main").hide();$("#result").show();$("#winner").text(name);event.preventDefault();} else{alert("answer required");}
        }); 
    //to uncheck other checks if 
    $(".check").click(function(){
        var a=$(this).attr('id').substring(1);
        for(i=1;i<4;i++)
        {
            if(i!=a){$("#a"+i).prop("checked",false);}
        }
    });
});