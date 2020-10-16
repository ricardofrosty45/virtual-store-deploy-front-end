import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  CssBaseline,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { Content } from '../components/Content';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  typography: {
    marginBottom: 20,
  },
  button: {
    textTransform: 'none',
    marginLeft: 5,
  },
});

const Home = () => {
  const classes = useStyles();

  const [clientSpendings, setClientSpendings] = useState([]);

  const fetchClientSpendings = () =>{
    axios.get("https://virtual-store-project-back-end.herokuapp.com/v1/spendings/all").then(res =>{
        console.log(res);
        setClientSpendings(res.data.allClientSpendings);
    });
  };
  useEffect(() => {
    fetchClientSpendings();
  }, []);


  return (
    <React.Fragment>
      <CssBaseline />
      <Content title="Home">
        <Typography variant="h5" className={classes.typography}>
          All Clients Outgoings
        </Typography>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Outgoing Id</TableCell>
            <TableCell align="right">Client Id</TableCell>
            <TableCell align="right">Client Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Today's Date Spendings</TableCell>
            <TableCell align="right">Tags</TableCell>
            <TableCell align="right">Client Spendings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientSpendings.map((clientSpendingsRow) => (
            <TableRow key={clientSpendingsRow.name}>
              <TableCell component="th" scope="row">
                {clientSpendingsRow.id}
              </TableCell>
              <TableCell align="right">{clientSpendingsRow.clientId}</TableCell>
              <TableCell align="right">{clientSpendingsRow.clientName}</TableCell>
              <TableCell align="right">{clientSpendingsRow.description}</TableCell>
              <TableCell align="right">{clientSpendingsRow.todaysDateSpendings}</TableCell>
              <TableCell align="right">{clientSpendingsRow.tags}</TableCell>
              <TableCell align="right">R$ {clientSpendingsRow.clientSpendings},00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Content>
    </React.Fragment>
  );
};

export default Home;