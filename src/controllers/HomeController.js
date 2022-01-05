import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gustavo',
      sobrenome: 'Lima',
      email: 'gustavohdlima@hotmail.com',
      idade: 27,
      peso: 60,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
