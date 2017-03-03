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
    const heroMap = this.props.heroImages.filter((heroItem) => {
      const heroName = heroItem.name.toUpperCase();
      const filter = this.props.filter;
      return this.props.filter ? heroName.includes(filter) : true;
    });
    return (
      <div className="heroTable">{heroMap.map(hero => (
        <button className="heroCard" onClick={() => { this.props.getHeroAttributes(hero.id); }}>
          <img role="presentation" className="heroCardImage" src={hero.thumbnail} />
          <div className="heroCardName">{hero.name}</div>
        </button>
    ))
    }</div>
    );
  }
}

DotaTable.propTypes = {
  heroImages: React.PropTypes.arrayOf(React.PropTypes.object),
  getHeroImages: React.PropTypes.func,
  getHeroAttributes: React.PropTypes.func,
  filter: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getHeroImages, getHeroAttributes }, dispatch);
}

function mapStateToProps(state) {
  return {
    heroImages: state.heroImages,
    filter: state.filter,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DotaTable);

// <div className="heroTable">{this.props.heroImages.filter((heroItem) => {
//   return this.props.filter ? heroItem.name.toUpperCase().includes(this.props.filter.toUpperCase()) : true;
// }).map(hero => (
//   <button className="heroCard" onClick={() => { this.props.getHeroAttributes(hero.id); }}>
//     <img role="presentation" className="heroCardImage" src={hero.thumbnail} />
//     <div className="heroCardName">{hero.name}</div>
//   </button>
// ))
// }</div>
