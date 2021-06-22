// src/TrafficSignal.jsx
import React from 'react';
import trafficSignalContext from './Context/TrafficSignalContext';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

// const TrafficSignal = ({ signalColor, changeSignal }) => {
class TrafficSignal extends React.Component {
  render() {
    return (
      <trafficSignalContext.Consumer>
        {
          ({ color, handleClick }) => (
            <div>
              <div className="button-container">
                <button onClick={() => handleClick('red')} type="button">
                  Red
                </button>
                <button onClick={() => handleClick('yellow')} type="button">
                  Yellow
                </button>
                <button onClick={() => handleClick('green')} type="button">
                  Green
                </button>
              </div>
              <img className="signal" src={renderSignal(color)} alt="" />
            </div>
          )
        }
      </trafficSignalContext.Consumer>
    );
  }
}

export default TrafficSignal;

// const mapStateToProps = (state) => ({
//   signalColor: state.trafficReducer.signal.color
// });

// const mapDispatchToProps = { changeSignal };

// TrafficSignal.propTypes = {
//   changeSignal: PropTypes.func.isRequired,
//   signalColor: PropTypes.string.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
