export default function Footer(): JSX.Element {
  return (
    <footer className=" text-xs fixed left-1/2 bottom-1 -translate-x-1/2 -translate-y-1/2">
      <p>{`@${new Date().getFullYear()} aseungbo`}</p>
    </footer>
  );
}
