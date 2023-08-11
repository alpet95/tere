export interface HowItWorksDataType {
  component: string;
  order: number;
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
