import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

// In order to get the data into a usable form I may want to just
// iterate through the keys,
// add them to an array of objects
// Map the Radar component for each hero in the lineup
// For each new hero I should update the array

class Graph extends Component {

  render() {
    let data = [
      { attribute: 'aoe', previousValues: 0 },
      { attribute: 'buff', previousValues: 0 },
      { attribute: 'health', previousValues: 0 },
      { attribute: 'hexing', previousValues: 0 },
      { attribute: 'lockdown', previousValues: 0 },
      { attribute: 'mobility', previousValues: 0 },
      { attribute: 'range', previousValues: 0 },
      { attribute: 'singleTarget', previousValues: 0 },
    ];

    for (let i = 0; i < this.props.heroLineup.length; i += 1) {
      for (let j = 0; j < data.length; j += 1) {
        data[j].fullMark = i * 5;
        data[j][this.props.heroLineup[i].name] = data[j].previousValues + this.props.heroLineup[i][data[j].attribute];
        data[j].previousValues += this.props.heroLineup[i][data[j].attribute];
        console.log(this.props.heroLineup[i][data[j].attribute]);
        console.log(data[j].previousValues);
      }
    }

    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        {this.props.heroLineup.map(hero => (
          <Radar
            name={hero.name}
            dataKey={hero.name}
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.2}
          />
        ))}
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="attribute" />
        <PolarRadiusAxis angle={30} domain={[0, this.props.heroLineup.length * 5]} />
      </RadarChart>
    );
  }
}

Graph.propTypes = {
  heroLineup: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return {
    heroLineup: state.heroLineup,
  };
}

export default connect(mapStateToProps)(Graph);
