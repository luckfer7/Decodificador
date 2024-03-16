const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');

 
function criptografar (stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
};

function botaoCriptografar() {
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function descriptografar (stringDesemcriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesemcriptada = stringDesemcriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesemcriptada.includes(matrizCodigo[i][1])) {
           stringDesemcriptada = stringDesemcriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesemcriptada;
}

function botaoDescriptografar() {
    const textoDesencriptado = descriptografar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function botaoCopiar() {
    navigator.clipboard.writeText(mensagem.value);
    mensagem.value = "";
}

botaoCopiar();


