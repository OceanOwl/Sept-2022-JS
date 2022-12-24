let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id')
console.log(id);
fetch(`https://jsonplaceholder.typicode.com/posts/` + id)
    .then((response) => response.json())
    .then(post => {
        let container = document.createElement("div");
        document.body.appendChild(container)

        for (const postKey in post) {
            let divElement = document.createElement("div");
            divElement.innerText = `${postKey} --- ${post[postKey]}`
            divElement.classList.add('postDetails')
            container.appendChild(divElement)
        }
        let btn = document.createElement('button');
        btn.innerText = `Comments`
        container.appendChild(btn)
        btn.onclick = () => {


            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`)
                .then((response) => response.json())
                .then(comments => {
                    let commentsContainer = document.createElement('div');
                    document.body.appendChild(commentsContainer)
                    for (const comment of comments) {
                        let commentDiv = document.createElement('div');
                        commentDiv.classList.add('commentDiv')
                        commentsContainer.appendChild(commentDiv)

                        for (const commentKey in comment) {
                            console.log(comment[commentKey]);

                            let commentDiv1 = document.createElement('div');
                            commentDiv1.classList.add('commentDiv1')
                            commentDiv1.innerText = `${commentKey} -- ${comment[commentKey]}`
                            commentDiv.appendChild(commentDiv1)
                        }
                    }
                    btn.disabled = true
                })

        }
    })


