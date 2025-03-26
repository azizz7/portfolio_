import React from 'react';

const Divider = () => {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-800"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-orange rounded-full"></div>
      </div>
    </div>
  );
};

export default Divider; 