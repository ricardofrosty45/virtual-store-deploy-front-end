import React, { useState } from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import { Content } from '../components/Content';
import { TextInput } from '../components/TextInput';
import axios from "axios";

const useStyles = makeStyles(() => ({
  typography: {
    marginTop: 20,
  },
  item: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
}));

const BuyProduct = () => {

    const [result, setResult] = useState([]);
   
   const fetchClientSpendings = () =>{
    axios.post("https://virtual-store-project-back-end.herokuapp.com/v1/product/buy",{ idProduct: idProduct, clientId: clientId}).then(res =>{
         console.log(res);
         console.log(res.data);
         console.log(res.data.outgoing);
         setResult(res.data.outgoing);
     }).catch((error) => { console.log(error) })
 
    
   };


  const [idProduct, setIdProduct] = useState('');
  const [clientId, setClientId] = useState('');
  const classes = useStyles();

  const onChangeHandler = (event, hook) => {
    hook(event.target.value);
  };
  const inputFields = [
    {
      title: 'Id Product',
      value: idProduct,
     
      onChange: (event) => onChangeHandler(event, setIdProduct),
    },
    {
      title: 'Client Id',
      value: clientId,
      onChange: (event) => onChangeHandler(event, setClientId),
    },
  ];

  return (
    <React.Fragment>
      <Content>
        <div className={classes.item}>
          <Typography variant="h5">Buy Product </Typography>
          {inputFields.map((input, index) => (
            <TextInput
              key={`${index}_${input.title}`}
              title={input.title}
              value={input.value}
              onChange={input.onChange}
              id={input.value.toString()}
            />
          ))}
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
            size="small"
            onClick={fetchClientSpendings}
          >
            Buy New Product
          </Button>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default BuyProduct;
