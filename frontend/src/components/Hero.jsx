import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, Users, TrendingUp, Award, Calendar, MapPin } from 'lucide-react';

export default function Hero({ data, stats }) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-slate-700/30 rounded-full px-4 py-2 text-slate-300 text-sm font-medium">
                <MapPin size={16} />
                <span>{data.location}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-white">Einar</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400">
                  Jørgensen
                </span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
                  {data.title}
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                  {data.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Let's Collaborate
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                onClick={scrollToProjects}
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
              >
                View Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center group">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-slate-700/30 rounded-full flex items-center justify-center group-hover:bg-slate-700/40 transition-colors">
                    <Users className="text-slate-300" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">{stats.clientsServed}</div>
                <div className="text-sm text-slate-400">Major Clients</div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-slate-700/30 rounded-full flex items-center justify-center group-hover:bg-slate-700/40 transition-colors">
                    <TrendingUp className="text-slate-300" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">{stats.successRate}</div>
                <div className="text-sm text-slate-400">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-slate-700/30 rounded-full flex items-center justify-center group-hover:bg-slate-700/40 transition-colors">
                    <Award className="text-slate-300" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">{stats.avgProjectValue}</div>
                <div className="text-sm text-slate-400">Avg Project Value</div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-slate-700/30 rounded-full flex items-center justify-center group-hover:bg-slate-700/40 transition-colors">
                    <Calendar className="text-slate-300" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">{stats.yearsExperience}</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Card */}
          <div className="relative">
            <Card className="p-8 bg-white/10 backdrop-blur-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                <div className="aspect-square bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Professional Photo */}
                  <img 
                    src="https://i.imgur.com/1Tz0A41.jpg" 
                    alt="Einar Jørgensen - Professional Photo"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ objectPosition: 'center 40%' }}
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback Avatar/Initials (hidden by default) */}
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm absolute inset-0 m-auto" style={{display: 'none'}}>
                    <span className="text-4xl font-bold text-white">EJ</span>
                  </div>
                  
                  {/* Floating elements for engineering theme */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-white/10 rounded rotate-45"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 right-4 w-2 h-8 bg-white/15 rounded"></div>
                </div>
                
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-white">{data.name}</h3>
                  <p className="text-slate-300 font-medium">{data.title}</p>
                  <div className="flex items-center justify-center space-x-2 text-slate-400">
                    <MapPin size={16} />
                    <span>{data.location}</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Floating Achievement Cards */}
            <Card className="absolute -bottom-6 -left-6 p-4 bg-slate-700 text-white shadow-xl transform hover:scale-105 transition-all duration-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold">MBA Graduate</div>
                  <div className="text-sm opacity-90">Maharishi University</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -top-6 -right-6 p-4 bg-slate-600 text-white shadow-xl transform hover:scale-105 transition-all duration-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Calendar className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold">31+ Years</div>
                  <div className="text-sm opacity-90">Experience</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}