import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col items-start justify-center lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-start justify-center gap-6 px-6 py-16 lg:py-0 lg:pl-20 lg:pr-[60px]">
          <div className="flex flex-col items-start justify-center gap-6">
            <h1 className="text-[40px]/[48px] font-bold lg:text-[56px]/[68px]">
              Learn new skills online with ease
            </h1>
            <p className="text-lg">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="flex items-center justify-start gap-2 pt-4 sm:gap-4">
            <Button className="">Start learning now</Button>
            <Button variant={"outline"} className="">
              Explore Courses
            </Button>
          </div>
        </div>
        <Image
          src={"/hero.png"}
          alt="hero"
          width={1200}
          height={1800}
          className="h-[800px] w-screen object-cover object-top lg:h-auto lg:w-[50vw]"
        />
      </div>
      </div>
  )}
