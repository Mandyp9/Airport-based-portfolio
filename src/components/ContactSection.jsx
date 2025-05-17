import React, { useState } from 'react';
import { Send, Headset, Mail, MapPin, Loader } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitting: false,
    submitted: false,
    error: false
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitting: false,
        submitted: true,
        name: '',
        email: '',
        message: ''
      }));
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block bg-[#38BDF8]/10 text-[#38BDF8] px-3 py-1 rounded-full text-sm font-medium mb-3">
            CHECK-IN COUNTER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ready to start a project or have questions? Reach out and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact info sidebar */}
            <div className="bg-[#0F172A] text-white p-8 md:w-1/3">
              <h3 className="text-xl font-bold mb-6 font-mono">CONTACT INFO</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-[#FACC15] mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:hello@example.com" className="text-gray-300 hover:text-white transition-colors">
                      mandeepkc9@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-[#FACC15] mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-300">Satdobato, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Headset className="text-[#FACC15] mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Availability</h4>
                    <p className="text-gray-300">Anytime</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h4 className="font-mono text-sm mb-4">BOARDING INFORMATION</h4>
                <p className="text-gray-300 text-sm">
                  For project inquiries, please include details about your timeline, budget, and requirements
                  to help me provide you with the most accurate information.
                </p>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="p-8 md:w-2/3">
              <div className="bg-[#38BDF8]/5 border border-[#38BDF8]/10 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <div className="bg-[#38BDF8] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <Headset className="text-white" size={16} />
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">Now boarding:</span> New project or job inquiries
                  </div>
                </div>
              </div>
              
              {formState.submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. I'll get back to you as soon as possible!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-colors"
                      placeholder="Mandeep KC"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-colors"
                      placeholder="mandeepkc9@gmail.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-colors"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className={`w-full bg-[#0F172A] text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors ${
                      formState.submitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#1E293B]'
                    }`}
                  >
                    {formState.submitting ? (
                      <>
                        <Loader className="animate-spin mr-2" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <div className="mt-4 text-sm text-gray-500 text-center">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>Response time: Usually within 24 hours</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;