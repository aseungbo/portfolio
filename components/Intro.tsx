"use client";

export default function Intro(): JSX.Element {
  return (
    <section className=" text-white bg-black h-[calc(100vh-88px)]">
      <div className="flex flex-col items-center justify-center w-11/12 h-full gap-4 m-auto">
        <p className="text-2xl font-bold">Hello I'm James An.</p>
        <div className="flex justify-center gap-4">
          <button
            className="p-4 border-blue-600 hover:border-b-[1px]"
            onClick={() =>
              document.scrollingElement?.scrollTo({
                top: 841,
                behavior: "smooth",
              })
            }
          >
            About me
          </button>
          <button
            className="p-4 border-blue-600 hover:border-b-[1px]"
            onClick={() =>
              document.scrollingElement?.scrollTo({
                top: 1293,
                behavior: "smooth",
              })
            }
          >
            My Projects
          </button>
        </div>
      </div>
    </section>
  );
}
