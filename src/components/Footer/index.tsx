import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-8">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <style jsx>{`
        @media (max-width: 768px) {
          p {
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;