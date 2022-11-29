const p = document.getElementById('plus')
const m = document.getElementById('minus')
const count = document.querySelector('.count')
let c = 0
p.addEventListener('click', ev => {
    c++
    count.style.color = 'green'
    count.innerHTML = c

})


m.addEventListener('click', function () {
    if (c > 0) {
        c--
        count.style.color ='red'
        count.innerHTML =c
    }

})