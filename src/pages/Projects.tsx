
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="container mx-auto px-6 py-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 transition-transform hover:scale-105">
          <img 
            src="/lovable-uploads/acfcc900-ce89-49a9-8a55-b670b08a6911.png" 
            alt="Prism Labs Logo" 
            className="h-12 w-12"
          />
          <h1 className="text-2xl font-bold">PrismLabs</h1>
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-gray-700 transition-colors">Projects</Link>
          <Link to="/about" className="hover:text-gray-700 transition-colors">About</Link>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Meridian</h2>
          <p className="text-gray-700 mb-6">
            An AI client built for power users, designed to maximize productivity and efficiency in AI interactions.
          </p>
          <a 
            href="https://github.com/PrismLabs-gh/meridian/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="default" className="bg-black text-white hover:bg-gray-800">
              Learn More <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
