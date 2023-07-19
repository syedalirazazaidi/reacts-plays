import Image from "next/image";
import { ButtonDemo } from "./testcomponents/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hi developer
      <ButtonDemo />
    </main>
  );
}
