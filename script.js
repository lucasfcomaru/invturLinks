const categoriaA = document.querySelector("#categoriaA");

categoriaA.addEventListener('click', toggleIDa);

function toggleIDa(){
    const linksCatA = document.querySelector("#linksA");

    if (linksCatA.classList.contains('hide')) {
        linksCatA.classList.remove('hide');
    } else {
        linksCatA.classList.add('hide');
    }
}

const categoriaB = document.querySelector("#categoriaB");

categoriaB.addEventListener('click', toggleIDb);

function toggleIDb(){
    const linksCatB = document.querySelector("#linksB");

    if (linksCatB.classList.contains('hide')) {
        linksCatB.classList.remove('hide');
    } else {
        linksCatB.classList.add('hide');
    }
}

const categoriaC = document.querySelector("#categoriaC");

categoriaC.addEventListener('click', toggleIDc);

function toggleIDc(){
    let linksCatC = document.querySelector("#linksC");

    if (linksCatC.classList.contains('hide')) {
        linksCatC.classList.remove('hide');
    } else {
        linksCatC.classList.add('hide');
    }
}
