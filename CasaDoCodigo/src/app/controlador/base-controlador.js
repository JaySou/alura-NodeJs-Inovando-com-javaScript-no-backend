const template = require('../views/templates')

const LivroControlador = require('../controlador/livro-controlador');


class BaseControlador {

    static rotas() {
        return {
            home: '/',
            login: '/login'
        }
    }

    home() {
        return function(req, resp) {
            resp.marko(template.base.home);
        };
    }

    login() {
        return function(req, resp) {
            resp.marko(template.base.login);
        }
    }

    efetuaLogin() {
        return function (req, resp, next){
            // logica do login
            const passport = req.passport;

            passport.authenticate('local', (erro, usuario, info) => {
                if(info){
                    return resp.marko(template.base.login);
                }

                if(erro){
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if(erro){
                        return next(erro);
                    }

                    return resp.redirect(LivroControlador.rotas().lista);
                });
            })(req, resp, next);
        }
    }
}

module.exports = BaseControlador;