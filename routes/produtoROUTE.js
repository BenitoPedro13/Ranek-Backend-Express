const express = require('express') 
const ProdutoAPI = require('../api/produtoAPI.js')
const {paginar, verify, upload} = require('../helpers.js')
const router = express.Router()

const ordenar = produtos => produtos.reverse().sort((a, b) => {
    if((a.vendido == 'true') && (b.vendido == 'true')){
        return 0
    }
    else if((a.vendido == 'false') && (b.vendido == 'false')){
        return 0
    }
    else if((a.vendido == 'true') && (b.vendido == 'false')){
        return 1
    }
    else if((a.vendido == 'false') && (b.vendido == 'true')){
        return -1
    }
})

router.route('')
    .get(async (req, res, next) => {
        try {
            const {q, usuario_id, _limit, _page} = req.query
            let produtos

            if(q){
                produtos = await ProdutoAPI.getProdutos(q)
                res.set('x-total-count', produtos.length)
                ordenar(produtos)
                produtos = paginar(_limit, _page, produtos)
                res.json(produtos)
            }
            else if(usuario_id){
                produtos = await ProdutoAPI.getProdutosUsuario(usuario_id)
                res.set('x-total-count', produtos.length)
                ordenar(produtos)
                res.json(produtos) 
            }
            else{
                produtos = await ProdutoAPI.getProdutos()
                res.set('x-total-count', produtos.length)
                ordenar(produtos)
                produtos = paginar(_limit, _page, produtos)
                res.json(produtos)
            }
            
        } catch (error) {
            console.error(error)
            res.status(505).json({success: false})
        }
        
    })
    .post(verify, upload.single('fotos'), async (req, res, next) => {
        try {
            const fotos = req.file.path.match(/\/img.*$/i)
            const {nome, usuario_id, preco, descricao} = req.body
            
            const response = await ProdutoAPI.postProduto(nome, usuario_id, preco, descricao, fotos)
            res.json({success: response})
        } catch (error) {
            console.error(error)
            res.json({success: false})
        }
    })

router.route('/:id')
    .get(async (req, res, next) => {
        try {
            const {id} = req.params
            const response = await ProdutoAPI.getProdutoById(id)
            res.json(response)
        } catch (error) {
            console.error(error)
        }
    })
    .delete(verify, async(req, res, next) => {
        try {
            const {id} = req.params
            const response = await ProdutoAPI.deleteProduto(id)
            res.json(response)
        } catch (error) {
            console.error(error)
            res.status(500).json({success: false})
        }
    })
    
module.exports = router