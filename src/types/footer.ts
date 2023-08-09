export interface FooterDataType {
  page: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  buttons: {
    key: string;
    icon: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    text: string;
  }[];
  text: {
    title: string;
    address: {
      location: string;
      email: string;
      phone: string;
    };
  };
}
