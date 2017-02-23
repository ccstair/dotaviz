import React, { Component } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

// In order to get the data into a usable form I may want to just
// iterate through the keys,
// add them to an array of objects
// Map the Radar component for each hero in the lineup
// For each new hero I should update the array

const data = [
   { hero: 'Abbadon', A: 120, B: 110, fullMark: 150 },
];

const Graph = () => (
  <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    <PolarGrid />
    <Legend />
    <PolarAngleAxis dataKey="hero" />
    <PolarRadiusAxis angle={30} domain={[0, 150]} />
  </RadarChart>
    );

export default Graph;
