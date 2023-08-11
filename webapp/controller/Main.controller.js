sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.testpractice.controller.Main", {
            onInit: function () {

            },
            
            esMultiploDeCinco: function(numero){
                if(isNaN(numero)){
                    throw new TypeError("El parametro proporcionado no es un número")
                }
                return (numero % 5) == 0;
            },

            sumar: function(numero1, numero2){
                return numero1 + numero2;
            },

            restar: function(numero1, numero2){
                return numero1 + numero2;
            },

            obtenerFactorial(numero){
                let num = Math.abs(numero);
                if(num <= 1) return 1;
                return num * this.obtenerFactorial(num -1);
            },

            esVocal: function(letra) {
                let vocales = ['a', 'e', 'i', 'o', 'u'];
                return vocales.includes(letra)
            },

            esPalindromo: function(texto){
                let textoAlRevez = texto.split('').reverse().join('');
                return texto === textoAlRevez;
            },
        });
    });
