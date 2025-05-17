import React, { useState, useEffect } from 'react';
import { Plane, ArrowRight, Download } from 'lucide-react';


const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Frontend Developer & QA Engineer';

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);

    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-[20%] w-20 h-20 rounded-full bg-[#38BDF8]/10 blur-xl"></div>
        <div className="absolute bottom-1/3 left-[10%] w-32 h-32 rounded-full bg-[#FACC15]/10 blur-xl"></div>

        {/* Dotted grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #38BDF8 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.1
        }}></div>

      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Boarding pass styled card */}
          <div className={`bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-1000 ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-[#0F172A] text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <Plane className="mr-2 text-[#FACC15]" size={20} />
                <span className="font-mono font-bold">INTRODUCTION</span>
              </div>
              <div className="text-sm font-mono">FLIGHT No: DEV - 2025</div>
            </div>

            <div className="p-6 md:p-8 flex flex-col md:flex-row">
              <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-8">
                <div className="font-mono text-sm text-gray-500 mb-1">PASSENGER</div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Mandeep KC</h1>
                <div className="font-mono text-sm text-gray-500 mb-1">PROFESSION</div>
                <h2 className="text-xl text-[#38BDF8] font-medium mb-4 h-7">{typedText}<span className="animate-pulse">|</span></h2>
                <p className="text-gray-600 mb-6 max-w-lg">
                  Creating seamless digital experiences through clean code and intuitive design.
                  Passionate about building accessible and performant web applications.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="inline-flex items-center gap-2 bg-[#0F172A] text-white py-2 px-4 rounded-md hover:bg-[#1E293B] transition-colors">
                    View Projects <ArrowRight size={16} />
                  </a>
                  <a
                    href="/Mandeep-KC-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#0F172A] text-[#0F172A] py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    View CV <ArrowRight size={16} />
                  </a>

                </div>
              </div>

              <div className="flex-1 pt-6 md:pt-0 md:pl-8">
                <div className="font-mono text-sm text-gray-500 mb-1">TICKET INFO</div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="w-24 font-mono text-sm text-gray-500">FROM:</div>
                    <div className="font-medium">Satdobato, Kathmandu, Nepal</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-mono text-sm text-gray-500">TO:</div>
                    <div className="font-medium">Your Dream Project</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-mono text-sm text-gray-500">BOARDING:</div>
                    <div className="font-medium">Immediately</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-mono text-sm text-gray-500">SEAT:</div>
                    <div className="font-medium">Front-end A1</div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-mono text-sm text-gray-500 mb-1">GATE</div>
                      <div className="text-2xl font-bold font-mono">WEB-23</div>
                    </div>
                    <div>
                      <div className="font-mono text-sm text-gray-500 mb-1">BOARDING TIME</div>
                      <div className="text-2xl font-bold font-mono">NOW</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Barcode section */}
            <div className="bg-gray-50 p-4 flex justify-center">
              <div className="inline-flex items-center justify-center space-x-1 h-16">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="h-full w-1 bg-black"
                    style={{
                      width: Math.random() * 2 + 1 + 'px',
                      opacity: Math.random() * 0.5 + 0.5
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;