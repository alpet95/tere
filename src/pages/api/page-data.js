import { readPageData } from "@/helpers/data-utilities";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { pageName } = req.body;
      const data = await readPageData(pageName);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error Fetching Page Data" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;
