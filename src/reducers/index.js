import actions from '../actions';
const initialState={
  name:"",
  age : Number,
  gender:"",
  email :""
}
function reset (state=initialState ,action){
  switch (action.type) {
    case actions.RESET:
    return state

    default:
    return state
  }
}
 
   export default reset;
