function encontrarObjetosDisplay(){
    var arraEntrada = new Array();
    arraEntrada = document.getElementById("archivo-svg").contentDocument.getElementsByTagName("g");
      var arraSalida = new Array();
    for(i=0;i< arraEntrada.length;i++){
      etig = document.getElementById("archivo-svg").contentDocument.getElementsByTagName("g")[i];
      if(etig.getAttribute("v:layerMember") != "none"){
              arraSalida[i] = document.getElementById("archivo-svg").contentDocument.getElementsByTagName("g")[i];
         }
      else{
        arraSalida[i] = null;
      }
    }
    return arraSalida;
  }
  
  function limpiarNull(arraEntrada){
      var arraSalida = new Array();
    var j = 0;
    for(i=0; i< arraEntrada.length; i++){
      if(arraEntrada[i] != null){
        arraSalida[j] = arraEntrada[i];
        j++;
      }
    }
    return arraSalida;
  }
  
  function crearBoton(Entrada,i){
    var botona = document.createElement("input");
      botona.setAttribute("type","checkbox");
      botona.setAttribute("name","my-checkbox");
      botona.setAttribute("data-layer",i);
      botona.setAttribute("data-size","large");
      botona.setAttribute("id","btn"+i);
    var titulo = document.createElement("h3");
      titulo.innerHTML = Entrada;
    var fila = document.createElement("li");
      fila.appendChild(botona);
      fila.appendChild(titulo);
      fila.setAttribute("class","list-group-item text-center");
    var panel = document.getElementById("capas");
      panel.appendChild(fila);
  }
  
  function iniciarBoton(Entrada){
    $('#btn'+Entrada).bootstrapSwitch();
    activacion(Entrada);
  }

  function crearBotones(){
    var elementosV = document.getElementById("archivo-svg").contentDocument.getElementsByTagName("v:layer");
    for(i=0; i<elementosV.length;i++){
        if(elementosV[i].getAttribute("v:name") != "default" ){
           if(elementosV[i].getAttribute("v:name") != null){
            crearBoton(elementosV[i].getAttribute("v:name"),elementosV[i].getAttribute("v:index"));
            iniciarBoton(elementosV[i].getAttribute("v:index"));
           }
        }
    }
  }
function activacion(i){
  $('#btn'+i).on('switchChange.bootstrapSwitch',function (e,data) {
    for(a=0;a<arrayobjetosSinnull.length;a++){
                if(arrayobjetosSinnull[a].getAttribute("v:layerMember")== i){
                    if((arrayobjetosSinnull[a].getAttribute("display")=="") ){
                        arrayobjetosSinnull[a].setAttribute("display","none");
                    }
                    else{
                        arrayobjetosSinnull[a].setAttribute("display","");
                    }
                }   
            }   
    });
}





      window.onload = function() {
        svgPanZoom('#archivo-svg', {
          zoomEnabled: true
        });
          
          var arrayobjetosOcultos = encontrarObjetosDisplay();
          var arrayobjetosSinnull = limpiarNull(arrayobjetosOcultos);
          crearBotones();
      };
 

