import React from 'react';
import Button from '@material-ui/core/Button';
import './Menu.scss'

const Menu = props => (
	<div className="controls">
		<div className="button-wrapper">
			<Button variant="contained" color="primary" onClick={props.showPizzaAdder}>
				+ Pizza
			</Button>
		</div>
		<div className="button-wrapper">
			<Button variant="contained" color="secondary">
				Save
			</Button>
		</div>
		<div className="button-wrapper">
			<Button variant="contained" color="secondary" onClick={props.togglePizzaPerDollar}>
				{props.isPizzaPerDollar ? "💲/🍕" : "🍕/💲"}
			</Button>
		</div>
	</div>
)

export default Menu;