export interface BenefitsDataType {
  component: string;
  order: number;
  text: {
    heading: string;
  };
  slides: [
    {
      id: string;
      image: {
        src: string;
        alt: string;
      };
      text: {
        title: {
          span: string;
          text: string;
        };
        description: string;
      };
    }
  ];
}
