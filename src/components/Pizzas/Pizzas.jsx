import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList.jsx';
import { useHistory } from 'react-router-dom';

function Pizzas() {
  const dispatch = useDispatch();
  const cartTotal = useSelector(store => store.cartTotal);
  const history = useHistory();

  const nextPage = () => {
    if (cartTotal === 0 ) {
      alert(`Please select a Pizza! :D`)
      return;
    } else {
      history.push('/customer-form')
    }
  }

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = () => {
    axios.get('/api/pizza').then((response) => {
      const action = { type: 'SET_PIZZAS', payload: response.data };
      dispatch(action);
    }).catch((error) => {
      console.log(`Error in fetchPizzas: ${error}`);
      alert(`It'sa no bueno!`);
    })
  };

  return(

    <div>
      <h2> Lookit them Pizzas! </h2>
      <PizzaList />
      <button onClick={nextPage}>Next Page</button>
    </div>
  )
}

export default Pizzas;