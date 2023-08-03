import fs from "fs/promises";
import path from "path";

/**
 * This function is used to fetch data from multiple files in a specified folder (pageDataFolderPath):
 * 1. Reads the names of all the files in the specified folder (readdir).
 * 2. Maps over the file names and creating a new promise for each file (dataPromises).
 * 3. Waits for all the promises to resolve and stores the resolved values (data).
 */
export async function fetchPageData(pageDataFolderPath) {
  try {
    const fileNames = await fs.readdir(pageDataFolderPath);
    const dataPromises = fileNames.map(async (fileName) => {
      const filePath = path.join(pageDataFolderPath, fileName);
      const fileData = await fs.readFile(filePath, "utf-8");
      const parsedData = JSON.parse(fileData);
      return parsedData;
    });
    const data = await Promise.all(dataPromises);
    return data;
  } catch (error) {
    console.error("Error reading or parsing files:", error);
    return [];
  }
}

export const dataFolderPath = path.join(process.cwd(), "src", "data");
