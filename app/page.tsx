import { NotionRenderer } from "react-notion";
import "@/styles/notion.css";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Title from "@/components/Title";

async function fetchNotion() {
  const notionResponse = await fetch(
    "https://notion-api.splitbee.io/v1/page/5270add7aa9f4c5888562036a62444cb",
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

  return (
    <main>
      <Intro />
      <About />
      <section id="title-PROJECTS">
        <Title title={"PROJECTS"} />
        <NotionRenderer blockMap={notion} />
      </section>
    </main>
  );
}
