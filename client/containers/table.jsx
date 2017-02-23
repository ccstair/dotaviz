import React, { Component } from 'react';
import Reactable from 'reactable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHeroImages, getHeroAttributes } from '../actions/index';

const Table = Reactable.Table;

class DotaTable extends Component {

  componentDidMount() {
    this.props.getHeroImages();
  }

  render() {
    return (
        <div>{this.props.heroImages.map(hero => (
          <button className="heroCard" onClick={() => { this.props.getHeroAttributes(hero.id) }}>
              <img className="heroCardImage" src={hero.thumbnail} />
              <div className="heroCardName">{hero.name}</div>
          </button>
        ))
      }</div>
    );
  }
}

DotaTable.propTypes = {
  heroImages: React.PropTypes.arrayOf(React.PropTypes.object),
};

let mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ getHeroImages, getHeroAttributes }, dispatch);
};

let mapStateToProps = function(state) {
  return {
    heroImages: state.heroImages,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DotaTable);
