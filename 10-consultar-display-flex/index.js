const btnResolve = document.querySelector('.btn-resolve')
const btnResolve2 = document.querySelector('.btn-resolve2')

function change(){
    const img = document.querySelector('.img')
    img.src = './assets/img/test1-resolve.png'
}

function change2(){
    const img2 = document.querySelector('.img2')
    img2.src = './assets/img/test2-resolve.png'
}

btnResolve.addEventListener('click',change)
btnResolve2.addEventListener('click',change2)