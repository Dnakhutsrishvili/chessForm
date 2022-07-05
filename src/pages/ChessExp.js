import classes from "./ChessExp.module.css";
import king from "../images/king.png";
import banner2 from "../images/banner2.png";
import finalapproved from "../images/finalapproved.png"
import ChessForm from "./Components/ChessForm.js"

const ChessExp = () => {
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

          <img src={banner2} alt="chess"></img>
          <p className={classes.quate}>
            “Many have become chess masters;<br/>no one has become the master of
            chess.”
          </p>
          <p className={classes.emanuel}>- Siegbert Tarrasch</p>
        </div>
        <div>
          <div className={classes.headerDiv}>
            <p className={classes.header}>First step is done, continue to finish onboarding</p>
          </div>
          <div className={classes.boxParent}>
            <div className={classes.boxOne}>
              <img src={finalapproved} alt="approved"></img>
            </div>
            <p className={classes.smPerInfo}>Personal information</p>
            <div className={classes.line} />
            <div className={classes.boxTwo}>
              <p className={classes.secondValidate}>2</p>
            </div>
            <p className={classes.exp}>Chess experience</p>
          </div>
          <p className={classes.perInfo}>Chess experience</p>
          <p className={classes.basicInfo}>This is basic informaton fields</p>
          <ChessForm></ChessForm>
        </div>
      </div>
    </>
  );
};

export default ChessExp;
