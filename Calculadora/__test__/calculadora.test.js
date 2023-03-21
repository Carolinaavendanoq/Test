const suma = require('../calculadora.js');

// Agrupación de casos de pruebas
describe('Prueba de sumas', () => {
    test('Suma de 2 números', () => {
        expect(suma(1,2)).toBe(3);
    })
    
    test('Suma de 0', () => {
        expect(suma(0,0)).toBe(0);
    })
})


test('Suma de texto', () => {
    expect(suma('a','b')).toBe(0);
})