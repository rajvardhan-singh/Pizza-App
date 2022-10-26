import { useContext } from 'react';
import {FontAwesome} from 'react-icons';
import {FaStar, FaTwitter} from "react-icons/fa";
import {IconContext} from "react-icons";

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      rating:props.rating,
      img_url:props.img_url
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div>Rating {props.rating} <IconContext.Provider value={{ style: {fontSize: '17px', color: "rgb(255, 255, 10)"}}}><FaStar/></IconContext.Provider></div>
      </div>
      
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;