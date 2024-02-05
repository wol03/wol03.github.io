 
function pc(){   
   document.getElementById('inicio').style.display='none';
   document.getElementById('LOGIN').style.display='block';
   document.getElementById('LOGIN').style.width = '40%';
   document.getElementById('pagina1').style.width = '40%' ;
   document.getElementById('pagina2').style.width = '40%' ;
   document.getElementById('noti').style.width = '40%' ;
   document.getElementById('evento').style.width = '40%' ;


   alert("estoy en pc")
}
function movil(){
   document.getElementById('inicio').style.display='none';
   document.getElementById('LOGIN').style.display='block';
   document.getElementById("LOGIN").style.overflowY = 'scroll';
   document.getElementById("LOGIN").style.width = "100%";
   document.getElementById("pagina1").style.width = "100%" ;
   document.getElementById("pagina2").style.width = "100%" ;
   document.getElementById("noti").style.width = "100%" ; 
   document.getElementById("evento").style.width = "100%" ;
   
   document.getElementById("icono1").style.marginLeft = "80%" ;
   
   document.getElementById("buscar").style.height = "80%";
   
   document.getElementById('pasea').style.width = "33%";
   
   document.getElementById('resta').style.width = "33%";
   alert("modo mobil");

}
 const user = [];
 const password = [];

 var c = document.getElementById("skip");
 function registrar(){
 user.push(document.getElementById("name"));
 password.push(document.getElementById("contraseña"));
 document.getElementById('LOGIN').style.display = 'none';
 alert("bien venido");
 document.getElementById('pagina1').style.display = 'block';
 var NA = document.getElementById("Nombre").value;
 if(NA === "" ){
    document.getElementById("name").textContent ="Name";
    document.getElementById("@name").textContent ="@Name";
 }
 else{ 
    document.getElementById("name").textContent = NA;
    document.getElementById("@name").textContent="@" + NA ;
}

}

function change1(){
var a = document.getElementById('boton1');
var b = document.getElementById("boton2");
if (a.className == 'bx bxs-circle bx-sm') {
 alert("ya estas en la pestaña 1");
}
else{
a.className = 'bx bxs-circle bx-sm';
b.className = 'bx bx-circle bx-sm';
document.getElementById("parte2").style.display = 'none';
document.getElementById("parte1").style.display = 'block';

}
}
function change2(){
var a = document.getElementById('boton1');
var b = document.getElementById("boton2");
if (b.className == 'bx bxs-circle bx-sm') {
 alert("ya estas en la pestaña 2");
}
else{
a.className = 'bx bx-circle bx-sm';
b.className = 'bx bxs-circle bx-sm';
document.getElementById("parte2").style.display = 'block';
document.getElementById("parte1").style.display = 'none';
}
}

function change3(){
document.getElementById("pagina1").style.display = 'none';
document.getElementById("pagina2").style.display = 'block';
}
function cerrar(){
document.getElementById("pagina1").style.display = 'none';
document.getElementById("pagina2").style.display = 'none';
document.getElementById('LOGIN').style.display = 'block';
document.getElementById("Nombre").value  = "";
document.getElementById("Contraseña").value = "";
document.getElementById("buscar").value = "";
document.getElementById('buscar').placeholder = "";

document.getElementById("veterinario").style.display = 'none';
document.getElementById("pasear").style.display = 'none';
document.getElementById("restaurante").style.display = 'none';
document.getElementById("hojab").style.display='block';
document.getElementById("vete").style.backgroundColor = 'white';
document.getElementById("resta").style.backgroundColor = 'white';
document.getElementById("pasea").style.backgroundColor = 'white';
}

function noti(){
document.getElementById("buscador").style.display = 'none';
document.getElementById("noti").style.display= 'block';
}
function cerrarnoti(){
document.getElementById("buscador").style.display = 'block';
document.getElementById("noti").style.display = 'none';

}
var a = 0;
function veterinario(){
document.getElementById("veterinario").style.display = 'block';
document.getElementById("pasear").style.display = 'none';
document.getElementById("restaurante").style.display = 'none';
document.getElementById("hojab").style.display='none';

document.getElementById("texto2_Vete").style.display='block';
document.getElementById("texto1_Vete").style.display='block';
document.getElementById("vete").style.backgroundColor = '#67686b';
document.getElementById("resta").style.backgroundColor = 'white';
document.getElementById("pasea").style.backgroundColor = 'white';
alert("por motivos de no tener un base de dato,solo podemos mostrar un ejemplo de las preguntas como muestrará en los siguiente");
document.getElementById("buscar").value = "Mi perro no quiere comer";
document.getElementById('buscar').placeholder = "busca tu problema";
}
function restaurante(){
document.getElementById("veterinario").style.display = 'none';
document.getElementById("pasear").style.display = 'none';
document.getElementById("restaurante").style.display = 'block';
document.getElementById("hojab").style.display='none';
document.getElementById("vete").style.backgroundColor = 'white';
document.getElementById("resta").style.backgroundColor = '#67686b';
document.getElementById("pasea").style.backgroundColor = 'white';
alert("por motivos anteriores solo muestra 4 restaurante de Madrid y para más información darle click al imagen");
document.getElementById("buscar").value = "Madrid";
document.getElementById('buscar').placeholder = "busca tu ciudad";
}
function paseador(){
   document.getElementById("veterinario").style.display = 'none';
   document.getElementById("pasear").style.display = 'block';
   document.getElementById("restaurante").style.display = 'none';
   document.getElementById("hojab").style.display='none';
document.getElementById("vete").style.backgroundColor = 'white';
document.getElementById("resta").style.backgroundColor = 'white';
document.getElementById("pasea").style.backgroundColor = '#67686b';
document.getElementById("buscar").value = "";
document.getElementById('buscar').placeholder = "busca veterinarios,tiendas de mascota...";
alert("pon los locales que busca y dale al boton ubicación")
}
function paginaG(url){
   
   window.open(url, '_blank');
}
function mapa(){
   var ubi= document.getElementById("buscar").value;
   if(ubi.trim() ==""){
   alert("pon un establecimiento que buscas");
   }
   else{
      
   var url = 'https://www.google.com/maps/search/' + encodeURIComponent(ubi +" cerca de mi");
   window.open(url, '_blank');
   }

}
function evento(){
   document.getElementById("pagina2").style.display = 'none';
   document.getElementById("evento").style.display= 'block';
}
function cerrarEvento(){
   document.getElementById("pagina2").style.display = 'block';
   document.getElementById("evento").style.display= 'none';
}
function Cpaseador(){
   alert("todavía no disponible")
}
