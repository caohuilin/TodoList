import React, { Component, PropTypes } from 'react';
import {emitter} from './util';

export default class AddTodo extends Component {
  render() {
    return (
        <div className="add" onKeyDown={(e) => {
            if(e.keyCode == 13){
                this.handleClick(e)
                emitter.emit('test');
            }}}>
          <input type='text' ref='input' />
          <button onClick={(e) => {this.handleClick(e); emitter.emit('test');}}>
            Add
          </button>
        </div>

  )
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
      if(text != "") {
          this.props.onAddClick(text);
          node.value = '';
      }
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

