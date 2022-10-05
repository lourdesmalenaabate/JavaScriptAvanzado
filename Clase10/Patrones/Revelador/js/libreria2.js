const libreria2 = (function() {
    'use strict'

    /* --------------------------------------- */
    /*           VARIABLES PRIVADAS            */
    /* --------------------------------------- */
    var clave = 'qwerty1234'

    /* --------------------------------------- */
    /*           FUNCIONES PRIVADAS            */
    /* --------------------------------------- */
    function getClaveEncriptada() {
        return clave.split('').reverse().join('')
    }
    function getClave() {
        var password = 'asd123'
        return password
    }
    function firmarTexto(texto) {
        return texto + '.' + parseInt(Math.random() * 10000)
    }
    function getRandom1al10000() {
        return parseInt(Math.random()*10000) + 1
    }

    console.warn('Librería 2 instalada')

    /* ------------------------------------------- */
    /*          PUBLICACIONES con WRAPPER          */
    /* ------------------------------------------- */
    return {
        getClaveEncriptada : () => getClaveEncriptada(),
        getClave : () => getClave(),
        firmarTexto : texto => firmarTexto(texto),
        getRandom1al10000 : () => getRandom1al10000()
    }
})()