import landing from "../images/Landing.png";
import classes from "./Start.module.css";
import king from "../images/king.png";
import { Link } from "react-router-dom";
import vector from "../images/Vector.png";

const Start = () => {
  return (
    <>
      <div className={classes.parent}>
        <div>
          <div className={classes.conteiner}>
            <div className={classes.cupparent}>
              <img className={classes.kingimg} src={king} alt="king"></img>
              <p className={classes.cuptext}>Redberry Knight Cup</p>
            </div>
          </div>
          <img src={landing} alt="chess"></img>
        </div>
        <div className={classes.rightWindow}>
          <div className={classes.textParent}>
            <p className={classes.chessSays}> chess says </p>
            <p className={classes.about}>a lot about</p>
          </div>
          <p className={classes.whowe}> who we are</p>
          <Link className={classes.decoration} to="/personal">
          <button className={classes.btn}>
            <span className={classes.spanPerent}>
            <Link className={classes.link} to="/personal">
              Get Started
            </Link>
            <img src={vector} alt="vector"></img>
            </span>
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Start;
