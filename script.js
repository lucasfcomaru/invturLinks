// var linksA = document.querySelector(".linksAhidden");

// linksA.addEventListener ("click", menuDropDown);

// function menuDropDown(){
//     if(linksA.classList.contains("linksAhidden")){
//         linksA.classList.replace("linksA");
//         console.log("click");
//     } else {
//         linksA.classList.replace ("linksAhidden");
//     }
// }
var linksCatA = document.getElementById('linksAhidden');
const categoriaA = document.getElementById('categoriaA');

categoriaA.addEventListener ("click", trocarIDa);

//funcionou

function trocarIDa() {
    linksCatA.id = 'linksA';
    console.log('teste');
}
