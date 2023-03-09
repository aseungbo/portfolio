import { BsGithub } from "react-icons/bs";
import { SiGmail, SiVelog } from "react-icons/si";
import Title from "./Title";

export default function Contact(): JSX.Element {
  return (
    <section id="CONTACT">
      <div className="py-32">
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
          <a
            href="https://velog.io/@aseungbo"
            className="cursor-pointer hover:text-blue-600"
          >
            <SiVelog size={64} />
          </a>
        </div>
      </div>
    </section>
  );
}
