import { connect } from "react-redux";
import { startTimer, pauseTimer, resetTimer } from '../actions'
import { ControlPanel } from '../components/ControlPanel';
   
const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: ()  => {
      dispatch(startTimer());
    },
    pauseTimer: ()  => {
      dispatch(pauseTimer());
    },
    resetTimer: ()  => {
      dispatch(resetTimer());
    }
  }
}
 
export default connect(null,mapDispatchToProps)(ControlPanel);