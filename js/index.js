import coin from './modules/coin.js';
import pasteles from './modules/pasteles.js';

var caja = document.getElementById('box');
window.cargar = pasteles.cargar.bind(pasteles);
window.calcular = coin.calcular.bind(coin);

document.getElementById('coin').addEventListener('click',()=>{
    caja.innerHTML = coin.data;
});
document.getElementById('pasteles').addEventListener('click',()=>{
    caja.innerHTML = pasteles.data;
});

document.getElementById