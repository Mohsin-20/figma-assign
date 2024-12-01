import { Button } from './ui/button'
import React from 'react'
import Image from 'next/image'
const header= () => {
  return (
    <header>
      <div className="hidden border-b border-b-black px-16 lg:block lg:bg-[#f7f7f7]">
        <div className="flex w-full items-center justify-between gap-8 py-3">
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm">Phone Number: 956 742 455 678</p>
            <div className="h-8 border border-black"></div>
            <p className="text-sm">Email:info@ddsgnr.com</p>
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
            <Image src={"/twitter.svg"} alt="twitter" height={24} width={24} />
            <Image
              src={"/linkedin.svg"}
              alt="linkedin"
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
      <div className="border-b border-b-black lg:bg-[#f7f7f7]">
        <div className="mx-6 my-3 flex items-center justify-center gap-8 lg:mx-16 lg:my-[14px] lg:justify-between lg:gap-0">
          <div className="flex flex-grow items-center justify-start gap-2 px-2 lg:py-[29px]">
            <Image src="/logo.svg" alt="logo" width={32} height={30} />
            <span className="font-inter text-2xl font-bold">Ddsgnr</span>
          </div>
          <div className="hidden gap-8 bg-white lg:flex">
            <div className="flex xl:gap-8 lg:6">
              <Button variant={"underlined"} size={"sm"}>
                Home
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                Courses
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                Services
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                Achievement
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                About Us
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                Testimonial
              </Button>
            </div>
            <div className="flex gap-4">
                <Button className="bg-white text-black w-200 l-150 border min-w-0.5" >Login</Button>
                <Button className='bg-black w-200 l-150'>Sign Up</Button>
            </div>
          </div>
          {/* Mobile Menu Icon */}
          <div className="flex flex-grow-0 items-center justify-center p-6 lg:hidden">
            <Image src="/menu.svg" alt="menu" width={24} height={24} />
          </div>
        </div>
      
    </div>
</header>  )
}

export default header
