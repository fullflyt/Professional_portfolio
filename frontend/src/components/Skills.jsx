import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Wrench, Users, TrendingUp, Code, Settings, Globe } from 'lucide-react';

export default function Skills({ skills }) {
  const skillCategories = [
    {
      title: "Technical Engineering",
      icon: <Wrench className="text-slate-700" size={24} />,
      skills: skills.technical,
      color: "bg-slate-50 border-slate-300"
    },
    {
      title: "Management & Leadership",
      icon: <Users className="text-slate-600" size={24} />,
      skills: skills.management,
      color: "bg-gray-50 border-gray-300"
    },
    {
      title: "Business Development",
      icon: <TrendingUp className="text-slate-800" size={24} />,
      skills: skills.business,
      color: "bg-stone-50 border-stone-300"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three decades of expertise across technical engineering, leadership, and business development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`p-8 ${category.color} border-2 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-white/80 text-slate-700 hover:bg-white hover:shadow-sm transition-all duration-200 cursor-default text-sm py-2 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Qualifications */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-300">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto">
                  <Code className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Software Proficiency</h4>
                <p className="text-slate-600">SAP, AutoCAD, Excel, Structural Analysis Software, Linux</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto">
                  <Settings className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Methodologies</h4>
                <p className="text-slate-600">Lean Implementation, Six Sigma, Unified Field Management</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Languages</h4>
                <p className="text-slate-600">Norwegian (Native), English (Fluent)</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}