import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from '../src/reducer/allreducers';
const store=createStore(todoApp);
let nextid=0;

const FilterLink=({
  filter,
  children
})=>{
  return (
    <a href="/" onClick={e=>{
      e.preventDefault();
      store.dispatch({type:'SET_VISIBILITY_FILTER',
    filter})
    }}>
    {children}
    </a>
  );
};
const getVisibileTodos=(todos,filter)=>{
  switch(filter){
    case 'SHOW_ALL':
      return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t=>t.completed);
        case 'SHOW_ACTIVE':
        return todos.filter(t=>!t.completed);
        default:
          return todos;

  }
}
class Todo extends Component{
  render(){
    const visibleTodos=getVisibileTodos(this.props.todos,
      this.props.visibilityFilter)
    return (
      <div>
      <input ref={search=>this.input=search}></input>
      <button onClick={()=>store.dispatch({type:'ADDTODO',text:this.input.value,id:nextid++})}>add</button>
      <ul>
      {visibleTodos.map(todo=>
        <li key={todo.id} onClick={()=>{store.dispatch({type:'TOGGLETODO',id:todo.id})} } style={{textDecoration:todo.completed?'line-through':'none'}}>{todo.text}</li>
        )}
      </ul>
      <p>
      show:
      {' '}
      <FilterLink filter='SHOW_ALL'>
      All
      </FilterLink>
      {' '}
      <FilterLink filter='SHOW_ACTIVE'>
      Active
      </FilterLink>
      {' '}

      <FilterLink filter='SHOW_COMPLETED'>
      Completed
      </FilterLink>
      </p>
      </div>
    );
  }
}
const render=()=>{
ReactDOM.render(
  <Provider store={store}><Todo {...store.getState()} /></Provider> , document.getElementById('root')
);
};
store.subscribe(render);
render();


