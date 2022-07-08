import { useState, useEffect } from "react";
import classes from "./CharactersSelect.module.css";
import arrow from "../../images/arrow.png";
import arrowup from "../../images/arrowup.png";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const CharactersSelect = () => {
  const navigate = useNavigate();
  //error popups



  //dropdown items
  const [select, setSelect] = useState();
  const [isDropdownViseable, setIsDropdownViseable] = useState(false);
  //selected state for user
  const [selectedItemIndex, setselectedItemIndex] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("char");
 
    const initialValue = JSON.parse(saved);
    console.log(initialValue)
    return initialValue || null;
  });
  
  const [radioYesValue, setradioYesValue] = useState(
    () => {
      // getting stored value
      const saved = localStorage.getItem("yes");
   
      const initialValue = JSON.parse(saved);
      console.log(initialValue)
      return initialValue || null;
    }
  );

 


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

        localStorage.setItem("char", JSON.stringify(selectedItemIndex));
        localStorage.setItem("yes", JSON.stringify(radioYesValue));
       
   
      // empty dependency array means this effect will only run once (like componentDidMount in classes)

    
    }, [selectedItemIndex,radioYesValue]);




   const validationForm=()=>{

    if(selectedItemIndex!==null&&radioYesValue!==null)
    navigate("/finished");
   }

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
                      setselectedItemIndex(item.name);
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
  <input   className={classes.inpradio} name="radio" type="radio" checked={radioYesValue === 'true'}  onChange={(e)=>{setradioYesValue(e.target.value)}}   value="true"/>Yes
 <input  className={classes.inpradio} name="radio" type="radio" checked={radioYesValue === 'false'}  onChange={(e)=>{setradioYesValue(e.target.value)}} value="false"/>No 
</form>

<button onClick={()=>{validationForm()}} className={classes.nextbtn} >
          <span className={classes.btntext}>Done</span>

         
        </button>

    </>
  );
};

export default CharactersSelect;
