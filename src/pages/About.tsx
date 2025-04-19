import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
        <h1 className="text-4xl font-bold mb-8">About Prism Labs</h1>
        
        <div className="prose prose-lg max-w-3xl">
          <p className="text-gray-700 mb-6">
            Prism Labs is dedicated to creating Free and Open Source Software (FOSS) that addresses overlooked technical challenges in the software development ecosystem.
          </p>
          
          <p className="text-gray-700 mb-6">
            Our mission is to identify and solve problems that the broader development community hasn't adequately addressed, making these solutions freely available to everyone.
          </p>

          <p className="text-gray-700">
            By focusing on neglected areas of software development, we aim to improve the overall developer experience and contribute to a more efficient, accessible tech ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
