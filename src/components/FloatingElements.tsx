
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric patterns inspired by Indian art */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-300 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-green-300 rounded-full animate-bounce opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-25" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-yellow-300 rounded-full animate-bounce opacity-20" style={{ animationDelay: '3s' }}></div>
      
      {/* Subtle mandala-inspired decorative elements */}
      <div className="absolute top-1/4 left-1/2 w-8 h-8 border border-orange-200 rounded-full animate-spin opacity-10" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-green-200 rounded-full animate-spin opacity-10" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
    </div>
  );
};

export default FloatingElements;
