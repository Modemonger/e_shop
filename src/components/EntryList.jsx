import React, {useContext, useCallback} from 'react';
import { UserContext } from '../Context/UserContext.js';

const EntryList = () => {

  const { transactions } = useContext(UserContext);  
  const { deleteTransaction } = useContext(UserContext);

  const remove = (e, trans) => {
    e.preventDefault();
    deleteTransaction(trans.id);
  }

  if(transactions[0]){
    return (
      <div className='entryList'>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Money spent</th>
                <th>Currency</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                transactions.map(transaction => 
                  <tr key={transaction.id}>
                    <th>{transaction.category}</th>
                    <th>{transaction.amount}</th>
                    <th>{transaction.currency}</th>
                    <th><button className='remove' onClick={(event) => {remove(event, transaction)}}>Delete</button></th>
                  </tr> 
                )
              }
            </tbody>
          </table>
      </div>
    );
  }

  else return <div className='emptyList'>You have no transactions</div>;
  
};
export default EntryList;