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
  Button,
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


const OneClientOutGoing = () => {

  
  const classes = useStyles();
  const params = new URLSearchParams([['id', '5f7d69f5fa598d59ac2e8893']]);
  const [clientSpendings, setClientSpendings] = useState([]);
  const fetchClientSpendings = () =>{
    axios.get("https://virtual-store-project-back-end.herokuapp.com/v1/spendings/search/one", { params }).then(res =>{
        console.log(res);
        console.log(res.data);
        console.log(res.data.outgoing);
        setClientSpendings(res.data.outgoing);
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
          Client Outgoing
        </Typography>
        <Button variant="contained" color="secondary" onClick={()=> this.OneClientOutGoing}>
                 Search For A Client Outgoing - Inform Client Id
           </Button>
           <form className={classes.root} noValidate autoComplete="off">
           <input/>
           </form>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Outgoing Id</TableCell>
            <TableCell align="right">Client Id</TableCell>
            <TableCell align="right">Client Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Today's Date Spendings</TableCell>
            <TableCell align="right">tags</TableCell>
            <TableCell align="right">clientSpendings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={clientSpendings.name}>
              <TableCell component="th" scope="row">
                {clientSpendings.id}
              </TableCell>
              <TableCell align="right">{clientSpendings.clientId}</TableCell>
              <TableCell align="right">{clientSpendings.clientName}</TableCell>
              <TableCell align="right">{clientSpendings.description}</TableCell>
              <TableCell align="right">{clientSpendings.todaysDateSpendings}</TableCell>
              <TableCell align="right">{clientSpendings.tags}</TableCell>
              <TableCell align="right">R$ {clientSpendings.clientSpendings}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Content>
    </React.Fragment>
  );
};

export default OneClientOutGoing;