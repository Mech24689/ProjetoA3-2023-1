btnPremium = document.querySelector('.premium')
btnConsulta = document.querySelector('.comum')
btnSair = document.querySelector('.sair')
key = 'tipo da conta'
tipo = localStorage.getItem(key)

if(!localStorage.getItem(key)){
    localStorage.setItem(key, 'visitante')
    window.location.reload()
}


btnPremium.addEventListener('click', ()=>{
    localStorage.setItem(key, 'visitante')
    window.location.href = 'telaLogin.html'
})

btnConsulta.addEventListener('click', ()=>{
    window.location.href = 'telaConsultas.html'
})

btnSair.addEventListener('click', ()=>{
    localStorage.setItem(key, 'visitante')
    window.location.reload()
})

if(tipo == 'visitante'){
    btnPremium.style.display = 'block'
    btnConsulta.style.display = 'none'
    btnSair.style.display = 'none'
}

if(tipo == 'premium'){
    btnPremium.style.display = 'none'
    btnConsulta.style.display = 'block'
    btnSair.style.display = 'block'
}


// btnPremium.addEventListener('click', ()=>{  
//     if(typeBtn == 'comum'){
//         btnPremium.classList.replace('premium', 'comum')
//         typeBtn = 'premium'
//         btnPremium.innerText = 'consulta'
//     }else if(typeBtn == 'premium'){
//         btnPremium.classList.replace('comum', 'premium')
//         typeBtn = 'comum'
//         btnPremium.innerText = 'premium'
//     }
// })
