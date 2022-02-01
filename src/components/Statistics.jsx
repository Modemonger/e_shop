import React, { useContext } from 'react';
import {UserContext} from '../Context/UserContext.js';

const Statistics = () => {

    const { transactions } = useContext(UserContext);

    const balance = () => {
        let sum = 0;
        transactions.map(transaction => sum+=Number(transaction.amount));
        return sum;
    }

  return (
    <div className='statistics'>
        <p>Your balance is &euro; {balance()}</p>
    </div>
  );
};

export default Statistics;