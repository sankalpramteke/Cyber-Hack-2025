import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CsamCases: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Notable CSAM Cases and their Impact in India</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
          </p>
          {/* Add your CSAM cases content here */}
        </div>
      </div>
    </div>
  );
};

export default CsamCases;
