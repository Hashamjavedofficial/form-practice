import React from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { Field } from "formik";

const SelectGeneric = (props) => {
  return (
    <Field
      as={Select}
      native={props.native}
      label={props.label}
      name={props.name}
      variant={"outlined"}
      margin={"dense"}
    >
      <option aria-label="None" value="" />
      {props.options.map((item) => (
        <option value={item.value}>{item.name}</option>
      ))}
    </Field>
  );
};
export default SelectGeneric;
