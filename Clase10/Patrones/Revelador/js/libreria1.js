const libreria1 = (function() {
    'use strict'

    var x = true

    function getX() {
        console.log(x)
    }

    console.warn('Librería 1 instalada')
    
    return {
        getX : () => getX()
    }
})()