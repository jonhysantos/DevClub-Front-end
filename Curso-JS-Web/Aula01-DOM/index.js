// DOM => Document Object Model

const input = document.getElementById('main-input');
const paragraph = document.getElementsByClassName('paragraph-js');
const paragraph2 = document.querySelector('.paragraph-js');
const btn = document.querySelector('button.main-button');
 
input.placeholder = "Agora é esse"


console.log(paragraph.textContent) // Só HTML
console.log(paragraph.innerText) // Leva em conta o CSS
console.log(paragraph.innerHTML) // Trás tudo => adiciona HTML
btn.style.color = 'black'
paragraph2.style.backgroundColor = 'blue'

btn.addEventListener('click',function(){
    alert(`button clicked sucessfuly`);
    const p = document.createElement('p')
    p.innerHTML = input.value
    const ma = document.getElementById('jonhy')
    ma.appendChild(p)
})


