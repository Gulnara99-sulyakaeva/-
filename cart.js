import './cart.scss'

const cart = (cart) => {
    const cartElement = document.createElement('div')
    const itemsElement = document.createElement('span')
    const priceElement = document.createElement('span')
    itemsCountElement.innerText = 'количество товаров:${cart.lenght}'
    priceElement.innerText= 'цена: 0'
    cartElement.className = 'cart';
    itemsCountElement.className = 'cart_count';
    priceElement.className = 'cart_price';
    cartElement.appendChild(itemsCountElement)
    cartElement.appendChild(priceElement)

    const updatecart = (newcart)=> {
        itemsCountElement.innerText= 'количество товаров: ${newcart.lenght}'
        const sunPrice = newcart.reduce ((sum,item)=>sum+ item.price,0)
        priceElement.innerText ='Цена: ${sunPrice}'
        console.log(sunPrice);
    }

    return {newcartElement, updatecart}
};

export default cart 
