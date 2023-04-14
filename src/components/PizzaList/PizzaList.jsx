import React from 'react' ;
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import { useSelector } from 'react-redux';


function PizzaList () {

    const pizzas = useSelector(store => store.pizzas);

    return(
        <div className="pizza-page">
            <ul>
                {pizzas.map((pizza, i) => {
                    return <PizzaItem key={i} pizza={pizza} />;
                })}
            </ul>
        </div>
    )
}

export default PizzaList;