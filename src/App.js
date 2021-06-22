import React from 'react';
import carsContext from './Context/CarsContext';
import trafficSignalContext from './Context/TrafficSignalContext';
import TrafficSignal from './TrafficSignal';
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
      signal: {
        color: 'red',
      },
    };
    this.handleCarsClick = this.handleCarsClick.bind(this);
    this.handleTrafficClick = this.handleTrafficClick.bind(this);
  }

  handleCarsClick(car, moveCar) {
    this.setState({ cars: { ...this.state.cars, [car]: moveCar } });
  }
  
  handleTrafficClick(color) {
    this.setState({ signal: { color: color } });
  }

  render() {
    const carsContexts = { ...this.state.cars, handleClick: this.handleCarsClick };
    const trafficContexts = { ...this.state.signal, handleClick: this.handleTrafficClick }
    return (
      <carsContext.Provider value={ carsContexts }>
        <trafficSignalContext.Provider value={ trafficContexts }>
          <div className="container">
            <Cars />
            <TrafficSignal />
          </div>
        </trafficSignalContext.Provider>
      </carsContext.Provider>
    );
  }
}

export default App;
