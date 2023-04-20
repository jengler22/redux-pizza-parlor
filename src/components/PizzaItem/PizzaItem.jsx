import { useDispatch, useSelector } from 'react-redux';
import './PizzaItem.css';


function PizzaItem ({pizza}) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);
    const cartTotal = useSelector(store => store.cartTotal);

    let totalPrice = 0;

    const addPizzaToCart = () => {
        totalPrice += pizza.price
        pizza.quantity = 1
        
        dispatch({ type: 'ADD_TO_CART', payload: pizza});
        console.log(cart, cartTotal, totalPrice);
        findTotal();
    };

    const findTotal = () => {
        const action = { type: 'SET_CART_TOTAL', payload: Number(totalPrice) }
        dispatch(action);
    }
    
    return(
        <li className="pizza-item" >
            <h3 className="pizza-name" >{pizza.name}</h3>
            <br />
            "{pizza.description}"
            <br />
            - {pizza.price}
            <br />
            <img className="pizza-image" src={pizza.image_path} />
            <br />
            <button onClick={addPizzaToCart}> Add to Cart</button>
        </li>
    )
};

export default PizzaItem;