"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Ham = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mr-4 text-center text-xs font-newsa ">
      <button
        className="text-gray-600 font-extrabold hover:text-gray-800 focus:outline-none focus:text-gray-800"
        onClick={toggleMenu}
      >
        <svg
          className={`w-10 h-10 ${isOpen ? 'rotate-90 text-gray-800' : ''}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg: absolute z-10 right-0 top-12 w-48"
          ref={menuRef}
        >
          <ul className="bg-white border border-gray-200 shadow-md rounded-md">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="border-b border-gray-200"
            >
              <a
                href="/"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Home
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="border-b border-gray-200"
            >
              <a
                href="/Character"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Character Test
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <a
                href="/LoginPage"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Login
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Ham;
