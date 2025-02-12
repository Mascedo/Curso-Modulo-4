process.stdout.write('qual seu ano de nascimento? ')
process.stdin.once ('data', function (data){
    var idade = data.toString().trim()
    console.log('voce tem ' + (2024-idade) + ' anos')
})