//Me aseguro de que la pagina se ha cargado toda la pagina
$(document).ready(function(){
    $("#login").animate({
        'top':"10%"
    },300);
    $("#txtNombre").on('keyup',function() {
        $("#txtNombre").css('border','1px solid white');
    });
    $("#btnIniciar").click(function(){
        if($("#txtNombre").val()==""){
            $("#txtNombre").css('border','1px solid red');
            $(".alerta").fadeOut(400);
        }else{
            $("#login").animate({
                'left':"-500px"
            },300,function(){
              $("#login").fadeOut(1000);
            });
        }
        
    });
});