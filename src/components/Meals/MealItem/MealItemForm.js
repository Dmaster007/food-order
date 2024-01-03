import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

export default function MealItemForm(props) {
  const [amoutisValid ,setamoutisValid]  = useState(true)
  const amountInputRef = useRef()
  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredamount = amountInputRef.current.value;
    const enteredamountno = +enteredamount;
    if(enteredamount.trim().length ===0 || enteredamountno<1 || enteredamountno >5){
      setamoutisValid(false);
      return;
    }
    props.onAddToCart(enteredamount)
  }
  return (
    <form className={classes.form}>
      <Input label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} />
      <button onClick={SubmitHandler}>+</button>
      {!amoutisValid && <p>pls enter between 1-5</p>}
    </form>
  )
}
