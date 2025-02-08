import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from '../context/ThemeContext';

interface Detection {
  class: string;
  score: number;
  box: number[];
}

interface CSAMData {
  imageName: string;
  detections: Detection[];
}

const CSAMCasesVisual = () => {
  const { theme, isDarkMode } = useTheme();

  const csamData: CSAMData[] = [
    {
      imageName: 'image11.jpg',
      detections: [
        { class: 'FACE_FEMALE', score: 0.8273, box: [372, 93, 93, 86] }
      ]
    },
    {
      imageName: 'image12.jpg',
      detections: [
        { class: 'FACE_FEMALE', score: 0.7956, box: [262, 77, 98, 88] },
        { class: 'FEMALE_BREAST_COVERED', score: 0.2664, box: [234, 266, 95, 71] }
      ]
    },
    {
      imageName: 'image13.jpg',
      detections: [
        { class: 'FACE_FEMALE', score: 0.7945, box: [215, 150, 138, 129] }
      ]
    },
    {
      imageName: 'image14.jpg',
      detections: [
        { class: 'FACE_FEMALE', score: 0.8313, box: [177, 73, 127, 119] }
      ]
    },
    {
      imageName: 'image15.jpg',
      detections: [
        { class: 'FACE_FEMALE', score: 0.8211, box: [302, 108, 100, 91] }
      ]
    }
  ];

  const confidenceData = csamData.map(item => ({
    name: item.imageName,
    confidence: item.detections.reduce((max, det) => Math.max(max, det.score), 0) * 100
  }));

  const classDistribution = csamData.reduce((acc, item) => {
    item.detections.forEach(det => {
      acc[det.class] = (acc[det.class] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const classData = Object.entries(classDistribution).map(([className, count]) => ({
    name: className.replace('_', ' '),
    count
  }));

  return (
    <div className={`${theme.cardBg} p-6 rounded-lg shadow-lg`}>
      <h2 className={`text-lg font-semibold mb-6 ${theme.text}`}>CSAM Detection Analysis</h2>
      
      {/* Confidence Scores Chart */}
      <div className="mb-8">
        <h3 className={`text-md font-semibold mb-4 ${theme.text}`}>Detection Confidence by Image</h3>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={confidenceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
              <XAxis
                dataKey="name"
                stroke={isDarkMode ? '#fff' : '#374151'}
                tick={{ fill: isDarkMode ? '#fff' : '#374151' }}
              />
              <YAxis
                stroke={isDarkMode ? '#fff' : '#374151'}
                tick={{ fill: isDarkMode ? '#fff' : '#374151' }}
                label={{ value: 'Confidence %', angle: -90, position: 'insideLeft', fill: isDarkMode ? '#fff' : '#374151' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? '#1F2937' : '#fff',
                  borderColor: isDarkMode ? '#374151' : '#E5E7EB',
                  color: isDarkMode ? '#fff' : '#374151',
                  borderRadius: '8px',
                  padding: '12px'
                }}
              />
              <Bar
                dataKey="confidence"
                fill="#10B981"
                name="Confidence Score"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detection Class Distribution */}
      <div>
        <h3 className={`text-md font-semibold mb-4 ${theme.text}`}>Detection Class Distribution</h3>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={classData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
              <XAxis
                dataKey="name"
                stroke={isDarkMode ? '#fff' : '#374151'}
                tick={{ fill: isDarkMode ? '#fff' : '#374151' }}
              />
              <YAxis
                stroke={isDarkMode ? '#fff' : '#374151'}
                tick={{ fill: isDarkMode ? '#fff' : '#374151' }}
                label={{ value: 'Count', angle: -90, position: 'insideLeft', fill: isDarkMode ? '#fff' : '#374151' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? '#1F2937' : '#fff',
                  borderColor: isDarkMode ? '#374151' : '#E5E7EB',
                  color: isDarkMode ? '#fff' : '#374151',
                  borderRadius: '8px',
                  padding: '12px'
                }}
              />
              <Bar
                dataKey="count"
                fill="#8B5CF6"
                name="Number of Detections"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CSAMCasesVisual;
