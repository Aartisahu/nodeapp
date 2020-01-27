import { connect } from 'react-redux';
import Register from '../Register';
import {reset} from '../actions'


function mapStateToProps(state){
  return {
    register:state
  }
}
function mapDispatchToProps(dispatch){
  return {
    reset: () => dispatch(reset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);