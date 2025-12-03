import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  Instagram,
} from "lucide-react";
import Button from "../common/Button";

const Footer = () => {
  const footerLinks = {
    network: [
      { name: "Community", href: "#" },
      { name: "Investor", href: "#" },
      { name: "Broker", href: "#" },
    ],
    product: [
      { name: "Invest", href: "#" },
      { name: "Discover", href: "#" },
      { name: "Transact", href: "#" },
      { name: "Manage", href: "#" },
    ],
    technology: [
      { name: "Artificial Intelligence", href: "#" },
      { name: "Block Chain", href: "#" },
    ],
    highlights: [
      {
        name: "Impact of COVID-19 on the food and beverage industry and the retail sector",
        href: "#",
      },
      {
        name: "Commercial lending during COVID-19: navigating the impact",
        href: "#",
      },
    ],
    ourStory: [
      { name: "Approach", href: "#" },
      { name: "AboutUs", href: "#" },
    ],
    knowledgeCenter: [
      { name: "Resource", href: "#" },
      { name: "Blog", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "#", label: "Medium" },
    { icon: Instagram, href: "#", label: "Pinterest" },
  ];

  return (
    <footer className="bg-[#202221] text-white">
      <div className="container mx-auto px-4 lg:px-8">

        {/* GRID FOR MAIN SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 py-20">

          {/* LEFT SIDE */}
          <div className="flex">

          <div className="max-w-xl">
            {/* Input */}
            <form className="relative mb-14" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center bg-[#202221] rounded-[1.2rem] border border-gray-700 overflow-hidden shadow-xl shadow-black/20">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-500 text-sm outline-none"
                />
                <Button
                  variant="primary"
                  type="submit"
                  className="m-1 text-sm px-5 py-3 rounded-[0.8rem] bg-[#2E302F]"
                >
                  Subscribe To Newsletter
                </Button>
              </div>
            </form>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-semibold mb-10 ">
              Signup and start enjoying the benifits today!
            </h3>


            {/* CTA Button */}
            <Button className="text-base px-10 py-6 rounded-[1.25rem] mb-12 bg-[#7C5AC7]">
              Sign Up To Lilypads
            </Button>

            {/* Social Icons */}
            <div className="flex gap-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <social.icon className="w-6 h-6 text-[#1a1d29]" />
                </a>
              ))}
            </div>
          </div>
          <div className="hidden lg:block w-px bg-gray-700 ml-20"></div>


          </div>

          {/* VERTICAL DIVIDER – ONLY ON DESKTOP */}

          {/* RIGHT SIDE GRID */}
<div>
            <div className="flex gap-20">
                <img
                  src="/property-images/flower.png"
                  alt="flower"
                  className="w-48 h-48 object-contain"
                />
                <div className="mt-10">
                  <p className="font-semibold text-white mb-4">Reach Us At</p>
                  <address className="text-sm leading-relaxed text-gray-400 not-italic">
                    6751 Columbia Gateway Dr.,<br />
                    3rd floor, Columbia,<br />
                    MD 21046
                  </address>
                </div>
              </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Column 1 */}
            <div className="space-y-12">
              {/* Logo + Address */}

              {/* Network */}
              <div>
                <h4 className="font-bold mb-4">Network</h4>
                <ul className="space-y-2">
                  {footerLinks.network.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology */}
              <div>
                <h4 className="font-bold mb-4">Technology</h4>
                <ul className="space-y-2">
                  {footerLinks.technology.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-12">
              {/* Product */}
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2">
                  {footerLinks.product.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-bold mb-4">Highlights</h4>
                <ul className="space-y-3">
                  {footerLinks.highlights.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm leading-relaxed">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-12">
              {/* Our Story */}
              <div>
                <h4 className="font-bold mb-4">Our Story</h4>
                <ul className="space-y-2">
                  {footerLinks.ourStory.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Knowledge Center */}
              <div>
                <h4 className="font-bold mb-4">Knowledge Center</h4>
                <ul className="space-y-2">
                  {footerLinks.knowledgeCenter.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
</div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-gray-700"></div> */}

        {/* Copyright */}
        {/* <div className="py-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lilypads. All rights reserved.
          </p>
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;

// import { Facebook, Twitter, Linkedin, Youtube, MessageCircle, Instagram } from 'lucide-react';
// import Logo from '../common/Logo';
// import Button from '../common/Button';

// const Footer = () => {
//   const footerLinks = {
//     network: [
//       { name: 'Community', href: '#' },
//       { name: 'Investor', href: '#' },
//       { name: 'Broker', href: '#' },
//     ],
//     product: [
//       { name: 'Invest', href: '#' },
//       { name: 'Discover', href: '#' },
//       { name: 'Transact', href: '#' },
//       { name: 'Manage', href: '#' },
//     ],
//     technology: [
//       { name: 'Artificial Intelligence', href: '#' },
//       { name: 'Block Chain', href: '#' },
//     ],
//     highlights: [
//       { name: 'Impact of COVID-19 on the food and beverage industry and the retail sector', href: '#' },
//       { name: 'Commercial lending during COVID-19: navigating the impact', href: '#' },
//     ],
//     ourStory: [
//       { name: 'Approach', href: '#' },
//       { name: 'AboutUs', href: '#' },
//     ],
//     knowledgeCenter: [
//       { name: 'Resource', href: '#' },
//       { name: 'Blog', href: '#' },
//     ],
//   };

//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Youtube, href: '#', label: 'YouTube' },
//     { icon: MessageCircle, href: '#', label: 'Medium' },
//     { icon: Instagram, href: '#', label: 'Pinterest' },
//   ];

//   return (
//     <footer className="bg-[#2a2d3a] text-white">
//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Main Footer Content - Two Columns Layout with Separator */}
//         <div className="grid lg:grid-cols-[1fr_1px_1.5fr] gap-0 py-16">

//           {/* Left Column - Newsletter Section */}
//           <div className="max-w-xl pr-0 lg:pr-12 pb-12 lg:pb-0">
//             {/* Newsletter Form */}
//             <form className="relative mb-12" onSubmit={(e) => e.preventDefault()}>
//               <div className="relative flex items-center bg-[#1e2029] rounded-full overflow-hidden border border-gray-700">
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email Here"
//                   className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
//                 />
//                 <Button
//                   variant="primary"
//                   className="m-1 text-sm whitespace-nowrap px-5"
//                   type="submit"
//                 >
//                   Subscribe To Newsletter
//                 </Button>
//               </div>
//             </form>

//             {/* Signup Heading */}
//             <h3 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
//               Signup and start enjoying the benifits today!
//             </h3>

//             {/* Signup Button */}
//             <Button className="mb-10 text-base">
//               Sign Up To Lilypads
//             </Button>

//             {/* Social Links */}
//             <div className="flex gap-3">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   aria-label={social.label}
//                   className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
//                 >
//                   <social.icon className="w-5 h-5 text-[#2a2d3a]" strokeWidth={2} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Vertical Separator Line - Hidden on mobile */}
//           <div className="hidden lg:block w-px bg-gray-700 mx-8"></div>

//           {/* Right Column - Links Grid */}
//           <div className="pl-0 lg:pl-8 border-t lg:border-t-0 border-gray-700 pt-12 lg:pt-0">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">

//               {/* Column 1 - Logo & Address */}
//               <div>
//                 <Logo className="mb-6" />
//                 <div className="text-gray-400 mb-10">
//                   <p className="font-semibold text-white mb-3 text-sm">Reach Us At</p>
//                   <address className="not-italic text-sm leading-relaxed text-gray-400">
//                     6751 Columbia Gateway Dr.,<br />
//                     3rd floor, Columbia,<br />
//                     MD 21046
//                   </address>
//                 </div>

//                 {/* Network */}
//                 <div className="mb-10">
//                   <h4 className="font-bold text-base mb-4 text-white">Network</h4>
//                   <ul className="space-y-2">
//                     {footerLinks.network.map((link, index) => (
//                       <li key={index}>
//                         <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
//                           {link.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Technology */}
//                 <div>
//                   <h4 className="font-bold text-base mb-4 text-white">Technology</h4>
//                   <ul className="space-y-2">
//                     {footerLinks.technology.map((link, index) => (
//                       <li key={index}>
//                         <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
//                           {link.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Column 2 - Product & Highlights */}
//               <div>
//                 {/* Product */}
//                 <div className="mb-10">
//                   <h4 className="font-bold text-base mb-4 text-white">Product</h4>
//                   <ul className="space-y-2">
//                     {footerLinks.product.map((link, index) => (
//                       <li key={index}>
//                         <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
//                           {link.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Highlights */}
//                 <div>
//                   <h4 className="font-bold text-base mb-4 text-white">Highlights</h4>
//                   <ul className="space-y-3">
//                     {footerLinks.highlights.map((link, index) => (
//                       <li key={index}>
//                         <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm leading-relaxed block">
//                           {link.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Column 3 - Our Story & Knowledge Center */}
//               <div>
//                 {/* Our Story */}
//                 <div className="mb-10">
//                   <h4 className="font-bold text-base mb-4 text-white">Our Story</h4>
//                   <ul className="space-y-2">
//                     {footerLinks.ourStory.map((link, index) => (
//                       <li key={index}>
//                         <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
//                           {link.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Knowledge Center */}
//                 <div>
//                   <h4 className="font-bold text-base mb-4 text-white">Knowledge Center</h4>
//                   <ul className="space-y-2">
//                     {footerLinks.knowledgeCenter.map((link, index) => (
//                       <li key={index}>
//                         <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
//                           {link.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700"></div>

//         {/* Copyright */}
//         <div className="py-6 text-center">
//           <p className="text-gray-400 text-sm">
//             © {new Date().getFullYear()} Lilypads. All rights reserved.
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
