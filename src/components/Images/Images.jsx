import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateState } from '../../actions';

class Images extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.updateState();
  }

  render() {
    return (
      <div
        className={ classNames('foo', 'bar') }
      >
        <button onClick={ this.handleClick }>Click</button>
        {
          this.props.appVal
          ? <div>True</div>
          : <div>False</div>
        }
      </div>
    );
  }
}

Images.propTypes = {
  updateState: React.PropTypes.func.isRequired,
  appVal: React.PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateState: () => dispatch(updateState()),
});

const mapStateToProps = state => ({
  appVal: state.main.valueState,
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
