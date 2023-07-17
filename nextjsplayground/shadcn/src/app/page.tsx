import Image from "next/image";
import HomeButton from "./components/btn";
import CardComp from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hi this is developer
      <HomeButton />
      <CardComp />
    </main>
  );
}
