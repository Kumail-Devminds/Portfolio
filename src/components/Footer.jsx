import React from 'react'
import { ButtonPrimary } from './Button'

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#review' },
  { label: 'Contact me', href: '#contact' }
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/Kumail-Devminds' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hafizmuahmmadkumail/' }
];

const Footer = () => {

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="section pt-20 lg:pt-32">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline1 mb-8 lg:max-w-[12ch] reveal-up">
              Let's work together today!
            </h2>

            <div className="grid justify-self-start">
                <ButtonPrimary 
                    href="mailto:kumaildev2@gmail.com"
                    label="Start project"
                    icons="chevron_right"
                    className="justify-self-start reveal-up"
                />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({label, href}, key) => (
                  <li key={key}>
                    <a 
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({label, href}, key) => (
                  <li key={key}>
                    <a 
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 pb-10 mt-8">
          <a href="/" className="logo reveal-up">
            <img 
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer