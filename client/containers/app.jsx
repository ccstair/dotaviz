import React, { Component } from 'react';
import TextFilter from './filter/textfilter';
import DotaTable from './table';
import Graph from './graph';

const App = () => (
  <div className="mainPage">
    <h1>DotaViz</h1>
    <Graph />
    <TextFilter />
    <DotaTable />
  </div>
);

export default App;
