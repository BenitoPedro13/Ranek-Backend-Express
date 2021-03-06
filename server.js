const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const usuario = require('./routes/usuarioROUTE.js')
const produto = require('./routes/produtoROUTE.js')
const transacao = require('./routes/transacaoROUTE.js')

const app = express()

app.use(cors({exposedHeaders: ['x-total-count'], allowedHeaders: ['*']}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/usuario', usuario)
app.use('/produto', produto)
app.use('/transacao', transacao)

app.all('*', (req, res) => {
    res.redirect('/')
})

app.listen(8080, () => console.log('Server running on port 8080....'))
