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

    //for dropdown.html
    $("#city").change(function(e){
        var val=$(this).find(":selected").val();
        if(val==9)
        {
            e.preventDefault();
            console.log('entered');
            $(this).removeClass("border");
            $("#dropdown_table").removeClass("border");
            $("#citynames").css('display','block');
        }
        else
        {
            $(this).removeClass("border");
            $("#dropdown_table").removeClass("border");
            $("#citynames").css('display','none').find('input').prop('checked', false);
        }
    });
    $('#dropdown_table td').find("label, input").mouseover(function(){
        $(this).addClass('pointer');
    });
    $('#dropdown_table td').click(function(){
        $(this).find('input').prop('checked', true);
    });
    $("#city").find('option[value="0"]').attr("disabled", "disabled");
    $("#submitcity").click(function (e) { 
        e.preventDefault();
        var selvalue = $('#city option:selected').val();
        var sellabel= $('#city option:selected').text();
        var radioval = $('input[name=cityradio]:checked').val();
        var radiolabel = $('input[name=cityradio]:checked').next('label').text();
        //alert(radioval);
        if(selvalue==0){
            $("#city").addClass("border");
            alert("please select your city.");
        }
        else if(selvalue==9 && radioval==undefined){
            $("#dropdown_table").addClass("border");
            alert("please select your city.");
        }
        else
        {
            $("#city,#dropdown_table").removeClass("border");
            var scity;
            if(selvalue<9){scity=sellabel;}
            else{scity=radiolabel;}
            $("#cityimages,#citynames,#next").css('display','none');
            $("#success").css('display','block').find('span').html("Thank you! You have selected <font color='green'>"+scity+"</font> and it is submitted successfully.");
            e.preventDefault();
        }
        
    });
    $("#resetcity").click(function (e) {
        //alert($('#city option:selected').val());
        $("#city,#dropdown_table").removeClass("border");
        $('#city option[value=0]').prop('selected', true);
        $("#citynames").css('display','none').find('input').prop('checked', false);
    });

});