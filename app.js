class Armas{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const maletin = [];

const pistola = new Armas("Pistola: SG-09 R", 9000);
const escopeta = new Armas("Escopeta: W-870", 15000);
const rifle = new Armas("Rifle: SR M1903", 20000);

let pesetas = 100000; 

const elementoPesetas = document.querySelector("#pesetas");
const elementoMaletin = document.querySelector("#maletin")
elementoPesetas.innerText = pesetas;

function comprar(arma){
    if(pesetas - arma.precio <= 0){
        alert("Dinero insuficiente extrangero.");
    } else{
        maletin.push(arma);
        pesetas = pesetas - arma.precio;
        actualizarHTML();
    }
}
function vender(indice){
        const arma = maletin[indice]
        maletin.splice(indice, 1)
        pesetas = pesetas + arma.precio;
        actualizarHTML();
    }

function actualizarHTML() {
    elementoMaletin.innerHTML = "";
    for(const arma of maletin){
        let indexArma = maletin.indexOf(arma);
        console.log(indexArma)
        let elementoArma = `
        <div class="item" onclick="vender(${indexArma})">
            ${arma.nombre}
        </div>`;
        elementoMaletin.innerHTML += elementoArma;
    }
    elementoPesetas.innerText = pesetas
}