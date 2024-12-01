import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-12 px-6 py-12 lg:mb-[90px] lg:mt-[50px] lg:gap-20 lg:p-20">
      <div className="flex flex-col items-center justify-center gap-12 lg:w-full lg:gap-20">
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <div className="flex flex-col items-center justify-center gap-4 lg:w-full lg:items-start">
            <h2 className="text-center text-lg font-semibold lg:text-left">
              Subscribe to our newsletter
            </h2>
            <p className="text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 lg:items-start">
            <form className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
              <Input
                placeholder="Enter your email"
                type="email"
                className="border-black"
              />
                <Button variant={"outline"} className="w-full h-12">Subscribe</Button>
            </form>
            <p className="text-center text-sm">
              By subscribing you agree to with our{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-8 lg:w-full lg:flex-row lg:justify-between lg:gap-10">
          <div className="flex items-center justify-center gap-[10px]">
            <Image src={"/logo.svg"} alt="logo" height={30} width={32} />
            <span className="font-inter text-2xl font-bold">Ddsgnr</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-center font-semibold">Courses</h3>
            <div>
              <p className="py-2 text-center text-sm">Business</p>
              <p className="py-2 text-center text-sm">Development</p>
              <p className="py-2 text-center text-sm">Technology</p>
              <p className="py-2 text-center text-sm">Design</p>
              <p className="py-2 text-center text-sm">Programming</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-center font-semibold">Resources</h3>
            <div>
              <p className="py-2 text-center text-sm">Career</p>
              <p className="py-2 text-center text-sm">Resume</p>
              <p className="py-2 text-center text-sm">Learning</p>
              <p className="py-2 text-center text-sm">Interview Preperation</p>
              <p className="py-2 text-center text-sm">Jobs</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-center font-semibold">About Us</h3>
            <div>
              <p className="py-2 text-center text-sm">Contact</p>
              <p className="py-2 text-center text-sm">Help/Support</p>
              <p className="py-2 text-center text-sm">FAQ</p>
              <p className="py-2 text-center text-sm">Terms and Conditions</p>
              <p className="py-2 text-center text-sm">Partners</p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <hr className="w-full border border-black" />
          <div className="flex flex-col items-center justify-center gap-6 lg:w-full lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-start">
              <p className="text-center text-sm">
                2023 Ddsgnr. All right reserved.
              </p>
              <div className="flex items-center gap-6">
                <p className="text-center text-sm underline">Privacy Policy</p>
                <p className="text-center text-sm underline">
                  Terms of Service
                </p>
                <p className="text-center text-sm underline">
                  Cookies Settings
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Image
                src={"/facebook.svg"}
                alt="facebook"
                height={24}
                width={24}
              />
              <Image
                src={"/instagram.svg"}
                alt="instagram"
                height={24}
                width={24}
              />
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                height={24}
                width={24}
              />
              <Image
                src={"/linkedin.svg"}
                alt="linkedin"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
