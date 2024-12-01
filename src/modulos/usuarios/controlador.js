const TABLA = 'usuarios';
module.exports = function _(dbInyectada) {

    let db =dbInyectada;

    if(!db){
        db = require('../../BD/mysql');
        db = require('../../BD/mysql');
    }

    function todos () {
        return db.todos(TABLA);
    }

    function uno (id) {
        return db.uno(TABLA, id);
    }

    function Agregar (body) {
        return db.Agregar(TABLA, body);
    }

    function eliminar (body) {
        return db.eliminar(TABLA, body);
    }

    return{
        todos,
        uno,
        Agregar,
        eliminar,

    }

}