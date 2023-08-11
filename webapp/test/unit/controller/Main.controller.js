/*global QUnit*/

sap.ui.define([
	"ns/testpractice/controller/Main.controller"
], function (Controller) {
	"use strict";

	/*
		Algunas funciones dentro de los asserts:
		assert.equal() 	 		Pensado para comparar valores
		assert.strictEqual() 	Comprueba si los valores son identicos en valor y tipo de dato
		assert.deepEqual()  	Comprueba si los valores son identicos en contenido
		assert.notEqual() 	 	Comprueba si 2 valores no son iguales
		assert.ok()  			Compruebas si un valor es verdadero
		assert.notOk()  		Comprueba si un valor no es verdadero
		assert.throws()  		Comprueba que el codigo regrese una excepcion
		assert.rejects()  		Comprueba si una promesa es rechazada
	*/

	QUnit.module("Main Controller");

	QUnit.test("I should test the Main controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

	QUnit.test("Test de funcion 'Es modulo de 5' para el numero 12345", function(assert){
		let oAppController = new Controller();
		assert.ok(oAppController.esMultiploDeCinco(12345), "Es multiplo de 5");
	});

	QUnit.test("Test de funcion 'Es modulo de 5' para el numero 123456", function(assert){
		let oAppController = new Controller();
		assert.notOk(oAppController.esMultiploDeCinco(123456), "NO es multiplo de 5");
	});

	QUnit.test("Test de funcion 'Es modulo de 5' pasando texto", function(assert){
		let oAppController = new Controller();
		assert.throws(function(){
			oAppController.esMultiploDeCinco("ASDFG");
		}, "Se valida que regresa un error");
	});

	QUnit.test("funcion de suma", function(assert){
		let oAppController = new Controller();
		let resultadoSuma = oAppController.sumar(2, 3);
		assert.equal(resultadoSuma, 5, "la suma debe ser 5");
	});
});
