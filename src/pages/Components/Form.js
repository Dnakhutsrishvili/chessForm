import { useState } from "react";
import classes from "./Form.module.css";

const Form = () => {

// state for date placeholder
 const [showDate,setShowDate]= useState(true)
 const [name,setName]= useState("")
console.log(name)

  return (
    <>
      <form className={classes.form}>
        <input
        onChange={(e)=>{setName(e.target.value)}}
          type="text"
          className={classes.input}
          name="firstname"
          placeholder="Name *"
        ></input>

        <input className={classes.input}  type="email" name="email" placeholder="Email adress *"></input>

        <input className={classes.input} type="number" name="phone" placeholder="Phone number *"></input>

        <input  className={classes.date} type="date" required placeholder="Date"></input>
       { showDate&& <p onClick={(e)=>{setShowDate(false)}} className={classes.dateText}>Date of birth <span className={classes.redStar}>*</span></p>}
      </form>
    </>
  );
};

export default Form;
