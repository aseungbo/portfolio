"use client";

import Profile from "./Profile";

export default function Intro(): JSX.Element {
  const handleClick = (menu: string) => {
    const element: HTMLElement | null = document.querySelector(`#${menu}`);
    if (element) {
      document.scrollingElement?.scrollTo({
        top: element?.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="INTRO" className=" text-white bg-black h-[calc(100vh-88px)]">
      <div className="flex flex-col items-center justify-center w-11/12 h-full gap-4 m-auto">
        <Profile />
        <div className="flex justify-center gap-4">
          {/* <button
            className="p-4  w-32 hover:font-bold hover:border-blue-600 hover:border-b-[2px]  border-black border-b-[2px]"
            onClick={() => handleClick("ABOUT")}
          >
            About me
          </button> */}
          <button
            className="p-4 w-32 hover:font-bold hover:border-blue-600 hover:border-b-[2px]  border-black border-b-[2px]"
            onClick={() => handleClick("PROJECTS")}
          >
            My Projects
          </button>
        </div>
      </div>
    </section>
  );
}
