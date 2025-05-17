import React,{useEffect, useState} from "react";
import {Plane, Menu, X} from 'lucide-react';
import {navItems} from "../data/navigation";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

    // const timer = setInterval(() => {
    //     setCurrentTime(new Date().toLocaleTimeString());
    // }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
        // clearInterval(timer);
    };
    }
    , []);

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A] shadow-lg py-2' : "bg-transparent py-4"}`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Plane className="text-[#38BDF8] mr-5 ml-4" size ={24}/>
                    <span className="text-[#FACC15] font-mono text-xl font-bold">
                        My <span className="text-[#FACC15]">Portfolio</span>
                    </span>
                    </div>
                
                <div className="hidden md:flex items-center">
                    {/* <div className="mr-8 font-mono text-[#FACC15]">
                        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div> */}

                    <nav className="flex space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.code}
                                href={item.href}
                                className="group relative px-4 py-2 text-[#FACC15] hover:text-[#FACC15] transition-colors"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-mono text-[#38BDF8]">{item.code}</span>
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FACC15] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"> </div>
                            </a>
                        ))}
                    </nav>
                </div>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

        {mobileMenuOpen && (
            <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-sm">
                <nav className="flex flex-col py-4">
                    {navItems.map((item) => (
                        <a
                            key={item.code}
                            href={item.href}
                            className="px-4 py-2 text-white hover:bg-[#1E293B] flex items-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="text-xs font-mono text-[#38BDF8] w-12">{item.code}</span>
                            <span className="font-medium">{item.label}</span>
                            
                        </a>
                    ))}
                </nav>
            </div>
        )}
        </header>
    );
};


export default Header;
