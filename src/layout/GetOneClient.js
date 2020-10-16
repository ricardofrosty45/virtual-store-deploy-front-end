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
   const [searchValue, setSearchValue] = useState('');
   const [result, setResult] = useState([]);
  const classes = useStyles();
  const params = new URLSearchParams([['id', searchValue]]);
  
  
  const fetchClientSpendings = () =>{
   axios.get(`https://virtual-store-project-back-end.herokuapp.com/v1/user?id=${searchValue}`).then(res =>{
        console.log(res);
        console.log(res.data);
        console.log(res.data.outgoing);
        setResult(res.data);
    }).catch((error) => { console.log(error) })

    console.log(searchValue,"123");
  };


  


  const onChangeHandler  = (e) =>{
    setSearchValue(e.target.value);
    console.log(searchValue,"555");
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Content title="Home">
        <Typography variant="h5" className={classes.typography}>
          Search For A Client
        </Typography>
        <Button className='button' variant="contained" color="secondary" onClick={fetchClientSpendings}>
                 Search For A Client - Inform His Id
           </Button>
           <form className={classes.root} noValidate autoComplete="off">
           <input value={searchValue} onChange={onChangeHandler}/>
           </form>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client Id</TableCell>
            <TableCell align="right">Client's Name</TableCell>
            <TableCell align="right">Client Name</TableCell>
            <TableCell align="right">Document Number (CPF)</TableCell>
            <TableCell align="right">Client Birth Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {result.id}
              </TableCell>
              <TableCell align="right">{result.name}</TableCell>
              <TableCell align="right">{result.email}</TableCell>
              <TableCell align="right">{result.documentNumber}</TableCell>
              <TableCell align="right">{result.birthDate}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Content>
    </React.Fragment>
  );
};

export default OneClientOutGoing;