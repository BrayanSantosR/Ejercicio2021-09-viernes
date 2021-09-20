import {data} from "../data/data.js"

const templateCard= document.getElementById("template-card").content;
const fragment=document.createDocumentFragment();
const items=document.getElementById("items");

//addEventListener escuchador o contralador de eventos, 
//"DOMContentLoaded garantiza  que nos llaman la funcion cargar data luego de que cargue el DOM.
document.addEventListener("DOMContentLoaded", ()=> {
    cargarData(data);
})


// crear una funcion para cargar la data o imagenes
const  cargarData=(data) =>{
    console.log(data);
    data.forEach(heroe => {
        //desestructuracion de objetos.
        const{id,superhero,image}=heroe
        templateCard.querySelector("h5").textContent= superhero;
        templateCard.querySelector("img").setAttribute("src",image);

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);

    })
        
    items.appendChild(fragment);

}

// FORMULARIO

form.addEventListener("submit", function LocalStorage(){

    // captura de datos
    let inputName= document.getElementById("inputName").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let msm = document.getElementById("msm").value;

    //validacion de datos

    if(inputName==="" || email==="" || gender=== "" || msm ===""){
        alert("ingresar todos los campos");
    }else{
        localStorage.setItem("Nombre", inputName);
        localStorage.setItem("Email", email);
        localStorage.setItem("Genero", gender);
        localStorage.setItem("Mensaje", msm); 
        ObtenerLocalStorage()      
    }

}
)

// funcion obtener localStorage 
function ObtenerLocalStorage(){
    let nombre= localStorage.getItem("Nombre");
    let email= localStorage.getItem("Email");
    let genero= localStorage.getItem("Genero");
    let mensaje= localStorage.getItem("Mensaje");
    alert(`La informacion almacenada es: ${nombre}
    ${email}
    ${genero} 
    ${mensaje}`);
    
}