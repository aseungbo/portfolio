import Title from "./Title";

export default function About(): JSX.Element {
  return (
    <section id="ABOUT">
      <Title title={"ABOUT ME"} />
      <div className="flex flex-col items-center justify-center w-11/12 gap-8 py-48 m-auto">
        <p>Text.</p>
        <div className="flex justify-center gap-4">
          <div className="w-32 h-32 p-4">
            <p>Text</p>
          </div>
          <div className="w-32 h-32 p-4">
            <p>Text</p>
          </div>
          <div className="w-32 h-32 p-4">
            <p>Text</p>
          </div>
        </div>
      </div>
    </section>
  );
}
