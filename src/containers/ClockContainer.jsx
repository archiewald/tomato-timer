import { connect } from "react-redux";
import { pauseTimer, resetTimer } from '../actions'
import { Clock } from '../components/Clock';

const mapStateToProps = (state) => {
  return {
    baseTime: state.control.baseTime,
    startedAt: state.control.startedAt,
    stoppedAt: state.control.stoppedAt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pauseTimer: ()  => {
      dispatch(pauseTimer());
    },
    resetTimer: ()  => {
      dispatch(resetTimer());
    }
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(Clock);
