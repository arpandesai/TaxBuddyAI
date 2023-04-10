import React from 'react';
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <section className="">
        <div className="text-center flex items-center justify-center flex-col bg-gray-50 h-screen text-gray-800">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            Please sign in to use <br />
            <span className="text-blue-600">chat-bot</span>
          </h1>
          <div>
            <SignOutButton>
              <div>
                <Link
                  href="/sign-in"
                  className="m-10 w-40 inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  role="button"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="m-10 w-40 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  role="button"
                >
                  Sign Up
                </Link>
              </div>
            </SignOutButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
