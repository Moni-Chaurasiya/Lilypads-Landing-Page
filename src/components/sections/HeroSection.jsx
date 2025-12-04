
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import StatCard from '../common/StatCard';
import MobileApp from '../layout/MobileApp';

const HeroSection = () => {
  return (
    <section id="home" className="pt-12 pb-0 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-100 lg:bg-gradient-to-r lg:from-gray-50 lg:via-purple-50 lg:to-transparent"></div>
      
      {/* Purple background for right side - Desktop only */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5 gradient-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start pt-20 lg:pt-32">
          
          {/* Left Column - Hero Content */}
          <div className="space-y-8 pb-12 lg:pb-0">
            {/* Hero Text */}
            <div>
              <p className="text-[#9E2349] font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#9E2349]"></span>
                Welcome to the
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Unprecedented<br />
                Era of <span className="text-[#9E2349]">Real Estate</span><br />
                <span className="text-[#9E2349]">Investing</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                Lilypads uses sophisticated technologies for data-driven decisions in investing, managing and funding commercial real estate assets
              </p>
            </div>

       
            <Button className="text-lg">
              Start Investing Now
              <ArrowRight className="w-5 h-5" />
            </Button>

     
            <div className="grid grid-cols-3 gap-8 pt-16">
              <StatCard number="658+" label="Properties Registered" />
              <StatCard number="685+" label="Deals Cracked" />
              <StatCard number="255+" label="Investors" />
            </div>
          </div>

          {/* Right Column - Mobile Devices Preview */}
          <div className="relative lg:min-h-[700px] flex items-start justify-center lg:justify-items-end ">
            <MobileApp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;