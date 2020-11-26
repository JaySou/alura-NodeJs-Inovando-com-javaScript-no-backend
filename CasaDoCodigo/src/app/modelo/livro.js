const { check, validationResult } = require('express-validator/check');

class Livro {
    static validacao() {
        return [
            check('titulo').isLength({ min:5 }).withMessage('O titulo precisa de no minimo 5 caracteres!'),
            check('preco').isCurrency().withMessage('O Preço precisar ser um valor monetario ex: 99.99!')
        ]
    }
}

module.exports = Livro;