
const get = document.querySelector('#getApi')
function getApi() {
    fetch('https://646c47097b42c06c3b2aea71.mockapi.io/blogs')
        .then(res => res.json())
        .then(res => {
            get.innerHTML = '';
            res.forEach(el => {
                get.innerHTML += `<div class="col ">
            <div class="card border-0 p-5">
                <img src="${el.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${el.name}</h5>
                    <p class="card-text">Computer users and programmers have become so accustomed to using
                        Windows, even for the changing capabilities and the appearances of the graphical.</p>
                </div>
            </div>
        </div>`
            });
        }).catch(err => console.log(err))
}
getApi()