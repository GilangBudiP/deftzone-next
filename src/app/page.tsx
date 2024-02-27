import Header from "./component/header";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div
        className="flex h-screen w-screen"
        style={{
          backgroundImage: "url('/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Headline */}
        <div className="flex flex-row items-center">
          {/* <Image
            src="/banner.png"
            fill
            alt="hero"
            className="w-full h-[100vh] object-cover object-center"
          /> */}
          <div>
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
    </div>
  );
}
