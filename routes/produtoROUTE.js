const express = require('express') 
const ProdutoAPI = require('../api/produtoAPI.js')
const {paginar} = require('../helpers.js')
const router = express.Router()


router.route('')
    .get(async (req, res, next) => {
        try {
            const {q, usuario_id, _limit, _page} = req.query
            let produtos

            if(q){
                produtos = await ProdutoAPI.getProdutos(q)
                res.set('x-total-count', produtos.length)
                produtos = paginar(_limit, _page, produtos)
                res.json(produtos)
            }
            else if(usuario_id){
                produtos = await ProdutoAPI.getProdutosUsuario(usuario_id)
                res.set('x-total-count', produtos.length)
                res.json(produtos) 
            }
            else{
                produtos = await ProdutoAPI.getProdutos()
                res.set('x-total-count', produtos.length)
                produtos = paginar(_limit, _page, produtos)
                res.json(produtos)
            }
            
        } catch (error) {
            console.error(error)
            res.status(505).json({success: false})
        }
        
    })
    .post(async (req, res, next) => {
        try {
            const {nome, usuario_id, preco, descricao, fotos} = req.body
            const response = await produtoAPI.postProduto(nome, usuario_id, preco, descricao, fotos)
            res.json({success: response})
        } catch (error) {
            console.error(error)
            res.json({success: false})
        }
    })

router.delete('/:id', (req, res, next) => {
    try {
        const {id} = req.params
        const response = produtoAPI.deleteProduto(id)
        res.json(response)
    } catch (error) {
        console.error(error)
        res.status(500).json({success: false})
    }
})
    
module.exports = router