import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import {emitter} from './util'
export default class TodoList extends Component {
    componentWillMount(){
        emitter.on('test',() =>{
          setTimeout(()=>this.refs.list.scrollTop = this.refs.list.scrollHeight,0);
        })
    }
    render() {
    return (
        <ul className="list" ref="list">
          {this.props.todos.map((todo, index) =>
            <Todo {...todo}
              key={index}
              onClick={() => this.props.onTodoClick(index)} />
          )}
        </ul>

  );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};