// src/Cars.jsx
// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
// import { moveCar } from './redux/actionCreators';
import CarsContext from './CarsContext/carsContext';

// function Cars({ redCar, blueCar, yellowCar, moveCar }) {
class Cars extends React.Component {
  render() {
    return (
      <CarsContext.Consumer>
        { 
          ({ cars, handleClick }) => (
            <div>
              <div>
                <img
                  className={cars.redCar ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={() => handleClick('redCar', !cars.redCar)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={cars.blueCar ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => handleClick('blueCar', !cars.blueCar)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={cars.yellowCar ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => handleClick('yellowCar', !cars.yellowCar)}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>
          )
        }
      </CarsContext.Consumer>
    );
  }
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.cars.red,
//   blueCar: state.cars.blue,
//   yellowCar: state.cars.yellow});

// const mapDispatchToProps = { moveCar };

// export default connect(mapStateToProps, mapDispatchToProps)(Cars);

export default Cars;
