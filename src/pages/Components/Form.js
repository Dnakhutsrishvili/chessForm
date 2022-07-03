import { useEffect, useState } from "react";
import classes from "./Form.module.css";
import pwichka from "../../images/pwichka.png";

const Form = () => {
  // state for date placeholder
  const [showDate, setShowDate] = useState(true);
  const [showNumber, setShowNumber] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showName, setShowName] = useState(true);

  //states for validation
  const [validateName, setValidateName] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [validateNumber, setValidateNumber] = useState(false);
  const [validateDate, setValidateDate] = useState(false);

  //states for name style changing
  const [styleName, setstyleName] = useState({ backgroundColor: "none" });
  const [styleNameApp, setstyleNameApp] = useState({ display: "none" });

  //states for email style changing
  const [styleEmail, setstyleEmail] = useState({ backgroundColor: "none" });
  const [styleEmailApp, setstyleEmailApp] = useState({ display: "none" });

  //states for phone style changing
  const [stylePhone, setstylePhone] = useState({ backgroundColor: "none" });
  const [stylePhoneApp, setstylePhoneApp] = useState({ display: "none" });

  //state for input value
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (name.length > 2) {
      setValidateName(true);
    } else {
      setValidateName(false);
    }

    if (email.endsWith("@redberry.ge")) {
      setValidateEmail(true);
    } else {
      setValidateEmail(false);
    }

    if (number.length >= 9 && /^[0-9]+$/.test(number)) {
      setValidateNumber(true);
    }else{
      setValidateNumber(false);
    }
  }, [name, email, number]);

  //validation function
  const validateFunc = (event) => {
    //cheking for validation
    event.preventDefault();

    //change input form on validate, if false change back color, if true appears approved mark
    if (!validateName) {
      setstyleName({ backgroundColor: "#FFEFEF", color: "#DC3545" });
      setstyleNameApp({ display: "none" });
    } else {
      setstyleNameApp({ display: "flex" });
      setstyleName({ backgroundColor: "white" });
    }

    //email

    if (!validateEmail) {
      setstyleEmail({ backgroundColor: "#FFEFEF", color: "#DC3545" });
      setstyleEmailApp({ display: "none" });
    } else {
      setstyleEmailApp({ display: "flex" });
      setstyleEmail({ backgroundColor: "white" });
    }

    //phone

    if (!validateNumber) {
      setstylePhone({ backgroundColor: "#FFEFEF", color: "#DC3545" });
      setstylePhoneApp({ display: "none" });
    } else {
      setstylePhoneApp({ display: "flex" });
      setstylePhone({ backgroundColor: "white" });
    }
  };

  return (
    <>
      <form onSubmit={validateFunc} className={classes.form}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className={classes.date}
          name="firstname"
     
          style={styleName}
        ></input>
          {showName && (
          <p
            onClick={(e) => {
              setShowName(false);
            }}
            className={classes.nameText}
          >
            Name <span className={classes.redStar}>*</span>
          </p>
        )}
        <img
          style={styleNameApp}
          className={classes.approved}
          src={pwichka}
          alt="approved"
        ></img>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={classes.date}
          type="email"
          name="email"
        
          style={styleEmail}
        ></input>
         {showEmail && (
          <p
            onClick={(e) => {
              setShowEmail(false);
            }}
            className={classes.emailText}
          >
            Email adress <span className={classes.redStar}>*</span>
          </p>
        )}
   <img
          style={styleEmailApp}
          className={classes.approvedEmail}
          src={pwichka}
          alt="approved"
        ></img>
        <input
          onChange={(e) => {
            setNumber(e.target.value);
           
          }}
          className={classes.date}
          type="number"
          name="phone"
       
          style={stylePhone}
        ></input>
           {showNumber && (
          <p
            onClick={(e) => {
              setShowNumber(false);
            }}
            className={classes.numberText}
          >
            Phone number <span className={classes.redStar}>*</span>
          </p>
        )}
          <img
          style={stylePhoneApp}
          className={classes.approvedPhone}
          src={pwichka}
          alt="approved"
        ></img>

        <input
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className={classes.date}
          type="date"
          // required
        
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
