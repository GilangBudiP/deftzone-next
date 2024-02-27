import React from "react";
import Link from "next/link";
import Image from "next/image";


function Header() {
    return (
        <header className="flex justify-between items-center fixed top-10 left-[120px] right-[120px]">
        {/* logo */}
        <div className="flex items-center">
          <Link href="/b">
              <Image src="/logo.svg" alt="" width={186} height={34} />
          </Link>
        </div>
        {/* nav */} 
        <div className="flex items-center">
          <nav>
            <ul className="flex items-center gap-10 font-semibold text-xl text-nav">
              <li>
                <Link href="#" className=" hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="#">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="ml-20">
            <Link href="#" className="py-4 px-8 rounded-xl bg-blue-500 text-white font-semibold text-xl">Lets Talk</Link>
          </div>
        </div>
      </header>
      );
}

export default Header;