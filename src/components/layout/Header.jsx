import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Network', href: '#network' },
    { name: 'Product', href: '#product' },
    { name: 'Technology', href: '#technology' },
    { name: 'Our Story', href: '#story' },
    { name: 'Knowledge Center', href: '#knowledge' },
  ];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? "bg-[#DED1F9FF] " : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          <img
            src="/property-images/flower.png"
            alt="flower"
            className="w-24 h-24 object-contain"
          />

          <ul className="hidden lg:flex items-center gap-8 mr-56">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`text-gray-700 hover:text-primary-purple transition-colors font-medium ${
                    index === 0 ? 'text-primary-purple' : ''
                  }`}
                >
                  {link.name}
                  {index === 0 && (
                    <span className="block w-1.5 h-1.5 bg-primary-purple rounded-full mx-auto mt-1"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline">Contact Us</Button>
            <Button variant="white">Log In</Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-primary-purple transition-colors font-medium block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" className="w-full justify-center">
                Contact Us
              </Button>
              <Button variant="white" className="w-full justify-center">
                Log In
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
