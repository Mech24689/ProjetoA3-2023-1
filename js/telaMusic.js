let audio1 = new Audio('audio1.mp3')
let audio2 = new Audio('audio2.mp3')
let input = document.querySelector('#test')

sounds = [mario, jazz]
idSound = 0

sounds[idSound].play()

sounds[idSound].addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        sounds[idSound].pause()
        idSound = input.value
        sounds[idSound].play()   

        sounds[idSound].addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
})
