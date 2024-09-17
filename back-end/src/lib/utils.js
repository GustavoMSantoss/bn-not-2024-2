/*
Função que processa a query string da requisição
e verifica se o parâmetro inclide foi passado.
Caso positivo, preenche um objeto com os relacionamentos
que deve ser incluidos na consulta sendo executada
*/
function includeRelations(query){
    
    // Por padrão,não inclui nenhum relacionamento
    const include ={}

    // Se o parâmetro inclide estiver na query string
    if (query.include){
        // Recorta o valor do parâmetro, separando os
        // relacionamentos passados por virgula
        const relations = query.include.split('.')

        // Preenche o includes com as relações informadas
        for(let rel of relations){
            include[rel] = true
        }
    }

    return include
}

export { includeRelations}