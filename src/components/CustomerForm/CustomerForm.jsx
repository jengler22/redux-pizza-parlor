import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import './CustomerForm.css'

function CustomerForm () {

    const history = useHistory();
    const dispatch = useDispatch();

    // Set order type
    const setOrderType = () => {
        const action = { type: 'SET_ORDER_TYPE',  }
    }

    // ---------- Start handle on change ----------
    const handleChangeName = (event) => {
        const action = { type: 'SET_PERSON_NAME', payload: event.target.value }
        dispatch(action);
    }

    const handleChangeAddress = (event) => {
        const action = { type: 'SET_ADDRESS', payload: event.target.value }
        dispatch(action);
    }

    const handleChangeCity = (event) => {
        const action = { type: 'SET_CITY', payload: event.target.value }
        dispatch(action);
    }

    const handleChangeZip = (event) => {
        const action = { type: 'SET_ZIP', payload: event.target.value }
        dispatch(action);
    }
    // ---------- End handle on change ----------

    // To next page '/checkout'
    const nextPage = () => {
        history.push('/checkout');
    }

    return(
        <div className="customerForm">
            <div className="infoForm">
                <h3>Customer Information</h3>
                <form>
                    <input onChange={handleChangeName} type="text" placeholder="Name" required />
                    <br />
                    <br />
                    <input onChange={handleChangeAddress} type="text" placeholder="Street Address" required />
                    <br />
                    <br />
                    <input onChange={handleChangeCity} type="text" placeholder="City" required />
                    <br />
                    <br />
                    <input onChange={handleChangeZip} type="text" placeholder="Zip" required />
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
                <button  onClick={nextPage}>Next</button>           
            </div>

        </div>
    )
}

export default CustomerForm;