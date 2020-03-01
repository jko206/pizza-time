import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const emptyState = {
  pizzeria: '',
  size: '',
  cost: '',
}

const getUuid = () => Math.floor(Math.random() * 100000000)

class PizzaAdder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...emptyState
    }

    this.updateDeal = this.updateDeal.bind(this)
    this.addDeal = this.addDeal.bind(this)
    this.closePizzaAdder = this.closePizzaAdder.bind(this)
  }

  updateDeal(prop, value) {
    this.setState({
      ...this.state,
      [prop]: value,
    })
  }

  addDeal() {
    const { size, cost } = this.state
    const costPerPizza = Math.floor((cost / size) * 100) / 100
    const pizzaPerCost = Math.floor((size / cost) * 100) / 100

    this.props.addPizza({
      ...this.state,
      uuid: getUuid(),
      costPerPizza,
      pizzaPerCost,
    })

    this.closePizzaAdder()
  }

  closePizzaAdder() {
    this.setState({
      ...emptyState,
    })

    this.props.hidePizzaAdder()
  }

  render() {
    return (
      <Dialog open={this.props.isPizzaAdderShown} onClose={this.props.hidePizzaAdder}>
        <DialogTitle>
          Add a Pizza Deal
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a pizza deal to compare!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="pizzeria"
            label="Pizzeria"
            type="text"
            value={this.state.pizzeria}
            onChange={event => this.updateDeal('pizzeria', event.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            id="size"
            label="Size"
            type="text"
            fullWidth
            value={this.state.size}
            onChange={event => this.updateDeal('size', event.target.value)}
          />
          <TextField
            margin="dense"
            id="cost"
            label="Cost"
            type="text"
            fullWidth
            value={this.state.cost}
            onChange={event => this.updateDeal('cost', event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.addDeal} color="primary">+ Pizza</Button>
          <Button onClick={this.closePizzaAdder} color="secondary">Close</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default PizzaAdder