import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CsamCases: React.FC = () => {
  const { theme, isDarkMode } = useTheme();

  return (
    <div className={`space-y-8 ${theme.bg} min-h-screen p-4`}>
      <h1 className={`text-2xl font-bold ${theme.text} mb-8`}>Notable CSAM Cases and their Impact in India</h1>
      
      {/* Combined Table: What Happened, Impact, and Detailed Event Information */}
      <div className={`${theme.cardBg} rounded-lg shadow p-6 mb-8`}>
        <h2 className={`text-xl font-semibold ${theme.text} mb-4`}>Summary and Detailed Event Information</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className={`border-b ${theme.border}`}>
                <th className={`py-3 px-4 text-left ${theme.text}`}>What Happened</th>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Impact</th>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Event</th>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Details</th>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Action Taken</th>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Outcome</th>
              </tr>
            </thead>
            <tbody>
              {/* First Row: What Happened and Impact */}
              <tr className={`border-b ${theme.border}`}>
                <td className={`py-3 px-4 ${theme.text}`} colSpan={2}>CBI raided multiple states to crack down on CSAM distribution based on Interpol intelligence.</td>
                <td className={`py-3 px-4 ${isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-900'}`}>
                  Software Update
                </td>
                <td className={`py-3 px-4 ${theme.text}`}>A new version of the software was released</td>
                <td className={`py-3 px-4 ${theme.text}`}>Team rolled out the update to all users</td>
                <td className={`py-3 px-4 ${theme.text}`}>Boosted performance and efficiency</td>
              </tr>

              <tr className={`border-b ${theme.border}`}>
                <td className={`py-3 px-4 ${theme.text}`} colSpan={2}>Highlighted the scale of CSAM circulation and strengthened law enforcement monitoring.</td>
                <td className={`py-3 px-4 ${isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-900'}`}>
                  System Crash
                </td>
                <td className={`py-3 px-4 ${theme.text}`}>The system crashed unexpectedly</td>
                <td className={`py-3 px-4 ${theme.text}`}>IT team investigated and restored the system</td>
                <td className={`py-3 px-4 ${theme.text}`}>Short-term data loss, minor delays</td>
              </tr>

              <tr className={`border-b ${theme.border}`}>
                <td className={`py-3 px-4 ${theme.text}`} colSpan={2}>The scale of CSAM issues led to more focused intervention efforts.</td>
                <td className={`py-3 px-4 ${isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-900'}`}>
                  Security Enhancement
                </td>
                <td className={`py-3 px-4 ${theme.text}`}>A new security protocol was implemented</td>
                <td className={`py-3 px-4 ${theme.text}`}>Security systems were upgraded</td>
                <td className={`py-3 px-4 ${theme.text}`}>Improved security and fewer breaches</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CsamCases;
