fetch('https://titi.startwin.fr/products/type/boisson').then(response => response.json())
    .then((data) => {
        let div = document.getElementById('boissons-form')
        let html = ''
        for (let i = 0; i < data.length; i++) {
            html += `
            <div class="choise-burger grid-2 dashed">
                <div class="choise-burger">
                    <input type="radio" id="boisson${i}" name="boisson">
                    <label for="boisson${i}" class="work-plan">
                        <img src="${data[i].image}" alt="${data[i].name}">
                    </label>
                </div>
                <p>${data[i].name} - ${data[i].price.$numberDecimal}€</p>
            </div>
            `
        }
        div.innerHTML = html;
    });