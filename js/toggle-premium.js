btnPremium = document.querySelector('.premium')
btnConsulta = document.querySelector('.comum')
btnSair = document.querySelector('.sair')

btnPremium.addEventListener('click', ()=>{
    btnPremium.classList.toggle('hide')
    btnConsulta.classList.toggle('hide')
    btnSair.classList.toggle('hide')
    window.open('telaLogin.html')
})

btnConsulta.addEventListener('click', ()=>{
    window.open('telaConsultas.html')
})

btnSair.addEventListener('click', ()=>{
    btnPremium.classList.toggle('hide')
    btnConsulta.classList.toggle('hide')
    btnSair.classList.toggle('hide')
})


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
