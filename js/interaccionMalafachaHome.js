console.log("Bienvenido al código de Malafacha S.A de C.V.. Todos los derechos reservados.");

// ======
//			Botón de Carga
// ======

var carga;

function cargando() {
	carga = setTimeout(showPage, 1000);
}

function showPage() {
	$(document).ready(function(){
		$(".loader-container").slideUp();
		$("#loader").slideUp();

	});
}


// ======
//			Interactividad Menu Principal
// ======
$(document).ready(function(){
	$(".menuPrincipal").hide();
    
    // Abrir Menu Principal
    $(".menuBtn_svg").click(function(){
        $(".menuPrincipal").fadeIn();
    });

    // Cerrar Menu Principal
    $("#btnMenu_close").click(function(){
        $(".menuPrincipal").fadeOut();
    });

});

// ======
//          Interactividad Menu Principal
// ======
$(document).ready(function(){
    $("#intro").hide();

    // Abrir Menu Principal
    $("#sliderBtn").click(function(){
        $("#portada").fadeOut();
        $("#intro").fadeIn();
    });

});

// Animacion boton menu

function activarMenu(){
    var lineDrawing = anime({
      targets: '#lineDrawing .lines polyline ',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    });

    var lineDrawingB = anime({
      targets: '#lineDrawing .lines path ',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    });

    var lineDrawingC = anime({
      targets: '#lineDrawing .lines polygon ',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    }); 
}


// ======
//          Contenedores Interactivos
// ======
var numContenedores = 6;
$(document).ready(function(){
    /*
    for(var i = 1; i <= numContenedores; i++){
       $("#" + i).css("background-image: url(../imgs/1_home.jpg)");
    }*/   

});


