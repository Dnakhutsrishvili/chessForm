import { useState, useEffect } from "react";
import classes from "./CharactersSelect.module.css";
import arrow from "../../images/arrow.png";
import arrowup from "../../images/arrowup.png";
import axios from "axios";

const CharactersSelect = () => {
  //dropdown items
  const [select, setSelect] = useState();

  const [radioValue, setradioValue] = useState();


  const arr =
    //show dropdown menu
    useEffect(() => {
      const other = {
        id: 1,
        name: "other",
        image: "https://i.stack.imgur.com/l60Hf.png",
      };
      // GET request using axios inside useEffect React hook
      axios
        .get("https://chess-tournament-api.devtest.ge/api/grandmasters")
        .then((response) => setSelect([...response.data, other]));

  

      // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);



  const [isDropdownViseable, setIsDropdownViseable] = useState(false);
  //selected state for user
  const [selectedItemIndex, setselectedItemIndex] = useState(null);
  console.log(selectedItemIndex)
 

  return (
    <>
      <div className={classes.customDropdown}>
        {/* custum dropdown selection */}
        <div
          className={classes.selection}
          onClick={(e) => {
            setIsDropdownViseable(!isDropdownViseable);
          }}
        >
          {selectedItemIndex !== null ? (
            select[selectedItemIndex].name
           
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
                <>
                  <div
                    key={item.id}
                    onClick={(e) => {
                      setselectedItemIndex(index);
                      setIsDropdownViseable(false);
                    }}
                    className={classes.parent}
                  >
                    <div key={item.id} className={classes.option}>
                      {item.name}
                    </div>
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
                </>
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




<p className={classes.radioLabel}>Have you participated in the Redberry Championship? <span className={classes.red}> *</span></p>

<form className={classes.radio}>
  <input   className={classes.inpradio} name="radio" type="radio"   value={radioValue}/>Yes
 <input  className={classes.inpradio} name="radio" type="radio" value={radioValue}/>No 
</form>


    </>
  );
};

export default CharactersSelect;
