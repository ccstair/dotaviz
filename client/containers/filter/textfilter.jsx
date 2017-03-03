import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterHeroTable } from '../../actions/index';

class TextFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onInputChange(term) {
    const upperCaseTerm = term.toUpperCase();
    this.setState({ term });
    this.props.filterHeroTable(upperCaseTerm);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          className="tableFilter"
        />
        <button
          onClick={
            () => {
              this.setState({ term: '' });
              this.onInputChange('');
            }}
          className="clearField"
        >
          Clear
        </button>
      </div>
    );
  }
}

TextFilter.propTypes = {
  filterHeroTable: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterHeroTable }, dispatch);
}

export default connect(null, mapDispatchToProps)(TextFilter);
