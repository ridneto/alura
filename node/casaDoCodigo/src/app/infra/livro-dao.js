class LivroDao{
    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject) =>
            this._db.all(
                "SELECT * FROM livros",
                (error, result) =>
                    error ? reject('Não foi possível listar os livros') : resolve(result)
            )
        )
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
            `, 
            [
                livro.titulo,
                livro.preco,
                livro.descricao
            ],
            (err) => {
                if(err){
                    console.log(err);
                    return reject('Não foi possível adicionar o livro!');
                }

                resolve();
            });
        })
    }

    buscaPorId(id){
        return new Promise((resolve, reject) =>
            this._db.all(
                `SELECT * FROM livros WHERE id = ?`,
                (err, result) => err ? reject('Não foi possível obter o livro') : resolve(result),
                [id]           
            )
        )
    }

    atualiza(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
                    UPDATE livros
                    set titulo = ?, preco = ?, descricao = ?
                    where id = ?
                `, 
                [
                    livro.titulo, livro.preco, livro.descricao, livro.id
                ],
                (err) => {
                    if(err){
                        console.log(err);
                        return reject('Não foi possível atualizar o livro.');
                    }

                    resolve('Livro atualizado com sucesso');
                }                
            )
        })
    }

    remove(id){
        return new Promise(((resolve, reject) => {
            this._db.run(
                `DELETE FROM livro WHERE id = ?`,
                [id],
                (err) => {
                    if(err){
                        console.log(err);
                        return reject('Não foi possível excluir o livro.');
                    }

                    resolve('Livro excluido com sucesso');
                }
            )
        }));
    }
}

module.exports = LivroDao;