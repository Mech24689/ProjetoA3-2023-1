btnAcessar = document.querySelector('.acessar')
inputLogin = document.querySelector('#login')
inputSenha = document.querySelector('#password')
titleLogin = document.querySelector('.titleLogin')
titleSenha = document.querySelector('.titleSenha')

btnAcessar.addEventListener('click', ()=>{
    inputLogin.addEventListener('focus', ()=>{
        titleLogin.style.boxShadow = '0 0 10px 3px black, inset 0 0 10px 3px black'
        titleSenha.style.boxShadow = 'none'
        })
    
    inputSenha.addEventListener('focus', ()=>{
        titleSenha.style.boxShadow = '0 0 10px 3px black, inset 0 0 10px 3px black'
        titleLogin.style.boxShadow = 'none'
        })

        if (inputLogin.value == 'admin' && inputSenha.value == 'admin'){
            window.close()
        }else{
            alert('Login ou Senha incorreta!')
        }
})