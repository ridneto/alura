const port = 3001;
const app = require('./src/config/custom-express')

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});