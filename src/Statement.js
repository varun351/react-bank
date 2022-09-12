import React,{useState} from 'react'
import './style.css'
import Typography from '@mui/material/Typography';

export default function Statement(props) {
  
  
  return(
    <div>
      <Typography variant="h6" >
        Account Statement
      </Typography>
      <br />
      {
        props.statement.map(item => <div>{item.type} {item.amount}</div>)
      }
    </div>
  )
}