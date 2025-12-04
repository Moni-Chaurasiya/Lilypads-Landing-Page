
import { Shield, Building2, Users, BarChart3, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const topFeatures = [
    {
      icon: Shield,
      title: 'Become a Data-Driven Investor',
      description: 'Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.',
    },
    {
      icon: Building2,
      title: 'Lilypads can help you make smarter decisions.',
      description: 'Streamline your investment evaluation process and collaborate in reaching your long term investment objectives',
    },
  ];

  const bottomFeatures = [
    {
      icon: Briefcase,
      title: 'Manager Due Diligence',
      description: 'Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis. All it takes is a set of returns',
    },
    {
      icon: BarChart3,
      title: 'Optimize Asset Allocation',
      description: 'Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors and then optimize that portfolio based on objectives',
    },
    {
      icon: Users,
      title: 'Our Subscribers',
      description: 'Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers',
    },
  ];



  return (
    <section className="py-20 bg-[#F5F4F8]">
      <div className="container mx-auto px-4">
        
        {/* Top Row - Title and 2 Features */}
        <div className="grid lg:grid-cols-3 gap-0 border-b border-gray-300">
          
          {/* Left - Section Header */}
          <div className="lg:border-r border-gray-300 p-8 lg:p-12">
            <p className="text-[#9E2349] font-semibold mb-4 flex items-center gap-2 text-sm">
              <span className="w-8 h-0.5 bg-[#9E2349]"></span>
              About Us
            </p>
            <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 font-serif">
              Lillypad is the only Real Estate Investment tool you need for your business
            </h2>
          </div>

          {/* Top Feature 1 */}
         <article className="lg:border-r  p-8 lg:p-12 border-t lg:border-t-0 border-gray-300">
            <div className="flex mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                {(() => {
                  const Icon = topFeatures[0].icon;
                  return <Icon className="w-10 h-10 text-primary-purple" strokeWidth={1.5} />;
                })()}
              </div>
              <h3 className="text-xl font-bold mt-6 ml-4 text-gray-900">{topFeatures[0].title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">{topFeatures[0].description}</p>
          </article>

          {/* Top Feature 2 */}
          <article className="p-8 lg:p-12 border-t lg:border-t-0 border-gray-300">
            <div className="flex mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                {(() => {
                  const Icon = topFeatures[1].icon;
                  return <Icon className="w-10 h-10 text-primary-purple" strokeWidth={1.5} />;
                })()}
              </div>
              <h3 className="text-xl font-bold mt-4 ml-4 text-gray-900">{topFeatures[1].title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">{topFeatures[1].description}</p>
          </article>

        </div>

        {/* Bottom Row - 3 Features */}
        <div className="grid lg:grid-cols-3 gap-0">
          
          {bottomFeatures.map((feature, index) => (
            <article
              key={index}
              className={`p-8 lg:p-12 border-t border-gray-300 ${
                index < bottomFeatures.length - 1 ? 'lg:border-r border-gray-300' : ''
              }`}
            >
                <div className='flex'>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-10 h-10 text-primary-purple" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mt-7 ml-4 text-gray-900">{feature.title}</h3>

                </div>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutSection;