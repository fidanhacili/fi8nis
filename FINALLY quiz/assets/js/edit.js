const proId = window.location.search.substring(1)
let url = 'https://646c47097b42c06c3b2aea71.mockapi.io/blogs/' + proId;


fetch(url)
    .then(res => res.json())
    .then(data => {
        if ((typeof data) == "object") {
            document.querySelector('#name').value = data.name,
                document.querySelector('#image').value = data.image
        }
        else {
            window.location.href = "list.html"
        }
    })
    .catch(err => console.log(err))


document.querySelector('.edit').addEventListener('click', function () {
    const fetched = fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",

        },

        body: JSON.stringify({
            name: document.querySelector('#name').value,
            image: document.querySelector('#image').value,

        }),
    })
    fetched.then(res => {
        if (res.ok) {
            window.location.href = "list.html"
        }
        else {
            console.log(res);
        }
    }).catch(err => console.log(err))
})

