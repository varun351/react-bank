import React, { useState } from 'react';
import './style.css';
import Deposit from './Deposit';
import Withdrawl from './Withdrawl';
import Statement from './Statement';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

export default function App(props) {
  const [balance, setBalance] = useState(0);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdrawl, setShowWithdrawl] = useState(false);
  const [statement, setStatement] = useState([]);
  const [showStatement, setShowStatement] = useState(false);

  const toggleDeposit = () => {
    setShowDeposit(!showDeposit);
  };
  const toggleWithdrawl = () => {
    setShowWithdrawl(!showWithdrawl);
  };
  const toggleStatement = () => {
    setShowStatement(!showStatement);
  };
  return (
    <div>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton edge="start">
                <AccountBalanceIcon />
              </IconButton>
            </Link>
            <Typography variant="h5">GOLIATH BANK</Typography>
          </Toolbar>
        </AppBar>
        <p>Hello user</p>
        <Typography variant="h5">Your Balance is {balance}</Typography>
        <br />
        {showDeposit}
        <Link
          to="/statement">
          <Button
          color="secondary"
          style={{ marginRight: 10 }}
          onClick={toggleStatement}
        >
          STATEMENT
          </Button>
        </Link>

        {showStatement && (
          <Statement statement={statement} setStatement={setStatement} />
        )}
        <Link to="/deposit">
          <Button
            color="secondary"
            style={{ marginRight: 10 }}
            onClick={toggleDeposit}
          >
            Deposit
          </Button>
        </Link>

        {showDeposit && (
          <Deposit
            statement={statement}
            setStatement={setStatement}
            setShowDeposit={setShowDeposit}
            balance={balance}
            setBalance={setBalance}
          />
        )}
        <Link to="/withdrawl">
          <Button color="secondary" onClick={toggleWithdrawl}>
            Withdrawl
          </Button>
        </Link>
        {showWithdrawl && (
          <Withdrawl
            statement={statement}
            setStatement={setStatement}
            setShowWithdrawl={setShowWithdrawl}
            balance={balance}
            setBalance={setBalance}
          />
        )}
        <div>
          <Switch>
            <Route exact path="/" />
            <Route path="/deposit">
              <Deposit />{' '}
            </Route>
            <Route path="/withdrawl">
              <Withdrawl />
            </Route>
            <Route path="/statement">
              <Statement />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
