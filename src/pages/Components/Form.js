import classes from "./Form.module.css";

const Form = () => {
  return (
    <>
      <form className={classes.form}>
        <input
          type="text"
          className={classes.input}
          name="firstname"
          placeholder="Name *"
        ></input>

        <input className={classes.input}  type="email" name="email" placeholder="Email adress *"></input>

        <input className={classes.input} type="number" name="phone" placeholder="Phone number *"></input>

        <input className={classes.date} type="date" name="date" placeholder="Date of birth"></input>
      </form>
    </>
  );
};

export default Form;
