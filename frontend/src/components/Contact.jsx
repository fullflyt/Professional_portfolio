import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

export default function Contact({ data }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest. I'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Discuss Your Project</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your offshore engineering vision to life? Let's explore how my experience can drive your project's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                    <Mail className="text-slate-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <a href={`mailto:${data.email}`} className="text-slate-700 hover:text-slate-900 transition-colors">
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                    <Phone className="text-slate-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <a href={`tel:${data.phone}`} className="text-slate-700 hover:text-slate-900 transition-colors">
                      {data.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                    <MapPin className="text-slate-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Location</h4>
                    <p className="text-slate-600">{data.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-slate-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-slate-700" size={24} />
                  <h3 className="text-xl font-bold text-slate-900">Project Consultation</h3>
                </div>
                <p className="text-slate-600">
                  Schedule a consultation to discuss your offshore engineering challenges and explore potential solutions together.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    <span>Initial consultation at no charge</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    <span>Project scoping and requirements analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    <span>Customized approach recommendations</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-slate-50 border-2 border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-slate-300 focus:border-slate-500"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-slate-300 focus:border-slate-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-2 border-slate-300 focus:border-slate-500"
                    placeholder="+47 xxx xx xxx"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border-2 border-slate-300 focus:border-slate-500"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-md focus:border-slate-500 focus:outline-none bg-white"
                >
                  <option value="">Select project type</option>
                  <option value="subsea">Subsea Systems</option>
                  <option value="platform">Platform Engineering</option>
                  <option value="project-management">Project Management</option>
                  <option value="process-improvement">Process Improvement</option>
                  <option value="consulting">General Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="border-2 border-slate-300 focus:border-slate-500 resize-none"
                  placeholder="Tell me about your project requirements, timeline, and specific challenges you're facing..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 text-lg transform hover:scale-105 transition-all duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="ml-2" size={18} />}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}