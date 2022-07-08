import { useEffect, useState, useRef } from "react";
import classes from "./Form.module.css";
import pwichka from "../../images/pwichka.png";
import important from "../../images/important.png";
import vector from "../../images/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import finalapproved from "../../images/finalapproved.png";

const Form = ({ getData }) => {
  let navigate = useNavigate();
  //final validate

  // state for date placeholder
  const [showDate, setShowDate] = useState(true);
  const [showNumber, setShowNumber] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showName, setShowName] = useState(true);

  //state for error message

  const [showDateError, setShowDateeError] = useState(false);
  const [showNumbereError, setShowNumbereError] = useState(false);
  const [showEmaileError, setShowEmaileError] = useState(false);
  const [showNameeError, setShowNameeError] = useState(false);

  //refs for focus placeholder
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPhone = useRef(null);
  const inputDate = useRef(null);

  useEffect(() => {
    if (!showName) {
      inputName.current.focus();
    }
    if (!showEmail) {
      inputEmail.current.focus();
    }
    if (!showNumber) {
      inputPhone.current.focus();
    }
    if (!showDate) {
      inputDate.current.focus();
    }
  }, [showName, showEmail, showNumber, showDate]);

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

  //states for date style changing
  const [styleDate, setstyleDate] = useState({ backgroundColor: "none" });
  const [styleDateApp, setstyleDateApp] = useState({ display: "none" });

  //state for input value
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [email, setEmail] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("email");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [number, setNumber] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("number");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [date, setDate] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("date");

    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    if (name.length >= 2) {
      setValidateName(true);
    } else {
      setValidateName(false);
    }

    if (email.endsWith("@redberry.ge")) {
      setValidateEmail(true);
    } else {
      setValidateEmail(false);
    }

    if (number.length === 9 && /^[0-9]+$/.test(number)) {
      setValidateNumber(true);
    } else {
      setValidateNumber(false);
    }

    if (date.length === 10) {
      setValidateDate(true);
    } else {
      setValidateDate(false);
    }
  }, [name, email, number, date]);

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
    // storing input email
    localStorage.setItem("email", JSON.stringify(email));
    // storing input number
    localStorage.setItem("number", JSON.stringify(number));
    // storing input date
    localStorage.setItem("date", JSON.stringify(date));
  }, [name, email, number, date]);
  //validation function
  const validateFunc = (event) => {
    //cheking for validation
    event.preventDefault();

    //change input form on validate, if false change back color, if true appears approved mark
    if (!validateName) {
      setstyleName({ backgroundColor: "#FFEFEF", color: "#DC3545" });
      setstyleNameApp({ display: "none" });
      setShowNameeError(true);
    } else {
      setstyleNameApp({ display: "flex" });
      setstyleName({ backgroundColor: "white" });
      setShowNameeError(false);
    }

    //email

    if (!validateEmail) {
      setstyleEmail({ backgroundColor: "#FFEFEF", color: "#DC3545" });
      setstyleEmailApp({ display: "none" });
      setShowEmaileError(true);
    } else {
      setstyleEmailApp({ display: "flex" });
      setstyleEmail({ backgroundColor: "white" });
      setShowEmaileError(false);
    }

    //phone

    if (!validateNumber) {
      setstylePhone({ backgroundColor: "#FFEFEF", color: "#DC3545" });
      setstylePhoneApp({ display: "none" });
      setShowNumbereError(true);
    } else {
      setstylePhoneApp({ display: "flex" });
      setstylePhone({ backgroundColor: "white" });
      setShowNumbereError(false);
    }

    //date
    if (!validateDate) {
      setstyleDate({ backgroundColor: "#FFEFEF", color: "#DC3545" });
      setstyleDateApp({ display: "none" });
      setShowDateeError(true);
    } else {
      setstyleDateApp({ display: "flex" });
      setstyleDate({ backgroundColor: "white" });
      setShowDateeError(false);
    }
    if (validateDate && validateEmail && validateName && validateNumber) {
      //reverse and replace characters for api
      let newDate = date.replace(/-/g, "/").split("/").reverse().join("/");

      const obj = {
        name: name,
        email: email,
        phone: number,
        date_of_birth: newDate,
      };

      getData(obj);

      navigate("/experience");
    }
  };

  //validate after refresh
  useEffect(() => {
    //name
    const saved = localStorage.getItem("name");

    const initialValue = JSON.parse(saved);

    if (initialValue.length > 0) {
      setShowName(false);
    }
    if (initialValue.length > 1) {
      setstyleNameApp({ display: "flex" });
    }
    //email
    const email = localStorage.getItem("email");

    const emailValue = JSON.parse(email);

    if (emailValue.length > 0) {
      setShowEmail(false);
    }
    if (emailValue.endsWith("@redberry.ge")) {
      setstyleEmailApp({ display: "flex" });
    }
    //phone
    const number = localStorage.getItem("number");

    const numberValue = JSON.parse(number);

    if (numberValue.length > 0) {
      setShowNumber(false);
    }
    if (numberValue.length === 9) {
      setstylePhoneApp({ display: "flex" });
    }
    //date
    const date = localStorage.getItem("date");

    const dateValue = JSON.parse(date);

    if (dateValue.length > 0) {
      setShowDate(false);
    }
    if (dateValue.length === 10) {
      setstyleDateApp({ display: "flex" });
    }
  }, []);
  return (
    <>
      {validateDate && validateEmail && validateName && validateNumber && (
        <div className={classes.approvedImage}>
          <img className={classes.img} src={finalapproved} alt="approved"></img>
        </div>
      )}
      {showNameeError && (
        <div className={classes.errorPopup}>
          <div className={classes.secPerent}>
            <img className={classes.errorImp} src={important} alt="error"></img>
            <p className={classes.errorMessage}>Name too short</p>
            <button
              onClick={() => {
                setShowNameeError(false);
              }}
              className={classes.btnClose}
            >
              x
            </button>
          </div>
          <hr className={classes.line} />
          <div>
            <p className={classes.description}>
              Name must be at least 2 characters long
            </p>
          </div>
        </div>
      )}
      {showEmaileError && (
        <div className={classes.errorPopup}>
          <div className={classes.secPerent}>
            <img className={classes.errorImp} src={important} alt="error"></img>
            <p className={classes.errorMessage}>Invalid email</p>
            <button
              onClick={() => {
                setShowEmaileError(false);
              }}
              className={classes.btnClose}
            >
              x
            </button>
          </div>
          <hr className={classes.line} />
          <div>
            <p className={classes.description}>
              Please enter valid email address
            </p>
          </div>
        </div>
      )}
      {showNumbereError && (
        <div className={classes.errorPopup}>
          <div className={classes.secPerent}>
            <img className={classes.errorImp} src={important} alt="error"></img>
            <p className={classes.errorMessage}>Invalid phone number</p>
            <button
              onClick={() => {
                setShowNumbereError(false);
              }}
              className={classes.btnClose}
            >
              x
            </button>
          </div>
          <hr className={classes.line} />
          <div>
            <p className={classes.description}>
              Phonenumber must be 9 characters long
            </p>
          </div>
        </div>
      )}
      {showDateError && (
        <div className={classes.errorPopup}>
          <div className={classes.secPerent}>
            <img className={classes.errorImp} src={important} alt="error"></img>
            <p className={classes.errorMessage}>Invalid birth date</p>
            <button
              onClick={() => {
                setShowDateeError(false);
              }}
              className={classes.btnClose}
            >
              x
            </button>
          </div>
          <hr className={classes.line} />
          <div>
            <p className={classes.description}>Please enter valid birth date</p>
          </div>
        </div>
      )}
      <form onSubmit={validateFunc} className={classes.form}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className={classes.date}
          name="firstname"
          value={name}
          style={styleName}
          ref={inputName}
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
          value={email}
          ref={inputEmail}
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
          value={number}
          ref={inputPhone}
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
          value={date}
          ref={inputDate}
          style={styleDate}
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
        <img
          style={styleDateApp}
          className={classes.approvedDate}
          src={pwichka}
          alt="approved"
        ></img>

        <button className={classes.nextbtn} type="submit">
          <span className={classes.btntext}>Next</span>

          <img src={vector} alt="vector"></img>
        </button>
      </form>
      <Link to="/">
        <button className={classes.backbtn}>Back</button>
      </Link>
    </>
  );
};

export default Form;
