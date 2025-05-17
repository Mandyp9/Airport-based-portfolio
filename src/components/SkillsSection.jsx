// src/components/SkillsSection.js
import React, { useState } from 'react';
import { skills } from '../data/skills';

// MUI Icons
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import ReactIcon from '@mui/icons-material/DeveloperMode';
import PaletteIcon from '@mui/icons-material/Palette';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GitHubIcon from '@mui/icons-material/GitHub';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';

const SkillsSection = () => {
  const [activeTerminal, setActiveTerminal] = useState('all');

  const getIcon = (iconName) => {
    const size = 24;
    switch (iconName.toLowerCase()) {
      case 'html': return <HtmlIcon style={{ fontSize: size }} />;
      case 'css': return <CssIcon style={{ fontSize: size }} />;
      case 'javascript': return <JavascriptIcon style={{ fontSize: size }} />;
      case 'react': return <ReactIcon style={{ fontSize: size }} />;
      case 'tailwindcss': return <PaletteIcon style={{ fontSize: size }} />;
      case 'palette': return <PaletteIcon style={{ fontSize: size }} />;
      case 'designservices': return <DesignServicesIcon style={{ fontSize: size }} />;
      case 'github': return <GitHubIcon style={{ fontSize: size }} />;
      case 'bugreport': return <BugReportIcon style={{ fontSize: size }} />;
      default: return <CodeIcon style={{ fontSize: size }} />;
    }
  };

  const filteredSkills =
    activeTerminal === 'all'
      ? skills
      : skills.filter((skill) => skill.terminal === activeTerminal);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block bg-[#FACC15]/10 text-[#FACC15] px-3 py-1 rounded-full text-sm font-medium mb-3">
            TERMINAL MAP
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Technical Skills</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Navigate through my technical capabilities, organized by specialization areas just like terminals at an airport.
          </p>
        </div>

        {/* Terminal navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTerminal === 'all'
                ? 'bg-[#0F172A] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTerminal('all')}
          >
            All Terminals
          </button>
          {['T1', 'T2', 'T3', 'T4'].map((terminal) => (
            <button
              key={terminal}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTerminal === terminal
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTerminal(terminal)}
            >
              {terminal}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="relative mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-8 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.3
            }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="flex items-center">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    skill.terminal === 'T1'
                      ? 'bg-blue-100 text-blue-600'
                      : skill.terminal === 'T2'
                      ? 'bg-green-100 text-green-600'
                      : skill.terminal === 'T3'
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-amber-100 text-amber-600'
                  }`}
                >
                  {getIcon(skill.icon)}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-[#0F172A]">{skill.name}</h3>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded">
                      {skill.terminal}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        skill.terminal === 'T1'
                          ? 'bg-blue-600'
                          : skill.terminal === 'T2'
                          ? 'bg-green-600'
                          : skill.terminal === 'T3'
                          ? 'bg-purple-600'
                          : 'bg-amber-600'
                      }`}
                      style={{
                        width: `${skill.level}%`,
                        transition: 'width 1s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional SVG lines (decorative) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100,100 C150,120 250,150 300,200"
              stroke="#38BDF8"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M320,150 C360,180 380,220 400,250"
              stroke="#FACC15"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M200,300 C250,330 300,350 350,370"
              stroke="#38BDF8"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
