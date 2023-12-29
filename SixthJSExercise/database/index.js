const dbConfig = require('./config')
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(dbConfig)

async function tryConnect() {
    try {
        await sequelize.authenticate()
        console.log('Conexão estabelecidade com sucesso')
    }
    catch(error) {
        console.log('Erro ao conectar ao banco de dados', error)
    }
}

tryConnect()