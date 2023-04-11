import React from 'react';
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../src/img/logo.png';

const Home = () => {
  return (
    <div>
      <section className="background-image relative">
        <div className="absolute top-4 left-4 w-32 md:w-44 ">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="relative text-center flex items-center justify-center flex-col h-screen text-gray-800">
          <h1 className="-mt-10 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            Please sign in to experience
            <br />
            <div className="mt-4"></div>
            <span className="text-blue-600">TaxBuddyAI</span>
          </h1>
          <div>
            <SignOutButton>
              <div className="flex items-center justify-center flex-col sm:flex-row">
                <Link
                  href="/sign-in"
                  className="lg:m-10 w-40 inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  role="button"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="mt-5 sm:mt-0 lg:m-10 w-40 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  role="button"
                >
                  Sign Up
                </Link>
              </div>
            </SignOutButton>
          </div>
          <div className="absolute bottom-0 w-screen">
            <span className="block mx-auto p-4 md:py-6 font-bold text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{' '}
              <Link
                href="https://www.unitaslink.com/"
                className="uppercase font-bold hover:underline"
                target="_blanck"
              >
                unitaslink
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
