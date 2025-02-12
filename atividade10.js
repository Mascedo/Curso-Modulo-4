var lista = [32, 53, 33, 58, 23]
process.stdout.write('seu numero:')
process.stdin.on('data', function (data){
    var guess = parseInt(data.toString().trim())
    var found = 'false'
    for(var numero of lista){
        if(numero === guess){
            found = 'true'
        }
    }
    if(found === 'true'){
        console.log('esta na lista')
    }else{
        console.log('nao esta na lista')
    }
})
