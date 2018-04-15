import { connect } from "react-redux";
import { startTimer, pauseTimer, resetTimer } from '../actions'
import { ControlPanel } from '../components/ControlPanel';

const mapStateToProps = (state) => {
  return {
    baseTime: state.control.baseTime,
    startedAt: state.control.startedAt,
    stoppedAt: state.control.stoppedAt,
  }
}
   
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
 
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);