import React,{useState} from 'react'
import './style.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';

export default function Withdrawl(props) {
  const [moneyDrawed,setMoneyDrawed] = useState()
  const drawMoney = () => {
    props.setBalance(props.balance-parseInt(moneyDrawed))
    props.setStatement([...props.statement,{type:'withdrawed',amount:moneyDrawed}])
    setMoneyDrawed('')
  }
  const drawMoneyInput = (e) => {
    setMoneyDrawed(e.target.value)
  }
  return(
    <div>
      <Typography variant="h6" >
        Withdrawl Form
      </Typography>
      <TextField id="standard-basic" label="₹ Enter Amount" variant="standard" value={moneyDrawed} onChange={drawMoneyInput} />
      <br />
      <br />
      <Button variant="contained" onClick={drawMoney}>Draw Money</Button>
    </div>
  )
}