import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";
import axios from "axios";

function Checkout() {
    const dispatch = useDispatch();
    // customerInfo will be displayed top left
    const customerInfo = useSelector(store => store.customerInfo);
    const history = useHistory();

    useEffect(() => {
        fetchCustomerInfo
    }, []);

    const personName = useSelector(store => store.personName);
    const streetAddress = useSelector(store => store.streetAddress);
    const city = useSelector(store => store.city);
    const zip = useSelector(store => store.zip)
    const orderType = useSelector(store => store.orderType);
    const cartTotal = useSelector(store => store.cartTotal);
    const cart = useSelector(store => store.cart)
    

    const sendToServer = () => {
        axios.post('/api/order', {
            customer_name: personName,
            street_address: streetAddress,
            city: city,
            zip: zip,
            type: orderType,
            total: cartTotal,
            pizzas: cart
        }).then(response => {
            dispatch({ type: 'CLEAR_FORM' });
            dispatch({ type: 'CLEAR_CART' });
            dispatch({ type: 'CLEAR_CART_TOTAL' });
            history.push('/')
            console.log( personName, streetAddress, city, zip, orderType, cartTotal )
        }).catch(error => {
            alert('Something went wrong!');
            console.log(error);
        });

    
    }


    const fetchCustomerInfo = () => {
        axios.get('/api/order').then(response => {
            //SET_CUSTOMER_INFO   '/api/order'
            dispatch({ type: 'SET_CUSTOMER_INFO', payload: response.data });

        }).catch(error => {
            alert('something went wrong')
        });
    }


    return (
        <>
            {/* TODO: Add customer information top left */}
            
            <h3>Customer Info/Review</h3>
       
                <div>
                    <p>Name: {personName}</p>
                    <p>Address: {streetAddress} </p>
                    <p>City: {city} </p>
                    <p>Zip: {zip} </p>
                    <p>Type: {orderType}</p>
                    <p>Total: {cartTotal} </p>
                    <button onClick={sendToServer}>Checkout</button>
                </div>
                <div>
                    <ul>
                        { cart.map(item => (
                            <li key={item.id}>
                                {item.name} - {item.price}
                            </li>
                        ))}
                    </ul>
                </div>
        </>
    )
}


export default Checkout;