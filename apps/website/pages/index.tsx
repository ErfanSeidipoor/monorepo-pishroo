import { WebsiteComponents } from "@pishroo/website-components";
import Image from "next/image";
export function Index() {
  return (
    <>
      <nav className="relative container p-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <Image
              width={60}
              height={60}
              src={`${process.env.NX_WEBSITE_URL}/assets/image-placeholder.png`}
              alt="logo"
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <a className="hover:text-darkGrayishBlue" href="#">
              Pricing
            </a>
            <a className="hover:text-darkGrayishBlue" href="#">
              Product
            </a>
            <a className="hover:text-darkGrayishBlue" href="#">
              About Us
            </a>
            <a className="hover:text-darkGrayishBlue" href="#">
              Careers
            </a>
            <a className="hover:text-darkGrayishBlue" href="#">
              Comunity
            </a>
          </div>
          <a className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
            Get Started
          </a>
        </div>
      </nav>
      <h1 className="bg-gray-200 text-3xl font-bold underline">
        {" "}
        this is a test Hello world!
      </h1>
      <WebsiteComponents />
    </>
  );
}

export default Index;
