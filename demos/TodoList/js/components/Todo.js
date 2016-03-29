import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li

    style={{
      textDecoration: this.props.completed ? 'line-through' : 'none',
        cursor: this.props.completed ? 'default' : 'pointer'
    }}>
    <input type="checkbox" checked={this.props.completed} onChange={this.props.onClick} />
    {this.props.text}
  </li>
  )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};