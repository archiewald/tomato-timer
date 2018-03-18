import { connect } from "react-redux";
import { setMode } from '../actions'
import { ModePanel } from '../components/ModePanel';

const mapStateToProps = (state) => {
  return {
    mode: state.mode
  }
}
   
const mapDispatchToProps = (dispatch) => {
  return {
    setMode: mode => {
      dispatch(setMode(mode))
    }
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModePanel);
