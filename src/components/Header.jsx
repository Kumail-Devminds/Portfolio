import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-3">
            <h1 className="">
              <a href="/" className="logo text-3xl font-bold flex items-center text-zinc-50">
                <img
                  src="/images/logo.svg"
                  width={40}
                  height={40}
                  alt="Hafiz Muhammad Kumail"
                />
                <span>
                  Kumail
                </span>
              </a>
            </h1>
        
            <div className="relative md:justify-self-center">
                <button className="menu-btn flex items-center justify-center w-10 h-10 md:hidden place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform,background-color] active-scale-95" onClick={() => setNavOpen((prev) => !prev)}>
                    <span className="material-symbols-rounded">
                        {navOpen ? 'Close' : 'Menu'}
                    </span>
                </button>

                <Navbar navOpen={navOpen} />
            </div>

            <a href="#contact" className="btn btn-secondary
              hidden md:flex md:justify-self-end 
              max-w-max h-9 items-center gap-2 px-4
              rounded-xl font-medium text-sm 
              ring-1 ring-zinc-50/5 ring-inset 
              transition-[background-color]">
                Contact Me
            </a>
      </div>
    </header>
  )
}

export default Header
