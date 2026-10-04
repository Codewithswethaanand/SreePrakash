import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState({});

  const toggle = (section) => {
    setOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const careLinks = [
    { name: "Track Your Order", link: "/track-order" },
    { name: "Shipping Policy", link: "/shipping-policy" },
    { name: "Terms & Conditions", link: "/terms" },
    { name: "Return Policy", link: "/return-policy" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Exchange / Return", link: "/exchange-return" },
    { name: "Sitemap", link: "/sitemap" },
  ];

  const womenLinks = [
    { name: "Rings For Women", link: "/collections/rings" },
    { name: "Earrings For Women", link: "/collections/earrings" },
    { name: "Bracelets For Women", link: "/collections/bracelets" },
    { name: "Pendants For Women", link: "/collections/pendants" },
    { name: "Necklaces For Women", link: "/collections/necklaces" },
  ];

  const menLinks = [
    { name: "Jewellery For Men", link: "/collections/men-jewellery" },
    { name: "Chain For Men", link: "/collections/men-chain" },
    { name: "Bracelet For Men", link: "/collections/men-bracelets" },
  ];

  const popularCategories = [
    { name: "Earrings", link: "/collections/earrings" },
    { name: "Stud Earrings", link: "/collections/stud-earrings" },
    { name: "Hoop Earrings", link: "/collections/hoop-earrings" },
    { name: "Jhumkas", link: "/collections/jhumkas" },
    { name: "Chand Bali", link: "/collections/chandbali" },
    { name: "Bracelets", link: "/collections/bracelets" },
    { name: "Bangles", link: "/collections/bangles" },
    { name: "Rings", link: "/collections/rings" },
    { name: "Matha Patti", link: "/collections/mathapatti" },
    { name: "Potli Bags", link: "/collections/potli-bags" },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaYoutube />, url: "https://youtube.com" },
    { icon: <FaPinterestP />, url: "https://pinterest.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  ];

  const MobileSection = ({ title, id, children }) => (
    <div className="border-b border-stone-950/15 py-4">
      <button
        type="button"
        className="w-full flex justify-between items-center cursor-pointer text-stone-950 focus:outline-none"
        onClick={() => toggle(id)}
      >
        <h3 className="uppercase tracking-[0.2em] text-xs font-bold font-serif">
          {title}
        </h3>

        {open[id] ? (
          <FaChevronUp size={11} className="text-stone-950" />
        ) : (
          <FaChevronDown size={11} className="text-stone-950/60" />
        )}
      </button>

      {open[id] && <div className="mt-3 text-stone-900 text-xs">{children}</div>}
    </div>
  );

  return (
    <footer className="bg-[#e48f76] text-stone-950 w-full relative overflow-hidden font-sans border-t border-stone-950/15">
      <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-16">
        
        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden space-y-1">
          {/* Care Section */}
          <MobileSection title="Care & Concierge" id="care">
            <ul className="space-y-2.5 font-medium text-stone-900">
              {careLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileSection>

          {/* Contact Section */}
          <MobileSection title="Contact Atelier" id="contact">
            <p className="leading-relaxed text-stone-900/90 mb-3 font-normal">
              Reach out to our jewelry consultants between 10:30 AM and 5:30 PM (Mon-Sat).
            </p>
            <a
              href="https://wa.me/918050556004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-950 font-bold hover:text-white transition-colors"
            >
              <FaWhatsapp className="text-sm" /> +91 8050556004
            </a>
          </MobileSection>

          {/* Popular Searches */}
          <MobileSection title="Popular Searches" id="search">
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium">
              {womenLinks.concat(menLinks).map((item, idx, arr) => (
                <React.Fragment key={item.name}>
                  <Link to={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                  {idx !== arr.length - 1 && <span className="text-stone-950/30">·</span>}
                </React.Fragment>
              ))}
            </div>
          </MobileSection>

          {/* Curated Categories */}
          <MobileSection title="Curated Categories" id="category">
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium">
              {popularCategories.map((item, idx) => (
                <React.Fragment key={item.name}>
                  <Link to={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                  {idx !== popularCategories.length - 1 && <span className="text-stone-950/30">·</span>}
                </React.Fragment>
              ))}
            </div>
          </MobileSection>

          {/* Newsletter Mobile */}
          <MobileSection title="Join The Privé List" id="newsletter">
            <p className="text-stone-900/90 text-xs mb-3 font-normal">
              Receive private preview invitations and exclusive privileges.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-stone-950/40 py-2 pr-8 text-xs text-stone-950 placeholder-stone-800/70 outline-none focus:border-stone-950 transition-colors"
              />
              <button aria-label="Subscribe" className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-950 p-1 hover:text-white transition-colors">
                <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </MobileSection>

          {/* Social Icons Mobile */}
          <div className="pt-6 pb-2 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-stone-900 font-mono font-semibold">
              Follow Us
            </span>
            <div className="flex items-center gap-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-950 hover:text-white transition-colors text-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:block">
          
          {/* Top Section Grid */}
          <div className="grid grid-cols-12 gap-12 pb-12 border-b border-stone-950/15">
            
            {/* Newsletter Column */}
            <div className="col-span-5 pr-4">
              <span className="text-stone-950 font-mono text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">
                Exclusive Newsletter
              </span>
              <h3 className="font-serif text-2xl uppercase tracking-[0.15em] text-stone-950 font-bold mb-3">
                Join The Privé Club
              </h3>
              <p className="text-stone-900/90 text-xs font-normal leading-relaxed mb-6">
                Subscribe to unlock private sales, bespoke invitations, and seasonal high-jewelry collection drops.
              </p>

              {/* Seamless Underline Input */}
              <div className="relative w-full mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-stone-950/40 py-2.5 pr-10 text-xs text-stone-950 placeholder-stone-800/70 outline-none focus:border-stone-950 transition-colors"
                />
                <button
                  aria-label="Submit Email"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-950 hover:text-white transition-colors p-1"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest text-stone-900 font-mono font-semibold">
                  Follow:
                </span>
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-950 hover:text-white transition-colors text-sm"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Customer Care Links */}
            <div className="col-span-3">
              <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-stone-950 font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
                Customer Care
              </h3>

              <ul className="space-y-3 text-xs font-medium text-stone-900">
                {careLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concierge Atelier (Clean Layout without box) */}
            <div className="col-span-4">
              <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-stone-950 font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
                Concierge Atelier
              </h3>

              <p className="text-xs text-stone-900/90 font-normal leading-relaxed mb-5">
                Our client advisors are available to assist with custom orders, sizing guidance, and styling queries.
              </p>

              <div className="space-y-2 text-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-900/80 font-semibold block">
                  Support Hours: Mon - Sat (10:30 AM - 5:30 PM)
                </span>
                <a
                  href="https://wa.me/918050556004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-stone-950 font-bold hover:text-white transition-colors pt-1"
                >
                  <FaWhatsapp className="text-base text-stone-950" /> WhatsApp: +91 8050556004
                </a>
              </div>
            </div>
          </div>

          {/* Popular Searches Section */}
          <div className="py-8 border-b border-stone-950/15">
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-stone-950 font-bold mb-4">
              Popular Searches
            </h3>

            <div className="grid grid-cols-2 gap-8 text-xs font-medium">
              <div>
                <span className="text-[10px] font-mono text-stone-950 font-bold uppercase tracking-widest block mb-2 text-stone-900/70">
                  Women's Fine Jewelry
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs">
                  {womenLinks.map((item, idx) => (
                    <React.Fragment key={item.name}>
                      <Link
                        to={item.link}
                        className="text-stone-950 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                      {idx !== womenLinks.length - 1 && <span className="text-stone-950/30">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-stone-950 font-bold uppercase tracking-widest block mb-2 text-stone-900/70">
                  Men's Collection
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs">
                  {menLinks.map((item, idx) => (
                    <React.Fragment key={item.name}>
                      <Link
                        to={item.link}
                        className="text-stone-950 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                      {idx !== menLinks.length - 1 && <span className="text-stone-950/30">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Explore Collections Text Link Grid */}
          <div className="pt-8 pb-4">
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-stone-950 font-bold mb-3">
              Explore Collections
            </h3>

            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium">
              {popularCategories.map((item, idx) => (
                <React.Fragment key={item.name}>
                  <Link
                    to={item.link}
                    className="text-stone-950 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                  {idx !== popularCategories.length - 1 && <span className="text-stone-950/30">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-950/15 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-900/90 gap-3 font-medium">
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          <p className="font-mono text-[10px] tracking-wider text-stone-900/80 font-semibold">
            CIN: U17299KA2016PTC096551
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;