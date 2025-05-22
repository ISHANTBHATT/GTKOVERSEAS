import Image from "next/image";
import Homepage from "./components/Homepage";
import Carousel from "./components/Carousel";
import ScrollSteps from "./components/ScrollSteps";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Carousel />
      <Homepage />
      {/* <ScrollSteps /> */}
    </div>
  );
}
