import { useState,useEffect } from "react";
import classes from "./CharactersSelect.module.css";
import arrow from "../../images/arrow.png";
import arrowup from "../../images/arrowup.png";
import axios from "axios";



const CharactersSelect = () => {





  //dropdown items
  const [select, setSelect] = useState({
    "id": 1,
    "name": "other",
    "image": "/images/other.jpg"
  });

  const arr=

  //show dropdown menu
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('https://chess-tournament-api.devtest.ge/api/grandmasters')
        .then(response => setSelect (response.data))

   

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  const [isDropdownViseable, setIsDropdownViseable] = useState(false);
  //selected state for user
  const [selectedItemIndex, setselectedItemIndex] = useState(null);

  console.log(select)

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
                <div key={item.id} className={classes.parent}>
                  <div
                    key={item.id}
                    className={classes.option}
                    onClick={(e) => {
                      setselectedItemIndex(index);
                      setIsDropdownViseable(false);
                    }}
                  >
                    {item.name}
                   
                  </div>
                  <img className={classes.image} src={`https://chess-tournament-api.devtest.ge${item.image}`} alt="img"></img>
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
    
    </>
  );
};

export default CharactersSelect;
