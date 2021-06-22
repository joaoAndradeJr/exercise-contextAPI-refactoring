import React from 'react';
import CarsContext from './CarsContext/carsContext';
import './App.css';
import Cars from './Cars';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(car, moveCar) {
    this.setState({ cars: { ...this.state.cars, [car]: moveCar } });
  }

  render() {
    return (
      <CarsContext.Provider value={ { ...this.state, handleClick: this.handleClick } }>
        <Cars />
      </CarsContext.Provider>
    );
  }
}

export default App;
