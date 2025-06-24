import React from 'react';

export const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow">
    {children}
  </button>
);
