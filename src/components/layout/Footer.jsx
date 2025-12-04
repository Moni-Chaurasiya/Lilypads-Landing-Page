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

              <form
                className="relative mb-14"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col sm:flex-row items-center bg-[#202221] rounded-[1.2rem] border border-gray-700 overflow-hidden shadow-xl shadow-black/20 w-full">
                  <input
                    type="email"
                    placeholder="Enter Your Email Here"
                    className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-500 text-sm outline-none w-full"
                  />

                  <Button
                    variant="greyBtn"
                    type="submit"
                    className="mt-3 sm:mt-0 sm:ml-1 text-sm px-5 py-3 bg-[#2E302F] w-full sm:w-auto"
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

              <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-5">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a1d29]" />
                  </a>
                ))}
              </div>
            </div>

            {/* VERTICAL DIVIDER – ONLY ON DESKTOP */}
            <div className="hidden lg:block w-px bg-gray-700 ml-20"></div>
          </div>

          {/* RIGHT SIDE GRID */}
          <div>
            <div className="flex gap-6 sm:gap-10 lg:gap-20 flex-wrap">
              <img
                src="/property-images/flower.png"
                alt="flower"
                className="w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
              />

              <div className="mt-5 sm:mt-10">
                <p className="font-semibold text-white mb-4">Reach Us At</p>
                <address className="text-sm leading-relaxed text-gray-400 not-italic">
                  6751 Columbia Gateway Dr.,
                  <br />
                  3rd floor, Columbia,
                  <br />
                  MD 21046
                </address>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Column 1 - Network */}
              <div>
                <h4 className="font-bold mb-4">Network</h4>
                <ul className="space-y-2">
                  {footerLinks.network.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 - Product */}
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2">
                  {footerLinks.product.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Our Story */}
              <div>
                <h4 className="font-bold mb-4">Our Story</h4>
                <ul className="space-y-2">
                  {footerLinks.ourStory.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 - Technology (2nd row starts here) */}
              <div>
                <h4 className="font-bold mb-4">Technology</h4>
                <ul className="space-y-2">
                  {footerLinks.technology.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 5 - Highlights */}
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

              {/* Column 6 - Knowledge Center */}
              <div>
                <h4 className="font-bold mb-4">Knowledge Center</h4>
                <ul className="space-y-2">
                  {footerLinks.knowledgeCenter.map((link, i) => (
                    <li key={i}>
                      <a className="text-gray-400 hover:text-white text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
