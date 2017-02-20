import React, { Component } from 'react';
import Reactable from 'reactable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHeroData } from '../actions/index';

let Table = Reactable.Table;

class DotaTable extends Component {

  componentDidMount() {
    getHeroData();
  }

  render() {
    return (
      <div>
        <h1>Sups witchu</h1>
      </div>
    );
  }
}

DotaTable.propTypes = {
  heroData: React.PropTypes.arrayOf(React.PropTypes.object),
};

let mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ getHeroData }, dispatch);
};

let mapStateToProps = function(state) {
  return {
    heroData: state.heroData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DotaTable);
