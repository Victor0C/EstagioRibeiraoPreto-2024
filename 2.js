let sequenciaFibonacci = [0,1]
let numeroInvestigado = 2 // Coloque aqui o valor do número que deseja verificar se pertence a sequência de Fibonacci

function verificaFibonacci (numero){
    while(sequenciaFibonacci[sequenciaFibonacci.length - 1] < numero){
       sequenciaFibonacci.push(sequenciaFibonacci[sequenciaFibonacci.length - 1] + sequenciaFibonacci[sequenciaFibonacci.length - 2])
    }

    sequenciaFibonacci[sequenciaFibonacci.length - 1] == numero ? console.log(`${numero} faz parte da sequência de Fibonacci `) : console.log(`${numero} não faz parte da sequência de Fibonacci `)
}

verificaFibonacci(numeroInvestigado)