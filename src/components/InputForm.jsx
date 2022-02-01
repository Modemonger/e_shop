import React, {useContext, useState} from 'react';
import { UserContext } from '../Context/UserContext.js';

const InputForm = () => {

    const [ category, setCategory ] = useState('food');
    const [ amount, setAmount ] = useState(0);
    const [ currency, setCurrency] = useState('euro');

    const { addTransaction } = useContext(UserContext);   

    const Submit = e => {
        e.preventDefault();

        const input = {
            id: Math.floor(Math.random() * 100000),
            category,
            amount,
            currency
        }

        addTransaction(input);
        setAmount(0);
    }

    return (
    <form onSubmit={Submit}>
        {/* <div className='buttonContainer'>
            <button type="button">Spent</button>
            <button type="button">Receaved</button>
        </div> */}
        
        <label className='input'>
        <p>What did you spend on :</p> 
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="food">Food</option>
            <option value="housing">Housing</option>
            <option value="travel">Travel</option>
            <option value="add">Add category</option>
        </select>
        </label>
        <label className='input'>
            <p>How much did you spend :</p>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="price" id="price" />
        </label>
        <label className='input'>
        <p>What currency did you use :</p> 
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="euro">Euro</option>
            <option value="dollar">US dollar</option>
            <option value="pounds">Pounds</option>
            <option value="add">Add currency</option>
        </select>
        </label>
        <button type="submit" value="Submit">Submit</button>
    </form>
    );
}

export default InputForm;