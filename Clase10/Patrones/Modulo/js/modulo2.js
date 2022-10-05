(function() {
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

    /* ------------------------------------------- */
    /*     PUBLICACIONES con WRAPPER (forma 1)     */
    /* ------------------------------------------- */
    //window.modulo2 = () => getClaveEncriptada()
    /* window.modulo2 = function() { return getClaveEncriptada() }
    window.modulo3 = () => getClave()
    window.modulo4 = texto => firmarTexto(texto)
    window.modulo5 = () => getRandom1al10000() */

    /* ------------------------------------------- */
    /*     PUBLICACIONES con WRAPPER (forma 2)     */
    /* ------------------------------------------- */
    window.modulo2 = {
        getClaveEncriptada : () => getClaveEncriptada(),
        getClave : () => getClave(),
        firmarTexto : texto => firmarTexto(texto),
        getRandom1al10000 : () => getRandom1al10000()
    }

    console.warn('Módulo 2 instalado')

})()