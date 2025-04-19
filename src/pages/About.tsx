
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
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
