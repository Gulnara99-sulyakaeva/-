import itemImg from '../..assets/img/item.png'
import './item.scss'

const item = (name, price, onAdd ) => {
    console.log(itemImg)
    const itemElement = document.createElement('div')
    itemElement.className = 'item'

const nameElement = document.createElement('span')
nameElement.className() = 'item_name'
nameElement.innerText() = name 
const priceElement = document.createElement('span')
priceElement.className ='item_price'
priceElement.innerText() = 'Цена: $(price)'
const imgElement = document.createElement ('img')
imgElement.scr = itemImg;
imgElement.className = 'item_img'


const buttonElement = document.createElement('button')
priceElement.className = 'item_add-button'
buttonElement.innerText = 'добавить'
buttonElement.addEventListener ('click', onAdd)

itemElement.appendChild(nameElement)
itemElement.appendChild (imgElement)
itemElement.appendChild(buttonElement)
itemElement.appendChild(priceElement)

    return itemElement
};

export default item 