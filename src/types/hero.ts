export interface HeroDataType {
  component: string;
  order: number;
  text: {
    title: string;
    description: string;
  };
  image: {
    src: string;
    alt: string;
  };
  buttons: [
    {
      key: string;
      icon: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
      text: string;
    }
  ];
}
