import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList.jsx';

function Pizzas() {
  const dispatch = useDispatch();

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
    </div>
  )
}

export default Pizzas;