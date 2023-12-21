$(document).ready(function(){

    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
          return false;
        return true;
      }

      $("#confirmBtn").click(function(e){
        e.preventDefault();
        var error = 0;
        
        var cardtest = /[0-9]/g;
        
        var name = $("#cardholdername").val();
        var cardno = $("#cardno").val();
        var month = $("#month").val();
        var year = $("#year").val();
        var cvv = $("#cvv").val();

        if(name.length > 0)
            $("#card-name").html(name);


        if(cardno.length > 0){
            $("#card-no").html(cardno);
            $("#cardno").removeClass('err-input');
            if(!cardno.match(/^\d+$/)){
                $(".err-number").fadeIn();
                $("#cardno").addClass('err-input');
            }else{
                $("#cardno").removeClass('err-input');
            }
        }else{
            $(".err-number").fadeIn();
            $("#cardno").addClass('err-input');
        }

        if(month.length>0){
            $(".card-exp").html(month);
            $(".err-exp").fadeOut();
            $("#month").removeClass('err-input');
        }else{
            $(".err-exp").fadeIn();
            $("#month").addClass('err-input');
        }


        if(year.length>0){
            $(".card-year").html(year);
            $(".err-exp").fadeOut();
            $("#year").removeClass('err-input');
        }else{
            $(".err-exp").fadeIn();
            $("#year").addClass('err-input');
        }

        if(cvv.length>0){
            $("#card-cvv").html(cvv);
            $("#cvv").removeClass('err-input');
            $(".err-cvv").fadeOut();
        }else{
            $(".err-cvv").fadeIn();
            $("#cvv").addClass('err-input');
        }

        if(error==1){
            $("div[data-step='1']").fadeOut(function(){
                $("div[data-step='2']").fadeIn();

            });
        }
    });


});