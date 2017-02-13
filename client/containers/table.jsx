import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChartData, setSelectedUser, setSelectedClass } from '../actions/index';
let Table = Reactable.Table;

class DotaTable extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Sups witchu</h1>
      </div>
    );
  }
}

export default DotaTable;
