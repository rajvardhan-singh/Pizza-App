import React,{useState ,useEffect,useCallback} from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'
import axios from "axios";


// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'MOOMO',
//       description: 'Finest fish and veggies',
//       price: 150,
//     },
//     {
//       id: 'm2',
//       name: 'PIZZA2',
//       description: 'A german specialty!',
//       price: 180,
//     },
//     {
//       id: 'm3',
//       name: 'PIZZA3',
//       description: 'American, raw, meaty',
//       price: 290,
//     },
//     {
//       id: 'm4',
//       name: 'PIZZA4',
//       description: 'Healthy...and green...',
//       price: 300,
//     },
//   ];



function AvailableMeals(){
  const[pizzas,setPizzas]=useState([]); 

  
   
  const fetchPizzasHandler=useCallback(async ()=>{
    const response= await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');

    const data =await response.json();
      const transformedPizzas=data.map((pizzaData)=>{
        return {
          id:pizzaData.id,
          name:pizzaData.name,
          price:pizzaData.price,
          description:pizzaData.description,
          rating:pizzaData.rating,
          img_url:pizzaData.img_url
        };
      });
     setPizzas(transformedPizzas);
  });

  useEffect(()=>{
    fetchPizzasHandler();
  },[fetchPizzasHandler]);


    const pizzaList=pizzas.map((meal)=>(
        <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        rating={meal.rating}
        price={meal.price}
        img_url={meal.img_url}
        />
    ));
  return (
      <section className={classes.meals}>
          <Card>
          <ul>
          {pizzaList}  
          </ul>
          </Card>
      </section>
  )
}

export default AvailableMeals;