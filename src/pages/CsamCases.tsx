import React from 'react';
import DataTable from '../components/DataTable';
import { useTheme } from '../context/ThemeContext';
import { Tooltip } from 'recharts';

const CsamCases: React.FC = () => {
  const { theme, isDarkMode } = useTheme();

  return (
    <div className={`space-y-8 ${theme.bg} min-h-screen p-4`}>
      <h1 className={`text-2xl font-bold ${theme.text} mb-8`}>Notable CSAM Cases and their Impact in India</h1>
      
      {/* First Table: What Happened and Impact */}
      <div className={`${theme.cardBg} rounded-lg shadow p-6 mb-8`}>
        <h2 className={`text-xl font-semibold ${theme.text} mb-4`}>Summary of Events</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className={`border-b ${theme.border}`}>
                <th className={`py-3 px-4 text-left ${theme.text}`}>What happened</th>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Impact</th>
              </tr>
            </thead>
            <tbody className={theme.text}>
              <tr className={`border-b ${theme.border}`}>
                <td className="py-3 px-4">CBI raided multiple states to crack down on CSAM distribution based on Interpol intelligence.</td>
                <td className="py-3 px-4">Highlighted the scale of CSAM circulation and strengthened law enforcement monitoring.</td>
              </tr>
              <tr className={`border-b ${theme.border}`}>
                <td className="py-3 px-4">System faced an unexpected crash</td>
                <td className="py-3 px-4">Loss of productivity for users</td>
              </tr>
              <tr className={`border-b ${theme.border}`}>
                <td className="py-3 px-4">Team implemented new security protocol</td>
                <td className="py-3 px-4">Enhanced data protection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Second Table: Detailed Event Information */}
      <div className={`${theme.cardBg} rounded-lg shadow p-6`}>
        <h2 className={`text-xl font-semibold ${theme.text} mb-4`}>Detailed Event Information</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className={`border-b ${theme.border}`}>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Event</th>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Details</th>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Action Taken</th>
                <th className={`py-3 px-4 text-left ${theme.text}`}>Outcome</th>
              </tr>
            </thead>
            <tbody className={theme.text}>
              <tr className={`border-b ${theme.border}`}>
                <td className={`py-3 px-4 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                  Software Update
                </td>
                <td className="py-3 px-4">A new version of the software was released</td>
                <td className="py-3 px-4">Team rolled out the update to all users</td>
                <td className="py-3 px-4">Boosted performance and efficiency</td>
              </tr>
              <tr className={`border-b ${theme.border}`}>
                <td className={`py-3 px-4 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                  System Crash
                </td>
                <td className="py-3 px-4">The system crashed unexpectedly</td>
                <td className="py-3 px-4">IT team investigated and restored the system</td>
                <td className="py-3 px-4">Short-term data loss, minor delays</td>
              </tr>
              <tr className={`border-b ${theme.border}`}>
                <td className={`py-3 px-4 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                  Security Enhancement
                </td>
                <td className="py-3 px-4">A new security protocol was implemented</td>
                <td className="py-3 px-4">Security systems were upgraded</td>
                <td className="py-3 px-4">Improved security and fewer breaches</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <DataTable data={mockData} columns={columns} />
      </div>
    </div>
  );
};

export default CsamCases;
