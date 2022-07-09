import classes from "./Endpage.module.css"
import king from "../images/king.png";
import endpage from "../images/endpage.png";
import rocket from "../images/rocket.png";

const EndPage=()=>{
  //clear all data
  localStorage.clear();
    return<>
     <div className={classes.parent}>
        <div>
          <div className={classes.conteiner}>
            <div className={classes.cupparent}>
              <img className={classes.kingimg} src={king} alt="king"></img>
              <p className={classes.cuptext}>Redberry Knight Cup</p>
            </div>
          </div>

          <img src={endpage} alt="chess"></img>
        
    
        </div>
        <div className={classes.rocket}>
         
        <img src={rocket} alt="chess2"></img>
        <p className={classes.onboarding}>Onboarding completed!</p>
  
        </div>
      </div>
    </>
}

export default EndPage