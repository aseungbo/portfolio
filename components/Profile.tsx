import Image from "next/image";
import imagePath from "../public/me.png";

export default function Profile(): JSX.Element {
  return (
    <div>
      <Image alt={"profile"} width={256} height={256} src={imagePath} />
    </div>
  );
}
