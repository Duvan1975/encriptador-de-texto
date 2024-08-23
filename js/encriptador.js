//----- Selección de Elementos -----//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnLimpiar = document.querySelector(".btn-limpiar");
const pegarTexto = document.querySelector(".texto-pegar");
const mensajeInicial = "Solo letras minúsculas y sin acentos";

//----- Variable para almacenar el texto copiado -----//
let textoCopiado = "";

//----- Botón Encriptar -----//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if (texto == "") {
        aviso.style.background = "#c83349";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto NO debe estar vacío";

        setTimeout(()=>{
            aviso.textContent = mensajeInicial;
            aviso.removeAttribute("style");
        },2500);
    }
    else if(texto !== txt){
        aviso.style.background = "#c83349";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "NO debe contener acentos NI caracteres especiales";

        setTimeout(()=>{
            aviso.textContent = mensajeInicial;
            aviso.removeAttribute("style");
        },2500);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#C83349";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.textContent = mensajeInicial;
            aviso.removeAttribute("style");
        }, 2500);
    }
    else if(/\d/.test(texto)){
        aviso.style.background = "#C83349";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "NO debe contener números";

        setTimeout(()=>{
            aviso.textContent = mensajeInicial;
            aviso.removeAttribute("style");
        },2500);
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnLimpiar.style.visibility = "inherit";
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
})

//----- Botón Desencriptar -----//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if (texto == "") {
        aviso.style.background = "#C83349";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto NO debe estar vacío";

        setTimeout(()=>{
            aviso.textContent = mensajeInicial;
            aviso.removeAttribute("style");
            
        },2500);
    }
    else if(texto !== txt){
        aviso.style.background = "#C83349";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "NO debe contener acentos NI caracteres especiales";

        setTimeout(()=>{
            aviso.textContent = mensajeInicial;
            aviso.removeAttribute("style");
        },2500);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#C83349";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.textContent = mensajeInicial;
            aviso.removeAttribute("style");
        },2500);
    }
    else if(/\d/.test(texto)){
        aviso.style.background = "#C83349";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "NO debe contener números";

        setTimeout(()=>{
            aviso.textContent = mensajeInicial;
            aviso.removeAttribute("style");
        },2500);
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnLimpiar.style.visibility = "inherit";
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

//----- Botón Copiar -----//
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    let copiar = respuesta.innerHTML;
    navigator.clipboard.writeText(copiar).then(() => {
        textoCopiado = copiar;
        pegarTexto.textContent = "- ¡Clic Pegar Texto! -";
        pegarTexto.style.visibility = "inherit";
        pegarTexto.style.background = "#0080FF";
        pegarTexto.style.color = "white";

        setTimeout(()=>{
            pegarTexto.removeAttribute("style");
        },4000);
    });
});

//----- Pegar Texto -----//
pegarTexto.addEventListener("click", e => {
    e.preventDefault();
    if(textoCopiado !== ""){
        txtEncriptar.value = textoCopiado;
    }
});

//----- Botón Limpiar -----//
btnLimpiar.addEventListener("click", e=>{
    e.preventDefault();
    location.reload();
});