const BaseControlador = require('../controlador/base-controlador');
const baseControlador = new BaseControlador();

module.exports = (app) => {
    app.get('/', baseControlador.home());

    app.route('/login')
        .get(baseControlador.login())
        .post(baseControlador.efetuaLogin());

};