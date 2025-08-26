import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle } from 'lucide-react';

export default function About({ data, certifications }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">About Me</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {data.bio}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">My Approach</h3>
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-slate-700 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Unified Field Management</h4>
                    <p className="text-slate-600">Implement holistic project management methodologies for optimal results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-slate-700 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Lean Implementation</h4>
                    <p className="text-slate-600">Streamline processes and eliminate waste through proven methodologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-slate-700 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Excellence Delivery</h4>
                    <p className="text-slate-600">Continuous focus on quality and performance throughout project lifecycle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Certifications */}
          <div className="space-y-8">
            <Card className="p-8 bg-slate-50 border-2 border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Credentials & Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1 bg-slate-200 text-slate-800 hover:bg-slate-200">
                      <CheckCircle size={14} className="mr-1" />
                      Certified
                    </Badge>
                    <p className="text-slate-700 leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Choose Me?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                  <span className="text-slate-700">31+ years offshore engineering experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                  <span className="text-slate-700">Proven track record with major oil & gas projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                  <span className="text-slate-700">Expertise in lean and unified field management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                  <span className="text-slate-700">Global project leadership and delivery excellence</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}