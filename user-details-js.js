console.log(location.href);
const url = new URL(location);
let jsonUser = url.searchParams.get('user');
let user = JSON.parse(jsonUser);
let userDiv = document.createElement('div');
userDiv.classList.add('users-wrap');
userDiv.innerHTML = `<span>ID: </span> ${user.id}<br><span>NAME:</span> ${user.name}<br><span>EMAIL:</span> ${user.email}<br><span>ADDRESS:</span><br>&nbsp&nbsp&nbsp <span>street:</span> ${user.address.street}<br>&nbsp&nbsp&nbsp <span>suite:</span>  ${user.address.suite}<br>&nbsp&nbsp&nbsp <span>sity:</span> ${user.address.city}<br>&nbsp&nbsp&nbsp <span>zipcode:</span>  ${user.address.zipcode}<br>&nbsp&nbsp&nbsp <span>geo:</span> <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span>lat:</span> ${user.address.geo.lat}<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span>lng:</span> ${user.address.geo.lng}<br><span>PHONE:</span> ${user.phone}<br><span>WEBSITE:</span> ${user.website}<br><span>COMPANY:</span><br>&nbsp&nbsp&nbsp <span>name:</span> ${user.company.name}<br>&nbsp&nbsp&nbsp <span>catchphrase:</span> ${user.company.catchPhrase}<br>&nbsp&nbsp&nbsp <span>bs:</span> ${user.company.bs}`;
document.body.appendChild(userDiv);
let postWrap = document.createElement('div');
postWrap.classList.add('postUser');
let btn = document.createElement('button');
let btnDiv = document.createElement('div');
btnDiv.style.display = 'flex';
btnDiv.style.justifyContent = 'center';
btn.style.width = '90%';
btn.innerHTML = `<p>Post of current user</p>`;
btn.onclick = function () {
    fetch(`http://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(postsOfUser => {
            for (const post of postsOfUser) {
                let postDiv = document.createElement('div');
                postDiv.style.width = '19%';
                postDiv.innerText = post.title;
                postDiv.style.background = 'lightblue';
                postDiv.style.margin = '10px auto 5px';
                postDiv.style.padding = '5px';
                postDiv.style.fontSize = '25px';
                document.body.appendChild(postDiv);
                postWrap.style.display = 'flex';
                postWrap.style.width = '100%';
                postWrap.style.flexWrap = 'wrap';
                postWrap.style.boxSizing = 'border-box';
                postWrap.style.marginLeft = 'auto';
                postWrap.style.marginRight = 'auto';
                postWrap.style.marginTop = '10px';
                let detailsLink = document.createElement('a');
                detailsLink.innerText = 'Post details';
                detailsLink.href = `post-details.html?post=${JSON.stringify(post)}`;
                let postDetailsDiv = document.createElement('div');
                postDiv.appendChild(postDetailsDiv);
                postDetailsDiv.appendChild(detailsLink);
                postWrap.appendChild(postDiv);
            }
        });
};
btnDiv.appendChild(btn);
document.body.appendChild(btnDiv);
document.body.appendChild(postWrap);



