const menuContainer = document.getElementById("menu")
const cartContainer = document.getElementById("cart")



const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: './images/plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: './images/plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: './images/plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: './images/plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: './images/plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: './images/plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

let shoppingCart = []

function render(){
    let menuHTML = ""
    menuContainer.innerHTML = `<p>test menu here</p>`
    cartContainer.innerHTML = `shopping cart here`
    menuItems.map((menuItem) =>{
        menuHTML+=menuItemHTML(menuItem)
    })
    menuContainer.innerHTML = menuHTML
}

function menuItemHTML(item){
    return `
    <li>
        <div class="plate">
        <img src=${item.image} alt=${item.alt} class="plate"/>
        </div>
        
        <div class="content">
        <p class="menu-item">${item.name}</p>
        <p class="price">${item.price}</p>
        <button class="add">Add to Cart</button>
        </div>
    </li>
    `

}

render()