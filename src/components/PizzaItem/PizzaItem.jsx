import { useDispatch } from 'react-redux';


function PizzaItem (pizza) {
    const dispatch = useDispatch();

    const addPizzaToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: pizza})
    };

    return(
        <li>
            {pizza.name} {pizza.price} {pizza.description} {pizza.image_path}
            <button onClick={addPizzaToCart}> Add to Cart</button>
        </li>
    )
};

export default PizzaItem;