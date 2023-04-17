import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './CustomerForm.css'

function CustomerForm () {

    const history = useHistory();
    const dispatch = useDispatch();

    const personName = useSelector(store => store.personName);
    const streetAddress = useSelector(store => store.streetAddress);
    const city = useSelector(store => store.city);
    const zip = useSelector(store => store.zip)
    const orderType = useSelector(store => store.orderType);
    const cartTotal = useSelector(store => store.cartTotal);

    // TODO: MOVE POST REQUEST TO CHECKOUT
    const sendToServer = () => {
        axios.post('/api/order', {
            customer_name: personName,
            street_address: streetAddress,
            city: city,
            zip: zip,
            type: orderType,
            total: cartTotal        
        }).then(response => {
            dispatch({ type: 'CLEAR_FORM' });
            history.push('/checkout')
        }).catch(error => {
            alert('Something went wrong!');
            console.log(error);
        })
    }

    return(
        <div className="customerForm">
            <div className="infoForm">
                <h3>Customer Information</h3>
                <form>
                    <input type="text" defaultValue="Name" required />
                    <br />
                    <br />
                    <input type="text" defaultValue="Street Address" required />
                    <br />
                    <br />
                    <input type="text" defaultValue="City" required />
                    <br />
                    <br />
                    <input type="text" defaultValue="Zip" required />
                </form>
            </div>
            <div className="radioButtons">       
                <label>
                <input type="radio" name="orderType" value="pickup" required />   
                    Pickup
                </label>
                <br />
                <br />
                <label>
                <input type="radio" name="orderType" value="delivery" />                   
                    Delivery
                </label>   
                <br />
                <br />
                <br />
                <br />
                <button  onClick={sendToServer}>Next</button>           
            </div>

        </div>
    )
}

export default CustomerForm;