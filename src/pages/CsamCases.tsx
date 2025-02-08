import React from 'react';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const CsamCases: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  return (
    <div className={`space-y-8 ${theme.bg} min-h-screen p-4`}>
      <h1 className={`text-2xl font-bold ${theme.text} mb-8`}>Notable CSAM Cases and their Impact in India</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
          </p>         

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>Event Impact Analysis</h1>
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      {/* First Table: What Happened and Impact */}
      <table className="min-w-full mt-6 table-auto">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">What happened</th>
            <th className="py-2 px-4 text-left">Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">CBI raided multiple states to crack down on CSAM distribution based on Interpol intelligence.</td>
            <td className="py-2 px-4">Highlighted the scale of CSAM circulation and strengthened law enforcement monitoring.</td>
          </tr>
          <tr>
            <td className="py-2 px-4">System faced an unexpected crash</td>
            <td className="py-2 px-4">Loss of productivity for users</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Team implemented new security protocol</td>
            <td className="py-2 px-4">Enhanced data protection</td>
          </tr>
        </tbody>
      </table>

      {/* Second Table: Detailed Event Information */}
      <table className="min-w-full mt-6 table-auto border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">Event</th>
            <th className="py-2 px-4 text-left">Details</th>
            <th className="py-2 px-4 text-left">Action Taken</th>
            <th className="py-2 px-4 text-left">Outcome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`py-2 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-900'} text-white`}>
              Software Update
            </td>
            <td className="py-2 px-4">A new version of the software was released</td>
            <td className="py-2 px-4">Team rolled out the update to all users</td>
            <td className="py-2 px-4">Boosted performance and efficiency</td>
          </tr>
          <tr>
            <td className={`py-2 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-900'} text-white`}>
              System Crash
            </td>
            <td className="py-2 px-4">The system crashed unexpectedly</td>
            <td className="py-2 px-4">IT team investigated and restored the system</td>
            <td className="py-2 px-4">Short-term data loss, minor delays</td>
          </tr>
          <tr>
            <td className={`py-2 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-900'} text-white`}>
              Security Enhancement
            </td>
            <td className="py-2 px-4">A new security protocol was implemented</td>
            <td className="py-2 px-4">Security systems were upgraded</td>
            <td className="py-2 px-4">Improved security and fewer breaches</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CsamCases;
