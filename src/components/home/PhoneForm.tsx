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
  const inputPattern = data.form.input.pattern;
  const inputPlaceholder = data.form.input.placeholder;
  const buttonText = data.form.button.text;

  return (
    <section className={classes["phone-form"]}>
      <h2 className={classes["phone-form-header"]}>{title}</h2>

      <form className={classes["phone-form-form"]}>
        <input
          className={classes["phone-form-input"]}
          type="tel"
          pattern={inputPattern}
          placeholder={inputPlaceholder}
          required
        />
        <Button className={classes["phone-form-button"]} type="submit">
          {buttonText}
        </Button>
      </form>
    </section>
  );
};

export default PhoneForm;
