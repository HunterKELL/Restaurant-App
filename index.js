import { menuArray } from "./data.js";
//console.log(menuArray)

function getMenuHtml() {
    let menuHtml = ''
    menuArray.forEach(function(items){
        menuHtml += `
            <div class="food-item">
                <img src=${items.image}>
                <div class="food-content">
                    <h3 class="food-item-name">${items.name}</h3>
                    <p class="food-ingredients">${items.ingredients}</p>
                    <p class="item-price">${items.price}</p>
                </div>
                <button class="add-item-btn">+</button>
            </div>`
    })
    //console.log(menuHtml)
    return menuHtml
}
//getMenuHtml()

function render() {
    document.getElementById('food-items').innerHTML += getMenuHtml()
}

render()