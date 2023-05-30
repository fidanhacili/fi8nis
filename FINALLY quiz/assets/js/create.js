document.querySelector('.btn').addEventListener('click', function () {
    const fetched = fetch('https://646c47097b42c06c3b2aea71.mockapi.io/blogs', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },

        body: JSON.stringify({
            name: document.querySelector('#name').value,
            image: document.querySelector('#image').value,

        }),
    });
    fetched.then(res => {
        (res.ok == true)
        {
            document.querySelector('#name').value = '',
                document.querySelector('#image').value = '',

                alert('Sended!')
        }
    }).catch(err => console.log(err))
})
