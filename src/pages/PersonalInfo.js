import classes from "./PersonalInfo.module.css";
import king from "../images/king.png";
import banner from "../images/banner.png";
import Form from "./Components/Form";

const PersonalInfo = ({ getDataApp }) => {
  //get data from child component
  const getData = (childData) => {
    getDataApp(childData);
  };

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

          <img src={banner} alt="chess"></img>
          <p className={classes.quate}>
            “When you see a good move, look for a better one.”
          </p>
          <p className={classes.emanuel}>-Emanuel Lasker</p>
        </div>
        <div>
          <div className={classes.headerDiv}>
            <p className={classes.header}>Start creating your account</p>
          </div>
          <div className={classes.boxParent}>
            <div className={classes.boxOne}>
              <p className={classes.validate}>1</p>
            </div>
            <p className={classes.smPerInfo}>Personal information</p>
            <div className={classes.line} />
            <div className={classes.boxTwo}>
              <p className={classes.secondValidate}>2</p>
            </div>
            <p className={classes.exp}>Chess experience</p>
          </div>
          <p className={classes.perInfo}>Personal Information</p>
          <p className={classes.basicInfo}>This is basic informaton fields</p>

          <Form getData={getData}></Form>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
