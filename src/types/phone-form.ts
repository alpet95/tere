export interface PhoneFormDataType {
  page: string;
  text: {
    title: string;
  };
  form: {
    input: {
      pattern: string;
      placeholder: string;
    };
    button: {
      text: string;
    };
  };
}
