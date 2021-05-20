export const addtodo=(search)=>{
    return {
        type:'ADDTODO',
        id:0,
        text:search
    }
}
export const toggletodo=(id)=>{
    return {
        type:'TOGGLETODO',
        id
    }
}
export const setVisibilityFilter=(filter)=>{
    return {
        type:'SET_VISIBILITY_FILTER',
        filter
    }
}