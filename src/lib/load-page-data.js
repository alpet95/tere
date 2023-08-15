import path from "path";
import { dataFolderPath, getPageData } from "@/helpers/data-utilities";

export async function getHomePageData() {
  try {
    const homePage = path.join(dataFolderPath, "home");
    const data = await getPageData(homePage);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
