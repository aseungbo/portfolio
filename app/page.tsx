import { NotionRenderer } from "react-notion";
import "@/styles/notion.css";

async function fetchNotion() {
  const notionResponse = await fetch(
    "https://notion-api.splitbee.io/v1/page/14304e546f5047cba2f0a02d8b2c77cd",
    {
      // cache: "force-cache", // SSG
      cache: "no-store", // SSR
      // next: {
      //   revalidate: 10, // ISR
      // },
    }
  );
  console.log(notionResponse);
  if (!notionResponse.ok) {
    throw new Error("Failed to fetch data");
  }
  return notionResponse.json();
}

export default async function Home() {
  const notion = await fetchNotion();

  return <NotionRenderer blockMap={notion} />;
}
