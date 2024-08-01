const soma = require("../soma.js");

Test('deve retornar a soma de 1 + 2 igual 3', ()=>{
    const resultado = soma(1,2);
    expect(resultado).toBe(3);
});