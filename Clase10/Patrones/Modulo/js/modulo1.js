(function() {
    'use strict'

    var x = true

    function getX() {
        console.log(x)
    }

    window.modulo1 = getX

    console.warn('Módulo 1 instalado')
})()