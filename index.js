// import {crreateSoneThing} from 'create'

import item from './item';
import itemslist from './items-list'
import cart from './cart'; 

import '.index.scss'
import 'normalize.css'

const mocks = [{
        "id":1,
        "name": "rose",
        "price": 1500
    },
    {
        "id":2,
        "name": "gypsophila",
        "price": 700
    },
    {
        "id":3,
        "name": "iric",
        "price": 500
}]

let cart = []

const itemslist = itemslist();
document.body.appendChild(itemslist)

const generateitems = () => {
    mocks.forEach((item)=> {

        const onAdd = ()=> {
            cart.push ('item added')
            updateCart(cart)
        }

        const itemElement = item('item.name', item.price,);
        itemslist.appendChild(itemElement)
    })
}


generateitems()

const {cartElement, updateCart}= cart(cart)
document.body.appendChild(cartElement)


