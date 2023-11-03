const screen = document.getElementById('screen');
const allowdkeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '+', '*', '/', '.', ',', '%', ' '];

document.querySelectorAll('.num').forEach(function(numBtn) {
    numBtn.addEventListener('click', function () {
        const value = numBtn.dataset.value
        screen.value += value
    })
})

document.getElementById('reset').addEventListener('click', function () {
    screen.value = ''
    screen.focus()
})

document.getElementById('del').addEventListener('click', function () {
    screen.value = screen.value.slice(0, -1)
})

screen.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if(allowdkeys.includes(ev.key)){
        screen.value += ev.key
        return
    }
    if(ev.key === 'Backspace') {
        screen.value = screen.value.slice(0, -1)
    }
    if(ev.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    const result = eval(screen.value).toFixed(2)
    screen.value = result
}


document.getElementById('option1').addEventListener('click', function () {
    if(document.body.classList.contains('theme1')){
        alert('Ja esta com o tema selecionado');
    }else{
        document.body.classList.remove('theme2');
        document.body.classList.remove('theme3');
        document.body.classList.toggle('theme1')
    }
})


document.getElementById('option2').addEventListener('click', function () {
    if(document.body.classList.contains('theme2')){
        alert('Ja esta com o tema selecionado');
    }else{
        document.body.classList.remove('theme1');
        document.body.classList.remove('theme3');
        document.body.classList.toggle('theme2')
    }
})
document.getElementById('option3').addEventListener('click', function () {
    if(document.body.classList.contains('theme3')){
        alert('Ja esta com o tema selecionado');
    } else{
        document.body.classList.remove('theme1');
        document.body.classList.remove('theme2');
        document.body.classList.toggle('theme3');
    }
    
})