let url = new URL(location.href);
let id = url.searchParams.get("id");

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then((response) => response.json())
    .then(user => {
        let divMain = document.createElement('div');
        document.body.append(divMain)
        divMain.classList.add('mainContainer')

        let div = document.createElement('div');
        div.classList.add('container')
        div.innerText = `${user.id} ${user.name} ${user.username} ${user.email} `;
        divMain.appendChild(div);

        let ul = document.createElement('ul');
        ul.innerText = `address:`
        div.appendChild(ul)

        let li = document.createElement('li');
        li.innerText = `street: ${user.address.street} suite:${user.address.suite} city:${user.address.city} zipcode:${user.address.zipcode} `;
        let li1 = document.createElement('li');
        li1.innerText = `suite:${user.address.suite}`
        let li2 = document.createElement('li');
        li2.innerText = `city:${user.address.city}`
        let li3 = document.createElement('li');
        li3.innerText = `zipcode:${user.address.zipcode}`


        ul.append(li, li1, li2, li3);

        let ulPhone = document.createElement('ul');
        ulPhone.innerText = `phone: `;

        let liPhone = document.createElement('li');
        liPhone.innerText = `${user.phone}`
        ulPhone.appendChild(liPhone)


        let ulWebsite = document.createElement('ul');
        ulWebsite.innerText = `website: ${user.website}`
        let liWebsite = document.createElement('li');
        liWebsite.innerText = `${user.website}`
        ulWebsite.appendChild(liWebsite)

        let ul1 = document.createElement('ul');
        ul1.innerText = `company:`
        div.append(ulPhone, ulWebsite, ul1)
        let li4 = document.createElement('li');
        li4.innerText = `name:${user.company.name}`
        let li5 = document.createElement('li');
        li5.innerText = `catchPhrase:${user.company.catchPhrase}`
        let li6 = document.createElement('li');
        li6.innerText = `bs:${user.company.bs}`

        ul1.append(li4, li5, li6);

        let btn = document.createElement('button');
        btn.classList.add('btn')
        btn.innerText = `posts of current user`
        div.appendChild(btn)

        btn.onclick = () => {

            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then((response) => response.json())
                .then(posts => {
                    let containerForTitles = document.createElement('div');
                    containerForTitles.classList.add('containerForTitles')
                    document.body.appendChild(containerForTitles)

                    for (const post of posts) {
                        let postTitle = document.createElement('div');
                        postTitle.innerText = `${post.title}`
                        postTitle.classList.add('postTitle')
                        containerForTitles.appendChild(postTitle)

                        let postDetails = document.createElement('button');
                        postDetails.classList.add('postDetails')

                        let anchorElement = document.createElement('a');
                        anchorElement.innerText = `details`
                        anchorElement.href = `../thirdPage/index.html?id=` + post.id;

                        postDetails.appendChild(anchorElement)
                        postTitle.appendChild(postDetails)


                    }
                    btn.disabled = true

                })
        }

    })
