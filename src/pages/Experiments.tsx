
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TestTube, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experiments = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-telegraf">
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
        <h1 className="text-4xl font-bold mb-8">Experimental Projects</h1>
        
        <div className="grid gap-8">
          <div className="bg-gray-50 rounded-lg p-8 transform transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Project Aurora</h2>
            </div>
            <p className="text-gray-700 mb-6">
              An experimental AI-powered code analysis tool that helps developers understand complex codebases faster.
              Currently in early development phase.
            </p>
            <Button variant="default" className="bg-black text-white hover:bg-gray-800 transform transition-all duration-300 hover:scale-105">
              Coming Soon <ArrowRight className="ml-2 animate-arrow-bounce" />
            </Button>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 transform transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-4">
              <TestTube className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Quantum</h2>
            </div>
            <p className="text-gray-700 mb-6">
              A prototype for a next-generation package manager focusing on dependency resolution speed and reliability.
              Currently in research phase.
            </p>
            <Button variant="default" className="bg-black text-white hover:bg-gray-800 transform transition-all duration-300 hover:scale-105">
              View Progress <ArrowRight className="ml-2 animate-arrow-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiments;
