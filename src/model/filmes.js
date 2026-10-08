const titulo = new Array(
    {
        titulo: "Titanic",
        ClassificacaoIndicativa: 12,
        Descricao: "",
        Lancado: true

    },

    {
        titulo: "Os incriveis",
        ClassificacaoIndicativa: 0,
        Descricao: "",
        Lancado: true
        
    },

    {
        titulo: "Velozes e Furiosos",
        ClassificacaoIndicativa: 12,
        Descricao: "",
        Lancado: false
        
    }
)

class filmes {
    Buscar() {
        return titulo
        
    }

    BuscarUm(id) {
        return titulo[id]
        
    }

    Criar(titulo, ClassificacaoIndicativa, Descricao, Lancado) {
        titulo.push({titulo, ClassificacaoIndicativa, Descricao, Lancado})
    }

    Alterar(id, titulo, ClassificacaoIndicativa, Descricao, Lancado) {
        titulo[id].titulo = titulo
        titulo[id].ClassificacaoIndicativa = ClassificacaoIndicativa
        titulo[id].Descricao = Descricao
        titulo[id].Lancado = Lancado
    }

    Deletar(id) {
        titulo.splice(id, 1)
    }
}

export default new filmes()