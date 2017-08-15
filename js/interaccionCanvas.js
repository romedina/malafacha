var cnv;


function setup(){
	cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent("txtBienvenida_canvas");
	
}

function draw(){
	background(0);
	dibujarTriangulos();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function dibujarTriangulos(){

	var numTriangulos = 15;

	var tamano = 50;
	
	var aPosX = windowWidth/2;
	var aPosY = windowHeight/2 - tamano;
	
	var bPosX = windowWidth/2 - tamano;
	var bPosY = windowHeight/2 + tamano;
	
	var cPosX = windowWidth/2 + tamano;
	var cPosY = bPosY;

	var cambioMouseX = 0;
	var cambioMouseY = 0;
	var cambio = 0;
	var offsetCambio = 0;
	

	stroke(70);
	noFill();

	for(var i = 1; i < numTriangulos; i++){
			
		cambio = i * 10;
		offsetCambio = 9;
		strokeWeight(1);
		cambioMouseX = map(mouseX,0,windowWidth,-(i*offsetCambio),(i*offsetCambio));
		cambioMouseY = map(mouseY,0,windowHeight,-(i*offsetCambio),(i*offsetCambio));

		triangle(aPosX  + cambioMouseX, aPosY - cambio + cambioMouseY,bPosX - cambio + cambioMouseX,bPosY + cambio + cambioMouseY,cPosX + cambio + cambioMouseX,cPosY + cambio + cambioMouseY);
	}
	
	for(var i = 1; i < numTriangulos; i++){
		cambio = i * 51;
		offsetCambio = 10;
		strokeWeight(2);
		cambioMouseX = map(mouseX,0,windowWidth,-(i*offsetCambio),(i*offsetCambio));
		cambioMouseY = map(mouseY,0,windowHeight,-(i*offsetCambio),(i*offsetCambio));

		triangle(aPosX  + cambioMouseX, aPosY - cambio + cambioMouseY,bPosX - cambio + cambioMouseX,bPosY + cambio + cambioMouseY,cPosX + cambio + cambioMouseX,cPosY + cambio + cambioMouseY);
	}

	for(var i = 1; i < numTriangulos; i++){
		cambio = i * 75;
		offsetCambio = 20;
		strokeWeight(1);
		cambioMouseX = map(mouseX,0,windowWidth,-(i*offsetCambio),(i*offsetCambio));
		cambioMouseY = map(mouseY,0,windowHeight,-(i*offsetCambio),(i*offsetCambio));

		triangle(aPosX  + cambioMouseX, aPosY - cambio + cambioMouseY,bPosX - cambio + cambioMouseX,bPosY + cambio + cambioMouseY,cPosX + cambio + cambioMouseX,cPosY + cambio + cambioMouseY);
	}
	

}