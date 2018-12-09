const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    const livroDao = new LivroDao(db);
    
    app.get('/', (req, resp) => {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do código </h1>
                    </body>
                </html>
            `
        )
    });
    
    app.get('/livros', (req, resp) =>{
        livroDao
            .lista()
            .then(livros => 
                resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
                )
            ).catch(error => console.log(error));
    });

    app.get('/livros/form', (req, resp) => {
        resp.marko(
            require('../views/livros/form/form.marko')
        );
    });

    app.post('/livros', (req, resp) => {
        livroDao
            .adiciona(req.body)
            .then(livros => resp.redirect('/livros'))
            .catch(error => console.log(error));
    });

    app.delete('/livros/:id', (req, resp) => {
        const id = req.params.id;

        livroDao
            .remove(id)
            .then(() => resp.status(200).end())
            .catch(error => console.log(error));
    });
}
