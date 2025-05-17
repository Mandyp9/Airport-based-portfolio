import React, { useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block bg-[#38BDF8]/10 text-[#38BDF8] px-3 py-1 rounded-full text-sm font-medium mb-3">
            DESTINATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore my work through these featured projects. Each one represents a different 
            destination in my development journey.
          </p>
        </div>

        {/* Departure board header */}
        <div className="bg-[#0F172A] text-white rounded-t-lg py-3 px-4 md:px-6 hidden md:flex">
          <div className="w-16 font-mono text-sm text-[#FACC15]">FLIGHT</div>
          <div className="flex-1 px-2 font-mono text-sm text-[#FACC15]">PROJECT</div>
          <div className="w-24 text-center font-mono text-sm text-[#FACC15]">GATE</div>
          <div className="w-32 text-center font-mono text-sm text-[#FACC15]">DESTINATION</div>
          <div className="w-24 text-center font-mono text-sm text-[#FACC15]">STATUS</div>
        </div>

        <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`border-b border-gray-100 last:border-b-0 transition-colors ${
                hoveredProject === project.id ? 'bg-blue-50' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Mobile view */}
              <div className="md:hidden px-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#0F172A]">{project.title}</h3>
                  <div className="bg-[#FACC15] text-[#0F172A] px-2 py-1 rounded font-mono text-xs">
                    {project.flightCode}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-gray-500 font-mono">GATE:</span> {project.gate}
                  </div>
                  <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#38BDF8] hover:text-[#0F172A] text-sm"
                  >
                    Visit <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Desktop view */}
              <div className="hidden md:flex items-center py-6 px-6 cursor-pointer">
                <div className="w-16 font-mono font-medium text-[#0F172A]">
                  {project.flightCode}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0F172A] mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-24 text-center font-mono font-medium text-[#0F172A]">
                  {project.gate}
                </div>
                <div className="w-32 text-center text-gray-700">
                  {project.destination}
                </div>
                <div className="w-24 text-center">
                  <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#38BDF8] hover:text-[#0F172A]"
                  >
                    <span>Visit</span> <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;