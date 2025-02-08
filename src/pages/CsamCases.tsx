import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CsamCases: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`space-y-8 ${theme.bg} min-h-screen p-4`}>
      <h1 className={`text-2xl font-bold ${theme.text} mb-8`}>Notable CSAM Cases in India & Their Impact</h1>
      
      <div className={`${theme.cardBg} rounded-lg shadow p-6 mb-8`}>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr className={`border ${theme.border} bg-black-200`}>
                <th className={`py-3 px-4 text-left ${theme.text} border`}>Case</th>
                <th className={`py-3 px-4 text-left ${theme.text} border`}>What Happened?</th>
                <th className={`py-3 px-4 text-left ${theme.text} border`}>Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-300">
                <td className="py-3 px-4 ${theme.text} border">Operation Megh Chakra (2023)</td>
                <td className="py-3 px-4 ${theme.text} border">CBI raided multiple states to crack down on CSAM distribution based on Interpol intelligence.</td>
                <td className="py-3 px-4 ${theme.text} border">Highlighted the scale of CSAM circulation and strengthened law enforcement monitoring.</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="py-3 px-4 ${theme.text} border">Supreme Court Ruling on Child Pornography (2024)</td>
                <td className="py-3 px-4 ${theme.text} border">Viewing or storing CSAM was declared a criminal offense.</td>
                <td className="py-3 px-4 ${theme.text} border">Strengthened legal action against offenders and put social media platforms under pressure to monitor content.</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="py-3 px-4 ${theme.text} border">NHRC Advisory on CSAM Rise (2023)</td>
                <td className="py-3 px-4 ${theme.text} border">NHRC reported a <strong>250-300% increase</strong> in CSAM circulation on social media.</td>
                <td className="py-3 px-4 ${theme.text} border">Increased government scrutiny on digital platforms and enforcement agencies.</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="py-3 px-4 ${theme.text} border">Specialized Police Cyber Units (2022)</td>
                <td className="py-3 px-4 ${theme.text} border">New police units trained to tackle online child exploitation were set up in collaboration with ICMEC & CyberPeace Foundation.</td>
                <td className="py-3 px-4 ${theme.text} border">Improved investigation capabilities and faster response to CSAM cases.</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="py-3 px-4 ${theme.text} border">Pandemic-Driven CSAM Spike (2020-21)</td>
                <td className="py-3 px-4 ${theme.text} border"><strong>400% rise</strong> in online crimes against children due to increased internet usage during COVID-19.</td>
                <td className="py-3 px-4 ${theme.text} border">Exposed the need for stricter online safety measures and digital literacy programs.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CsamCases;
