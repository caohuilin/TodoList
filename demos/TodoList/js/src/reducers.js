import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, TOGGLE_TODO} from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type){
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
      {
        text: action.text,
        completed: false
      }
    ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
    ...state.slice(action.index + 1)
    ];
    case TOGGLE_TODO:
      var last = [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: !state[action.index].completed,
        }),
        ...state.slice(action.index + 1)
      ];
      let com = [],uncom = [];
      for( let i=0 ;i<last.length;i++){
        if(last[i].completed == true){
          com.push(last[i]);
        }else{
          uncom.push(last[i]);
        }
      }
      return  uncom.concat(com);
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp
