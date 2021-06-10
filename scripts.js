function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert('[ERRO] Faltam dados!')
        resultado.innerHTML = 'Impossível contar!'
    }
    else {
            resultado.innerHTML = 'Contando: <br>'
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)

            if (p <= 0) {
                alert('Passo inválido! Considerando Passo 1')
                p = 1
            }

            if (i < f){
                // Contagem Crescente
                for(let c = i; c <= f; c += p) {
                    resultado.innerHTML += `${c} `
                }
            }
            else{
                //Contagem descrescente
                for(let c = i; c >= f; c -= p)
                resultado.innerHTML += `${c} `
            }   
            resultado.innerHTML += `\u{1F3C1}`            
        }
    }