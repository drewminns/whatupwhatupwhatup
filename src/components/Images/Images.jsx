import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { updateState } from '../../actions';

class Images extends Component {

  componentWillMount() {
    this.props.updateState();
  }

  render() {
    return (
      <div
        className={classNames('foo', 'bar')}
      >
        Hello
      </div>
    );
  }
}

Images.propTypes = {
  updateState: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateState: val => dispatch(updateState(val)),
});

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
