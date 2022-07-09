import { useState, useEffect } from "react";
import classes from "./CustomSelect.module.css";
import arrow from "../../images/arrow.png";
import arrowup from "../../images/arrowup.png";

const inputs = [
  {
    label: "beginner",
    value: "beginner",
  },
  {
    label: "intermediate",
    value: "intermediate",
  },
  {
    label: "professional",
    value: "professional",
  },
];

const CustomSelect = ({ getData }) => {
  //dropdown items
  const [select, setSelect] = useState(inputs);
  //show dropdown menu
  const [isDropdownViseable, setIsDropdownViseable] = useState(false);
  //selected state for user
  const [selectedItemIndex, setselectedItemIndex] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("exp");

    const initialValue = JSON.parse(saved);

    return initialValue || null;
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("exp", JSON.stringify(selectedItemIndex));

    //creating object to for validation and pass with props
    const obj = {
      experience_level: selectedItemIndex,
    };
    console.log(selectedItemIndex)
    if (obj.experience_level === "intermediate") {
      obj.experience_level = "normal";
    }
    getData(obj);
    localStorage.setItem("experience", JSON.stringify(obj));
   
    
  }, [selectedItemIndex]);
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
            selectedItemIndex
          ) : (
            <>
              <p className={classes.defaultSelect}>
                level of knowledge<span className={classes.red}> *</span>
              </p>
            </>
          )}
        </div>
        {/* custum dropdown list */}
        {isDropdownViseable ? (
          <div className={classes.holder}>
            {select.map((item) => {
              return (
                <div
                  key={Math.random(10)}
                  className={classes.option}
                  onClick={(e) => {
                    setselectedItemIndex(item.label);
                    setIsDropdownViseable(false);
                  }}
                >
                  {item.label}
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
    </>
  );
};

export default CustomSelect;
