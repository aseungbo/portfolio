export default function Header(): JSX.Element {
  return (
    <header className="flex justify-between px-4 w-full bg-black text-white h-20">
      <button className="p-2 my-4 cursor-pointer rounded-lg hover:bg-white hover:text-black">
        Home
      </button>
      <div className="flex gap-4">
        <button className="p-2 my-4 cursor-pointer rounded-lg hover:bg-white hover:text-black">
          Introduce
        </button>
        <button className="p-2 my-4 cursor-pointer rounded-lg hover:bg-white hover:text-black">
          Project
        </button>
        <button className="p-2 my-4 cursor-pointer rounded-lg hover:bg-white hover:text-black">
          Education
        </button>
        <button className="p-2 my-4 cursor-pointer rounded-lg hover:bg-white hover:text-black">
          Contact
        </button>
      </div>
    </header>
  );
}
