const readline = require("readline-sync");

// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.
const vidaDeFumante = () => {
  const cigarrosPorDia = parseFloat(readline.question("Quantos cigarros você fuma por dia? "));

  if (isNaN(cigarrosPorDia) || cigarrosPorDia <= 0) {
    console.log("Por favor, digite um número válido.");
    return;
  }
  const anosFumados = parseFloat(readline.question("Há quantos anos você fuma/ fumou? "));

  if (isNaN(anosFumados) || anosFumados <= 0) {
    console.log("Por favor, digite um número válido.");
    return;
  }
  const totalCigarros = cigarrosPorDia * 365 * anosFumados;
  const minutosPerdidos = totalCigarros * 10;
  const diasPerdidos = minutosPerdidos / 60 / 24;

  console.log(`Você fumou no total ${totalCigarros} cigarros, perdendo o total de ${minutosPerdidos} minutos que dá um total de ${diasPerdidos.toFixed(2)}`);
};

// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
const velocidadeDoCarro = () => {
  const velocidade = parseFloat(readline.question("Digite a velocidade do carro. "));
  multa = (velocidade - 80) * 5;

  if (isNaN(velocidade) || velocidade <= 0) {
    console.log("Por favor, digite uma velocidade válida.");
    return;
  } else {
    if (velocidade <= 80) {
      console.log("Você está dentro do limite de velocidade.");
    } else {
      console.log(`Você ultrapassou a velocidade máxima em ${velocidade - 80}km/h! Sua multa é de R$${multa.toFixed(2)}.`);
    }
  }
};

// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.
const distanciaDoPassageiro = () => {
  const distancia = parseFloat(readline.question("Qual a distância que você deseja viajar (em km)? "));
  let precoTotal = 0;

  if (isNaN(distancia) || distancia <= 0) {
    console.log("Por favor, digite uma distância válida.");
    return;
  } else {
    if (distancia <= 200) {
      precoTotal = distancia * 0.5;

      console.log(`Você pagará R$0.50 por km, dando um total de R$${precoTotal.toFixed(2)}`);
    } else {
      precoTotal = distancia * 0.45;

      console.log(`Você está apto a nossa promoção e pagará R$0.45 por km, dando um total de R$${precoTotal.toFixed(2)}`);
    }
  }
};

// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.
const segmentoDeReta = () => {
  const ladoA = parseFloat(readline.question("Digite um lado"));

  if (isNaN(ladoA) || ladoA <= 0) {
    console.log("Por favor, digite uma número válido.");
    return;
  }

  const ladoB = parseFloat(readline.question("Digite outro lado"));

  if (isNaN(ladoB) || ladoB <= 0) {
    console.log("Por favor, digite uma número válido.");
    return;
  }

  const ladoC = parseFloat(readline.question("Digite o terceiro lado"));

  if (isNaN(ladoC) || ladoC <= 0) {
    console.log("Por favor, digite uma número válido.");
    return;
  }

  if (ladoA <= ladoB + ladoC && ladoB <= ladoA + ladoC && ladoC <= ladoA + ladoB) {
    console.log("O triângulo é válido.");
  } else {
    console.log("O triângulo não é válido.");
  }
};

// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
const joKenPo = () => {
  opcoes = ["pedra", "papel", "tesoura"];

  console.log("\x1b[1mEscolha uma das opções:\x1b[0m\n 1. Pedra\n 2. Papel\n 3. Tesoura");
  const usuario = Number(readline.question("\x1b[33mQual a sua escolha? \x1b[0m")) - 1;

  if (usuario >= 0 && usuario <= 2) {
    const computador = Math.floor(Math.random() * 3);
    // console.log(opcoes[usuario] + opcoes[computador])
    console.log(`Ja... Ken... Po!!!\n\n Você: ${opcoes[usuario]}\n Oponente: ${opcoes[computador]}`);

    if (usuario === computador) {
      console.log("\x1b[34mEmpate!\x1b[0m");
      return;
    }
    if ((usuario === 0 && computador === 2) || (usuario === 1 && computador === 0) || (usuario === 2 && computador === 1)) {
      console.log("\x1b[32mParabéns!! Você venceu.\x1b[0m");
      return;
    } else {
      console.log("\x1b[31mPoxa... Seu oponente venceu.\x1b[0m");
    }
  } else {
    console.log("Escolha uma opção válida!");
  }
};

// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.
const numeroSorteado = () => {
  const usuario = Number(readline.question("Escolha um número de 1 a 5."));
  const numeroSorteado = Math.floor(Math.random() * 4 + 1);

  if (usuario >= 1 && usuario <= 5) {
    console.log(usuario === numeroSorteado ? "Parabéns! Você acertou!" : "Poxa, não foi dessa vez...");
  } else {
    console.log("Digite um número válido.");
  }
};

// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km
const aluguelDeCarros = () => {
  const tipoDeCarro = readline.question("Qual tipo de carro você quer? (popular ou luxo)");
  const kmsPercorridos = Number(readline.question("Quantos kms foram percorrido?"));
  let precoKm = 0;

  switch (tipoDeCarro) {
    case "popular":
      precoKm = kmsPercorridos > 100 ? 0.1 : 0.2;
      break;

    case "luxo":
      precoKm = kmsPercorridos > 200 ? 0.25 : 0.3;
      break;

    default:
      console.log("Escolha um carro válido (popular ou luxo)");
      return;
  }

  const precoTotal = (kmsPercorridos * precoKm).toFixed(2);
  console.log(`O preço do km foi R$${precoKm} e você pagará um total de R$${precoTotal}`);
};

// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
const programaVidaSaudavel = () => {
  const atividadeHoraMes = Number(readline.question("Quantas horas de atividade fisica você praticou este mês?"));
  let pontosHora = 0;

  if (atividadeHoraMes < 10) pontosHora = 2;
  else if (atividadeHoraMes <= 20) pontosHora = 5;
  else pontosHora = 10;

  const pontosTotal = atividadeHoraMes * pontosHora;
  const faturamento = (pontosTotal * 0.05).toFixed(2);

  console.log(`Parabéns! Você conseguiu um total de ${pontosTotal} pontos. Economizando um total de R$${faturamento}`);
};

// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.
const mediaSalarial = () => {
  const salariosM = [];
  const salariosF = [];

  while (true) {
    const registro = readline.question("Deseja registrar um salario? (sim/ não)").toLowerCase();

    if (registro === "não") break;
    if (registro !== "sim") {
      console.log("Digite uma opção válida.");
      continue;
    }

    let sexo = readline.question("Qual o sexo? (M ou F) ").toUpperCase();
    let salario = Number(readline.question("Qual o salário? "));

    if (sexo !== "M" && sexo !== "F") {
      console.log("Sexo inválido. Digite M ou F");
      continue;
    }
    if (sexo === "M") {
      salariosM.push(salario);
    } else if (sexo === "F") {
      salariosF.push(salario);
    }
  }

  const salarioTotalF = salariosF.reduce((acm, n) => acm + n, 0);
  const salarioTotalM = salariosM.reduce((acm, n) => acm + n, 0);
  const salarioMedioF = salariosF.length ? salarioTotalF / salariosF.length : 0;
  const salarioMedioM = salariosM.length ? salarioTotalM / salariosM.length : 0;
  // Removed recursive call to avoid infinite loop

  console.log(`\nSalário total das mulheres: R$${salarioTotalF.toFixed(2)} | Média: R$${salarioMedioF.toFixed(2)}`);
  console.log(`Salário total dos homens: R$${salarioTotalM.toFixed(2)} | Média: R$${salarioMedioM.toFixed(2)}`);
};

// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const facaEnquanto = () => {
  const listaNumeros = [];

  while (true) {
    const registro = readline.question("Deseja registrar um número na lista? sim/não ");

    if (registro === "não") break;
    if (registro !== "sim") {
      console.log("Digite uma opção válida");
      continue;
    }

    const numeroRegistrado = Number(readline.question("Digite um número. "));

    if (!isNaN(numeroRegistrado)) listaNumeros.push(numeroRegistrado);
    else {
      console.log("Digite um número válido");
      continue;
    }

    const somaTotal = listaNumeros.reduce((acm, n) => acm + n, 0);
    const menorNumero = listaNumeros.sort((a, b) => a - b)[0];
    const media = somaTotal / listaNumeros.length;
    const numerosPares = listaNumeros.filter((n) => n % 2 === 0);

    console.log(`\n Soma dos valores: ${somaTotal}`);
    console.log(`Menor número: ${menorNumero}`);
    console.log(`Media dos números: ${media}`);
    console.log(`Números pares: ${numerosPares}`);
  }
};
// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.
const progressaoAritmetica = () => {
  const primeiroTermo = Number(readline.question("Digite o primeiro termo da PA. "));
  if (isNaN(primeiroTermo)) {
    console.log("Digite um número válido");
    return;
  }
  const razao = Number(readline.question("Digite a razão da PA. "));
  if (isNaN(razao)) {
    console.log("Digite um número válido");
    return;
  }
  const listaPA = [primeiroTermo];

  let i = primeiroTermo + razao;
  while (listaPA.length <= 10) {
    listaPA.push(i);

    i += razao;
  }
  console.log(listaPA);
};

// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
const sequenciaFibronacci = () => {
  const fibronacci = [0, 1];

  for (let i = 2; i < 10; i++) {
    fibronacci[i] = fibronacci[i - 2] + fibronacci[i - 1];
  }
  console.log(fibronacci);
};

// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.
const sequenciaFibronacci2 = () => {
  const fibronacci = [0, 1];

  for (let i = 2; i < 15; i++) {
    fibronacci[i] = fibronacci[i - 2] + fibronacci[i - 1];
  }
  console.log(fibronacci);
};
// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.
const listaNomesInverso = () => {
  const listaNomes = [];

  while (listaNomes.length <= 7) {
    let i = 1;
    const nome = readline.question(`Digite o nome de numero ${i}`);

    if (nome.length < 2) {
      console.log("Digite um nome válido");
      continue;
    }
    listaNomes.push(nome);
    i++;
  }

  console.log(listaNomes.reverse());
};

// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.
const numerosPares = () => {
  const listaNumeros = [];
  for (let i = 0; i < 10; i++) {
    listaNumeros.push(Number(readline.question(`Digite o numero ${i}:`)));
  }

  console.log("Números pares e suas posições:");

  listaNumeros.forEach((num, i) => {
    if (num % 2 === 0) console.log(`Número ${num} na posição ${i}`);
  });
};
// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
const vetorAleatorio = () => {
  const listaNumeros = [];
  while (listaNumeros.length <= 20) {
    const numeroAleatorio = Math.floor(Math.random() * 99) + 1;
    listaNumeros.push(numeroAleatorio);
  }
  console.log(listaNumeros.sort((a, b) => a - b));
};

// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.
const menoresDeIdade = () => {
  const listaPessoas = [];

  while (listaPessoas.length < 9) {
    const entrada = readline.question("Digite o nome e a idade da pessoa, separado por virgula");
    const [nome, idadeStr] = entrada.split(",").map((item) => item.trim());
    const idade = Number(idadeStr);

    if (!nome || isNaN(idade)) {
      console.log("Entrada inválida. Tente novamente.");
      continue;
    }

    listaPessoas.push({ nome, idade });
  }

  console.log("\nPessoas menores de idade:");
  listaPessoas.filter((pessoa) => pessoa.idade < 18).forEach((pessoa) => console.log(`Nome: ${pessoa.nome}, Idade? ${pessoa.idade}`));
};

// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.
const registroFuncionario = () => {
  const entrada = readline.question("Digite o nome, cargo e salario do funcionário separado por virgula.");
  const [nome, cargo, salarioStr] = entrada.split(",").map((item) => item.trim());
  const salario = Number(salarioStr);

  if (!nome || !cargo || isNaN(salario)) console.log("Entrada inválida. Tente novamente.");

  console.log(`Nome: ${nome}, Cargo: ${cargo}, Salário: R$${salario.toFixed(2)}`);
};

// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.
const horario = () => {
  const horarios = [];

  while (horarios.length <= 5) {
    const entrada = readline.question("Digite um horario no formato HH.MM.SS");
    const [horas, minutos, segundos] = entrada.split(".").map(Number);

    if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
      console.log("Entrada inválida. Tente novamente.");
      continue;
    }
    if (horas < 0 || horas > 24 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
      console.log("Digite um horário válido.");
      continue;
    }
    if (horas === 24) horas = 0o0;
    horarios.push({ horas, minutos, segundos });
  }

  console.log("\nHorários registrados:");
  horarios.forEach((horario) => {
    console.log(`${horario.horas}.${horario.minutos}.${horario.segundos}`);
  });
};

// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const folhaMensalIndividual = () => {
  while (true) {
    const entrada = readline.question("Escreva a matricula, nome e salário bruto do funcionário (separado por ", " e o nome e sobrenome por espaço)");
    const [matriculaStr, nome, salarioBrutoStr] = entrada.split(",");
    const matricula = parseFloat(matriculaStr);
    const salario = parseFloat(salarioBrutoStr);
    const nomeCompleto = nome.split(" ");

    if (isNaN(matricula) || nomeCompleto.length <= 1 || isNaN(salario)) {
      console.log("Entrada inválida. Tente novamente.");
      continue;
    }

    const deducao = salario * 0.15;
    const salarioLiquido = salario - deducao;
    break;
  }

  console.log(`
    Matrícula: ${matricula}\n
    Nome: ${nomeCompleto}\n
    Salário Bruto: ${salario}\n
    Dedução INSS: ${deducao}\n
    Salário Líquido:${salarioLiquido}
     `);
};
// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const pesoIdeal = (alt, sexo) => {
  formulaPeso = 0;

  switch (sexo) {
    case "M":
      formulaPeso = 72.7 * alt - 58;
      break;

    case "F":
      formulaPeso = 62.1 * alt - 44.7;
      break;
    default:
      console.log("Entrada invalida. Tente novamente");
  }

  return formulaPeso;
};
// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const pesquisaHabitantes = (salarios, nFilhos) => {
  listaSalarios = salarios.split(',');
  listaNFilhos = nFilhos.split(',');

  salarioTotal = listaSalarios.reduce((acm, n) => acm + n, 0);
  salarioMedio = salarioTotal / list
  totalFilhos = listaNFilhos.reduce((acm, n) => acm + n, 0);
  numPessoasSalarioMin = listaSalarios.filter(n => n <= 350).length;
  salarioMinTotal = listaSalarios.filter(n => n <= 350).reduce((acm, n) => acm + n, 0);
  maiorSalario = 
}
// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.
// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.
// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.
// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].
// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.
// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
// item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;
// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.
// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.
// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.

// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.
// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.
// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.
// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.
// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".
// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.
// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)
// 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
// idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
// nome e idade.
// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.
// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.
// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.
// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.
// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.
// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.
// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.
// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.
// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.

// 4. Desafios Adicionais (Opcionais):
// ○ Implementar uma função de check-in e check-out que atualize a
// disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
// avaliações dentro do objeto do hotel.
