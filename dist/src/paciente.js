"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
class Consulta {
    paciente;
    data;
    hora;
    medico;
    tipo;
    constructor(paciente, data = new Date(), hora, medico, tipo) {
        this.paciente = paciente;
        this.data = data;
        this.hora = hora;
        this.medico = medico;
        this.tipo = tipo;
    }
}
class Paciente {
    nome;
    idade;
    historico;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.historico = [];
    }
    adicionarConsulta(data, hora, medico, tipo) {
        const consulta = new Consulta(this.nome, data, hora, medico, tipo);
        this.historico.push(consulta);
    }
    listarConsultas() {
        for (let consulta of this.historico) {
            console.log(consulta);
        }
    }
}
exports.Paciente = Paciente;
