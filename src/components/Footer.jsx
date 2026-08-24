import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 mt-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Social Icons */}
          {['𝕏', '📸', '▶', '💼'].map((icon, i) => (
            <a key={i} className="btn btn-ghost btn-circle text-lg">
              {icon}
            </a>
          ))}
        </div>
      </nav>
      <aside>
        <div className="flex items-center gap-2 mb-2 justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
            D9
          </div>
          <span className="font-bold text-base">Digi9Craft</span>
        </div>
        <p>Creative Digital Assets — สินค้าดิจิทัลคุณภาพสูง พร้อมดาวน์โหลดทันที</p>
        <p className="opacity-50 text-xs mt-2">© 2025 Digi9Craft. All rights reserved. Powered by Orochi Model X Team</p>
      </aside>
    </footer>
  );
};

export default Footer;
