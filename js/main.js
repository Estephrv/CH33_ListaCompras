// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let btnAgregar = document.getElementById("btnAgregar");
let btnClear= document.getElementById("btnClear");
//Se validan cuando de click en los botones: Agregar
let alertValidaciones = document.getElementById("alertValidaciones");
let tablaListaCompras = document.getElementById ("tablaListaCompras");
let cuerpoTabla = tablaListaCompras.getElementsByTagName ("tbody").item(0);
let contador= 0;
let precio= 0;

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }//if length
    if (isNaN(txtNumber.value)){
        return false;
    }//isNaN
    if (parseFloat (txtNumber.value)<=0){
        return false;
    } // <=0
        return true;
    } //Validar Cantidad

    function getPrecio(){
        return Math.floor(((Math.random() *100)*100))/100;
    } // getPrecio

btnAgregar.addEventListener("click", function(event){
    console.log("ciclick");
    let isValid = true;
    event.preventDefault(); 
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";

    if (txtNombre.value.length<3){
        alertValidaciones.innerHTML="El campo <strong>Nombre</strong> es requerido <br/>"
        alertValidaciones.style.display="block"; //Lo muestra en Bloque
        txtNombre.style.border="solid thin red";
        isValid= false;
    }//If txtNombre < 3

    if (! validarCantidad()){
        alertValidaciones.innerHTML+="El campo <strong>Cantidad</strong> es requerido"
        alertValidaciones.style.display="block"; //Lo muestra en Bloque
        txtNumber.style.border="solid thin red";
        isValid= false;
    } //if ! validarCantidad
    if (isValid){
    contador++;
    precio= getPrecio();
    let row= `<tr> 
        <td>${contador}</td>
        <td>${txtNombre.value}</td>
        <td>${txtNumber.value}</td>
        <td>${precio}</td>
     </tr>`; 
     cuerpoTabla.insertAdjacentHTML("beforeend",row);
     txtNombre.value="";
     txtNumber.value="";
     txtNombre.focus();

} //isValid
}); //btnAgregar click

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";
    txtNombre.value="";
    txtNumber.value="";
    cuerpoTabla.innerHTML="";
}); //btnClear click