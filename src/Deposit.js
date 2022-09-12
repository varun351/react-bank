import React,{useState} from 'react';
import './style.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';

export default function Deposit(props) {
  const [moneyAdded,setMoneyAdded] = useState()

  const addMoney = () => {
    props.setBalance(props.balance+parseInt(moneyAdded));
    props.setStatement([...props.statement,{type:'deposited', amount:moneyAdded}])
    setMoneyAdded('')   
  }

  const addMoneyInput = (e) => {
    setMoneyAdded(e.target.value)
  }
  return (
    <div>
      <Typography variant="h6" >
        Deposit Form
      </Typography>
      <TextField id="standard-basic" label="₹ Enter Amount" variant="standard" value={moneyAdded} onChange={addMoneyInput} />
      <br />
      <br />
      <Button variant="contained" onClick={addMoney}>Add Money</Button>
    </div>
  )
}