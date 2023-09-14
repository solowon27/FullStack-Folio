import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import BackToTop from './BackToTop'; 

import html from '../Images/html.png';
import css from '../Images/css.png';
import tailwind from '../Images/tailwind.png';
import javascript from '../Images/javascript.png';
import react from '../Images/react.png';
import mongodb from '../Images/mongodb.png';
import sql from '../Images/sql.png';
import nodejs from '../Images/nodejs.png';

import logo from '../Images/logo.png';
import profile from '../Images/profile.JPG';

function Header() {
    const [activeLink, setActiveLink] = useState('about'); // Initialize with 'about' as active link
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Add isMenuOpen state
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
      setIsMenuOpen(false); 
    };
  
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen); 
    };
  
    return (
      <div className='ml-10 mr-10'>
        <header>
          <nav className="py-10 mb-12 flex justify-between">
          <img src={logo} alt="logo" className="w-16 md:w-100" />
            <ul className="hidden md:flex items-center">
              <li>
                <a className={`mr-5 ${ activeLink === 'about' ? 'text-lime-400' : 'text-gray-400' }`}
                  onClick={() => handleLinkClick('about')}
                  href="#about-me"  > About Me </a>
              </li>
              <li>
                <a className={`mr-5 ${ activeLink === 'portfolio' ? 'text-lime-400' : 'text-gray-400' }`}
                  onClick={() => handleLinkClick('portfolio')}
                  href="#portfolio"  > Portfolio </a>
              </li>
              <li>
                <a className={`mr-5 ${ activeLink === 'resume' ? 'text-lime-400' : 'text-gray-400' }`}
                  onClick={() => handleLinkClick('resume')}
                  href="#resume"  > Resume </a>
              </li>
              <li>
                <a className={`mr-5 ${ activeLink === 'contact' ? 'text-lime-400' : 'text-gray-400' }`}
                  onClick={() => handleLinkClick('contact')}
                  href="#contact"  > Contact </a>
              </li>
            </ul>
            <div className="md:hidden">
              <input
                type="checkbox"
                id="menu-toggle"
                className="hidden"
                onClick={handleMenuToggle} 
              />
              <label htmlFor="menu-toggle" className="block cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current text-lime-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <div
                className={`menu w-48 h-1/3 text-white absolute right-0 top-16 transition-transform transform-gpu ${
                  isMenuOpen ? 'scale-x-100' : 'scale-x-0'
                } origin-top-right`}
              >
                <ul className="py-3 px-4">
                  <li>
                    <a className={`block py-2 ${ activeLink === 'about' ? 'text-lime-400' : 'text-gray-400' }`}
                      onClick={() => handleLinkClick('about')}
                       href="#about-me" >  About Me </a>
                  </li>
                  <li>
                    <a className={`block py-2 ${ activeLink === 'portfolio' ? 'text-lime-400' : 'text-gray-400' }`}
                      onClick={() => handleLinkClick('about')}
                       href="#portfolio" >  Portfolio </a>
                  </li>
                  <li>
                    <a className={`block py-2 ${ activeLink === 'resume' ? 'text-lime-400' : 'text-gray-400' }`}
                      onClick={() => handleLinkClick('resume')}
                       href="#resume" >  Resume </a>
                  </li>
                  <li>
                    <a className={`block py-2 ${ activeLink === 'contact' ? 'text-lime-400' : 'text-gray-400' }`}
                      onClick={() => handleLinkClick('contact')}
                       href="#contact" >  Contact </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <BackToTop />

      <main className='mr-5'>
      <section className='container mx-auto'>

      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-8 lg:col-span-12'>
          <div className=' md:flex md:items-center'>

          <div className='bg-gray-900 rounded p-4'>
  <div className="relative">
    <img src={profile} alt='placeholder' className='rounded-full border-4 border-lime-400' />
    <div className="absolute inset-0 rounded-full bg-gray-900 opacity-50"></div>
  </div>
</div>


            <div className='bg-gray-900 rounded p-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-4'>Full Stack Developer</h1>
            <p className='mb-4 text-xl md:text-1xl'>Hi, I'm <span className='text-lime-400'>Solomon Tegegne </span>. A Full stack developer!</p>
            <p className='mb-4 text-xl md:text-1xl'>I am a graduate of the University of Utah Coding Bootcamp. I have experience with...</p>
            </div>
        </div>
        <div className='bg-gray-900 rounded p-4 flex flex-wrap justify-center items-center gap-4'>
            <img src={html} alt='html png' className='w-12 h-12 md:w-16 md:h-16 rounded transition-transform transform hover:scale-110' />
            <img src={css} alt='css png' className='w-12 h-12 md:w-16 md:h-16 rounded transition-transform transform hover:scale-110' />
            <img src={tailwind} alt='tailwind png' className='w-12 h-12 md:w-16 md:h-16 rounded transition-transform transform hover:scale-110' />
            <img src={javascript} alt='javascript png' className='w-12 h-12 md:w-16 md:h-16 rounded transition-transform transform hover:scale-110' />
            <img src={react} alt='react png' className='w-12 h-12 md:w-16 md:h-16 rounded transition-transform transform hover:scale-110' />
            <img src={mongodb} alt='mongodb png' className='w-12 h-12 md:w-16 md:h-16 rounded transition-transform transform hover:scale-110' />
            <img src={sql} alt='sql png' className='w-12 h-12 md:w-16 md:h-16 rounded transition-transform transform hover:scale-110' />
            <img src={nodejs} alt='nodejs png' className='w-12 h-12 md:w-16 md:h-16 rounded transition-transform transform hover:scale-110' />
        </div>
      </div>
      </div>
  </section>

        <AboutMe />
        <Portfolio />
        <Resume />
        <Contact />

      </main>
    </div>    
  );
}

export default Header;
