// Crie uma lista chamada periféricos contendo 5 itens(objetos) de sua escolha (ex: "Teclado Mecânico", "Mouse Gamer", etc.).
// Altere o terceiro item da lista para "Webcam Full HD".
// Utilizando um laço de repetição (for), percorra a lista e exiba no console cada item acompanhado da sua posição na vitrine (ex: "Posição 0: Teclado Mecânico").

// let periféricos = [

//  zero = 'teclado mecânico',
//  um = 'Mouse gamer',
//  dois = 'Mouse pad',
//  tres = 'Ventuinha',
//  quatro = 'Processador',
// ];

// periféricos [2] = 'Wedcan Full HD'

// for (let i = 0; i < periféricos.length; i++) {
//   console.log(`Posição ${i}: ${periféricos[i]}`);
// }

// Exercício 2: Ficha Cadastral de Equipamento (Objeto Básico)
// Cenário: O setor de suporte técnico precisa catalogar as especificações das máquinas do laboratório para facilitar a manutenção.
// Tarefas:
// Crie um objeto chamado computador com as seguintes propriedades: patrimonio (texto), processador (texto), memoriaRAM (número em GB) e emManutencao (booleano).
// Acesse e exiba no console uma frase resumindo a máquina (ex: "O computador de patrimônio [patrimonio] possui processador [processador] e [memoriaRAM]GB de RAM.").

// const computador = {
//   patrimonio: "PATRI 198746.284",
//   processador: "Intel Core i5-12400",
//   memoriaRAM: 128,
//   emManutencao: false
// };

// console.log(
//   `O computador de patrimônio ${computador.patrimonio} possui processador ${computador.processador} e ${computador.memoriaRAM}GB de RAM.`
// );

// Exercício 3: Carrinho de Compras (Lista de Objetos)
// Cenário: Você precisa calcular o valor total do carrinho de compras de um cliente em um e-commerce.
// Tarefas:
// Crie uma lista chamada carrinho contendo 4 objetos. Cada objeto deve representar um produto com as propriedades: nome (texto), preco (número) e quantidade (número).
// Crie uma variável valorTotal iniciando em 0.
// Usando um loop (for), percorra a lista carrinho, multiplique o preco pela quantidade de cada item e some ao valorTotal.
// Ao final, exiba no console o valor total da compra.

// let carrinho = [
//   { 
//       nome: "Arroz", 
//       preco: 25, 
//       quantidade: 2 
// },
//   {
//     nome: "Brócolis",
//     preco: 8.99,
//     quantidade: 1,
//   },
//   {
//     nome: "Iogurte",
//     preco: 12.48,
//     quantidade: 5,
//   },

//   { nome: "Bacon",
//       preco : 37.69,
//       quantidade: 1,
//    },
// ];

// let valorTotal = 0;
// for (contador = 0; contador <=3; contador = contador +1){
//       valorTotal = valorTotal + carrinho[contador].preco * carrinho[contador].quantidade ; 
// }
// console.log('Você me deve R$', valorTotal);

// Exercício 4: Perfil de Usuário e Permissões (Objeto com Listas)
// Cenário: No sistema de autenticação da empresa, cada usuário possui dados básicos e uma lista de módulos que tem permissão para acessar.
// Tarefas:
// Crie um objeto chamado usuario com as propriedades: nome (texto), cargo (texto) e permissoes (uma lista de textos, como ["vendas", "relatorios", "estoque"]).
// Exiba no console o nome e o cargo do usuário.
// Utilizando um loop (for), percorra apenas a lista permissoes que está dentro do objeto e imprima cada permissão no formato: "- Acesso liberado: [permissao]".
// Ainda dentro do loop, verifique (usando if) se o usuário possui a permissão "admin". Caso tenha, exiba um alerta no console: "Atenção: Usuário com privilégios totais!".

//  let lista = [
//       { 
//        nome :'Godofredo',
//        cargo : 'CEO',
//        permissoes:[ 
//  'vendas','relarórios','estoque',
//        ] 
//        }
//  ]
//     console.log('Usuário: ' + lista[0].nome);
//     console.log('Função: ' + lista[0].cargo);
     
//   const usuario = lista[0];

// for (let i = 0; i < usuario.permissoes.length; i++) {
//   console.log(`- Acesso liberado: ${usuario.permissoes[i]}`);

//   if (usuario.permissoes[i] === 'admin') {
//     console.log('Atenção: Usuário com privilégios totais!');
//   }
// }



// Exercício 5: Gerenciamento de Chamados de Suporte (Lista de Objetos com Listas)
// Cenário: Desafio final! Você vai estruturar a fila de atendimentos do Help Desk, onde cada chamado possui um histórico de atualizações feitas pelos técnicos.
// Tarefas:
// Crie uma lista chamada chamados contendo 3 objetos.
// Cada objeto deve ter: id (número), cliente (texto), resolvido (booleano) e historico (uma lista de textos com os passos já realizados, ex: ["Chamado aberto", "Técnico atribuído"]).
// Utilizando loops aninhados (um for para percorrer os chamados e outro for dentro dele para percorrer o historico de cada chamado), exiba no console o ID, o nome do cliente e todas as mensagens do histórico daquele chamado.
// Utilize um if para exibir apenas os chamados em que a propriedade resolvido seja igual a false.

let chamados = [
  {
    id: 101,
    cliente: "Maria Souza",
    resolvido: false,
    historico: ["Chamado aberto", "Técnico atribuído", "Aguardando peça"]
  },
  {
    id: 102,
    cliente: "Carlos Lima",
    resolvido: true,
    historico: ["Chamado aberto", "Técnico atribuído", "Problema resolvido"]
  },
  {
    id: 103,
    cliente: "Ana Paula",
    resolvido: false,
    historico: ["Chamado aberto", "Em análise"]
  }
];


for (let i = 0; i < chamados.length; i++) {


  if (chamados[i].resolvido === false) {
    console.log(`ID: ${chamados[i].id} | Cliente: ${chamados[i].cliente}`);

    
    for (let j = 0; j < chamados[i].historico.length; j++) {
      console.log(`  - ${chamados[i].historico[j]}`);
    }
  }
}