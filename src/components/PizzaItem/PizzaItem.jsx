import { useDispatch, useSelector } from 'react-redux';
import './PizzaItem.css';


function PizzaItem({ pizza }) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);
    const cartTotal = useSelector(store => store.cartTotal);

    let totalPrice = 0;

    const addPizzaToCart = () => {
        const findTotal = () => {
            const action = { type: 'SET_CART_TOTAL', payload: totalPrice }
            dispatch(action);
        }

        console.log(pizza, `YO DIS DA CART`, cart);
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                console.log(`YO WE'RE LOOKING FOR IDs`, cart[i].id)
                if (pizza.id === cart[i].id) {
                    alert(`Please select only 1 of each picha.`);
                    return;
                }                     
            }
            dispatch({ type: 'ADD_TO_CART', payload: pizza });
            totalPrice += Number(pizza.price)
            pizza.quantity = 1
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: pizza });
            totalPrice += Number(pizza.price)
            pizza.quantity = 1
            
        }

        findTotal();
        console.log(`ey yo, i'mma total cart total cart`, cartTotal)
        
    };



    return (
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