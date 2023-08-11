import React from "react";
import PageComponents from "./PageComponents";

interface PageComponentProps {
  data: any[];
}

export const PageComponent = (props: PageComponentProps) => {
  const { data } = props;

  return data.map((item) => {
    if (PageComponents[item.component as keyof typeof PageComponents]) {
      const Component =
        PageComponents[item.component as keyof typeof PageComponents];
      return <Component key={item.component} data={item} />;
    }
    return null;
  });
};
