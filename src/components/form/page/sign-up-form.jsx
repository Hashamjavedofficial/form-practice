import React, { Component, Fragment } from "react";
import { Formik, Field } from "formik";
import {
  Button,
  MenuItem,
  Select,
  Grid,
  Paper,
  TextField,
  withStyles,
} from "@material-ui/core";

import { pageStyles } from "../styles/page-styles";
import SelectGeneric from "../components/Select";
const initialFormValues = {
  firstName: "",
  lastName: "",
  age: "",
  password: "",
  gender: "",
};

const optionsForGender = [
  {
    name: "Female",
    value: "f",
  },
  {
    name: "Male",
    value: "m",
  },
  {
    name: "Others",
    value: "o",
  },
];

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  formSubmitHandler(values, options) {
    alert(JSON.stringify(values));
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div>
          <Formik
            initialValues={initialFormValues}
            onSubmit={(values, options) =>
              this.formSubmitHandler(values, options)
            }
          >
            {({ values, errors, touched, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Grid container direction="row">
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                    <Paper elevation={4} className={classes.paperContainer}>
                      <Grid container direction="column">
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            label={"First Name"}
                            type="text"
                            margin="dense"
                            name="firstName"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant={"outlined"}
                            label={"Last Name"}
                            type="text"
                            margin="dense"
                            name={"lastName"}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant={"outlined"}
                            label={"Age"}
                            type="number"
                            margin="dense"
                            name={"age"}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <SelectGeneric
                            native={true}
                            label={"gender"}
                            name={"gender"}
                            options={optionsForGender}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            margin="dense"
                            type="password"
                            name={"password"}
                            variant={"outlined"}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            disableElevation
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(pageStyles)(SignUpForm);
