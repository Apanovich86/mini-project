console.log(location.href);
const url = new URL(location);
const jsonPost = url.searchParams.get('post');
const post = JSON.parse(jsonPost);
let postDiv = document.createElement('div');
let commentWrap = document.createElement('div');
postDiv.classList.add('posts-wrap');
postDiv.innerHTML = `<span>userId: </span> ${post.userId}<br><span>ID:</span> ${post.id}<br><span>title:</span> ${post.title}<br><span>body:</span> ${post.body}`;
document.body.appendChild(postDiv);
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(commentsOfPost => {
        for (const comment of commentsOfPost) {
            let commentDiv = document.createElement('div');
            commentDiv.innerHTML = `POST ID: ${comment.postId} <br>ID: ${comment.id} <br>NAME: ${comment.name} <br>EMAIL: ${comment.email} <br>BODY: ${comment.body}`;
            commentDiv.style.width = '23%';
            commentDiv.style.background = 'lightblue';
            commentDiv.style.margin = '13px';
            commentDiv.style.padding = '5px';
            commentDiv.style.fontSize = '25px';
            document.body.appendChild(commentDiv);
            commentWrap.style.display = 'flex';
            commentWrap.style.width = '100%';
            commentWrap.style.flexWrap = 'wrap';
            commentWrap.style.boxSizing = 'border-box';
            commentWrap.style.marginLeft = 'auto';
            commentWrap.style.marginRight = 'auto';
            commentWrap.style.marginTop = '10px';
            commentWrap.appendChild(commentDiv);
        }
    });
document.body.appendChild(commentWrap);
