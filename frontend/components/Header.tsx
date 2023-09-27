"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaX } from "react-icons/fa6";

export default function Header({
  title,
  logo,
}: {
  title: string;
  logo: string;
}) {
  return (
    <>
      <Disclosure
        as="nav"
        className=" shadow fixed top-0 left-0 w-full bg-white z-20 bg-opacity-[90%] transition backdrop-filter backdrop-blur-md"
      >
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
              <div className="flex justify-between h-28">
                <div className="flex px-2 lg:px-0">
                  <div className="flex items-center flex-shrink-0">
                    <Link href="/">
                      <Image
                        className="block w-auto h-24 lg:hidden"
                        src={logo}
                        width={1170}
                        height={1040}
                        alt={title}
                      />
                      <Image
                        className="hidden w-auto h-24 lg:block"
                        src={logo}
                        width={1170}
                        height={1040}
                        alt={title}
                      />
                    </Link>
                  </div>
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                    <Link
                      href="/"
                      className="border-transparent text-stone-800
                       inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      href="/blog"
                      className="border-transparent text-stone-800
                        inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                    >
                      Blog
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-stone-400 rounded-md lg:hidden hover:bg-stone-100 hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaX className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <Disclosure.Button
                  as={Link}
                  href="/"
                  className="border-transparent text-stone-800 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-800
                  block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/blog"
                  className="border-transparent text-stone-800 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-800
                  block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                >
                  Blog
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
