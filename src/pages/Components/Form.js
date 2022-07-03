import { useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
  // state for date placeholder
  const [showDate, setShowDate] = useState(true);



  //states for validation
  const [validateName, setValidateName] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [validateNumber, setValidateNumber] = useState(false);
  const [validateDate, setValidateDate] = useState(false);

  //states for style changing
  const [styleName, setstyleName] = useState({backgroundColor :"white"});


  //state for input value
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  //validation function
  const validateFunc = (event) => {

    //cheking for validation
    event.preventDefault()
    if (name.length > 2) {
      setValidateName(true)
     
    }
    console.log("name"+validateName)
    if(email.endsWith("@redberry.ge")){
      setValidateEmail(true)
      console.log("email"+validateEmail)
    }

    if(number.length>=9&&/^[0-9]+$/.test(number)){
      setValidateNumber(true)
      console.log("number"+validateNumber)
    }

  //change input form on v
  if(!validateName){
    setstyleName({backgroundColor :"#FFEFEF",color:"#DC3545" })
  
  }
 
  }

  return (
    <>
      <form onSubmit={validateFunc} className={classes.form}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className={classes.input}
          name="firstname"
          placeholder="Name *"
          style={styleName}
        ></input>

        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={classes.input}
          type="email"
          name="email"
          placeholder="Email adress *"
        ></input>

        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          className={classes.input}
          type="number"
          name="phone"
          placeholder="Phone number *"
        ></input>

        <input
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className={classes.date}
          type="date"
          required
          placeholder="Date"
        ></input>
        {showDate && (
          <p
            onClick={(e) => {
              setShowDate(false);
            }}
            className={classes.dateText}
          >
            Date of birth <span className={classes.redStar}>*</span>
          </p>
        )}
        <button type="submit">next</button>
      </form>
    </>
  );
};

export default Form;
