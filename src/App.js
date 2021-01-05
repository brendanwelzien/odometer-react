import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mainMessage: "hola"
    }
  }
  
  render() {
      return (
        <div className="App">
          <Header text="Miles Driven"/>
          <main>
            <Odometer />
          </main>
          <Footer trademark="Welzien" />
        </div>
      )};
  }

function Header(props) {
  return (
    <nav>
      <h2> How Many {props.text}?</h2>
    </nav>
  )
}


class Odometer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      miles: '0'.padStart(4, 0)
    }
  }

  handleMiles(){
    let miles = this.state.miles -1;
    if (miles < 0){
      miles = 0;
    }
    this.setState({
      miles
    })
  }

  adjustMiles(adjust){
    let miles = this.state.miles + adjust
    if (miles>=10000){
      miles = miles % 10000;
    }

    this.setState({
      miles
    })
  }

  render(){
    return (
      <>
      <button onClick= {() => this.adjustMiles(1)}>1</button>
      <button onClick= {() => this.adjustMiles(10)}>10</button>
      <button onClick= {() => this.adjustMiles(100)}>100</button>
      <button onClick= {() => this.adjustMiles(1000)}>1000</button>
      <h3> Miles listed on Odometer: {String(this.state.miles).padStart(4, '0')}</h3>
      </>
    )
  }
}
function Footer() {
  return (
    <footer>
      <h2> this is a footer</h2>
    </footer>
  )
}

export default App;
