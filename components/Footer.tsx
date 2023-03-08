import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Title from "./Title";

export default function Footer(): JSX.Element {
  return (
    <footer id="title-CONTACT" className="text-white bg-black">
      <div className="w-11/12 m-auto">
        <div className="py-32 border-gray-300 border-b-[1px]">
          <div>
            <Title title="CONTACT" />
            <div className="flex justify-center gap-16 py-48">
              <a
                className="cursor-pointer hover:text-blue-600"
                href="https://github.com/aseungbo"
              >
                <BsGithub size={64} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=seungbo1112@gmail.com"
                className="cursor-pointer hover:text-blue-600"
              >
                <SiGmail size={64} />
              </a>
            </div>
          </div>
        </div>
        <div className="py-16 text-xs text-center">
          <span>{`©${new Date().getFullYear()} Copyright  Made by `}</span>
          <a className="underline " href="https://github.com/aseungbo">
            James An
          </a>
        </div>
      </div>
    </footer>
  );
}
