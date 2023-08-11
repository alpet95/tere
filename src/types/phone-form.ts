export interface PhoneFormDataType {
  component: string;
  order: number;
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
