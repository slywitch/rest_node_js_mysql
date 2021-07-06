const moment = require ('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona (atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.lenght >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data dever ser maior ou  igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erro.lenght

        if (existemErros) {
            res.status(400).json(erros)
        } else { 

            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultado) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultado)
                }
            })

        }
    }
}

module.exports = new Atendimento