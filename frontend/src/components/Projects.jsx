import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, DollarSign, Building, ArrowRight, Filter } from 'lucide-react';

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'subsea', label: 'Subsea Systems' },
    { id: 'platform', label: 'Platforms' },
    { id: 'civil', label: 'Civil Engineering' }
  ];

  const getProjectCategory = (project) => {
    if (project.title.toLowerCase().includes('subsea') || project.title.toLowerCase().includes('lufeng')) {
      return 'subsea';
    } else if (project.title.toLowerCase().includes('platform') || project.title.toLowerCase().includes('troll') || project.title.toLowerCase().includes('sleipner') || project.title.toLowerCase().includes('oseberg') || project.title.toLowerCase().includes('statfjord')) {
      return 'platform';
    } else if (project.title.toLowerCase().includes('bridge')) {
      return 'civil';
    }
    return 'platform';
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => getProjectCategory(project) === filter);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Major Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            A selection of significant offshore and subsea engineering projects delivered over three decades
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? 'default' : 'outline'}
                className={`transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-slate-700 hover:bg-slate-600 text-white'
                    : 'border-slate-300 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Filter size={16} className="mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-white border-2 border-slate-200 hover:border-slate-400 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Building size={16} />
                      <span className="text-sm font-medium">{project.client}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100 whitespace-nowrap">
                    {project.year}
                  </Badge>
                </div>

                <p className="text-slate-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs border-slate-300 text-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-slate-300 text-slate-600">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Project Value */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    <DollarSign size={16} className="text-green-600" />
                    <span className="font-semibold text-green-600">{project.value}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-slate-600 hover:text-slate-700 hover:bg-slate-50 p-2"
                  >
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal/Expanded View */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
            <Card className="bg-white p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center space-x-4 text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Building size={18} />
                        <span className="font-medium">{selectedProject.client}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={18} />
                        <span>{selectedProject.year}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-slate-900">Technologies & Methods:</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 hover:bg-slate-100 px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    <DollarSign size={20} className="text-green-600" />
                    <span className="text-xl font-bold text-green-600">{selectedProject.value}</span>
                    <span className="text-slate-600">Project Value</span>
                  </div>
                  <Button onClick={scrollToContact} className="bg-slate-700 hover:bg-slate-600 text-white">
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-300 max-w-2xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Ready for Your Next Project?</h3>
              <p className="text-slate-600 leading-relaxed">
                With over three decades of experience delivering complex offshore projects, I'm ready to help you achieve your engineering goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-8"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}