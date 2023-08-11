import { useReducer, useEffect } from "react";

import { FooterDataType } from "@/types/footer";
import { HeaderDataType } from "@/types/header";

interface Data {
  header: HeaderDataType | null;
  footer: FooterDataType | null;
}

type DataAction =
  | { type: "SET_HEADER_DATA"; payload: HeaderDataType }
  | { type: "SET_FOOTER_DATA"; payload: FooterDataType };

const initialData: Data = {
  header: null,
  footer: null,
};

const dataReducer = (data: Data, action: DataAction): Data => {
  switch (action.type) {
    case "SET_HEADER_DATA":
      return { ...data, header: action.payload };
    case "SET_FOOTER_DATA":
      return { ...data, footer: action.payload };
    default:
      return data;
  }
};

const useDataReducer = () => {
  const [data, dispatchData] = useReducer(dataReducer, initialData);

  useEffect(() => {
    const getData = async (
      url: string,
      actionType: "SET_HEADER_DATA" | "SET_FOOTER_DATA"
    ) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        dispatchData({ type: actionType, payload: data });
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    getData("/api/header-data", "SET_HEADER_DATA");
    getData("/api/footer-data", "SET_FOOTER_DATA");
  }, []);

  return data;
};

export default useDataReducer;
