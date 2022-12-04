const password = document.querySelector('#password')
const username = document.querySelector('#username')
const button = document.querySelector('#button')

const data = [
    {
        username : 'Leon',
        password : 'Ligai',
    },
    {
        username : 'Ligai',
        password : 'Leon',
    },
]

// const check = () => {
//     for (let i = 0; i < data.length; i++){
//         if (password.value === data[i].password && username.value === data[i].username){
//            alert('Авторизация успешна')
//         }else {
//             alert('Неверное имя пользователя или пароль')
//         }
//     }
// }


button.addEventListener('click', () => {
    let user = data.find(u => (u.username === username.value && u.password === password.value))
    user ? alert('Авторизация успешна') : alert('Неправильное имя пользователя или пароль')
})