import fs from "fs/promises";
import path from "path";

import { dataFolderPath } from "@/helpers/data-utilities";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const filePath = path.join(dataFolderPath, "layout", "header.json");
      const fileData = await fs.readFile(filePath, "utf-8");
      const data = JSON.parse(fileData);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error Fetching Header Data" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;