livros = ['casagrande', 'grandemoura', 'fazcafesemarroz', 'paodequeijocompresunto']
process.stdout.write('deseja ver, adicionar ou procurar titulos(use respectivamente v, a ou p)? ')
process.stdin.once('data', function(data){
    var vap = data.toString().trim()
function decisao(){
    if(vap === 'a'){
        adicionar()
    }else if(vap === 'p'){
        procurar()
    }else{
        console.log('esses sao os livros desta biblioteca:')
        livros.forEach(function(livros) {
            console.log(livros)
        })
            process.stdout.write('deseja ver, adicionar ou procurar titulos(use respectivamente v, a ou p)? ')
            process.stdin.once('data', function(data){
                vap = data.toString().trim()

                decisao()
            
        })
    }
}
    function adicionar(){
        process.stdout.write('qual livro deseja adiciona? ')
        process.stdin.once('data', function(data){
            var novo = data.toString().trim()
            livros.push(novo)

        process.stdout.write('deseja ver, adicionar ou procurar titulos(use respectivamente v, a ou p)? ')
        process.stdin.once('data', function(data){
            vap = data.toString().trim()
        
            decisao()
        })

    })
}   function procurar(){
    process.stdout.write('qual livro você procura? ')
    process.stdin.once('data', function(data){
        var guess = data.toString().trim()
        var achou = 'false'
        for(var livro of livros){
        if(livro === guess){
            achou = 'true'
        }
         }if(achou === 'true'){
            console.log('o livro ' + guess + ' esta na lista')
        }else{
            console.log('o livro ' + guess + ' nao esta na lista')
        }
        process.stdout.write('deseja ver, adicionar ou procurar titulos(use respectivamente v, a ou p)? ')
        process.stdin.once('data', function(data){
            vap = data.toString().trim()

            decisao()
            })
        })

    }
    decisao()
})