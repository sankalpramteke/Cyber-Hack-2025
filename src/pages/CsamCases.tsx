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

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>Event Impact Analysis</h1>
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      {/* First table: What happened and Impact */}
      <table className="simple-table">
        <thead>
          <tr>
            <th>What happened</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New software update was released</td>
            <td>Increased system efficiency</td>
          </tr>
          <tr>
            <td>System faced an unexpected crash</td>
            <td>Loss of productivity for users</td>
          </tr>
          <tr>
            <td>Team implemented new security protocol</td>
            <td>Enhanced data protection</td>
          </tr>
        </tbody>
      </table>

      {/* Second table: Detailed Event Information */}
      <table className="detailed-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Details</th>
            <th>Action Taken</th>
            <th>Outcome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="left-column">Software Update</td>
            <td>A new version of the software was released</td>
            <td>Team rolled out the update to all users</td>
            <td>Boosted performance and efficiency</td>
          </tr>
          <tr>
            <td className="left-column">System Crash</td>
            <td>The system crashed unexpectedly</td>
            <td>IT team investigated and restored the system</td>
            <td>Short-term data loss, minor delays</td>
          </tr>
          <tr>
            <td className="left-column">Security Enhancement</td>
            <td>A new security protocol was implemented</td>
            <td>Security systems were upgraded</td>
            <td>Improved security and fewer breaches</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CsamCases;
