$(function(){
    //select value change
    $("#city").change(function(e){
        e.preventDefault();
        var val=$(this).find(":selected").val();
        if(val==9)
        {
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
    //cursor pointer on radio 
    $('#dropdown_table td').find("label, input").mouseover(function(){
        $(this).addClass('pointer');
    });
    //when we click on td of radio selecting that radio
    $('#dropdown_table td').click(function(){
        $(this).find('input').prop('checked', true);
    });
    //for the first option in select we are making cursor and option disabled
    $("#city").find('option[value="0"]').attr("disabled", "disabled").css("cursor","none");
    //when submits
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
            //$("#cityimages,#citynames,#next").css('display','none');       
            localStorage.setItem('answer',scity);
            window.location.href = "success.html";
        }
        
    });
    $("#resetcity").click(function (e) {
        //alert($('#city option:selected').val());
        $("#city,#dropdown_table").removeClass("border");
        $('#city option[value=0]').prop('selected', true);
        $("#citynames").css('display','none').find('input').prop('checked', false);
    });
});