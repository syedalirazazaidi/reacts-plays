import Image from "next/image";
import HomeButton from "./components/btn";
// import CardComp from "./components/card";
import DialogueComp from "./components/dialogue";
import Hero from "./components/hero";
import { CardWithForm } from "./components/card";
import { SheetDemo } from "./components/sheets";
import { CommandDemo } from "./components/command";

export default function Home() {
  return (
    <main>
      {/* hi this is developer */}
      {/* <HomeButton /> */}
      {/* <DialogueComp /> */}
      {/* <Hero /> */}
      {/* <CardWithForm /> */}
      {/* <SheetDemo /> */}
      <CommandDemo />
      {/* <CardComp /> */}
    </main>
  );
}
