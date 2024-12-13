import React, {useEffect, useCallback, useState} from "react";
import LandingBgImg from '../assets/working-sample-bg.jpg';
import SignupForm from "@/components/SignupForm";


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import LoginForm from "@/components/LoginForm";

const landingBgStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${LandingBgImg})`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  width: '100%',
  height: '800px',
}

export default function Landing() {

  const dialogMarkup = (
    <Dialog>
      <DialogTrigger asChild>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">Sign in JobFindr</DialogTitle>
          <DialogDescription>
            Signup to access job hunting features of JobFindr. No account yet? Sign up here.
          </DialogDescription>
        </DialogHeader>
          <LoginForm/>
        {/* <DialogFooter>
          <Button className="w-[100%]" type="submit">Login</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );

  const introMarkup = (
    <div className="w-[520px] m-10">
      <h1 className="text-5xl text-slate-50 font-semibold">We help and find ways to make job hunt easier.</h1>
      <div className="text-slate-50 mt-3">JobFindr helps 100% of people to find and land on the jobs that they really want. Try it now to know the power of JobFindr.
      </div>
    </div>
  );

  const landingNavMarkup = (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JobFindr</span>
        </a>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
            </li>
            <li>
              {dialogMarkup}
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  const landingBgPhotoMarkup = (
    <div
      style={landingBgStyle}
    >
      {landingNavMarkup}
      <div className="text-slate-50 flex justify-stretch">
        <div className="w-[60%]">
          {introMarkup}
        </div>
        <div className="W-[40%]">
          <SignupForm/>
        </div>
      </div>
      {/* {introMarkup} */}
    </div>
  );


  return (
    <>
      {landingBgPhotoMarkup}
    </>
  );
}