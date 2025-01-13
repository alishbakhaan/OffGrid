'use client';
import React, { useState } from 'react';
import { faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Link from 'next/link';
import { Londrina_Outline } from 'next/font/google';
const londrina = Londrina_Outline({ subsets: ['latin'], weight: '400' });
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bg-transparent py-10 px-10 xl:px-40 flex justify-between items-center w-full z-50">
        <div>
          <Image
            src={'/logo.svg'}
            width={200}
            height={200}
            alt="logo"
            className="object-contain"
          />
        </div>
        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              className="w-5 md:w-10 h-5 md:h-10 text-white border-2 rounded-full p-2"
              icon={isOpen ? faXmark : faBars}
            />
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-40"
      >
        <div className="fixed inset-0 bg-black bg-opacity-80" />
        <DialogPanel className="fixed inset-0 flex justify-center items-start">
          <div className="w-full h-screen py-20 xl:px-40 px-10 space-y-4 bg-black text-white overflow-y-auto">
            <div
              className={`${londrina.className} md:text-7xl xl:text-9xl text-5xl font-bold space-y-4 py-8`}
            >
              <Link href={'/'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">HOME</DialogTitle>
              </Link>
              <Link href={'/advancegrowth'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">ADVANCED GROWTH SYSTEM</DialogTitle>
              </Link>
              <Link href={'/ebook'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">EBOOK</DialogTitle>
              </Link>
              <Link href={'/blog'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">BLOG</DialogTitle>
              </Link>
              <Link href={'/socialmedia'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">SOCIAL MEDIA</DialogTitle>
              </Link>
              <Link href={'/branding'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">BRANDING</DialogTitle>
              </Link>
              <Link href={'/websitedesign'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">WEBSITE DESIGN</DialogTitle>
              </Link>
              <Link href={'/emailmarketing'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">EMAIL MARKETING</DialogTitle>
              </Link>
              <Link href={'/leadgeneration'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">LEAD GENERATION</DialogTitle>
              </Link>
              <Link href={'/ppc'} onClick={handleLinkClick}>
                <DialogTitle className="border-b border-white border-opacity-40 py-4">PPC</DialogTitle>
              </Link>
              <Link href={'/seo'} onClick={handleLinkClick}>
                <DialogTitle>SEO</DialogTitle>
              </Link>
            </div>
            <div
              className={`${lato.className} flex flex-wrap justify-between items-end gap-10 text-white border-t border-white border-opacity-40 pt-4`}
            >
              <div>
                <Link href={'/'} onClick={handleLinkClick}>
                  <button className="text-[#CEFA05]">Digital Marketing</button>
                </Link>
              </div>
              <div className="space-x-4">
                <Link href={'/'} onClick={handleLinkClick}>
                  <button>
                    <FontAwesomeIcon icon={faArrowRight} className="pr-2" />
                    Instagram
                  </button>
                </Link>
                <Link href={'/'} onClick={handleLinkClick}>
                  <button>
                    <FontAwesomeIcon icon={faArrowRight} className="pr-2" />
                    Facebook
                  </button>
                </Link>
                <Link href={'/'} onClick={handleLinkClick}>
                  <button>
                    <FontAwesomeIcon icon={faArrowRight} className="pr-2" />
                    LinkedIn
                  </button>
                </Link>
                <Link href={'/'} onClick={handleLinkClick}>
                  <button>
                    <FontAwesomeIcon icon={faArrowRight} className="pr-2" />
                    Twitter
                  </button>
                </Link>
              </div>
              <div>
                <Link href={'/'} onClick={handleLinkClick}>
                  <button>
                    <FontAwesomeIcon icon={faArrowRight} className="pr-2" />
                    Privacy Policy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default Navbar;
