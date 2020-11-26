const LivroControlador = require('../controlador/livro-controlador');
const livroControlador = new LivroControlador();
const rotasLivros = LivroControlador.rotas();

const Livro = require('../modelo/livro');

const BaseControlador = require('../controlador/base-controlador');

module.exports = (app) => {

    app.use(rotasLivros.autenticada, function(req, resp, next){
        if(req.isAuthenticated()){
            next();
        }
        else {
            resp.redirect(BaseControlador.rotas().login);
        }
    });
    
    app.get(rotasLivros.lista, livroControlador.lista());

    app.route(rotasLivros.cadastro)
        .get(livroControlador.formularioCadastro())
        .post(Livro.validacao(), livroControlador.cadastra())
        .put(livroControlador.edita())

    app.get(rotasLivros.edicao, livroControlador.formularioEdicao());

    app.delete(rotasLivros.delecao, livroControlador.remove());
};