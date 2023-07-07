import { menuArray } from "./data.js";
//console.log(menuArray)

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        console.log(e.target.dataset.add)
    }
})

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
                <button class="add-item-btn" data-add="${items.id}">+</button>
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

//Add a function that will enable user to add food item for purchase