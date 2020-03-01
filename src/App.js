import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './components/Menu'
import MainTable from './components/MainTable'
import PizzaAdder from './components/PizzaAdder'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPizzaAdderShown: false,
      isPizzaPerDollar: false,
      deals: [],
    }

    this.togglePizzaPerDollar = this.togglePizzaPerDollar.bind(this)
    this.showPizzaAdder = this.showPizzaAdder.bind(this)
    this.hidePizzaAdder = this.hidePizzaAdder.bind(this)
    this.addPizza = this.addPizza.bind(this)
  }

  showPizzaAdder() {
    this.setState({
      ...this.state,
      isPizzaAdderShown: true,
    })
  }

  hidePizzaAdder() {
    this.setState({
      ...this.state,
      isPizzaAdderShown: false,
    })
  }

  addPizza(deal) {
    console.log(deal)
    const deals = this.state.deals
    deals.push(deal)
    this.setState({
      ...this.state,
      deals
    })
  }

  togglePizzaPerDollar() {
    this.setState({
      ...this.state,
      isPizzaPerDollar: !this.state.isPizzaPerDollar,
    })
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Menu 
          togglePizzaPerDollar={this.togglePizzaPerDollar} 
          isPizzaPerDollar={this.state.isPizzaPerDollar}
          showPizzaAdder={this.showPizzaAdder}
        />
        <MainTable 
          {...this.state}
        />
        <PizzaAdder 
          addPizza={this.addPizza} 
          isPizzaAdderShown={this.state.isPizzaAdderShown}
          hidePizzaAdder={this.hidePizzaAdder} 
        />
      </div>
    );
  }
}

export default App;
