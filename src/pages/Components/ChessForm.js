import classes from "./ChessForm.module.css"

const ChessForm = () => {
  return (
    <>
      <form>
      
        <select name="level" id="level" className={classes.selectLevel}>
      
          <option  className={classes.option} value="Beginner"><span className={classes.optionText}>Beginner</span></option>
          <option className={classes.option} value="Intermediate">Intermediate</option>
          <option className={classes.option} value="mercedes">Professional</option>
        </select>
      </form>
    </>
  );
};

export default ChessForm;
