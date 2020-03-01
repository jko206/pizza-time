import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import './MainTable.scss'

const MainTable =  props => (
  <TableContainer component={Paper} className="main-table">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Pizzeria</TableCell>
          <TableCell>Size</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>
            {props.isPizzaPerDollar ? "🍕/💲": "💲/🍕"}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.deals.length && props.deals.map(deal => (
          <TableRow key={deal.uuid}>
            <TableCell>
              {deal.pizzeria}
            </TableCell>
            <TableCell>
              {deal.size}
            </TableCell>
            <TableCell>
              {deal.cost}
            </TableCell>
            <TableCell>
              {props.isPizzaPerDollar ? deal.pizzaPerCost : deal.costPerPizza } 
            </TableCell>
          </TableRow>
          )) ||
          <TableRow>
            <TableCell colSpan={4}>
              <Typography className="center">
                You haven't added any deals!
              </Typography>
            </TableCell>
          </TableRow>
        }
      </TableBody>
    </Table>
  </TableContainer>
)

export default MainTable