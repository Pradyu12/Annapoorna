import React from 'react';
import { COMPANY_INFO } from '../data/company';

interface FooterProps {
  navigate: (path: string) => void;
}

const CURRENT_YEAR = 2026;

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#252525] text-white border-t-4 border-[#C8102E]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand and Summary */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="./logo.png"
                alt="Annapoorna Enterprises"
                className="h-10 w-10 rounded-lg bg-white p-0.5 object-contain"
              />
              <span className="font-extrabold text-xl tracking-tight text-white">
                Annapoorna Enterprises
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-sm mb-6 leading-relaxed">
              Established in 1998, Annapoorna Enterprises is Bengaluru's dedicated enterprise partner for commercial hygiene, industrial supplies, and integrated facility management solutions across Karnataka.
            </p>
            <div className="text-xs text-white/60 space-y-1">
              <p>Registered Address: JP Nagar, 6th Phase, Bengaluru, Karnataka, India</p>
              <p>Business Positioning: Hygiene | Facility | Industrial | Supplies</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#/" onClick={(e) => handleLinkClick(e, '#/')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#/about" onClick={(e) => handleLinkClick(e, '#/about')} className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#/products" onClick={(e) => handleLinkClick(e, '#/products')} className="hover:text-white transition-colors">
                  Products Catalogue
                </a>
              </li>
              <li>
                <a href="#/services" onClick={(e) => handleLinkClick(e, '#/services')} className="hover:text-white transition-colors">
                  Facility Services
                </a>
              </li>
              <li>
                <a href="#/industries" onClick={(e) => handleLinkClick(e, '#/industries')} className="hover:text-white transition-colors">
                  Industries Served
                </a>
              </li>
              <li>
                <a href="#/contact" onClick={(e) => handleLinkClick(e, '#/contact')} className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white mb-4">
              Supplies Portfolio
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#/products?category=Cleaning%20Supplies" onClick={(e) => handleLinkClick(e, '#/products?category=Cleaning%20Supplies')} className="hover:text-white transition-colors">
                  Cleaning Supplies
                </a>
              </li>
              <li>
                <a href="#/products?category=Hygiene%20Products" onClick={(e) => handleLinkClick(e, '#/products?category=Hygiene%20Products')} className="hover:text-white transition-colors">
                  Hygiene Products
                </a>
              </li>
              <li>
                <a href="#/products?category=Pantry%20Supplies" onClick={(e) => handleLinkClick(e, '#/products?category=Pantry%20Supplies')} className="hover:text-white transition-colors">
                  Pantry Supplies
                </a>
              </li>
              <li>
                <a href="#/products?category=Packaging%20Materials" onClick={(e) => handleLinkClick(e, '#/products?category=Packaging%20Materials')} className="hover:text-white transition-colors">
                  Packaging Materials
                </a>
              </li>
              <li>
                <a href="#/products?category=Dairy%20Products" onClick={(e) => handleLinkClick(e, '#/products?category=Dairy%20Products')} className="hover:text-white transition-colors">
                  Dairy Products
                </a>
              </li>
              <li>
                <a href="#/products?category=Rubber%20Mats" onClick={(e) => handleLinkClick(e, '#/products?category=Rubber%20Mats')} className="hover:text-white transition-colors">
                  Rubber Mats
                </a>
              </li>
              <li>
                <a href="#/products?category=Institutional%20Products" onClick={(e) => handleLinkClick(e, '#/products?category=Institutional%20Products')} className="hover:text-white transition-colors">
                  Institutional Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white mb-4">
              Enquiries & Procurement
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <div>
                <span className="block text-xs uppercase tracking-wider text-white/40">Direct Lines</span>
                <a href={`tel:${COMPANY_INFO.contact.phoneRaw1}`} className="text-white hover:text-[#C8102E] font-semibold transition-colors block">
                  {COMPANY_INFO.contact.primaryPhone}
                </a>
                <a href={`tel:${COMPANY_INFO.contact.phoneRaw2}`} className="text-white hover:text-[#C8102E] font-semibold transition-colors block">
                  {COMPANY_INFO.contact.secondaryPhone}
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-white/40">Email Enquiries</span>
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-white hover:text-[#C8102E] font-semibold transition-colors block">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-white/40">Headquarters</span>
                <p className="text-white/80">JP Nagar, 6th Phase, Bengaluru, Karnataka</p>
              </div>
              <div className="pt-2">
                <a
                  href="#/quote"
                  onClick={(e) => handleLinkClick(e, '#/quote')}
                  className="inline-block px-4 py-2 bg-[#C8102E] text-white font-bold text-xs rounded hover:bg-[#A30D25] transition-colors"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {CURRENT_YEAR} Annapoorna Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>B2B Supplies & Integrated Facility Solutions</span>
            <span>·</span>
            <span>Bengaluru, Karnataka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
