const body = document.querySelector('tbody')
function getApi() {
    fetch('https://646c47097b42c06c3b2aea71.mockapi.io/blogs')
        .then(res => res.json())
        .then(res => {
            body.innerHTML = '';
            res.forEach(el => {
                body.innerHTML += `<tr>
                <td>${el.id}</td>
                <td><img width="100" src="${el.image}"></td>
                <td>${el.name}</td>
                <td><a href="edit.html?${el.id}"><button class="btn edit bg-primary" type="submit">Edit</button></a></td>
                <td><button class="delete bg-danger">Delete</button></td>
              </tr>`
            })
        }).catch(err => console.log(err))
}
getApi()

document.addEventListener('click', function (e) {
    const del = e.target.closest('.delete')
    if (del) {
        fetch('https://646c47097b42c06c3b2aea71.mockapi.io/blogs/' + del.parentElement.parentElement.children[0].innerText, {

            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                getApi();
                alert('Removed!')
            }
            else {
                console.log(err);
            }
        }).catch(err = console.log(err))

    }
})




