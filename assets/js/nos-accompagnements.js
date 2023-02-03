fetch('https://titi.startwin.fr/products/type/accompagnement').then(response => response.json())
    .then((data) => {
        let div = document.getElementById('accompagnement-form')
        let html = ''
        for (let i = 0; i < data.length; i++) {
            html += `
            <div class="choise-burger center grid-3 dashed">
                <div class="choise-burger">
                    <input type="radio" id="accompagnement${i}" name="accompagnement">
                    <label for="accompagnement${i}" class="work-plan">
                        <img src="${data[i].image}" alt="${data[i].name}">
                    </label>
                </div>
                <p> ${data[i].name} - ${data[i].price.$numberDecimal}€</p>
                <p class="text-left">${data[i].description}</p>
            </div>
            `
        }
        div.innerHTML = html;
    });