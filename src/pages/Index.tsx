
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="container mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/acfcc900-ce89-49a9-8a55-b670b08a6911.png" 
            alt="Prism Labs Logo" 
            className="h-12 w-12"
          />
          <h1 className="text-2xl font-bold">PrismLabs</h1>
        </div>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <Link to="/projects" className="hover:text-gray-700">Projects</Link>
          <Link to="/about" className="hover:text-gray-700">About</Link>
        </nav>
      </header>

      <main className="container mx-auto px-6 flex-grow flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-bold mb-6">
            Fixing the Problems Nobody Seemed to Care About
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Prism Labs creates Free and Open Source Software (FOSS) that solves overlooked technical challenges
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/projects">
              <Button variant="default" className="bg-black text-white hover:bg-gray-800">
                Explore Projects <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <a href="https://github.com/PrismLabs-gh/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                Contribute
              </Button>
            </a>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-8 text-center border-t">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Prism Labs. Open Source. Always.
        </p>
      </footer>
    </div>
  );
};

export default Index;
