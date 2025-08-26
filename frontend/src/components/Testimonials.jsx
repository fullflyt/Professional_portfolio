import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how my coaching has helped professionals achieve their career goals and unlock their potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 bg-white border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative">
              <div className="space-y-6">
                {/* Quote icon */}
                <div className="flex justify-between items-start">
                  <Quote className="text-blue-600 opacity-20" size={32} />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-slate-700 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>

                {/* Client info */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-slate-600 font-medium">{testimonial.role}</p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    {testimonial.company}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-white border-2 border-blue-200 max-w-2xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Join My Success Stories</h3>
              <p className="text-slate-600">
                Ready to become the next success story? Let's discuss how I can help you achieve your career goals.
              </p>
              <div className="flex justify-center space-x-1 mt-4">
                {renderStars(5)}
                <span className="ml-2 text-slate-600 font-medium">95% Client Success Rate</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}