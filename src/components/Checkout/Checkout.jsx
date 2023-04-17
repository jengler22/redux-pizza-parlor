import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";
import axios from "axios";

function Checkout () {
    const dispatch = useDispatch();
    const customerInfo = useSelector(store => store.customerInfo);
    // const history = useHistory();
    // const personName = useSelector(store => store.personName);
    // const streetAddress = useSelector(store => store.City);
    // const City = useSelector(store => store.minutes);
    // const Zip = useSelector(store => store.Zip);
    // const orderType = useSelector(store => store.orderType);
    // const cartTotal = useSelector(store => store.cartTotal);
   // const Cart = useSelector(store => store.Cart);

   useEffect(() => {
    fetchCustomerInfo
}, []);

    
   const fetchCustomerInfo = () => {
    axios.get('/api/order').then(response => {
                           //SET_CUSTOMER_INFO   '/api/order'
        dispatch({ type: 'SET_CUSTOMER_INFO', payload: response.data});

    }).catch(error => {
        alert('something went wrong')
    });
}


    return(
        <>
        <h3>List</h3>
        {
            // customerInfo.map(order => (
                <div key={order.id}>
                    <p>Name: {order.personName}</p>
                    <p>Address: {order.streetAddress} </p>
                    <p>City: {order.city} </p>
                    <p>Zip: {order.zip} </p>
                    <p>Type: {order.orderType}</p>
                    <p>Total: {order.cartTotal} </p>
                    <button>Checkout</button>
                    <hr />
                </div>
    // ))
        }
        </>
    )
}


export default Checkout;