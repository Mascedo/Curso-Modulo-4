var lista = []


process.stdout.write('adicionar aluno(y ou n)?')
process.stdin.once('data', function(data){
    var yn = data.toString().trim()
function inicio(){ 
    if(yn === 'y'){
        aluno()
    }else{
        console.log('lista de alunos cadastrados:')
        console.log(lista)
        process.exit()
    }
}
function aluno(){
    process.stdout.write('nome do aluno: ')
        process.stdin.once('data', function(data){
            var nome = data.toString().trim()
    
    process.stdout.write('idade do aluno: ')
        process.stdin.once('data', function(data){
            var idade = parseInt(data.toString().trim())

    process.stdout.write('curso do aluno: ')
        process.stdin.once('data', function(data){
            var curso = data.toString().trim()

            lista.push({nome, idade, curso})
        
            process.stdout.write('deseja adicionar outro aluno(y ou n)?')
            process.stdin.once('data', function(data){
                yn = data.toString().trim()
            
            inicio()
                })
            })
        })
    })}
    inicio()
})
