fetch('https://titi.startwin.fr/products/type/burger').then(response => response.json())
    .then((data) => {
        let div = document.getElementById('add-burgers')
        let html = ''
        for (let i = 0; i < 3; i++) {
            html += `
            <div class="article">
                <h3>${data[i].name}</h3>
                <div class="actu_img">
                    <img src="${data[i].image}" alt="${data[i].name}">
                </div>
                <p>${data[i].description}</p>
                <a href="#" class="call-to-action grey">En savoir +</a>
            </div>
            `
        }
        div.innerHTML = html;
    });