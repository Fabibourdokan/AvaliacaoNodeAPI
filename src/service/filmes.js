import filmes from "../model/filmes.js"

class Servicefilmes {

    Buscar() {
       return filmes.Buscar()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return filmes.BuscarUm(id)
    }
    
    Criar(titulo) {
        if(!titulo) {
            throw new Error("Favor informar o nome do filme")
        }

        filmes.Criar(titulo)
    }
    
    Alterar(id, titulo) {
        if(!id || isNaN(id) || !titulo) {
            throw new Error("Favor informar todos os dados do titulo")
        }

        filmes.Alterar(id, titulo)
    }
    
    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o ID corretamente")
        }
        filmes.Deletar(id)
    }
}

export default new Servicefilmes()