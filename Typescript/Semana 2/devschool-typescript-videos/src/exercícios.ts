/**
 * EXERCÍCIOS
 * 
 * Antes de começar, certifique-se de instalar as 
 * dependências do projeto utilizando "npm install"
 * 
 * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
 * 
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 * 
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 * 
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 * e retorne somente a lista de assuntos do objeto.
 * 
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 * 
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 * 
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 * 
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 * 
 * 8 - Declare e popule um array com os objetos do exercício 7.
 * 
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 * 
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 * 
 * 11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 * 
 */

//1

interface Pessoa {
    nome: String,
    profissao: String,
    idade: number,
    interesses: String[]
}

//2

const pessoa1: Pessoa = {
    nome: "Rafael",
    profissao: "Dev Angular",
    idade: 32,
    interesses: [
        "C#",
        "SQL",
        "Azure",
        "Angular",
        "JS"
    ],
}

//3

function getInteresse (pessoa: Pessoa){
    return pessoa.interesses
}

//4

function getInteresseTipoExplicito (pessoa: Pessoa) : String[]{
    return pessoa.interesses
}

//5

enum Materias {
    Angular = "Angular",
    Git = "Git",
    Typescript = "Typescript"
}

//6

interface Professor {
    nome: String,
    materia: Materias[]
}

//7

const Alan: Professor = {
    nome: "Alan",
    materia: [
        Materias.Angular,
        Materias.Typescript,
        Materias.Git,         
    ]
}
const Nathan: Professor = {
    nome: "Nathan",
    materia: [
        Materias.Angular,
        Materias.Typescript,             
     ]
}

//8

const professores: Professor[] = [Nathan,Alan]

//9

const nomesProf = (professores:Professor[]) : String[] => {
    return professores.map(professor => professor.nome)
}

//10

const professorMateria = (professor:Professor[]): Materias[] => {
    const cursos: Array<Materias> = [];
    professores.forEach((professor) =>{
        professor.materia.forEach(curso => {
            cursos.push(curso)
        });
    })
    return cursos
}

//11

const primeiroProfessorTypescritp = (professor: Professor[]): any => {
    const primeiroProfessor =  professor.find(professor => 
        professor.materia.includes(Materias.Typescript));
    return primeiroProfessor
}