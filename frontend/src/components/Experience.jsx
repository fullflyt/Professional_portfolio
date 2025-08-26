import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Over three decades of experience in offshore engineering, project management, and business development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <Card className="md:ml-16 p-8 bg-slate-50 border-2 border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                          <div className="flex items-center space-x-2 text-slate-600 mt-1">
                            <Building size={16} />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100 w-fit">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-50 to-slate-50 border-2 border-blue-100">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Ready to Leverage This Experience?</h3>
              <p className="text-slate-600 max-w-md">
                Let's discuss how my three decades of offshore engineering expertise can drive success in your next project.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}