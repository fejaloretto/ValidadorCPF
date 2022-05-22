console.log('Javscript carregado');

function validaCPF(cpf){
    
    if (cpf.length != 11){
        return false;
    } else {
        /** a variável abaixo pega a quantidade desejada de caracteres a partir do 0 até o 9, da variável cpf */
        var numeros=cpf.substring(0,9);
        /** a variável abaixo percorre o string até o caracter 9, e pega tudo o que tiver dali pra frente */
        var digitos=cpf.substring(9);
        
        /** podemos tratar a string como posições de uma lista, e usar os valores dela */
        var soma = 0;
        for (var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;
        }

        

        /** na linha abaixo, dentro da variável já é feita a operação e verificado se é menor do que 2. Se 
         * for menor do que dois, atribui-se o resultado 0 a variável. Se não for, será atribuido o resultado
         * de 11-(soma%11). Esta ultima operação está sendo executada 2 vezes, mas uma delas para perguntar e a
         * outra de fato para atribuir.*/
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        //validacao do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validacao do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        /**console.log(digitos.toString().charAt(0) + 'é a primeira posição da variável soma');*/

        return true;
    }
}

function validacao() {
    console.log('Iniciando validação CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    /** para ensinar o javascript a capturar elementos de dentro do html: o cpf digitado
     * vai ser capturado através do javascript, dentro do html, e vai ser armazenado nesta variavel 'cpf'*/
    var cpf = document.getElementById('cpf_digitado').value;
    
        var resultadoValidacao = validaCPF(cpf);
        /**na linha abaixo, do if, escrever apenas resultadoValidacao é o mesmo que escrever
         * resultadoValidacao == true . Isso porque quando vc sabe que o retorno é booleano, basta apenas
         * escrever a variável
         */
        if (resultadoValidacao){
            document.getElementById('success').style.display = 'block' ;
        } else {
            document.getElementById('error').style.display = 'block';
        }
}

