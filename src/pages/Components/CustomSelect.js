import { useState } from "react";
import classes from "./CustomSelect.module.css";
import arrow from "../../images/arrow.png";
import arrowup from "../../images/arrowup.png";

const inputs = [
  {
    label: "Beginner",
    value: "beginner",
  },
  {
    label: "Intermediate",
    value: "intermediate",
  },
  {
    label: "Professional",
    value: "professional",
  },
];

const ChessForm = () => {
  //dropdown items
  const [select, setSelect] = useState(inputs);
  //show dropdown menu
  const [isDropdownViseable, setIsDropdownViseable] = useState(false);
  //selected state for user
  const [selectedItemIndex, setselectedItemIndex] = useState(null);
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
            select[selectedItemIndex].label
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
            {select.map((item, index) => {
              return (
                <>
                  <div
                    key={item.value}
                    className={classes.option}
                    onClick={(e) => {
                      setselectedItemIndex(index);
                      setIsDropdownViseable(false);
                    }}
                  >
                    {item.label}
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

export default ChessForm;
