const UsuarioDAO = require('../dao/usuarioDAO.js')
const {emailToId, buildToken} = require('../helpers.js')

class UsuarioAPI {
    static async getUsuario(id){
        try {
            const usuario = await UsuarioDAO.getUsuario(id)
            delete usuario.senha
            usuario.token = buildToken({usuario: usuario.id})
            return usuario
        } catch (error) {
            return console.error(error.message)
        }
    }
    static async login(email, senha){
        const usuario = await this.getUsuario(email)

        if(usuario){
          try {
            const response = await UsuarioDAO.login(email, senha)
            return response ? {login: true, usuario: usuario} : {login: false}
          } catch (error) {
            console.error(error)
            return {login: false}
          }
        }
        return {login: false}
    }
    static async postUsuario(nome, email, senha, cep, rua, numero, bairro, cidade, estado){

        const usuario = await this.getUsuario(email)

        if(!usuario){
          try {
            const res = await UsuarioDAO.postUsuario(nome, email, senha, cep, rua, numero, bairro, cidade, estado)
            return res
          } catch (error) {
            console.error(error)
            return false
          }  
        }
        return false
    }
    static async putUsuario(id, nome, email, senha, cep, rua, numero, bairro, cidade, estado){
      const usuario = await this.getUsuario(id)

      if(usuario){
        try {
          const usuario_id = await emailToId(id)
          const res = await UsuarioDAO.putUsuario(usuario_id, nome, email, senha, cep, rua, numero, bairro, cidade, estado)
          return res
        } catch (error) {
          console.error(error)
          return false
        }  
      }
      return false
  }
}

module.exports = UsuarioAPI 