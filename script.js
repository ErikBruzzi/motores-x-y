for(var i = 0; i <= 10; i++){
    console.log(i)
}


function fnBotao(){
    alert('Stoped!');
}



var motorx = document.querySelector(".motorx");
var contentx = document.querySelectorAll(".motores .motorx");

let contadorX= 0;

function motorX() {
  contadorX++;

  if (contadorX > contentx.length > 10) {
    contadorX = 0;
  }

  motorx.style.transform = `rotate(${contadorX * 0.1}turn)`;
}

setInterval(motorX, 100);

var motory = document.querySelector(".motory");
var contenty = document.querySelectorAll(".motores .motory");

let contadorY= 0;

function motorY() {
    contadorY++;

  if (contadorY > contenty.length > 10) {
    contadorY = 0;
  }

  motory.style.transform = `rotate(${-contadorY * 0.1}turn)`;
}

setInterval(motorY, 100);



/*
for(var motorX = document.querySelector(".motorx"); motorX <= 10; motorX++){
    while (motorX.transform < 10){
        motorX.transform++

        motorX.style.transform = `rotate(${transform++})`;

    }if (motorX.transform > 10){
        motorX.style.transform = `rotate(${0})turn`;
    }
}
*/

/*
const motorX = document.getElementsByClassName("motorx");
const motorY = document.getElementsByClassName("motory");
const wifiSignal = document.getElementsByClassName("sinal-wifi");
*/

/*

const motores = document.querySelectorAll(".motores")
const motorX = document.querySelectorAll(".motores .motorx");
const motorY = document.querySelectorAll(".motores .motory");

let contador = 0;

function girarX() {
  contador++;

  if (contador > motores.transform - 1) {
    contador = 0;
  }

  motorX.style.transform = `rotate(${-contador + 1})turn`;
}

*/


/*

const local das imagens = document.querySelector(".local das imagens");
const imagens = document.querySelectorAll(".local das imagens && imagens");

let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  local das imagens.style.transform = `translateX(${-contador * 50}%)`;
}

setInterval(slider, 6000);

*/