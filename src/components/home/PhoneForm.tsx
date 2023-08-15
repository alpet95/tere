import React from "react";

import Button from "../interface/Button";
import { PhoneFormDataType } from "@/types/phone-form";

import classes from "./PhoneForm.module.scss";

interface PhoneFormProps {
  data: PhoneFormDataType;
}

const PhoneForm = (props: PhoneFormProps) => {
  const { data } = props;

  const title = data.text.title;
  const { input, button } = data.form;

  return (
    <section className={classes["phone-form"]}>
      <h3 className={classes["phone-form-heading"]}>{title}</h3>

      <form className={classes["phone-form-form"]}>
        <input
          className={classes["phone-form-input"]}
          type="tel"
          pattern={input.pattern}
          placeholder={input.placeholder}
          required
        />
        <Button className={classes["phone-form-button"]} type="submit">
          {button.text}
        </Button>
      </form>
    </section>
  );
};

export default PhoneForm;
