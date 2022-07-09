import { useState, useEffect } from "react";
import classes from "./CharactersSelect.module.css";
import arrow from "../../images/arrow.png";
import arrowup from "../../images/arrowup.png";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import important from "../../images/important.png";

const CharactersSelect = (props) => {
  const navigate = useNavigate();
  //error popups

  const [indexError, setIndexError] = useState(false);
  const [booleanError, setbooleanError] = useState(false);
  const [characterError, setcharacterError] = useState(false);

  //dropdown items
  const [select, setSelect] = useState();
  const [isDropdownViseable, setIsDropdownViseable] = useState(false);
  //selected state for user
  const [selectedItemIndex, setselectedItemIndex] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("char");

    const initialValue = JSON.parse(saved);

    return initialValue || null;
  });

  const [selectedid, setselectedid] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("id");

    const initialValue = JSON.parse(saved);

    return initialValue || null;
  });

  const [radioYesValue, setradioYesValue] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("yes");

    const initialValue = JSON.parse(saved);

    return initialValue || null;
  });

  useEffect(() => {
    const other = {
      id: 5,
      name: "other",
      image: "https://i.stack.imgur.com/l60Hf.png",
    };
    // GET request using axios inside useEffect React hook
    axios
      .get("https://chess-tournament-api.devtest.ge/api/grandmasters")
      .then((response) => setSelect([...response.data, other]));

    localStorage.setItem("char", JSON.stringify(selectedItemIndex));
    localStorage.setItem("yes", JSON.stringify(radioYesValue));
    localStorage.setItem("id", JSON.stringify(selectedid));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [selectedItemIndex, radioYesValue, selectedid]);

  const validationForm = () => {
    //error validation
    if (props.exp.experience_level === null) {
      setIndexError(true);
    } else {
      setIndexError(false);
    }

    if (radioYesValue === null) {
      setbooleanError(true);
    } else {
      setbooleanError(false);
    }

    if (selectedItemIndex === null) {
      setcharacterError(true);
    } else {
      setcharacterError(false);
    }
    console.log(props.exp);
    //validation for thanks page
    if (
      selectedItemIndex !== null &&
      radioYesValue !== null &&
      props.exp.experience_level.length > 0
    ) {
      console.log(props.exp);
      const obj = {
        ...props.personalInfo,
        ...props.exp,
        already_participated: JSON.parse(radioYesValue),
        character_id: selectedid,
      };
      const jsonObj = JSON.stringify(obj);
      console.log(jsonObj);

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      axios
        .post("https://chess-tournament-api.devtest.ge/api/register", jsonObj, {
          headers,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      navigate("/finished");
    }
  };

  return (
    <>

{characterError && (
        <div className={classes.errorPopup}>
          <div className={classes.secPerent}>
            <img className={classes.errorImp} src={important} alt="error"></img>
            <p className={classes.errorMessage}>Choose your character</p>
            <button
              onClick={() => {
                setIndexError(false);
              }}
              className={classes.btnClose}
            >
              x
            </button>
          </div>
          <hr className={classes.line} />
          <div>
            <p className={classes.description}>
              Please choose your character
            </p>
          </div>
        </div>
      )}
      {indexError && (
        <div className={classes.errorPopup}>
          <div className={classes.secPerent}>
            <img className={classes.errorImp} src={important} alt="error"></img>
            <p className={classes.errorMessage}>Choose your experience</p>
            <button
              onClick={() => {
                setIndexError(false);
              }}
              className={classes.btnClose}
            >
              x
            </button>
          </div>
          <hr className={classes.line} />
          <div>
            <p className={classes.description}>
              Please choose your chess experience
            </p>
          </div>
        </div>
      )}

      {booleanError && (
        <div className={classes.errorPopup}>
          <div className={classes.secPerent}>
            <img className={classes.errorImp} src={important} alt="error"></img>
            <p className={classes.errorMessage}>Choose answer y/n</p>
            <button
              onClick={() => {
                setbooleanError(false);
              }}
              className={classes.btnClose}
            >
              x
            </button>
          </div>
          <hr className={classes.line} />
          <div>
            <p className={classes.description}>
              Please choose answer y/n
            </p>
          </div>
        </div>
      )}
      <div className={classes.customDropdown}>
        {/* custum dropdown selection */}
        <div
          className={classes.selection}
          onClick={(e) => {
            setIsDropdownViseable(!isDropdownViseable);
          }}
        >
          {selectedItemIndex !== null ? (
            selectedItemIndex
          ) : (
            <>
              <p className={classes.defaultSelect}>
                Choose your character<span className={classes.red}> *</span>
              </p>
            </>
          )}
        </div>
        {/* custum dropdown list */}
        {isDropdownViseable ? (
          <div className={classes.holder}>
            {select.map((item, index) => {
              return (
                <div
                  key={item.name}
                  onClick={(e) => {
                    setselectedItemIndex(item.name);
                    setIsDropdownViseable(false);

                    setselectedid(item.id);
                  }}
                  className={classes.parent}
                >
                  <div className={classes.option}>{item.name}</div>
                  {item.name === "other" ? (
                    <img
                      className={classes.image}
                      src={item.image}
                      alt="img"
                    ></img>
                  ) : (
                    <img
                      className={classes.image}
                      src={`https://chess-tournament-api.devtest.ge${item.image}`}
                      alt="img"
                    ></img>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>

      {isDropdownViseable ? (
        <img className={classes.arrowDown} src={arrowup} alt="arrowup"></img>
      ) : (
        <img className={classes.arrowDown} src={arrow} alt="arrowdown"></img>
      )}

      <p className={classes.radioLabel}>
        Have you participated in the Redberry Championship?{" "}
        <span className={classes.red}> *</span>
      </p>

      <form className={classes.radio}>
        <input
          className={classes.inpradio}
          name="radio"
          type="radio"
          checked={radioYesValue === "true"}
          onChange={(e) => {
            setradioYesValue(e.target.value);
          }}
          value="true"
        />
        Yes
        <input
          className={classes.inpradio}
          name="radio"
          type="radio"
          checked={radioYesValue === "false"}
          onChange={(e) => {
            setradioYesValue(e.target.value);
          }}
          value="false"
        />
        No
      </form>

      <button
        onClick={() => {
          validationForm();
        }}
        className={classes.nextbtn}
      >
        <span className={classes.btntext}>Done</span>
      </button>
    </>
  );
};

export default CharactersSelect;
