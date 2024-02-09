class Consulta {
  private paciente: string;
  private data: Date;
  private hora: string;
  private medico: string;
  private tipo: string;

  constructor(
    paciente: string,
    data: Date = new Date(),
    hora: string,
    medico: string,
    tipo: string
  ) {
    this.paciente = paciente;
    this.data = data;
    this.hora = hora;
    this.medico = medico;
    this.tipo = tipo;
  }
}
export class Paciente {
  private nome: string;
  private idade: number;
  private historico: Consulta[];

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.historico = [];
  }

  adicionarConsulta(
    data: Date,
    hora: string,
    medico: string,
    tipo: string
  ) {
    const consulta = new Consulta(this.nome, data, hora, medico, tipo);
    this.historico.push(consulta);
  }

  listarConsultas() {
    for (let consulta of this.historico) {
      console.log(consulta);
    }
  }
}
