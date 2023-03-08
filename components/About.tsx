import Title from "./Title";

export default function About(): JSX.Element {
  return (
    <section id="title-ABOUT">
      <Title title={"ABOUT ME"} />
      <div className="flex items-center justify-center w-11/12 py-48 m-auto">
        <p>Introduce</p>
      </div>
    </section>
  );
}
