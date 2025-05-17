import React from 'react';
import { Coffee, Plane, Briefcase, BookOpen, Map } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start max-w-5xl mx-auto">
          {/* Left magazine sidebar */}
          <div className="md:w-1/3 mb-10 md:mb-0 md:sticky md:top-20">
            <div className="bg-[#0F172A] text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Plane className="text-[#FACC15] mr-2" size={20} />
                <h3 className="font-mono font-bold text-lg">IN-FLIGHT MAGAZINE</h3>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">About The Developer</h2>
              <p className="text-gray-300 mb-6">
                Welcome aboard! Learn more about my journey, experience, and what drives me to create exceptional digital experiences.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Coffee className="text-[#38BDF8] mr-3" size={18} />
                  <span>Powered by creativity and tea</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="text-[#38BDF8] mr-3" size={18} />
                  <span>Eager to get a hands-on experience</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="text-[#38BDF8] mr-3" size={18} />
                  <span>Constantly learning and adapting</span>
                </div>
                <div className="flex items-center">
                  <Map className="text-[#38BDF8] mr-3" size={18} />
                  <span>Based in Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right magazine content */}
          <div className="md:w-2/3 md:pl-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="uppercase tracking-wide text-xs font-semibold text-gray-500 mb-2">
                  FLIGHT PROFILE
                </div>
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-gray-700 mb-4">
                  I'm a recent Computer Engineering graduate with a growing passion for web development. My journey began with an internship as a QA Engineer, where I gained a solid understanding of software quality, testing strategies, and the importance of delivering bug-free user experiences.
                </p>
                <p className="text-gray-700 mb-4">
                  That foundation sparked my curiosity to dive deeper into the world of development — not just identifying issues, but building solutions. Currently, I'm focused on learning modern frontend frameworks and expanding my skills toward full-stack development.
                </p>
                <p className="text-gray-700">
                  With each project, I strive to find the perfect balance between aesthetics and functionality, ensuring that every user interaction feels natural and satisfying.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="uppercase tracking-wide text-xs font-semibold text-gray-500 mb-2">
                  Passenger's HISTORY
                </div>
                <h3 className="text-2xl font-bold mb-4">Experience</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-bold">Quality Assurance Engineer</h4>
                      <span className="text-sm text-gray-500">OCT 2023 - MAR 2024</span>
                    </div>
                    <div className="text-[#38BDF8] font-medium mb-2">APP Technologies Pvt Ltd</div>
                    <p className="text-gray-700 text-sm">
                      Conducted manual software testing, regression testing, mobile application testing by developing and executing test cases for both mobile and web applications.  
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-bold">Web Developer</h4>
                      <span className="text-sm text-gray-500">Present</span>
                    </div>
                    <div className="text-[#38BDF8] font-medium mb-2">Freelancer</div>
                    <p className="text-gray-700 text-sm">
                      Learning and Creating web applications using HTML/CSS/JS, React and Tailwind CSS. Focusing on responsive design and user experience.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="uppercase tracking-wide text-xs font-semibold text-gray-500 mb-2">
                  Passenger's EDUCATION
                </div>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-bold">BTECH in Computer Science Engineering</h4>
                      <span className="text-sm text-gray-500">2021 - 2025</span>
                    </div>
                    <p className="text-gray-700 text-sm font-bold">
                      CGPA : 8.70 [10 scale]
                    </p>
                    <div className="text-[#38BDF8] font-medium">Vellore Institute of Technology, Vellore, India</div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-bold">High School (+2)</h4>
                      <span className="text-sm text-gray-500">2017 - 2019</span>
                    </div>
                    <p className="text-gray-700 text-sm font-bold">
                      CGPA : 3.42 [4 scale]
                    </p>
                    <div className="text-[#38BDF8] font-medium">Bluebird Secondary School and College, Kumaripati, Nepal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;