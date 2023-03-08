"use client";

import { useRef, useEffect } from "react";

export default function Header(): JSX.Element {
  const targetRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const totalHeight = scrollHeight - clientHeight;
    const targetWidth = (scrollY / totalHeight) * 100;
    if (targetRef.current) targetRef.current.style.width = targetWidth + "%";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <div className="flex justify-between w-11/12 m-auto font-bold">
        <div className="flex">
          <button
            className="cursor-pointer hover:text-blue-600"
            onClick={() =>
              document.scrollingElement?.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            James An
          </button>
        </div>
        <div className="flex">
          <button
            className="px-12 py-8 cursor-pointer hover:text-blue-600 "
            onClick={() =>
              document.scrollingElement?.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            HOME
          </button>
          <button
            className="px-12 py-8 cursor-pointer hover:text-blue-600"
            onClick={() =>
              document.scrollingElement?.scrollTo({
                top: 841,
                behavior: "smooth",
              })
            }
          >
            ABOUT
          </button>
          <button
            className="px-12 py-8 cursor-pointer hover:text-blue-600"
            onClick={() =>
              document.scrollingElement?.scrollTo({
                top: 1293,
                behavior: "smooth",
              })
            }
          >
            PROJECTS
          </button>
          <button
            className="px-12 py-8 cursor-pointer hover:text-blue-600"
            onClick={() =>
              document.scrollingElement?.scrollTo({
                top: 3006,
                behavior: "smooth",
              })
            }
          >
            CONTACT
          </button>
        </div>
      </div>
      <div ref={targetRef} className="w-0 h-1 bg-blue-600 rounded-sm"></div>
    </header>
  );
}
