(function() {
    'use strict'

    let instancia

    function App() {
        if(instancia == undefined) {
            this.id = Math.random()
            instancia = this
        }
        else {
            //forma1
            console.warn('No se puede crear más de una instancia de esta función constructora')
            return instancia

            //forma2
            //throw new Error('No se puede crear más de una instancia de esta función constructora')
        }
    }

    window.App = App

    console.warn('Singleton instalado')
})()