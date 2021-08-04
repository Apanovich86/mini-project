// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
.then(function (value) {
    return value.json();
})
.then(function (value) {
    console.log(value);
});

// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let usersWrap = document.getElementsByClassName('users-wrap')[0];
        for (let user of value) {
            let userDiv = document.createElement('div');
            let hrefDiv = document.createElement('div');
            userDiv.classList.add('users');
            hrefDiv.classList.add('get-info-users');
            userDiv.innerText = user.id + ' ' + user.name;
            usersWrap.append(userDiv);
            let detailsLink = document.createElement('a');
            detailsLink.innerText = 'User details';
            detailsLink.href = `user-details.html?user=${JSON.stringify(user)}`;
            hrefDiv.appendChild(detailsLink);
            userDiv.appendChild(hrefDiv);
        }
    });


