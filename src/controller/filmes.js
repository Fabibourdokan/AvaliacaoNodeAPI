import Servicefilmes from '../service/filmes.js'

class Controllerfilmes {

    Buscar(req, res) {
        try {
            const titulo = Servicefilmes.Buscar()            
            res.send({ mensagem: titulo })

        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const titulo = Servicefilmes.BuscarUm(id)
            
            res.send({ mensagem: titulo })
        }   catch (error) {
            res.send({ message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const titulo = req.body.titulo
            const ClassificacaoIndicativa = req.body.ClassificacaoIndicativa
            const Descricao = req.body.Descricao
            const Lancado = req.body.Lancado

            Servicefilmes.Criar(titulo, ClassificacaoIndicativa, Descricao, Lancado)

            res.send({ mensagem: "Título criado com sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const titulo = req.params.titulo
             const ClassificacaoIndicativa = req.params.ClassificacaoIndicativa
            const Descricao = req.params.Descricao
            const Lancado = req.params.Lancado
            Servicefilmes.Alterar(id, titulo, ClassificacaoIndicativa, Descricao, Lancado)
            
            res.send({ message: "Titulo alterado com sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id
            Servicefilmes.Deletar(id)

            res.send({ message: "Titulo deletado com sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    }



export default new Controllerfilmes()