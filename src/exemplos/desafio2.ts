// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

interface Pessoa{
    nome:string,
    idade:number,
    profissao?:string
}

enum Profissao{
    Atriz = "Atriz",
    Padeiro = "Padeiro"
}

let pessoa1: Pessoa = {
    nome:"Luke",
    idade:23,
    profissao:Profissao.Padeiro
}
let pessoa2: Pessoa = {
    nome:"Maria",
    idade:32
}
let pessoa3: Pessoa = {
    nome:"Martha",
    idade:41,
    profissao:Profissao.Atriz
}
let pessoa4: Pessoa = {
    nome:"Jonny",
    idade:22,
    profissao:Profissao.Padeiro
}