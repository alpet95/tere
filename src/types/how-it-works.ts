export interface HowItWorksDataType {
  page: string;
  text: {
    heading: string;
    description: string;
  };
  slides: [
    {
      id: string;
      image: {
        src: string;
        alt: string;
      };
      text: {
        title: string;
        description: string;
      };
    }
  ];
  image: {
    src: string;
    alt: string;
  };
}
