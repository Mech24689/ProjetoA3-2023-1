btnVoltar = document.querySelector('.btn-voltar')
cards = document.querySelectorAll('.cards')
textFilter = document.querySelector('#filter')

btnVoltar.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})

textFilter.addEventListener('input', ()=>{
    for(let card of cards){
        especialidade = card.querySelector('.areaMedico').innerText
        filter = textFilter.value
        
        if(filter == ''){
            card.style.display = 'flex'
        }else{
            if(!especialidade.includes(filter)){
                card.style.display = 'none'
            }else{
                card.style.display = 'flex'
            }
        }
    }
})


