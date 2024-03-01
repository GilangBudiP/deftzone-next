import Header from "./component/header";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div
        className="flex h-screen"
        style={{
          backgroundImage: "url('/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero */}
        <div className="flex flex-row items-center">
          <div className="">
            <div className="p-[120px] w-7/12">
              <h3 className="font-inter font-semibold text-6xl leading-[77px]">
                We develop <span className="text-blue-500">amazing</span>{" "}
                website for your{" "}
                <span className="text-blue-500">bussiness.</span>{" "}
              </h3>
              <p className="mt-6 font-semibold text-xl">
                Unleashing the Power of Innovative Web Development to Transform
                Your Business into a Digital Marvel
              </p>
              <div className="mt-6 flex items-center">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] py-4 px-8"
                  placeholder="Awesome Tracking App"
                />
                <div className="ml-20">
                  <Link
                    href="#"
                    className="py-4 px-8 rounded-xl bg-blue-500 text-white font-semibold text-sm"
                  >
                    I Want It
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start of service */}
      <section id="service" className="w-full py-36 container">
        <div className="flex items-center justify-between gap-20 mb-20">
          <div className="">
            <h3 className="font-inter font-semibold text-6xl text-nav leading-[77px]">g
              Always Provide The Best Service
            </h3>
          </div>
          <div className="pl-16 space-y-8">
            <p className="flex items-center text-brand font-semibold text-2xl whitespace-nowrap">
              Our Services{" "}
              <span className="w-full h-0.5 bg-brand block ml-[10px]"></span>
            </p>
            <p className="">
              Our excelent service is available that can always help you in
              developing your bussiness
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-between">
          <div className="flex-1 space-y-6 p-6 text-left rounded-md shadow-md border-black/50 hover:bg-white">
            <Image src="/www.svg" alt="" width={60} height={60} />
            <p className="font-bold text-2xl">
              Website <br /> Development
            </p>
            <p className="font-semibold text-xl text-nav">
              Introduce your business in the public eye to reach wider consumers
              and get more profit
            </p>
            <div className="mt-auto">
              <Link
                href="#"
                className="flex items-center justify-between font-semibold underline underline-offset-2 text-lg text-brand"
              >
                Check This Out{" "}
                <Image src="/arrow.svg" alt="" width={48} height={48} />
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-6 p-6 text-left rounded-md shadow-md border-black/50 hover:bg-white">
            <Image src="/ui.svg" alt="" width={60} height={60} />
            <p className="font-bold text-2xl">
              UI/UX Design
            </p>
            <p className="font-semibold text-xl text-nav">
              Make the identity of your business unique and easily recognizable to enhance your service
            </p>
            <div className="mt-auto">
              <Link
                href="#"
                className="flex items-center justify-between font-semibold underline underline-offset-2 text-lg text-brand"
              >
                Check This Out{" "}
                <Image src="/arrow.svg" alt="" width={48} height={48} />
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-6 p-6 text-left rounded-md shadow-md border-black/50 hover:bg-white">
            <Image src="/mobile.svg" alt="" width={60} height={60} />
            <p className="font-bold text-2xl">
              Mobile App <br /> Development
            </p>
            <p className="font-semibold text-xl text-nav">
              Manage everything that exists can be access through mobile device
            </p>
            <div className="mt-auto">
              <Link
                href="#"
                className="flex items-center justify-between font-semibold underline underline-offset-2 text-lg text-brand"
              >
                Check This Out{" "}
                <Image src="/arrow.svg" alt="" width={48} height={48} />
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-6 p-6 text-left rounded-md shadow-md border-black/50 hover:bg-white">
            <Image src="/custom.svg" alt="" width={60} height={60} />
            <p className="font-bold text-2xl">
              Custom Software
            </p>
            <p className="font-semibold text-xl text-nav">
              Accelerate the pace of business by building the right digital platform that suits the companys business needs
            </p>
            <div className="mt-auto">
              <Link
                href="#"
                className="flex items-center justify-between font-semibold underline underline-offset-2 text-lg text-brand"
              >
                Check This Out{" "}
                <Image src="/arrow.svg" alt="" width={48} height={48} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta_1"
        className="flex py-[60px] px-[120px]"
        style={{
          backgroundImage: "url('/section1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row items-center w-full justify-end">
          <div className="w-1/2">
            <div className="p-[120px]">
              <h3 className="font-inter font-semibold text-6xl leading-[77px] text-nav">
                Features For More Extensive Upgrades
              </h3>
              <p className="flex items-center text-brand font-semibold text-2xl whitespace-nowrap">
                Upgrade Feature
                <span className="w-full h-0.5 bg-brand block ml-[10px]"></span>
              </p>
              <p className="mt-6 font-semibold text-xl text-nav">
                With some of those premium features you can get an increase in the quality of the service to exponentially improve your business and of course get more profit
              </p>
              <div className="mt-6 flex items-center">
                <Link
                  href="#"
                  className="py-4 px-8 rounded-xl bg-blue-500 text-white font-semibold text-sm"
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why_us" className="w-full py-36 container">
        <div className="flex items-center justify-between gap-20 mb-20">
          <div className="">
            <h3 className="font-inter font-semibold text-6xl text-nav leading-[77px]">
              Advantages Of Our Services
            </h3>
          </div>
          <div className="pl-16 space-y-8">
            <p className="flex items-center text-brand font-semibold text-2xl whitespace-nowrap">
              Advantages
              <span className="w-full h-0.5 bg-brand block ml-[10px]"></span>
            </p>
            <p className="">
              Our excelent service is available that can always help you in
              developing your bussiness
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-between">
          <div className="w-full flex gap-3">
            <div className="w-3/7">
              <Image src="/team.svg" alt="" width={75} height={75} />
            </div>
            <div className="w-4/7 space-y-6">
              <p className="font-bold text-2xl text-brand">
                Talented Team
              </p>
              <p className="font-semibold text-xl text-nav">
                Is the best and most trusted choice in developing your business for the better
              </p>
              <p className="font-medium text-5xl">10+</p>
              <p className="font-semibold text-xl text-nav">Talented and dedicated team</p>
            </div>
          </div>
          <div className="w-full flex gap-3">
            <div className="w-3/7">
              <Image src="/client.svg" alt="" width={75} height={75} />
            </div>
            <div className="w-4/7 space-y-6">
              <p className="font-bold text-2xl text-brand">
                Client Centered
              </p>
              <p className="font-semibold text-xl text-nav">
              Is the best and most trusted choice in developing your business for the better
              </p>
              <p className="font-medium text-5xl">14+</p>
              <p className="font-semibold text-xl text-nav">New Client Satisfied</p>
            </div>
          </div>
          <div className="w-full flex gap-3">
            <div className="w-3/7">
              <Image src="/cs.svg" alt="" width={75} height={75} />
            </div>
            <div className="w-4/7 space-y-6">
              <p className="font-bold text-2xl text-brand">
                Best Service
              </p>
              <p className="font-semibold text-xl text-nav">
                Is the best and most trusted choice in developing your business for the better
              </p>
              <p className="font-medium text-5xl">24/7</p>
              <p className="font-semibold text-xl text-nav">Support Team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
