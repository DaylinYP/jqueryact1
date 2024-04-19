$(document).ready(function () {
    $("#btnMostrar").click(function () {
        $("p").show()
    });
    $("#btnOcultar").click(function () {
        $("p").hide()
    })
    $("#btnMostrarDespacio").click(function () {//cuando se le de clic al boton_mostrar va a hacer la siguiente función
        //.show ("slow") o colocar tiempo en milisegundos
        //1000= 1 segundo
        $("p").show(2000);

    });
    $("#btnOcultarDespacio").click(function () {
        $("p").hide(2000);
    });
    $("#btnOcultarSlide").click(function () {
        $("p").slideUp(1000);//Desliza hacia arriba el elemento segun el tiempo que se le asigne
    });
    $("#btnMostrarSlide").click(function () {
        $("p").slideDown(2000);//Desliza hacia abajo los elementos segun el tiempo que se le asigne

    });
});