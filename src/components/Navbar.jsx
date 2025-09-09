import React from 'react'
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
      event.preventDefault();

      lastActiveLink.current?.classList.remove('active');
      event.target.classList.add('active');
      lastActiveLink.current = event.target;

      activeBox.current.style.top = event.target.offsetTop + 'px';
      activeBox.current.style.left = event.target.offsetLeft + 'px';
      activeBox.current.style.width = event.target.offsetWidth + 'px';
      activeBox.current.style.height = event.target.offsetHeight + 'px';

      const href = event.target.getAttribute("href");

      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.querySelector(href);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors'
    },
    {
      label: 'Reviews',
      link: '#review',
      className: 'nav-link grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors'
    }
  ];
  return (
    <nav
    className={`absolute top-full mt-2 right-0 min-w-40 p-2 bg-zinc-50/10 rounded-2xl 
                ring-inset ring-1 ring-zinc-50/5 isolate transition-[opacity,transform,filter] 
                md:static md:flex md:items-center md:mt-0 md:opacity-100 md:blur-0 md:visible
                backdrop-blur-2xl
                ${navOpen 
                    ? "opacity-100 scale-100 blur-0 visible" 
                    : "opacity-0 scale-90 invisible"
                }`}
    >
        {
            navItems.map(({label, link, className, ref}, index) => (
                <a 
                    key={index}
                    href={link}
                    className={className}
                    ref={ref}
                    onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))
        }
        <div className="active-box absolute bg-zinc-50 rounded-lg -z-10 transition-[top,left] duration-500" ref={activeBox}></div>
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar
