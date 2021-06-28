// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let novoArray = []
  for (numero of array) {
    if (numero % 2 === 0) {
      novoArray.push(Math.pow(numero, 2))
    }
  }
  return novoArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPar = new Array
  for (numero of array) {
    if (numero % 2 === 0) {
      arrayPar.push(numero)
    }
  }
  return arrayPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = -Infinity
  for (numero of array) {
    if (numero > maiorNumero) {
      maiorNumero = numero
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arrayPares = [0]
  let i = 1
  while (i < n) {
    arrayPares.push(arrayPares[arrayPares.length - 1] + 2)
    i++
  }
  return arrayPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  let resposta
  if ((a === b) && (b === c)) {
    resposta = 'Equilátero'
  } else if ((a === b) && (a !== c) || (a === c) && (a !== b)) {
    resposta = 'Isósceles'
  } else {
    resposta = 'Escaleno'
  }
  return resposta
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let numeroMaior
  let divisivel
  let diferenca
  if (num1 > num2) {
    numeroMaior = num1
    divisivel = num1 % num2 === 0
    diferenca = num1 - num2
  } else if (num2 > num1) {
    numeroMaior = num2
    divisivel = num2 % num1 === 0
    diferenca = num2 - num1
  } else {
    numeroMaior = num1
    divisivel = true
    diferenca = 0
  }
  return {
    maiorNumero: numeroMaior,
    maiorDivisivelPorMenor: divisivel,
    diferenca: diferenca
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}