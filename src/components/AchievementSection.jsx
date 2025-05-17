import React, { useEffect, useState } from "react";
import { Award, Calendar, MapPin, Briefcase, Tag } from 'lucide-react';

const AchievementsSection = () => {
  const certificates = [
    {
      id: 1,
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "2025",
      location: "Online",
      description: "Professional certification for completing the Front End Development Libraries course",
      credentialId: "fcccab55b24-d862-4cab-b104-5a0a4707926c-fedl"
    },
    {
      id: 2,
      title: "Software  Testing Tutorial",
      issuer: "Great Learning",
      date: "2023",
      location: "Online",
      description: "Certification for completing the Software Testing Tutorial course",
      credentialId: "not-available"
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block bg-[#38BDF8]/10 text-[#38BDF8] px-3 py-1 rounded-full text-sm font-medium mb-3">
            PASSPORT STAMPS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Achievements & Certifications</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            A collection of professional certifications and achievements, each representing a milestone in my journey.
          </p>
        </div>


        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Passport header */}
            <div className="bg-[#0F172A] text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-sm text-[#FACC15]">DIGITAL PASSPORT</div>
                  <div className="text-xl font-bold mt-1">Passenger's Professional Certifications</div>
                </div>
                <Award className="text-[#FACC15]" size={32} />
              </div>
            </div>

            {/* Achievements list */}
            <div className="divide-y divide-gray-100">
              {certificates.map((achievement) => (
                <div key={achievement.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {achievement.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Award className="mr-2" size={16} />
                          {achievement.issuer}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2" size={16} />
                          {achievement.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2" size={16} />
                          {achievement.location}
                        </div>
                      </div>
                    </div>

                    {/* Stamp-like credential ID */}
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <div className="inline-block rotate-[-12deg]">
                        <div className="border-2 border-[#0F172A] rounded px-4 py-2">
                          <div className="font-mono text-xs text-gray-500">CREDENTIAL ID</div>
                          <div className="font-mono font-bold text-[#0F172A] break-all text-sm">
                            {achievement.credentialId.length > 20 ? (
                              <>
                                <div>{achievement.credentialId.slice(0, Math.ceil(achievement.credentialId.length / 2))}</div>
                                <div>{achievement.credentialId.slice(Math.ceil(achievement.credentialId.length / 2))}</div>
                              </>
                            ) : (
                              <div>{achievement.credentialId}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              ))}
            </div>

            {/* Passport footer */}
            <div className="bg-gray-50 p-4 border-t border-gray-100">
              <div className="text-center text-sm text-gray-500">
                <span className="font-mono">ISSUED BY</span> respective certification authorities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scholar Achievement - Baggage Themed */}
      <div className="max-w-4xl mx-auto mt-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#FACC15]">
          <div className="bg-[#FACC15] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Briefcase className="text-[#0F172A] mr-3" size={32} />
                <div>
                  <div className="font-mono text-sm text-[#0F172A]/70">SPECIAL BAGGAGE</div>
                  <div className="text-2xl font-bold text-[#0F172A]">Scholar Achievement</div>
                </div>
              </div>
              <div className="bg-[#0F172A] text-white px-4 py-2 rounded-full font-mono text-sm">
                PRIORITY
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                    Indian Embassy Scholar
                  </h3>
                  <p className="text-gray-600">
                    Recognized for exceptional academic achievement and cultural contribution,
                    awarded a prestigious scholarship by the Indian Embassy.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="mr-2" size={18} />
                    <span>Award Date: 2021</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="mr-2" size={18} />
                    <span>Embassy of India, Kathmandu (Nepal)</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Tag className="mr-2" size={18} />
                    <span>Scholarship ID: KAT/EDU/CP/327/9/COMPEX/2021-22</span>
                  </div>
                </div>
              </div>

              {/* Baggage Tag Design */}
              <div className="md:w-1/3">
                <div className="bg-[#0F172A] text-white p-4 rounded-lg rotate-3 transform hover:rotate-0 transition-transform">
                  <div className="border-2 border-dashed border-[#FACC15] p-4">
                    <div className="font-mono text-xs mb-2">BAGGAGE TAG</div>
                    <div className="text-[#FACC15] font-bold mb-2">SCHOLAR CLASS</div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <div className="text-gray-400">FROM:</div>
                        <div>Indian Embassy</div>
                      </div>
                      <div>
                        <div className="text-gray-400">TO:</div>
                        <div>Excellence</div>
                      </div>
                      <div className="pt-2 border-t border-gray-700">
                        <div className="font-mono text-[#FACC15]">KAT/EDU/CP/327/9/COMPEX/2021-22</div>
                      </div>
                    </div>
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

export default AchievementsSection;