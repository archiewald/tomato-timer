import { connect } from "react-redux";
// import { setMode } from '../actions'
import { Clock } from '../components/Clock';

const mapStateToProps = (state) => {
  return {
    mode: state.mode
  }
}

export default connect(
  mapStateToProps
)(Clock);
