function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
};
loadPosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Title: ${post.title}</h5>
            <p>Description: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}