/*
   Settings : 
    This conponents gives user the option to change the language.
*/
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Locale from "../utlis/Locale";
import  "./setting.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

/**
 * Component to render whole UI of Home page
 */
function Settings() {
  const classes = useStyles();
  const [value, setValue] = React.useState(localStorage.getItem("language"));
  const [error, setError] = React.useState(false);

  /* istanbul ignore next */
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  /**
   * Handles Submit button click
   * @param {*} event event
   */
  /* istanbul ignore next */
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("language", value)
    window.location.reload(true);
  };

  return (
    <form onSubmit={handleSubmit}>
            <div className="settingBanner">
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">{Locale.print("Select Language")}</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel style={{color:'black'}} value="en" control={<Radio color="primary"/>} label="English" />
          <FormControlLabel style={{color:'black'}} value="es" control={<Radio color="primary"/>} label="Spanish" />
          <FormControlLabel style={{color:'black'}} value="de" control={<Radio color="primary"/>} label="German" />
          <FormControlLabel style={{color:'black'}} value="pt" control={<Radio color="primary"/>} label="Portuguese" />
        </RadioGroup>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
        {Locale.print("Submit")}
        </Button>
      </FormControl>
      </div>
    </form>
  );
}
 

export default Settings;