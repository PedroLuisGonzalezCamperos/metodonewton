

//función y su derivada
function f(x) {
    return Math.exp(-x) - x;}


function fPrime(x) {
    return -Math.exp(-x) - 1;
}


//Método de newton raphson

function newtonRaphson(valorInicial,tolerancia,maxIteracion) {

let x0=valorInicial;
let iter=0;
let error=Number.POSITIVE_INFINITY;

while (error>tolerancia && iter<maxIteracion) {

    let fx0=f(x0);

    let fx0derivada=fPrime(x0)

    let xf=x0-fx0/fx0derivada;

     error=Math.abs(xf-x0);

   x0=xf;
   iter++;



}

return x0;


}

console.log(newtonRaphson(0.5,0.001,100));

