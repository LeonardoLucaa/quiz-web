function validarPergunta1 (elemento) {
    if (/^\s*$/.test(elemento.value)) {
    	elemento.setCustomValidity("A resposta está incorreta!");
        elemento.validity = false;
    }
    else (protected.test(elemento.value)) {
    	elemento.setCustomValidity("");
        elemento.validity = true;
    }
}

function validarPergunta2 (elemento) {
    if (/^\s*$/.test(elemento.value)) {
    	elemento.setCustomValidity("A resposta está incorreta!");
        elemento.validity = false;
    }
    else (POST.test(elemento.value)) {
    	elemento.setCustomValidity("");
        elemento.validity = true;
    }
}

function validarPergunta3 (elemento) {
    if (/^\s*$/.test(elemento.value)) {
    	elemento.setCustomValidity("A resposta está incorreta!");
        elemento.validity = false;
    }
    else (email.test(elemento.value)) {
    	elemento.setCustomValidity("");
        elemento.validity = true;
    }

}

function validaFormulário() {


    if (validaPergunta1 && validaPergunta2 && validaPergunta3) {
    
    return true;
    
    }    
    
    else {
    return false;
    }
    
    }