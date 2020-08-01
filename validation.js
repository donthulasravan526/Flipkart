$(function(){
    
//for tablevoting.html
    $("#language").change(function(e){
        console.log('entered');
        var langval=$(this).find(":selected").val();
        console.log(langval);
        switch (langval) {
            case '0':
                    $(".tel,.hin").css("display", "none");
                    $(".eng").css("display", "block");
                    $("#votetable").css("border-color","black");$(".errormsg").text('');
                    break; 
            case '1':
                    $(".eng,.hin").css("display", "none");
                    $(".tel").css("display", "block");
                    $("#votetable").css("border-color","black");$(".errormsg").text('');
                    break;
            case '2':
                    $(".eng,.tel").css("display", "none");
                    $(".hin").css("display", "block");
                    $("#votetable").css("border-color","black");$(".errormsg").text('');
                    break;
                    }
    });
    $("#resetvote").click(function(){
        $('input[type=checkbox]').prop("checked",false);
    });
    //validation for checks
    $("#submitvote").click(function(){
        //var flag=true;
        //if ($('input[type=checkbox]').is(":checked")){window.location.href = "success.html";} else{alert("answer required");}
        var lval = $('#language option:selected').val();
        var alert="";
        if(lval==0){ alert = "Please select your vote.";console.log(alert);}if(lval==1){alert = "దయచేసి మీ ఓటును ఎంచుకోండి.";}if(lval==2){alert = "कृपया अपना वोट चुनें।";}
        if ($('input[type=checkbox]').is(":checked"))
        { 
            var name=$('input[type=checkbox]:checked').parent().prev('td').find('.name').text();
            $("#main").css("display", "none");$("#result").css("display", "block");$("#winner").text(name);event.preventDefault();
        } 
        else
        {
            $("#votetable").css("border-color","red");
            $("#votetable").find("th,td:not('.btm')").css("border-color","black");
            $(".errormsg").text(alert);
        }
        }); 
    //to uncheck other checks if 
    $(".check").click(function(){
        $("#votetable").css("border-color","black");
        $(".errormsg").text('');
        var a=$(this).attr('id').substring(1);
        for(i=1;i<4;i++){ if(i!=a){ $("#a"+i).prop("checked",false); } }
    });
});  