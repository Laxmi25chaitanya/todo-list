
export const todos=(state=[],action)=>{
switch(action.type){
    case 'ADDTODO' :
        return [
            ...state,
            {
                id:action.id,
                text:action.text,
                completed:false
            }
        ]
        case 'TOGGLETODO' :
            return state.map(todo=>{
                if(todo.id!==action.id){
                    return todo;
                }
                return{
                    ...todo,
                    completed:!todo.completed
                };
            });
        default:
            return state;
}
}


 const visibilityFilter=(
    state='SHOW_ALL',
    action
)=>{
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
            default:
                return state;
    }
};

export default visibilityFilter;

