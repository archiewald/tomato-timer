import { connect } from "react-redux";
// import { setMode } from '../actions'
import { Clock } from '../components/Clock';

const mapStateToProps = (state) => {
  return {
    baseTime: state.control.baseTime,
    startedAt: state.control.startedAt,
    stoppedAt: state.control.stoppedAt
  }
}

export default connect(
  mapStateToProps,null
)(Clock);
