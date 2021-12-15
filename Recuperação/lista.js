const consertos = require('./consertos');

console.log(consertos);

const somenteTrue = [];
const somenteFalse = [];

consertos.forEach(item => {
    item.pronto === true ? somenteTrue.push(item) : somenteFalse.push(item);
});

console.log('Lista de aparelhos com pronto marcado como true:');
somenteTrue.forEach(item => {
    console.log(item.aparelho);
});
console.log('--------------------');
console.log('Lista de aparelhos com pronto marcado como false:');
somenteFalse.forEach(item => {
    console.log(item.aparelho);
});

console.log('--------------------');
somenteTrue.forEach(item => {
    console.log(`Modelo de Aparelho: ${item.aparelho}`);
    console.log('Itens Consertados:');
    item.itensConsertados.forEach(consertado => {
        console.log(`- ${consertado}`);
    })
    let soma = item.valores.reduce((valorA,valorB) => valorA + valorB)
    console.log(`Valor Total: R$ ${soma},00 \n`)
});