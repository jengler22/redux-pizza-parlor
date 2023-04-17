import { useDispatch, useSelector } from 'react-redux';
import './PizzaItem.css';


function PizzaItem ({pizza}) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);

    const addPizzaToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: pizza})
        console.log(cart);
    };

    
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